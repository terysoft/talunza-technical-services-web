# TALUNZA Security — 22 Nov 2026 audit & refinement record
Status: Source-level audit complete; full build, browser checks and production release still NOT VERIFIED.
Auditor scope: `terysoft/talunza-technical-services-web` branch `feat/talunza-security-sector-20261122`; associated Kernel end-state doctrine already merged; related Technical PRs and current public URL cross-checked.

## Objective and authority
- **Founder directive:** Complete TALUNZA Security sector and end-state vision visible on website, without public Security prices; TALUNZA owns customer relationship and assigns qualified, available specialists by approved job.
- Presentation authority: `terysoft/talunza-kernel/docs/governance/public-end-state-presentation-standard-v1.md` (merged main, former PR #33).
- Design authority: `terysoft/talunza-kernel/docs/architecture/talunza-security-sector-v1-2026-11-22.md`.
- Source delivery authority: this Technical repository. Existing `/technical/` export and canonical `/technical/security/` target; not a new standalone service or private database.
- Confidentiality: no camera passwords, exact property plans, raw footage, made-up technician credentials, unapproved SCD branding or 24-hour response claims.

## Audited baseline (source observed)
1. Existing static Technical homepage supports CCTV, alarms, networks and power. The security branch adds a dedicated route; current public `https://talunza.co.zw/technical/` was reachable by public fetch on 22 Nov while `/technical/security/` was not accessible. A public URL error alone does not diagnose DNS/deployment; compare release artifacts and logs before claiming cause.
2. `main` package declares Next.js 15.5.2 and React 19.1.1; separate `security/next15-patches-20261114` and `integration/incubator-security-release-candidate-20261121` branches declare Next 15.5.29 and React 19.1.10. The official 2026-11-03 Next.js security release calls for patched 15.5.29 in the 15.5 line: https://nextjs.org/blog/november-2026-security-release
3. Concurrent Technical PRs #3 and #7–#11 include security-patch, incubator and homepage work. The Security branch and another corporate website PR #95 must not be merged/released out of sequence. On 22 Nov comparison indicated Security branch ahead of `main` with no behind commits, but this is time-bound and does NOT prove compatibility with concurrent open PRs.
4. Existing security source had 12 service families, 16 future intelligence features, six environments, a six-stage integrated method, planned technologies clearly labelled and client-only Blueprint Builder. Existing source-level checker was present but had weak coverage and its local-consent text check became stale as UI evolved.

## Issues and refinements
| ID | Severity | Finding | Action / Status |
| --- | --- | --- | --- |
| SEC-01 | P0 | Proposed public Security URL not available | **BLOCKED at release**; no production deployment or live verification. |
| SEC-02 | P0 | Main still pins outdated Next/React | **BLOCKED at release**; reconcile and integrate already-existing patched dependency branch / PR #3 or integration PR #10; do not blindly duplicate the package-lock update. Verify effective `npm ls` and lockfile. |
| SEC-03 | P1 | Multiple unmerged homepage/incubator branches | **MONITOR**; branch-isolated changes maintained, min-size Technical homepage link. Review conflict graph and release order; rerun full build after integration. |
| SEC-04 | P1 | Blueprint-generated recommendations not included in WhatsApp handoff | **FIXED IN SOURCE**; generated consideration lines plus site-specific note now sent in prefilled text only on user click. Confirm user must press send inside WhatsApp. |
| SEC-05 | P2 | Mobile hid internal navigation and narrow header CTA could overflow | **FIXED IN SOURCE**; section jump rail, keyboard skip, short header action, anchored scroll offsets and 320px width adjustments. Browser visual verification still required. |
| SEC-06 | P2 | Full output in aria-live could be excessively announced | **FIXED IN SOURCE**; concise status region and labelled result target for the Generate button. Screen-reader test still required. |
| SEC-07 | P2 | Selected goal styling used CSS `:has`, not ideal for older phones | **FIXED IN SOURCE**; explicit React selected class plus CSS state. |
| SEC-08 | P2 | Site needed clearer honesty on offline, existing hardware, AI and response licensing | **FIXED IN SOURCE**; six semantic native FAQs without extra JS. |
| SEC-09 | P2 | Source regression contract not checking customer handoff/a11y/FAQ | **FIXED IN SOURCE**; contract expanded for concept content, explicit consent, navigation, 12/16/6 inventory, status labels, price exclusion and no unapproved specialist branding. |
| SEC-10 | P1 | Security service device, certification and real-world alert reliability are untested | **NOT CLAIMED**; first isolated lab and qualified installation required before operational marketing. |

## Current code artifacts
- `app/security/page.tsx`: 12 families, 16 roadmap capabilities, 6 environments, user FAQ, quick navigation, end-state status, enquiry.
- `app/security/SecurityBlueprintBuilder.tsx`: eight goals, six property choices, no data storage, prefilled WhatsApp with generated provisional advice, explicitly user-initiated.
- `app/security/security.module.css`: scoped responsive grid, basic accessibility, mobile header, native FAQ and selected option visuals.
- `app/page.tsx`: minimal discoverability link from Technical catalogue.
- `scripts/security-site-contract.mjs`: manual dependency-free source gate; call with `node scripts/security-site-contract.mjs`.
- `docs/security-sector-v1.md`: owner, scope, integrations, handover and release checklist.

## Source-level verification (2026-11-22)
A fresh GitHub source readback and independently executed read-only JavaScript inspection of fetched source returned **PASS, 0 issues** across:
- 12 distinct service families and 16 distinct advanced concepts;
- six environment types, six workflow stages, six practical FAQs;
- 58 CSS-module class references all declared;
- nine static element IDs, 13 internal `#` navigation references with no unresolved links or duplicate IDs;
- three explicit capability-status labels;
- no Security public-price tokens or outside-business contact reuse;
- no localStorage, sessionStorage, fetch/XHR or beacon in the client-only form;
- form includes real preliminary recommendations in WhatsApp handoff, without auto-sending;
- eight supported goal recommendations; worst-case synthesized WhatsApp content approximately 1,196 characters.
These are SOURCE introspection checks, **not a run of the checked-in Node test script, Next typecheck, static export, or browser interaction**.

## Required no-cost pre-release commands (clean workspace, after integration)
1. `npm ci` — dependency resolution must be controlled by reconciled package/lockfile; fail instead of rewriting unrelated dependency trees.
2. `node scripts/security-site-contract.mjs`.
3. `npm run typecheck`.
4. `NEXT_PUBLIC_BASE_PATH=/technical npm run build`.
5. Confirm `out/security/index.html`, appropriate `/_next` under `/technical/`, canonical metadata and no broken embedded assets.
6. Manual browser matrix: 320/360/390px Android Chrome, tablet 768px, desktop 1280px; keyboard Tab/Enter/Space; screen-reader focus if available; anchor offsets; builder all-zero, single and all-eight goals; change site after generating; mobile WhatsApp handoff length and correct message preview; offline site navigation expectations; reduced motion and contrast.
7. Confirm TALUNZA Technical homepage link and Security site direct URL both function; inspect header overflow and no horizontal clipping.
8. Run standard owning Home release checks after integrating the Technical export; only then apply Home PR #95 which links to the new route, to avoid a broken destination.
9. Manual founder-approved deployment to Contabo and separate public-side smoke/rollback verification. Never interpret merging a PR as a production release.

## Prioritised merge & operational order
- Existing security-patch + incubator release candidate: reconcile first, do not overwrite other open PRs.
- Rebase or re-integrate Security PR #12 against an actually patched current base, run all tests, then merge and release.
- Make `/technical/security/` live and verify contact + interactive form on an actual device.
- Only then merge and release corporate Home discovery PR #95.
- Next engineering milestone is a **lab prototype** using a compatible camera/recorder, simulated fence event and local power/network state; do not promise continuous managed monitoring from this public route yet.

## Evidence and limits
- Source checks use connector readback at 2026-11-22; SHA and file-level checks are recorded in the current conversation and connector results.
- The public-path check returned inaccessible via web fetch. Actual VPS release directory and server-side logs were not inspected.
- No legal/regulatory compliance certificate, monitored site SLA, installed sensors, tested camera integration or built/served Security client has been represented as complete.
