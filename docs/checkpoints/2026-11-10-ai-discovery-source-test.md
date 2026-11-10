# Technical Services AI Search — isolated source check (2026-11-10)

Status: SOURCE IMPLEMENTED, ISOLATED TEST PASS. Full Next.js build and live crawler verification NOT RUN.

## Exact source
- scripts/check-ai-discovery.mjs Git blob SHA 2185f42fac2ac62f9b77ec4503e3f88759d6d4eb
- app/layout.tsx SHA 679f81ebb41e4baedbb25b2d87d4321f5e5fb05c
- app/robots.ts SHA d34122b5fdccb42ca8aab575b14c114db0f31948
- app/sitemap.ts SHA 7e1454d0a6c9620b2bd018793e6069de3c28c1f9

## Executed test
Local isolated fixture on Node 22.16.0 (not an entire repository checkout):
- git hash-object scripts/check-ai-discovery.mjs -> 2185f42fac2ac62f9b77ec4503e3f88759d6d4eb, matches connected GitHub source.
- node --check scripts/check-ai-discovery.mjs -> PASS.
- node scripts/check-ai-discovery.mjs -> AI discovery source contract: PASS (live crawler status not tested).

Fixture used synthetic schema strings and four route canonical paths, so it does not prove Next.js TypeScript compilation or live JSON-LD. Source readbacks and separate connector-level assertions confirmed changed branch files retain mobile-service business, Service schema, search crawler rule and sitemap paths. Founder confirms mainly traveling to customer sites; not a walk-in shop. Business Hub service route was Coming Soon in founder UI.

## Required before release
1. In a clean Node >=20 checkout run node scripts/check-ai-discovery.mjs && npm run check (Next.js production build).
2. Root-host robots policy for talunza.co.zw comes from talunza-home PR #72; subpath /technical/robots.txt cannot replace root policy.
3. After explicit founder approval and standard release process, verify actual live response headers, website canonicals, host-level sitemap/robots and OAI-SearchBot access. Search appearance is not guaranteed.

No deployment, claim, feed upload or paid CI was performed.
