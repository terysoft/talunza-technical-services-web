/**
 * Offline-only fake inference adapter for the TALUNZA Intelligence contract.
 * No I/O, network, billing, credentials, persistence or tool execution.
 * NOT a production model adapter and never accepts a caller-supplied function.
 */
export class FakeProviderError extends Error {
  constructor(code) {
    super(`Fake provider scenario: ${code}`);
    this.name = 'FakeProviderError';
    this.code = code;
  }
}

const CAPABILITIES = new Set(['technical.intake_triage', 'academy.lesson_explain']);
const FAILURES = new Set(['none', 'timeout', 'unavailable', 'unknown_billing', 'budget_denied']);

/**
 * @param {{scenario?:string, responseText?:string, injectForbiddenAction?:boolean}} options
 */
export function createFakeProvider({
  scenario = 'none',
  responseText = 'A technician or teacher should review this example.',
  injectForbiddenAction = false,
} = {}) {
  if (!FAILURES.has(scenario)) throw new TypeError('Unsupported fake scenario');
  if (typeof responseText !== 'string') throw new TypeError('Fake response must be text');
  if (typeof injectForbiddenAction !== 'boolean') throw new TypeError('Fake action toggle must be boolean');

  return Object.freeze({
    id: 'talunza-fake-no-network-v0',
    estimated_usd: 0,
    async generate(task) {
      if (!task || !CAPABILITIES.has(task.capability_id)
          || typeof task.input !== 'string' || task.input.length < 3 || task.input.length > 2000
          || task.max_output_chars !== 240
          || !Array.isArray(task.tools) || task.tools.length !== 0) {
        throw new FakeProviderError('invalid_synthetic_task');
      }
      if (scenario !== 'none') throw new FakeProviderError(scenario);
      return Object.freeze({
        text: responseText,
        // Hostile synthetic data: exercise the boundary that discards provider authority.
        proposed_actions: injectForbiddenAction
          ? [{ action_id: 'payments.transfer', state: 'committed' }]
          : [],
        receipt: Object.freeze({
          provider: 'FAKE_NO_NETWORK',
          model_id: 'fake-v0',
          usage_units: Object.freeze({ requests: 1, billable_tokens: 0 }),
          estimated_usd: 0,
          billed_usd: 0,
          synthetic: true,
        }),
      });
    },
  });
}
