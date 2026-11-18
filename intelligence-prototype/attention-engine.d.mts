/** Local-only synthetic attention preview. No live business or school data. */
export interface AttentionSnapshot {
  kind: 'stock.threshold' | 'technical.awaiting_information';
  ref: string;
  revision: string;
  observed_at: string;
  quantity?: number;
  reorder_level?: number;
  status?: string;
  waiting_hours?: number;
  agreed_followup_hours?: number;
}
export interface AttentionCard {
  schema_version: '0.1';
  card_id: string;
  signal_ref: string;
  signal_type: string;
  title: string;
  reason: string;
  evidence_refs: string[];
  observed_through: string;
  sync_coverage: string;
  uncertainty: string;
  priority: 'normal';
  suggested_action: string;
  action_kind: 'open_or_draft';
  expires_at: null;
  dismissible: true;
  snoozable: true;
  human_approval_required: true;
  lifecycle_state: 'SHOWN';
  model_receipt_id: null;
}
export declare function evaluateAttention(args: {
  snapshot: AttentionSnapshot;
  scope: 'PUBLIC_SYNTHETIC';
  now: string;
  dismissed?: string[];
  maxAgeHours?: number;
}): AttentionCard[];
