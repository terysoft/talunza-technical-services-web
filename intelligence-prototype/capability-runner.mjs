/**
 * TALUNZA capability prototype v0 — no keys, network, database or side effects.
 * Node 20+ ESM; works with a static client preview. NOT an authentication boundary.
 * Production authority MUST be server-derived before data retrieval or tool execution.
 * Source contract: terysoft/talunza-kernel draft PR #15.
 */

export const MANIFESTS = Object.freeze({
  'technical.intake_triage': Object.freeze({
    id: 'technical.intake_triage',
    version: '0.1.0',
    owner: 'talunza-technical-services-web',
    requiredScope: 'PUBLIC_SYNTHETIC',
    tools: Object.freeze([]),
    permission: 'P1',
    fallback: 'RULES',
  }),
  'academy.lesson_explain': Object.freeze({
    id: 'academy.lesson_explain',
    version: '0.1.0',
    owner: 'talunza-academy',
    requiredScope: 'PUBLIC_SYNTHETIC',
    tools: Object.freeze([]),
    permission: 'P0',
    fallback: 'RULES',
  }),
});

const SERVICE_FAMILIES = Object.freeze([
  {
    id: 'solar',
    label: 'Solar, inverter and battery support',
    pattern: /\b(inverter|solar|battery|pv|charge|charger|panel|mppt)\b/i,
    question: 'What are the equipment make, exact model and any displayed fault code?',
  },
  {
    id: 'electrical',
    label: 'Electrical installation and fault finding',
    pattern: /\b(socket|circuit|tripping|breaker|wiring|rccb|rcd|electricity|electrical|power cut)\b/i,
    question: 'Which area or appliance is affected, and what did you observe?',
  },
  {
    id: 'connectivity',
    label: 'Starlink, Wi-Fi and networking',
    pattern: /\b(starlink|wifi|wi-fi|router|network|internet|signal|access point)\b/i,
    question: 'What is the router or equipment model, and which devices are affected?',
  },
  {
    id: 'security',
    label: 'CCTV and security systems',
    pattern: /\b(cctv|camera|nvr|dvr|alarm)\b/i,
    question: 'Which cameras or alarm devices are affected, and what is visible on the recorder?',
  },
  {
    id: 'refrigeration',
    label: 'Fridge, freezer and appliance support',
    pattern: /\b(fridge|freezer|cooling|refrigerator|compressor)\b/i,
    question: 'What is the equipment make and model, and when did the cooling problem begin?',
  },
  {
    id: 'fabrication',
    label: 'Welding, fabrication and equipment repairs',
    pattern: /\b(welding|welder|steel|gate|bracket|fabrication|metal)\b/i,
    question: 'Can you describe the material, approximate dimensions and required result?',
  },
]);

const HAZARD = /\b(smoke|sparks?|electric shock|electrocut|fire|burning smell|exposed live|hot cable|overheat|burnt wire)\b/i;

function validRequestId(value) {
  return typeof value === 'string' && /^[a-zA-Z0-9_-]{8,80}$/.test(value);
}
function safeReceiptId(requestId) {
  return `synthetic-${requestId}`;
}
function cleanText(value) {
  if (typeof value !== 'string') return null;
  const text = value.trim().replace(/\s+/g, ' ');
  return text.length >= 3 && text.length <= 2000 ? text : null;
}

function resultBase({ requestId, capabilityId, status = 'drafted', answer, uncertainty = null, actions = [], evidence = [], errorCode = null }) {
  return Object.freeze({
    kind: 'result',
    schema_version: '1.0',
    request_id: requestId,
    capability_id: capabilityId,
    status,
    mode: status === 'denied' ? 'UNAVAILABLE' : 'RULES',
    answer,
    uncertainty,
    evidence,
    proposed_actions: actions,
    freshness: {
      observed_through: null,
      scope_coverage: 'public/synthetic prototype inputs only',
      sync_status: 'unknown',
    },
    receipt_id: safeReceiptId(requestId),
    provider_receipt: null,
    safe_fallback: 'Use the ordinary form or contact TALUNZA Technical Services for a technician review.',
    error_code: errorCode,
    simulation: true,
  });
}

function technicalDraft(text) {
  const hazard = HAZARD.test(text);
  const family = SERVICE_FAMILIES.find((service) => service.pattern.test(text));
  const label = family?.label ?? 'General technical assessment';
  const question = family?.question ?? 'Which equipment is affected, and what symptoms have you observed?';
  const answer = hazard
    ? `Potential hazard mentioned. Do not open or touch suspected live or damaged equipment. Keep people clear and obtain qualified on-site assistance. Preliminary service category: ${label}.`
    : `Suggested service category: ${label}. This is an intake classification, not a confirmed diagnosis. ${question}`;
  return {
    answer,
    uncertainty: hazard
      ? 'Hazard assessment requires a competent person; severity cannot be verified remotely.'
      : 'The equipment condition has not been inspected or measured.',
    actions: [{
      action_id: 'technical.review_intake_draft',
      label: 'Review and copy intake details',
      permission_level: 'P1',
      state: 'proposal_only',
    }],
    evidence: [{
      source_ref: 'technical:public-service-catalog',
      version: 'static-prototype-0.1',
      as_of: '2026-11-18T00:00:00+02:00',
      authority: 'reference',
    }],
    category: family?.id ?? 'other',
    needsUrgentReview: hazard,
  };
}

function academyDraft(text) {
  return {
    answer: 'Synthetic measurement practice: 100 centimetres = 1 metre. Try 250 centimetres: divide by 100 to express the length in metres. This preview does not access student records or assess a real learner.',
    uncertainty: 'This example is not an educator-reviewed TALUNZA Academy lesson or student-specific recommendation.',
    actions: [{
      action_id: 'academy.open_synthetic_practice',
      label: 'Review sample practice',
      permission_level: 'P0',
      state: 'proposal_only',
    }],
    evidence: [{
      source_ref: 'synthetic:measurement-example',
      version: 'draft-0.1',
      as_of: '2026-11-18T00:00:00+02:00',
      authority: 'reference',
    }],
    category: 'sample-measurements',
    needsUrgentReview: false,
  };
}

/**
 * One versioned contract, two synthetic product consumers.
 * No raw tenant/role/provider fields in `request.input` can grant authority.
 * The caller's scope in THIS prototype is not authenticated; PUBLIC_SYNTHETIC only.
 * Any non-public use must be denied and reimplemented behind a trusted server.
 *
 * @param {{schema_version:string,request_id:string,capability_id:string,input:{text:string}}} request
 * @param {{scope:'PUBLIC_SYNTHETIC', provider?: {generate:Function}, simulateProvider?:boolean}} options
 */
export async function runCapability(request, options = {}) {
  const id = request?.request_id;
  const capId = request?.capability_id;
  if (!validRequestId(id)) throw new TypeError('request_id must be 8-80 safe characters');
  if (request.schema_version !== '1.0') throw new TypeError('Unsupported request schema');
  const manifest = Object.hasOwn(MANIFESTS, capId) ? MANIFESTS[capId] : null;
  if (!manifest) return resultBase({ requestId: id, capabilityId: String(capId), status: 'denied', answer: 'Capability is not available.', errorCode: 'capability_not_allowed' });
  if (options.scope !== manifest.requiredScope) {
    return resultBase({ requestId: id, capabilityId: capId, status: 'denied', answer: 'This preview cannot access protected data.', errorCode: 'scope_denied' });
  }
  const text = cleanText(request.input?.text);
  if (!text) return resultBase({ requestId: id, capabilityId: capId, status: 'denied', answer: 'Provide a short description of 3 to 2000 characters.', errorCode: 'invalid_input' });

  const draft = capId === 'technical.intake_triage' ? technicalDraft(text) : academyDraft(text);
  let answer = draft.answer;
  let mockInfo = null;

  // Explicitly test adapter compatibility without external inference or network.
  // Never accept mock provider tool proposals, permissions, action state or evidence.
  if (options.simulateProvider === true && options.provider && !draft.needsUrgentReview) {
    try {
      const response = await options.provider.generate({
        capability_id: capId,
        input: text,
        max_output_chars: 240,
        tools: [],
      });
      if (typeof response?.text === 'string' && response.text.length > 0 && response.text.length <= 240) {
        answer += ` [SIMULATED MODEL ONLY: ${response.text}]`;
        mockInfo = { provider: 'synthetic-adapter', mode: 'mock-no-billing' };
      }
    } catch {
      mockInfo = { provider: 'synthetic-adapter', mode: 'failed-fallback-rules' };
    }
  }

  return Object.freeze({
    ...resultBase({
      requestId: id,
      capabilityId: capId,
      answer,
      uncertainty: draft.uncertainty,
      actions: draft.actions,
      evidence: draft.evidence,
    }),
    draft_category: draft.category,
    requires_human_review: true,
    mock_info: mockInfo,
  });
}
