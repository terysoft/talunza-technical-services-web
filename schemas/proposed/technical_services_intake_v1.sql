-- TALUNZA Technical Services intake schema v1 — PROPOSED / NOT EXECUTED.
-- Apply only to an isolated, founder-approved PostgreSQL instance after auth/backup/restore tests.
-- Does not change the Works production database or duplicate Works job/commercial truth.
BEGIN;
CREATE SCHEMA IF NOT EXISTS technical_services;
CREATE TABLE IF NOT EXISTS technical_services.intake_requests (
    id uuid PRIMARY KEY,
    public_ref text UNIQUE NOT NULL,
    request_type text NOT NULL CHECK (request_type IN ('solar_new','solar_existing','electrical_first_fix','product_enquiry')),
    status text NOT NULL DEFAULT 'NEW' CHECK (status IN ('NEW','NEEDS_INFO','READY_FOR_ASSESSMENT','TECH_REVIEW','PRICE_REVIEW','QUOTED','ACCEPTED','TRANSFERRED_TO_WORKS','CANCELLED','DECLINED','EXPIRED')),
    locality text NOT NULL,
    customer_name_cipher bytea,
    contact_cipher bytea NOT NULL,
    notes_cipher bytea,
    encrypted_payload bytea NOT NULL,
    contact_consent_at timestamptz NOT NULL,
    marketing_consent_at timestamptz,
    source_channel text NOT NULL CHECK (source_channel IN ('web','whatsapp_operator','phone','field')),
    idempotency_hash bytea UNIQUE NOT NULL,
    accepted_works_job_ref text,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now(),
    expires_at timestamptz
);
CREATE INDEX IF NOT EXISTS intake_status_created_idx ON technical_services.intake_requests(status, created_at DESC);
CREATE TABLE IF NOT EXISTS technical_services.intake_audit_events (
    event_id uuid PRIMARY KEY,
    intake_id uuid NOT NULL REFERENCES technical_services.intake_requests(id) ON DELETE RESTRICT,
    actor_ref text NOT NULL,
    operation text NOT NULL,
    prior_status text,
    new_status text,
    decision_reason text,
    occurred_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS intake_audit_history_idx ON technical_services.intake_audit_events(intake_id, occurred_at);
COMMIT;
-- Required operational gates BEFORE applying: auth roles, application-level authenticated
-- envelope encryption and key rotation, server-issued randomness, durable idempotency,
-- anti-enumeration, retention policy, backup and isolated restore proof, and restricted
-- database permissions (public client can NEVER query these tables directly).
