// Manual, deterministic source contract. Run: node scripts/check-ai-discovery.mjs
// It does not prove live indexing, crawler reachability, or deployment.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const layout = read('app/layout.tsx');
const robots = read('app/robots.ts');
const sitemap = read('app/sitemap.ts');

assert.match(layout, /'@type': 'LocalBusiness'/, 'Retain business identity');
assert.match(layout, /'@type': 'Service'/, 'Publish an explicit service record');
assert.match(layout, /providerMobility:\s*'dynamic'/, 'Mobile service must be identified');
assert.match(layout, /areaServed:\s*mobileServiceAreas/, 'Keep real service area');
assert.doesNotMatch(layout, /\bstreetAddress\b|\bopeningHours\b/, 'Do not invent walk-in shop data');
assert.match(layout, /#business/, 'Keep a stable business identifier');
assert.match(layout, /#mobile-service/, 'Keep a stable service identifier');

assert.match(robots, /userAgent:\s*'OAI-SearchBot',\s*allow:\s*'\//, 'Explicitly allow search crawler');
assert.match(robots, /userAgent:\s*'\*',\s*allow:\s*'\//, 'Keep default crawler policy');
assert.match(robots, /https:\/\/talunza\.co\.zw\/technical\/sitemap\.xml/, 'Keep canonical sitemap');
assert.doesNotMatch(robots, /userAgent:\s*'GPTBot'/, 'Training-crawler policy is out of scope');
assert.doesNotMatch(sitemap, /lastModified:\s*new Date\('2026-09-11/, 'Avoid stale fixed last-modified date');

const routes = ['electrical', 'solar', 'connectivity', 'computers-software'];
for (const route of routes) {
  const page = read('app/' + route + '/page.tsx');
  assert.ok(sitemap.includes("'/" + route + "'"), 'Sitemap must list ' + route);
  assert.match(page, /canonical\s*:/, 'Page must define a canonical route: ' + route);
  assert.ok(page.includes("'/technical/" + route + "/'"), 'Canonical URL must match route: ' + route);
}
console.log('AI discovery source contract: PASS (live crawler status not tested)');
