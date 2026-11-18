# TALUNZA Technical Services — Energy/electrical app checkpoint
Date: 2026-11-18 Africa/Harare
State: **SOURCE-IMPLEMENTED DOMAIN FOUNDATION / LOCAL DOMAIN TESTS PASS; NO DYNAMIC BACKEND DEPLOYED**.

## Owner / branch / safety
Repository `terysoft/talunza-technical-services-web`, branch `feature/technical-services-webapp-foundation-20261118`; development only. Previously published `main` and its GitHub Pages deployment untouched.
The earlier static-only enquiry PR #4 was closed unmerged. Draft PR #5 was also closed unmerged to avoid recurring pull_request-triggered GitHub Actions, preserving its branch. No new CI/paid services.

## Newly proven increment
Added `src/domain/intake-lifecycle.mjs` and `src/domain/intake-lifecycle.test.mjs`.
- Explicit states: NEW, NEEDS_INFO, READY_FOR_ASSESSMENT, TECH_REVIEW, PRICE_REVIEW, QUOTED, ACCEPTED, TRANSFERRED_TO_WORKS, CANCELLED, DECLINED, EXPIRED.
- Step-wise transitions, role eligibility, evidence gates for assessments, approved quotations, customer acceptance and Works acknowledgement.
- Emits an `auditIntent` only. It **does not authenticate** an actor, persist an event, mutate jobs or actually transfer to Works. Server must bind role/identity from verified session and commit state plus event atomically.
- Proposed PostgreSQL status constraint updated to match states, but file still remains unapplied.
- `npm run test:domain` updated to run both `src/domain/*.test.mjs` modules.
- **Actual Node 22 local tests:** 12 Energy/quote + 14 workflow, 26 passed, 0 failed. Energy tests ran against local equivalent previously staged code, lifecycle tests against same authored source; source files then committed and GitHub blob readback must be verified separately. Full checked-out Next build, DB/restart tests and Android QA have NOT run.

## Required next implementation (backend and real app)
1. Identify and verify the staging Next.js Node runtime route, private PostgreSQL instance, existing auth/session authority and database operator. Do not infer access from historical VPS records or mutate Works V3 DB.
2. Create an authenticated server API for validated intake, server-generated opaque refs, idempotent requests and transactional audit writes. Enforce role lookup server-side. No self-asserted `role` or `priceApproved` flags accepted from a browser.
3. Connect approved quotes and signed Works handoff through versioned contracts. Field test 5 synthetic and then consented real enquiries.
4. Verify backup/restore on isolated database, no private data leakage, replay and restart behavior, low-bandwidth Android compatibility and deployment rollback.
5. Obtain explicit founder approval before any production DNS, hosting, spending, credentials, customer outreach or release.

## Stop condition
Further server/DB integration is **BLOCKED pending a verified isolated staging environment and auth/data-ownership evidence**. No founder should be asked to paste private credentials. Site/current published service remains available unmodified. Do not claim a working CRM or WhatsApp bot from the pure-domain prototype.

Related: `docs/TECHNICAL_WEBAPP_RUNTIME_HANDOFF_2026-11-18.md`, `docs/TECHNICAL_SERVICES_WEBAPP_ARCHITECTURE_V1_2026-11-18.md`; Works first-fix prototype remains on `feature/electrical-firstfix-boq-foundation-20261118`.
