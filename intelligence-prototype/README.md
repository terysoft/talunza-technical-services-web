# TALUNZA Intelligence Prototype v0 — zero-cost synthetic capability + attention

Date: 2026-11-18 (Africa/Harare)
Status: SOURCE IMPLEMENTED IN DRAFT BRANCH; synthetic V8 test harness passed; **not live, deployed, integrated with any data store, or native Node/Next build verified**.
Repository: `terysoft/talunza-technical-services-web`
Branch: `feat/intelligence-capability-prototype-20261118`
Cross-platform contract review: https://github.com/terysoft/talunza-kernel/pull/15
Tracked milestone: https://github.com/terysoft/talunza-kernel/issues/16

## Why this implementation lives here

Current `next.config.ts` uses `output: 'export'`. A static-export site cannot securely hold model API keys or host persistent model agent/tool servers. This prototype is therefore strictly **browser-compatible deterministic code**, with no secrets, API key, real inference, storage or customer input. Do not convert `NEXT_PUBLIC_*` settings into a model credential workaround.

The reusable part is an ES module under `intelligence-prototype/`, not a Next-specific API route. It demonstrates the *capability* interface with:
- `technical.intake_triage`: classifies fictional service reports, distinguishes unsafe symptoms, and emits a proposed draft action, never a diagnosis or physical repair instruction.
- `academy.lesson_explain`: a **synthetic** measuring exercise, not a verified educator lesson or real student record, using the same schema.
- `evaluateAttention`: pure deterministic low-stock and waiting-for-information examples; stable per-revision card ID, stale/dismiss/denied-source handling; no notifications or automated actions.
- Sealed `createFakeProvider` adapter in `fake-provider.mjs` with named deterministic scenarios (`none`, `timeout`, `unavailable`, `unknown_billing`, `budget_denied`), zero-cost synthetic receipts, no network, no caller-supplied provider function and no action grants.

These are **not** two real integrated product consumers. The second consumer is only synthetic and cannot satisfy the cross-product production gate by itself.

## Try the preview only in a local checkout

```bash
node --test intelligence-prototype/intelligence.test.mjs
# With the Kernel PR #15 schema checked out in a separate local directory:
python3 intelligence-prototype/verify-kernel-contract.py \
  /path/to/talunza-kernel/docs/initiatives/ai-native-intelligence/intelligence-envelope-v1.schema.json
# Do not run npm ci from this branch until PR #3's lockfile is reconciled:
npm ci
npm run typecheck
NEXT_PUBLIC_BASE_PATH=/technical npm run build
```

Run `npm ci` only with a verified lockfile and intended dependency versions. **Main currently has no committed lockfile; security PR #3 contains the proposed lockfile and patched dependency versions, and remains a draft.** Therefore do not assume `npm ci` works or that this branch is deployable. After carefully reconciling the security PR, build on a clean merged or review worktree with the canonical workspace standard; never overwrite existing founder checkouts. No paid CI.

Default `NEXT_PUBLIC_BASE_PATH` is `/talunza-technical-services-web`; this preview is under `/intelligence-preview/` when built from this branch. `app/intelligence-preview/layout.tsx` sets noindex, but **noindex is not authentication**. The content uses only fictional prewritten examples.

## Test evidence (2026-11-18)

- 47 cases in `intelligence.test.mjs` (two consumer manifests, service classification, safety signal, public/synthetic scope denial, forged client fields, typed proposal-only output, sealed fake adapter failure/budget/billing receipts, attention dedup, stale/denied/dismissed state).
- 47/47 passed in isolated V8 JavaScript execution of the exact GitHub source after readback using a test/assert semantic shim. **This is NOT native `node --test`**; Node, `tsc`, Next build, Android, browser, accessibility, network/hosting and penetration tests remain unverified.
- 17 contract fixtures were generated in the same V8 executor; 17/17 matched expected valid/invalid outcomes using a **limited JavaScript schema-subset checker**. This is NOT independent full JSON Schema conformance. The separate Python `jsonschema` Draft202012 checker has been added but NOT executed against the canonical schema in a native checkout.
- GitHub file content was read back and matched the written content after each change; this is repository-state proof, not deployment proof.
- No model API, OAuth, customer/learner record, prompt logging, database, token billing, scheduled notification, effect execution or production endpoint used.

## Boundaries and critical next work

1. Align all requests/results against Kernel's published JSON Schema using a standards-compliant validator (the current runner implements a restricted text-only subset). Production APIs must reject unauthorized data/fields, not merely ignore them.
2. The public demo `scope: 'PUBLIC_SYNTHETIC'` is **not** identity or tenant authentication. Real rights must be derived from a trusted server, not a browser-supplied scope.
3. Determine the server/runtime owner after two real product requirements; create a separate private `talunza-intelligence` service only once the multi-consumer boundary is justified. Static Next pages remain clients, not proxy credential stores.
4. Add typed domain tools outside the model; domain system enforces auth, idempotency, source revision, human approvals and actual effects.
5. Add one real provider only after founder explicitly authorizes vendor account/budget, retention policy, secret storage and privacy/child/safety gates. Prefer a direct adapter first and strict budget; never place secrets in GitHub, frontend JS, public Next env, or chat.
6. A real Technical Services intake workflow requires server-side guest abuse/rate limits, evidence policy, role/tenant bindings and service/job owner sign-off.
7. Keep Business P0 integrity, Works migration, Market contact consent and Academy curriculum/child safety as their own product gates.
8. Security PR #3 updates outdated Next/React dependencies; reconcile it before any merge/deployment of this preview. Draft PR #2 also has public-search-related changes; avoid modifying its SEO work accidentally.

## Evaluation before any launch claim

Require full native test command, typecheck, static build, two real authorized consumers, prompt/PII/role tests, cost policy, failure-state audit and manual real-device acceptance. If any gate fails, keep this prototype isolated.

## Proposed future API

`run_capability(request, authenticated_context) -> result`

Server trusted context: actor, tenant, data class, scope, purpose, consent, route budget, allowed tools and evidence revisions. Responses stay versioned and include evidence, freshness, proposed actions and receipts. Use Kernel PR #15 to avoid copying this prototype into each application.

**Do not merge or deploy based solely on this prototype.** This is intentionally the smallest working step toward a reusable, policy-controlled TALUNZA Intelligence Layer.

## Follow-up: security patch and full conformance gate

- Security PR #3 (security/next15-patches-20261114) proposes Next 15.5.29, React/React DOM 19.1.10, scoped PostCSS override and package-lock. This intelligence PR changes no existing app dependency, lockfile or homepage file.
- Reconcile both drafts in a **fresh disposable local worktree** before native build QA; do not merge either to main solely for testing.
- This assistant's isolated Node 22 container could not clone GitHub (external DNS unavailable). Therefore source verified through GitHub plus V8 execution is NOT evidence of native Node/Next build.
- export-contract-fixtures.mjs emits 7 expected-valid and 10 expected-invalid synthetic documents. verify-kernel-contract.py runs the actual Kernel v1 JSON Schema using Python jsonschema Draft202012Validator and format checking. These developer tools have no production dependency and must be run natively before G1 conformance claims.
- Re-run native tests and full schema check after each Kernel contract revision; do not weaken a contract to make failures disappear without review.
