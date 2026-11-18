# TALUNZA Technical Services — Web App Conversion Architecture v1
**Founder directive:** 2026-11-18. **Status:** design approved in principle; source-only bounded foundation, NOT migrated, not built/deployed.

## Decision
STOP adding functional patches to the public static export as a substitute for an actual business application. Retain the current public website until a proper server-backed web app passes acceptance. Future energy/electrical capabilities are integrated in the **same TALUNZA Technical Services application**, not new silo apps. Existing separate repositories retain canonical domain ownership.

## Audit and reality (source observed)
- This repo is Next.js 15 / React 19, currently `next.config.ts` uses `output: 'export'` and a GitHub Pages base path. Static output cannot provide durable server-side customer intake, login, server-authoritative job states, protected quotations or secure upload processing.
- Existing `app/solar/page.tsx`, `app/electrical/page.tsx` and `app/page.tsx` serve public lead pages. Do not confuse them with an operational system.
- Former draft PR #4 `feature/energy-advisor-intake-20261118` adds a consent-driven WhatsApp-only static form. **Do not merge it as the final architecture**; the useful fields and consent rule can be migrated into the new dynamic app, then the draft PR retired after scope comparison.
- TALUNZA Works operates a separate work-order domain; Works V3/V4 production cutover is explicitly **BLOCKED** pending secure backup + isolated restore and rollback evidence. Do not edit production schema or conflate a proposed new app with release authorization.
- Commercial price/product authority: Market public offers, Business physical stock/sales, Procurement supplier evidence; Energy owns technical sizing/equipment rules, Works owns electrical BOQs and execution.

## Target topology (no premature microservices)
- Keep `talunza.co.zw/technical` as the stable public entry; preserve SEO URLs and brand.
- **Dynamic Next.js web app** in this existing repo, Node server runtime (not static export). A browser-installable PWA shell with accessible low-bandwidth workflows; no mandatory customer account for first enquiry.
- Server-only authenticated application layer: safe input validation, short-lived session / roles, CORS/CSRF policies appropriate to architecture, request idempotency and throttling, and append-only audit events. Do not store customer secrets in localStorage.
- **Durable PostgreSQL intake store** for Technical Services *pre-engagement request records* only. A completed/accepted job crosses into Works using authenticated, versioned references and explicit handoff—not a second copy of the Works project/payment ledger. Until the existing Works contract and deployment are independently verified, run with a disconnected adapter and visible `NOT_CONFIGURED` status.
- Operator dashboard: new leads / needs-info / technical review / quotation / assigned handoff / follow-up; permissioned by role. Customer status pages require unguessable access tokens; not sequential ID alone.
- Technical design engine from `talunza-energy`: partial appliance data and explicit missing measurements; no unsourced automatic electrical approvals.
- Supplier/product/quote authorisation: read-through approved/signed projections; store price/source snapshots on quote approval; source buying cost must NEVER be serialized to customer responses.
- Media uploads use private object storage with short-lived access, size/type validation, malware scanning where feasible, and controlled EXIF removal for public images.
- WhatsApp Business app first as an opt-in handoff. Official Cloud API requires consent, account eligibility, cost model, human escalation; not critical path.

## Build phases and release gates
**A0 — repo-level conversion branch (this one):** target architecture, independent pure domain code, deterministic tests. No route or config changes to main; prevent automated deployments.
**A1 — genuine server-backed app:** produce environment-specific runtime config and deployment manifest in branch; durable intake schema/migrations, server-authenticated API, error/consent/idempotency logs, staff dashboard. Run tests on isolated database/host, not Works production. Confirm actual deployment route and data custody.
**A2 — technical workflows:** Energy assessment, manufacturer compatibility evidence, 12/24/48V labour pricing from founder-approved rate card; materials and site travel separately; technical and price approval gates. Electrical first-fix BOQ in Works.
**A3 — shop & lifecycle:** Market listings, Business stock, quotations, supplier confirmation, jobs, asset registry, warranty and maintenance. No automatic payment settlement.
**A4 — optional WhatsApp API automation:** once opt-in and measured cost/performance justify.
**A5 — low-risk cutover:** backup existing public output/config, deploy isolated dynamic staging, test jobs and private-data controls end-to-end, ensure rollback and old public URLs, then seek explicit founder approval for production cutover.

## App modules (single customer interface)
`/technical/` service discovery; `/technical/assessment` structured lead; `/technical/dashboard` secure staff inbox; `/technical/jobs/:opaqueId`; `/technical/quotes/:opaqueId`; `/technical/shop` controlled offers; `/technical/electrical/estimate` measured room BOQ; `/technical/maintenance` asset-service history.
Customer portal optional. Technician workflow offline-tolerant, with verified sync; don't call a mobile page offline-first without a durable queue and restart/replay tests.

## Ownership and non-duplication
Technical Services owns request intake, navigation, customer-facing service presentation and triage. Works owns accepted job lifecycle/BOQ/certified execution decisions. Energy owns energy system models, diagnostics, maintenance and compatibility. Business owns stock/sales/payment evidence; Market owns offer publishing; Procurement owns private buying evidence and comparison. References and explicit contracts, not direct SQL reads across owner databases.

## Database migration guard
Only add Technical Services **intake** tables after confirming target DB authority and running isolated backup/rollback tests. No destructive schema migration to Works. SQL schema changes, secrets, signing keys and production data are NOT authorized by this branch. Use synthetic data to develop.

## Security checklist
Unauthenticated lead intake with consent + rate-limit/captcha abuse strategy; verified phone ownership only when needed, no invented OTP; API auth server enforced; CSRF protections for cookie sessions; structured file-scanning limits; role-scoped data views; safe audit with no raw customer secrets; marketing consent separate from service contact consent; no public exact home location; technical review required; stable error states and no revealing supplier buy costs.

## Acceptance, actual evidence and blocker
Current branch is **NOT A WORKING DYNAMIC WEB APP**. The first domain module is locally tested using Node's built-in test runner; full Next.js build, database authorization, Web App deployment and native Android browser validation are not yet proven.
Release gated on: (1) confirmed chosen hosting for Node server and Postgres, (2) approved domain/route rewiring plan, (3) credentials/secrets in a secure host store, (4) isolated database backup + restore evidence, (5) server auth and field QA, and (6) explicit founder production release approval.
No unapproved hosting purchase, CI charges, DNS change or existing customer-data migration.

## Current founder defaults
Official installation labour prices keyed by VERIFIED NOMINAL BATTERY SYSTEM VOLTAGE: DC-only fridge US$40; 12V US$60; 24V US$70; 48V US$100. Labour only; job materials and site travel separately assessed. 24V CODI+NEXTCELL combo historical equipment US$600; labour US$70, subtotal US$670 before materials/travel. Sizing/engineering and stock claims require confirmation.

## Immediate next engineering actions
1. Read the current Technical Services server/hosting setup and compare the open PR #4 to decide safe retirement.
2. Build and locally test a real server-backed intake API with consent, validation, persistence, idempotency, staff-only retrieval and lifecycle audit against an isolated Postgres instance; first discover an existing shared auth contract.
3. Add protected mobile staff dashboard and link to Work handoff only after owner contracts are verified.
4. Evidence-based test: invalid input, no consent, duplicates, restart, access denial, unavailable backend, 24V quote, no buying-price leak, offline retry and isolated restore.

**Checkpoint:** owner `terysoft/talunza-technical-services-web`; branch `feature/technical-services-webapp-foundation-20261118`; not merged, not deployed. Backout: delete branch/close draft PR only after preserving evidence; existing main/public site unchanged.
