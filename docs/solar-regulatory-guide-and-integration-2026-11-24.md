# TALUNZA Technical Services — Solar regulations guide release & integration contract
**Date:** 2026-11-24, Africa/Harare  
**Status:** Draft PR stacked on unmerged `feature/energy-advisor-intake-20261118`; not yet built, mobile tested, security patched, deployed or endorsed by ZERA.  
**Scope:** One public guide and a non-authoritative, source-dated JSON evidence manifest, using existing Technical Services website architecture. No separate product/database or live compliance-lookup integration.

## Change inventory
- `app/solar/guide/page.tsx`: customer-facing route target `/technical/solar/guide/`.
- `app/solar/guide/guide.module.css`: page-scoped mobile-responsive presentation.
- `app/solar/page.tsx`: adds guide link to pre-existing solar page, preserving the **unmerged Energy Advisor assessment link**.
- `public/solar-regulation-2026.v1.json`: published-on-release, read-only provenance-aware **educational source manifest**, not a government licence or authenticity API. Target URL after site export: `https://talunza.co.zw/technical/solar-regulation-2026.v1.json` (NOT live-verified).
- `scripts/solar-guide-contract.test.mjs`: dependency-free source/content regression checks.
- This document: release dependencies and cross-product handoff.

## Current conflicts and stacking
The site has existing patch PR #3, incubator PRs #7–#11, Security PR #12, and Energy Advisor draft branch `feature/energy-advisor-intake-20261118` with `app/solar/assessment/page.tsx` and edited `app/solar/page.tsx`.
This PR intentionally starts from the **Energy Advisor branch**, retains its assessment journey and adds a separate guide route. It does not touch global homepage, `app/layout.tsx`, `app/globals.css`, `package.json`, `package-lock.json`, Security, incubators or production routes. The route should only be merged into the approved patched release chain after dependency reconciliation and site QA.
Remote branches/PRs are not equivalent to founder laptop uncommitted files; actual local dirty state and exact commit must be checked before pull/merge/deploy.

## Source honesty
- SI 187 of 2026 identity/date comes from [ZimLII's index](https://zimlii.org/). Detailed six-month transition, tier fees, warranties and enforcement are **reported** by [The Herald on 24 Nov 2026](https://www.heraldonline.co.zw/zera-to-licence-solar-installers-enforce-quality-checks-under-new-regulations/), pending direct final gazette inspection.
- SI 126 of 2026 details derive from the uploaded primary statutory instrument (PDF pp1–2; §§3–6); the own-consumption plant threshold is not an exemption from installer or electrical safety obligations.
- ZERA's [Solar Product Registration System](https://solarprs.zera.co.zw/) is the official model-registration lookup, NOT this guide/manifest. Model registration does not authenticate a specific battery/inverter in the field.
- Historical 2016–2018 trained-operator list is NOT the new tier licensing register. Do not reproduce individuals' names/phone numbers from the uploaded list.
- Never claim TALUNZA holds ZERA approval/licensing or Academy accreditation without authoritative current verification.
- Never convert the legal reporting table into a TALUNZA sales warranty. Check actual seller/manufacturer terms before an offer.
- Source index and full corpus: [Kernel research draft PR #36](https://github.com/terysoft/talunza-kernel/pull/36), [Energy field-readiness PR #3](https://github.com/terysoft/talunza-energy/pull/3), [Compliance evidence PR #1](https://github.com/terysoft/talunza-compliance/pull/1). Institutional guide handoff: [Documents draft PR #26](https://github.com/terysoft/talunza-documents/pull/26). Their status is OPEN/DRAFT, not merged.

## External citation recheck — 2026-11-24
During a follow-up audit the source link was questioned because both **23 November** and **24 November** Herald stories exist. Fresh indexed web results on 24 November verify:
- [23 November report](https://www.heraldonline.co.zw/zera-to-license-solar-installers-under-new-regulations/) — shorter article.
- [24 November detailed report](https://www.heraldonline.co.zw/zera-to-license-solar-installers-enforce-quality-checks-under-new-regulations/) — a valid URL with detailed reported tier fees, warranties, registration and handover obligations; matches this draft guide's source title/date and **does not need replacing**.
- [ZimLII legislation index](https://zimlii.org/) displays SI187/2026 dated 20 November, but the final gazetted instrument's clauses/schedules remain **not directly inspected**. Indexed snippets and article contents are reporting, not legal-text verification.

The earlier concern that the 24 November Herald article URL was unverified is superseded by this check. A site visitor must still see the secondary-source limitation and no promise of an actual TALUNZA product warranty or licence.

## Public source-manifest semantics
- `documentType=PUBLIC_EDUCATIONAL_SOURCE_MANIFEST`, `status=DRAFT_NOT_LIVE` while unapproved, `asOf` pinned to actual research date; `governmentAffiliation=false`, `notForAutomatedComplianceDecisions=true`.
- Each claim has `id`, `kind`, `status`, `statement`, `sources`; source records carry `id`, `kind`, `url`, `description`. `null` URL for uploaded primary law is intentional: do not invent a public PDF URL.
- Distinguish `INDEX_CONFIRMED`, `PRIMARY_LAW_READ`, `OFFICIAL_PORTAL`, `SECONDARY_REPORTED_PENDING_FULL_GAZETTE`. These statuses describe evidence only, NOT legal compliance of a particular person/product.
- Read-only consumers may render qualified source-aware explanation. No external app may use this draft file to autonomously approve a system, tier, installation, person, product or warranty claim.
- At approval/release change `status` only with a dated reviewed source, then test and deploy; subsequent updates are additive/versioned, not silent reuse of stale certification facts.
- No true live API, official ZERA sync, website form backend, warranty ledger or data-processing integration has been added.

## Domain integration — requests only, no new data ownership
Energy: equipment technical facts and system assessment; Works: work-order/test/handover responsibility; Capture: private source/evidence with consent; Business: purchase/stock/receipt/warranty commercial truth; Procurement: supplier provenance; Compliance: qualifications/instruments applicability; Academy: reviewed courses and educational lab; Kernel: contracts and audit.
A future UI may show a **private** asset passport by referencing these owners with permission. Do not expose home addresses, serial numbers, private invoices, trainee contact data or proprietary supplier costs through public source manifest.

## Acceptance checklist before merging or publishing
1. Verify the full official SI187 gazette and accurate differentiation between person, product and power-project regulations. Replace uncertain source claims if contradicted.
2. Run dependency-free source-contract test: `node --test scripts/solar-guide-contract.test.mjs` from repository root.
3. On an approved, patched, **clean** developer checkout with no paid Actions: `npm ci`, `npm run typecheck`, `NEXT_PUBLIC_BASE_PATH=/technical npm run build`; inspect export paths, canonical tags, 404s and links.
4. Check Android/low-memory mobile at 320, 360 and 390px, desktop 1280px; keyboard, screenreader, external URLs, content reading order, WhatsApp and assessment link. Confirm no personal data is sent until user's explicit action.
5. Verify public source-manifest URL after deployment and metadata `asOf` and `status` match release evidence. Refresh sitemap/route index only during owning integration branch: incubator/security PRs also edit the sitemap/homepage.
6. Founder approval for public publication and formal live smoke; no automatic merge/deployment from this source PR.
7. Check ZERA source and supplier changes periodically. Corrections require dated rationale and reviewer evidence. Preserve original claims with a correction note rather than silently pretending past text was always correct.

## Rollback
Since this is one isolated static route + source manifest + solar page link, rollback can remove the link/page/manifest as a reviewed site commit after preserving citations and preventing broken public links. Avoid touching the existing solar assessment. Do not erase customer evidence (none is added here).
