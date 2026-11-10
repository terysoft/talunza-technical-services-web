# TALUNZA Technical Services — ChatGPT Search discovery increment
Date: 2026-11-10 Africa/Harare.
Status: SOURCE-IMPLEMENTED IN FEATURE BRANCH / PRODUCTION NOT DEPLOYED / SEARCH APPEARANCE NOT GUARANTEED.

## Specific founder clarification
TALUNZA Technical Services primarily visits customers at their sites and provides selected remote support. It is NOT currently a walk-in retail location and is NOT an online checkout store. OpenAI Business Hub's "Through a service" onboarding was shown as "Coming Soon" in the founder's screenshots on 2026-11-10; no claim was completed. Never choose another business type solely to get through registration.

## Official discovery guidance
- https://help.openai.com/en/articles/9237897-searching-the-web-with-chatgpt
- https://help.openai.com/en/articles/12627856-publishers-and-developers-faq
- https://platform.openai.com/docs/bots
Public sites can appear in ChatGPT Search even without Business Hub claims. OAI-SearchBot may index pages when permitted by robots.txt and hosting/firewall/CDN. GPTBot's training-related access is a different decision. Neither crawl permission nor structured data guarantees indexing, ranking, recommendation or referrals.

## Implemented source changes
- app/page.tsx: visible, accurate mobile-service description; no claim that customers can visit a shop.
- app/layout.tsx: retain LocalBusiness structured data and add an explicit schema.org Service entity with providerMobility="dynamic", serviceArea and the same anchored business provider. Do not invent streetAddress, opening hours, service prices, licences, shop premises or verification status.
- app/robots.ts: explicit OAI-SearchBot Allow / alongside existing wildcard Allow /. No GPTBot restriction/allow decision.
- app/sitemap.ts: remove September 11 hard-coded lastModified timestamp, which was not independently supported as the actual last modification for all the current service pages. Keep stable canonical paths.
- scripts/check-ai-discovery.mjs: dependency-free source contract for provider mobility, crawler permission, sitemap paths, canonical links and no fabricated shop address.

## Manual verification
In a clean local checkout with Node >=20:
    node scripts/check-ai-discovery.mjs
    npm run check

After authorized production deployment (not done by this patch), inspect:
- https://talunza.co.zw/technical/
- https://talunza.co.zw/technical/electrical/
- https://talunza.co.zw/technical/solar/
- https://talunza.co.zw/technical/connectivity/
- https://talunza.co.zw/technical/computers-software/
- https://talunza.co.zw/technical/robots.txt
- https://talunza.co.zw/technical/sitemap.xml
- actual HTTP status/redirects, source rendered JSON-LD, canonical URL, robots and X-Robots-Tag response header, crawling under the correct host.

Note: root domain talunza.co.zw has its OWN robots.txt and sitemap.xml from talunza-home; technical subpath robots.txt is a human/diagnostic resource, not a replacement for the actual host-level robots.txt used by crawlers. Check hosting bot protection and OpenAI-published searchbot IP range. Do not report crawler acceptance from a robots.txt source file alone.

## Separate projects and gates
- Product-feed review exporter: https://github.com/terysoft/talunza-market/pull/45 (draft; seller opt-in and external eligibility needed).
- Company Business Hub activation kit: https://github.com/terysoft/talunza-documents/pull/3 (draft; secure founder verification not complete).
- Chilo City has its own canonical public domain at https://chilocity.co.zw and must be audited as a separate HOST before any claim about its effective robots policy, search bot traffic or sitemap. Do not assume that the talunza.co.zw root robots.txt applies to chilocity.co.zw.
- No live deployments, external account claims, new API tokens, paid CI, unconsented listing exports or merchant outreach are part of this increment.

## Evidence classification
- SOURCE-OBSERVED: current site TypeScript, sitemap and robots configuration.
- SOURCE-IMPLEMENTED: feature-branch edits and manual check script.
- TESTED: only if manual check logs are attached to the PR; do not infer tests from committing a script.
- UNVERIFIED: hosting/CDN/WAF acceptance, actual live schema, Google/OpenAI indexing, Business Hub eligibility, traffic and conversions.
