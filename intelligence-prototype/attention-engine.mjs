/**
 * TALUNZA Attention Engine v0 — pure synthetic example only.
 * No timers, browser notifications, cloud, accounts, network, database, or action execution.
 * A real product must derive actor/tenant from its trusted backend before retrieval.
 */

const SUPPORTED = new Set(['stock.threshold', 'technical.awaiting_information']);

function finiteNumber(x) { return typeof x === 'number' && Number.isFinite(x); }
function validRef(x) { return typeof x === 'string' && /^synthetic:[a-zA-Z0-9_.-]{3,60}$/.test(x); }
function validRevision(x) { return typeof x === 'string' && /^[a-zA-Z0-9_.-]{1,40}$/.test(x); }

function card({ snapshot, text, nextStep, priority, dedupeKey }) {
  return Object.freeze({
    schema_version: '0.1',
    card_id: dedupeKey,
    signal_ref: snapshot.ref,
    signal_type: snapshot.kind,
    title: text.title,
    reason: text.reason,
    evidence_refs: [snapshot.ref],
    observed_through: snapshot.observed_at,
    sync_coverage: 'synthetic local example — no live data',
    uncertainty: 'Demonstration only; no actual TALUNZA customer or stock record was inspected.',
    priority,
    suggested_action: nextStep,
    action_kind: 'open_or_draft',
    expires_at: null,
    dismissible: true,
    snoozable: true,
    human_approval_required: true,
    lifecycle_state: 'SHOWN',
    model_receipt_id: null,
  });
}

/**
 * @param {{
 *   snapshot: {kind:string, ref:string, revision:string, observed_at:string, quantity?:number,
 *     reorder_level?:number, status?:string, waiting_hours?:number, agreed_followup_hours?:number},
 *   scope: string, now: string, dismissed?: string[], maxAgeHours?: number
 * }} args
 * @returns {Array<object>}
 */
export function evaluateAttention({ snapshot, scope, now, dismissed = [], maxAgeHours = 48 } = {}) {
  if (scope !== 'PUBLIC_SYNTHETIC') return [];
  if (!snapshot || !SUPPORTED.has(snapshot.kind) || !validRef(snapshot.ref) || !validRevision(snapshot.revision)) return [];
  if (typeof now !== 'string' || typeof snapshot.observed_at !== 'string') return [];
  const at = Date.parse(snapshot.observed_at);
  const current = Date.parse(now);
  if (!Number.isFinite(at) || !Number.isFinite(current) || current < at) return [];
  if (!finiteNumber(maxAgeHours) || maxAgeHours < 1 || maxAgeHours > 720) return [];
  if (current - at > maxAgeHours * 3600000) return [];
  const dedupeKey = `${snapshot.kind}:${snapshot.ref}:${snapshot.revision}`;
  if (!Array.isArray(dismissed) || dismissed.includes(dedupeKey)) return [];

  if (snapshot.kind === 'stock.threshold') {
    if (!finiteNumber(snapshot.quantity) || !finiteNumber(snapshot.reorder_level)) return [];
    if (snapshot.quantity < 0 || snapshot.reorder_level < 0 || snapshot.quantity >= snapshot.reorder_level) return [];
    return [card({
      snapshot,
      text: {
        title: 'Review a low-stock example',
        reason: `Synthetic available quantity ${snapshot.quantity} is below the configured example threshold ${snapshot.reorder_level}.`,
      },
      nextStep: 'Open the owning product\'s inventory view and review the stock evidence',
      priority: 'normal',
      dedupeKey,
    })];
  }

  if (snapshot.status !== 'AWAITING_INFO'
    || !finiteNumber(snapshot.waiting_hours)
    || !finiteNumber(snapshot.agreed_followup_hours)
    || snapshot.agreed_followup_hours <= 0
    || snapshot.waiting_hours < snapshot.agreed_followup_hours) return [];
  return [card({
    snapshot,
    text: {
      title: 'Follow-up may be due',
      reason: 'A synthetic service job has been awaiting information beyond its agreed follow-up interval.',
    },
    nextStep: 'Review the job and prepare a follow-up draft; do not send automatically',
    priority: 'normal',
    dedupeKey,
  })];
}
