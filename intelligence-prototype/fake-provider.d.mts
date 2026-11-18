/** Sealed no-I/O synthetic inference provider. Never handles real private data. */
export interface FakeTask {
  capability_id: 'technical.intake_triage' | 'academy.lesson_explain';
  input: string;
  max_output_chars: 240;
  tools: readonly [];
}
export interface FakeReply {
  text: string;
  proposed_actions: Array<{ action_id: string; state: 'committed' }> | [];
  receipt: {
    provider: 'FAKE_NO_NETWORK';
    model_id: 'fake-v0';
    usage_units: { requests: 1; billable_tokens: 0 };
    estimated_usd: 0;
    billed_usd: 0;
    synthetic: true;
  };
}
export declare class FakeProviderError extends Error {
  readonly code: string;
  constructor(code: string);
}
export declare function createFakeProvider(options?: {
  scenario?: 'none' | 'timeout' | 'unavailable' | 'unknown_billing' | 'budget_denied';
  responseText?: string;
  injectForbiddenAction?: boolean;
}): Readonly<{
  id: 'talunza-fake-no-network-v0';
  estimated_usd: 0;
  generate(task: FakeTask): Promise<FakeReply>;
}>;
