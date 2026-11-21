# TALUNZA Technical Services — Lowveld Intake Classification Delta

**Status:** draft source only, stacked on Technical Services AI prototype PR #6; not deployed or connected to real enquiries.

## New free-first effect

The existing `technical.intake_triage` capability now delegates its RULES path to a reusable, zero-API `public-intake-classifier.mjs`. Besides the existing solar, electrical, networking, security, refrigeration and welding families, it handles **custom poultry incubators/hatching** and **pumps/boreholes/irrigation** as first-class services. Those specific jobs are prioritised over generic solar/wiring terms to avoid losing a solar-pump or incubator request in a broad category.

The rule returns a **proposed** category and next information question; it can flag obvious danger words for qualified on-site review. It does **not** read private data, diagnose faults, certify safety, calculate/approve quotes, verify payment or book a technician. Text/phrase coverage is intentionally narrow; ambiguous English/Shona/Shangani descriptions need explicit clarification, not guessed service/price.

## Exact implementation scope

- Added `intelligence-prototype/public-intake-classifier.mjs` (pure no-cost rules).
- Replaced the duplicated inline `SERVICE_FAMILIES` / `HAZARD` table in the existing PR #6 `capability-runner.mjs` with one imported `classifyPublicIntake` call; no request/result schema, envelope, provider interface, authority or action changes.
- Added `intelligence-prototype/public-intake-classifier.test.mjs` with 20 synthetic realistic request classifications and explicit safety/security negatives.

## Verification and limits

```sh
node --test intelligence-prototype/public-intake-classifier.test.mjs
```

**6/6 PASS** with a 20-case scenario table, including overlapping categories, danger-word handling, unknown description fallback, missing input, and no fake price/transaction/job IDs. Checked exact GitHub blobs against `git hash-object` from the files actually executed:
- Module: `f56e490ff6db3d87e1ed5c2dda70d76e5c39f170`.
- Test: `a866e94a98191309c63dbf108adc03aa13929f1b`.

The existing PR #6 `intelligence.test.mjs` suite, full Next.js build, actual browser interaction and real Chiredzi customer pilot **have not been executed on the integrated branch**. Read-back verified the amended import/delegation and removal of duplicated constants; integration is not fully runtime-proven.

## Next step

1. On clean checkout, run `node --test intelligence-prototype/*.test.mjs`; then `npm ci && npm run check` with the dependency-security PR properly reconciled.
2. Compare classifier decisions against 20 consented/appropriately anonymised real local customer enquiries and review confusion matrix, unknowns and hazard false negatives with qualified tradespeople.
3. Keep the existing incubator quote-builder PRs #7–#10 authoritative for customer requests and pricing; AI may only prepare intake drafts. No duplicate quote form/service route.
4. Add a publicly usable deterministic intake UI only after privacy, copy, safety, routing and review gates are accepted, and no API key is exposed in browser JS.

## Collision/rollback

Changes are isolated on a branch stacked on PR #6; the incubator quote builder and security PR branches are untouched. Revert this branch if changes impair existing service routing. No CI cost, production operation or customer data is involved.
