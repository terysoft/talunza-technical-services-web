# TALUNZA Technical Services — quote-first incubator release candidate

**Date:** 2026-11-21  
**Status:** Source integration candidate, **NOT** production-approved, native Next build/real browser tests pending.  
**Mode:** No paid CI, no purchases, no production publication without existing release authority.

## What is integrated on this preview branch

This branch starts from Technical PR #9 and preserves the complete stacked chain:

- [#7](https://github.com/terysoft/talunza-technical-services-web/pull/7): technical service offer and custom incubator landing page.
- [#8](https://github.com/terysoft/talunza-technical-services-web/pull/8): structured incubator quotation fields, landing-page CTA wiring, sitemap, validated WhatsApp payload.
- [#9](https://github.com/terysoft/talunza-technical-services-web/pull/9): fixed `keyof IncubatorQuoteDetails`; render input form only after client hydration to avoid unhandled GET submissions and show direct-contact fallback.
- [#3](https://github.com/terysoft/talunza-technical-services-web/pull/3): exact security patch files `.gitignore`, `package.json`, `package-lock.json` copied into this **separate** preview branch, leaving the original security owner branch intact.

The public business model remains made-to-order: customer supplies approved materials; labour, consumables, delivery, controls and specialist work are individually scoped. Never imply fixed incubator price, ready stock, proven hatch rates, approved engineering design or deployed AI monitoring.

## Verification performed

- GitHub readback of all relevant source and quote flow confirmed page route, six quote CTAs, sitemap and no browser storage or API submission.
- Existing `quote.ts` and `tests/incubator-quote.test.mjs` were reconstructed as byte-identical local files with Git blob SHA matching GitHub. Running `node --experimental-strip-types --test tests/incubator-quote.test.mjs` produced **7 pass, 0 fail**.
- Ten additional read-only source assertions passed for route, hydration fallback, type symbol, submit prevention, fields and no client data storage.
- Security package dependencies match the root dependency entries in the copied lockfile; no dependency installation/build or advisories validation was performed here.
- Public `/`, `/services/`, `/technical/` pages were fetchable at inspection; `/technical/incubators/`, `/technical/incubators/request/` and `/forge/` were **not verifiably published**. Inaccessibility to the checker does not establish an outage.

## Mandatory local / release-owner checks

From an actual checkout of the integration branch, use Node >=20 and no paid CI:

```bash
npm ci
node --experimental-strip-types --test tests/incubator-quote.test.mjs
npm run typecheck
NEXT_PUBLIC_BASE_PATH=/technical npm run build
test -f out/incubators/index.html
test -f out/incubators/request/index.html
```

If any command fails, **fix on an isolated branch and rerun**; do not merge or publish. Check dependency advisories and `package-lock.json` integrity against current approved patches before any release. Confirm no code from active PR branches was lost.

## Browser and customer acceptance (must be performed on a real device)

1. At narrow Android viewport, navigate from main Technical Services to Incubators to the structured quote page with no broken links or overlapping controls.
2. With JavaScript enabled, supply chicken, 120 eggs, manual turning, solar/backup preference, Chiredzi location; press submit and **inspect** the prefilled WhatsApp message. Confirm correct destination, proper URL encoding and no automatic send.
3. Try zero, fractions, missing fields and >100,000 capacity; verify rejection before leaving the site.
4. Disable JavaScript and reload the quote page; ensure **no input form is exposed** and direct WhatsApp/contact links still work. No GET request carrying private field values.
5. Check keyboard labels, focus, tap targets, screen reader announcements and contrast.
6. Verify real `https://talunza.co.zw/technical/incubators/` and `/technical/incubators/request/` over HTTPS, canonicals, robots/sitemap, and actual enquiry handoff after approved publication.
7. Retain a screenshot/video of the mobile smoke test only with the tester's permission and no private customer details.

## Release and collision rule

The upstream PRs remain the owning sources. This branch is a **temporary compatibility proof**, not a competing feature or a new product. Reconcile with current upstream heads and release controls before integration. No direct main/prod modification from this candidate.

Cross-platform portfolio modernization is owned by [Kernel issue #28](https://github.com/terysoft/talunza-kernel/issues/28); do not infer public app maturity from GitHub file presence or a preview branch.
