# TALUNZA Intelligence — native Node focused QA checkpoint, 2026-11-19

**State:** REVIEW CANDIDATE, no customer release, no PR, no merge, no CI run. **Separate branch:** `qa/intelligence-hazard-native-node-20261119`; branched from Technical Services draft PR #6 head `960020f517dfa5999fc61c3847ec81b4894a246b`. **Repo owner:** `terysoft/talunza-technical-services-web`. **Cross-product owner:** Kernel PR #15, without any changes in that repo.

## Result and exact evidence

Recreated source files in an isolated temporary container from the authenticated GitHub connector and independently verified exact **Git blob SHA** for the three core modules (no generated approximation):
- Original `capability-runner.mjs`: `94c4fd42f9c64c76b8db5b0dd5d126053c2035ab`.
- Candidate `capability-runner.mjs`: `21f5d8d7a492b0c9b3c056af1b295acfb8bb4d6e`.
- `attention-engine.mjs`: `049dd630ea13aadd9f8cf29ca1f74da1373e0d57`.
- `fake-provider.mjs`: `a96fce83a0cab750c39b94bf99c8e68a62b33309`.
- `native-focus.test.mjs`: `777e8a10dca0c5a241d685e66d579573e164fe80` on branch, exact file also executed locally.

**Tool:** Node v22.16.0, native `node:test` through `node --test intelligence-prototype/native-focus.test.mjs` in separate isolated sandbox. **No network, model SDK, cloud, customer data, payment, live side effects or paid CI.**

**Before**: 13 focused native tests -> **8 PASS, 5 FAIL**. The failing inputs were `inverter smoking`, `inverter sparking`, `battery overheating`, `cable getting hot`, and `wires arcing`; current English hazard regex missed these and returned the non-hazard intake text. Test evidence from same core modules before patch.

**Candidate**: only English hazard regex broadened (with word boundaries; no security/model permissions widened) and one 13-case synthetic native-test file added -> **13/13 PASS, 0 FAIL**. Existing explicit hazard cases still pass. Other cases check normal draft-only intake, deny forged tenant metadata, discard fake provider payment action, suppress stale stock attention and ensure fake provider no-billing.

This is a **specific unit-level improvement**, not validation that the entire original 47-case suite passes natively, not full Kernel JSON Schema conformance, not a general-purpose classifier and **not a safety certification**.

## Safety and scope

- A regex is not competent electrical risk assessment. It cannot be relied on for all hazardous descriptions, including code-switched Shona/Shangani, misspellings, local idioms, images or atypical symptoms. Continue human technician review and keep safe manual/offline flow.
- Do not infer all hazards from the new 13 checks. If a phrase is not recognised, that is **not proof of safety**. No autonomous electrical instructions or repair sign-off.
- This PR6-derived candidate does not include security PR #3 dependency/lockfile changes. A full Next build still requires reconciliation of PR #3 in an isolated workspace with sufficient verified disk space.
- Current app is a **static Next export**. Do not put model API keys, customer data or live agent tools in browser JS. No deployment.
- `PUBLIC_SYNTHETIC` is explicitly **not authentication**. No second real integrated consumer exists yet.
- Related possible attention-condition key/revision issue and multi-language negatives remain separate candidate tests, not claimed fixes.

## Next test gates

1. **Founder laptop read-only host inventory FIRST** (PowerShell not WSL): obtain free C: space and `wsl --list --verbose`. Do not clone, install or move projects before confirming real paths; Windows C: had a dated low-space alert.
2. Resolve actual existing local checkout through canonical TALUNZA workspace inventory, verify origin, branch, head SHA, dirty/untracked state and PR collision. Preserve working files, no mass cleanup.
3. In an isolated clean worktree only if disk permits, compare PR #6 source + this hazard test candidate + security PR #3 lockfile/dependency versions.
4. Run **native full 47-case suite**, 13 focused cases, Python Draft202012 schema checker against exact Kernel PR #15 schema; then `npm ci`, `npm run typecheck`, `NEXT_PUBLIC_BASE_PATH=/technical npm run build` only if PR #3 lockfile is reconciled and host space suffices. Stop on conflicting source/schemas; do not weaken validator to pass.
5. Representative browser and budget-Android usability, accessibility, privacy and multilingual safety acceptance after code review; no live model before trusted backend, auth and approved spend.
6. Coordinate with Technical Services PR #6 owner. This branch has **no PR** to avoid triggering the repository's `pull_request` GitHub Actions quality-gates workflow; remote changes on an unlinked feature branch do not match the inspected `push: main` trigger. Recheck triggers before opening a PR.

**Reviewed current workflow triggers:** `.github/workflows/quality-gates.yml` (`pull_request`, `push: main`) and `deploy-pages.yml` (`push: main` and `workflow_dispatch`). A future PR may trigger Actions even with `[skip ci]`; never promise otherwise.

**Outcome:** targeted safety phrase weakness reproduced and bounded on a review-only branch. **NOT:** native full suite, production deploy, customer proof, independent electrical safety approval, or founder-laptop field run.
