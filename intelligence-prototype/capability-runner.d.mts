/**
 * Public/synthetic prototype types. Not a production authorization service.
 * Compatible with the request/result ideas in the Kernel draft v1 contract.
 */
export type SyntheticScope = 'PUBLIC_SYNTHETIC';
export type CapabilityId = 'technical.intake_triage' | 'academy.lesson_explain';
export interface CapabilityRequest {
  kind: 'request';
  schema_version: '1.0';
  request_id: string;
  app_id: string;
  capability_id: CapabilityId;
  locale: 'en-ZW';
  input: { text: string };
}
export interface CapabilityResult {
  kind: 'result';
  schema_version: '1.0';
  request_id: string;
  capability_id: string;
  status: 'drafted' | 'denied';
  mode: 'RULES' | 'UNAVAILABLE';
  answer: string;
  uncertainty: string | null;
  evidence: ReadonlyArray<{source_ref: string; version: string; as_of: string; authority: 'reference'}>;
  proposed_actions: ReadonlyArray<{action_id: string; label: string; permission_level: 'P0' | 'P1'; state: 'proposal_only'}>;
  freshness: { observed_through: null; scope_coverage: string; sync_status: 'unknown' };
  receipt_id: string;
  provider_receipt: null;
  safe_fallback: string;
  error_code: string | null;
  simulation: true;
  draft_category?: string;
  requires_human_review?: boolean;
  mock_info?: { provider: string; mode: string } | null;
}
export declare const MANIFESTS: Readonly<Record<CapabilityId, {
  id: CapabilityId;
  version: string;
  owner: string;
  requiredScope: SyntheticScope;
  tools: readonly [];
  permission: 'P0' | 'P1';
  fallback: 'RULES';
}>>;
export declare function runCapability(
  request: CapabilityRequest,
  options: { scope: SyntheticScope; provider?: { generate(data: unknown): Promise<unknown> }; simulateProvider?: boolean }
): Promise<CapabilityResult>;
