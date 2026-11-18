# TALUNZA Technical Services Dynamic Web App — Manual Runtime Handoff
2026-11-18. **Source staged, NOT deployed.** Owner: terysoft/talunza-technical-services-web.
Development branch: `feature/technical-services-webapp-foundation-20261118`. Existing public `main` and GitHub Pages output unchanged.

## Evidence
- Prior `next.config.ts`: `output: 'export'` and static GitHub Pages.
- Development branch now sets `output: 'standalone'` (server runtime), `basePath: '/technical'` as fallback; aligns the homepage asset base fallback with that path.
- Current GitHub Pages workflow on main expects an `out/` directory and **cannot** publish a standalone server. Do NOT merge or switch deployment workflow blindly.
- Existing `quality-gates.yml` has `pull_request` triggers. Draft PR #5 and the earlier static form PR #4 were closed to avoid future PR-triggered CI under founder NO PAID CI policy. The code remains on separate feature branches. No verified billing claim for prior triggered runs.
- TALUNZA Works V3/V4 production cutover remains gated pending read-only VPS preflight, full backup, isolated restore and rollback proof; NEVER use a live Works database as a convenient new app DB.

## Manual development check (only on a verified checkout)
Use existing canonical workspace standard before any local checkout or commands. For a verified branch checkout in the Linux filesystem, with Node/npm available:
```sh
node --version
npm --version
npm run test:domain
npm run typecheck
npm run build
```
The last two require existing project dependencies. Never claim they passed until actual command output is captured. Confirm `.next/standalone` output and test with an isolated environment; do not reuse current static `out` deployment route.

## Hosted app requirements
1. Non-public deployment in separate staging process/container, with Node runtime and a private application port (no invented port or DNS). Integrate via existing Caddy configuration only after authenticated remote inventory.
2. Dedicated, least-privilege PostgreSQL intake schema and protected application secrets; **no direct SQL connection to Works production**. Proposed schema file `schemas/proposed/technical_services_intake_v1.sql` is NOT applied. Verify backup and isolated restore before first write.
3. Server session/auth, roles, idempotent POST, file upload limits, contact/marketing consent, audit events, customer status tokens, request-size limits and abuse throttling.
4. Exact domain route `/technical` to be checked against existing Caddy/Pages routing and SEO paths; provide old static site fallback until explicitly approved cutover.
5. Works handoff requires owner-approved, versioned service interface. Payment/stock truth stays Business; listing truth stays Market.
6. No WhatsApp API fees, merchant onboarding, production database changes or public campaign claims without explicit founder approval.

## Exact deployment blocker
The assistant has GitHub source access but **does not have verified live founder laptop/WSL, Contabo VPS shell, DB credential store or isolated staging environment in this chat**. Consequently the app cannot be built/installed/tested or deployed through this session. Do not ask founder to paste credentials. Reuse canonical WSL release runbook `terysoft/talunza-home/docs/operations/founder-wsl-release-runbook.md` and `terysoft/talunza-documents/START_TALUNZA.md` only after checking the actual device.
A real staging build, API connection, authentication and database restore are the next acceptance gate.

## Independent completed increments
- Source reviewed against existing `main`, server runtime staged on branch.
- Pure `src/domain/energy-intake.mjs` and 12 tests in `src/domain/energy-intake.test.mjs`; 12 equivalent Node 22 local tests passed, GitHub sources read back.
- TALUNZA Works `feature/electrical-firstfix-boq-foundation-20261118`: measured conduit BOQ + seven equivalent local tests passed, branch readback.
- Production and branch statuses remain distinct: SOURCE-IMPLEMENTED domain prototypes, LOCAL DOMAIN-TESTED equivalent fixtures, WEB APP not backend-tested or deployed.

## One-blocker next action
Once an authorized isolated Node/PostgreSQL environment is available: run the actual checked-out branch tests/build, implement authenticated intake persistence with migrations in staging, prove restart/idempotency/access denial and restore, then review route cutover. No shortcuts.
