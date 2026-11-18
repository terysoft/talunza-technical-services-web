# TALUNZA Technical Services — Energy Advisor Intake M1 handoff
Status: **SOURCE-IMPLEMENTED ON DEVELOPMENT BRANCH; NOT BUILD-TESTED; NOT DEPLOYED**. Date: 2026-11-18.

## Scope implemented
- New mobile responsive static route: `/solar/assessment/`, client-side React.
- Explicit assessment goal, general locality, appliance schedule, desired backup duration, existing equipment and optional budget/callback contact.
- Required information and explicit opt-in before enabling a prefilled `wa.me/263777323918` link.
- WhatsApp preview shown before handoff. No direct send, no data upload, no customer DB writes, no visitor tracking added.
- Solar services landing page has a link to the new intake route.

## Technical architecture reality
The current repository uses Next.js `output: 'export'`, so there is **no server-side persistence or safe API endpoint** within this deployment. This M1 page is a **zero-backend handoff**, not a full CRM. The user's details exist only in the browser page state and are passed to WhatsApp when they actively tap the link. We do not generate a fake request ID or claim the enquiry is registered.

If a customer closes the page before clicking WhatsApp, their unsent draft is not saved. Incoming WhatsApp messages still require a human operator. This is appropriate for an initial reversible test, not an automated sales bot.

## Test gates before merge
1. On a checkout with dependencies available: `npm run typecheck` and `npm run build`; follow repo policy and avoid paid CI.
2. Verify static export creates the `solar/assessment/` route with correct repo base path/asset prefix and working relative link.
3. Manual Android 10+ and desktop tests: empty form, invalid/whitespace-only required fields, long text, special characters, consent unchecked, link opening, WhatsApp text review before send.
4. Accessibility: keyboard labels, focus order, color contrast, readable 360px viewport, assistive status text.
5. Security/privacy: no automatic send, no additional cookie/analytics, no public contact leakage or localStorage persistence.
6. Check that clicking does not promise free travel or a completed solar design.
7. Only after reliable secure customer record storage is designed may a server-generated reference ID and admin triage queue be added.

## Next increments
- M2: connect to a secure, authenticated existing job/customer intake endpoint (owner/source first; **do not create a parallel production DB**) and issue unique opaque request references.
- M3: preserve appliance ratings with evidence and route to `talunza-energy` technical review, not unsafe AI sizing.
- M4: quote preparation using current Energy v1.3 voltage-first labour rates, approved product retail, quoted materials and separately priced site travel.
- M5: Works first-fix measured-room BOQ and later the optional official WhatsApp Business Platform integration.

## Dependencies / blockers
- Backend authority / persistent CRM database route not verified from this static site alone.
- No WhatsApp API merchant onboarding is needed for the present handoff.
- No deployment is authorized. Founder approval is necessary for public release after manual QA.
- Actual site assessment and qualified human electrical review remain required.

See `terysoft/talunza-energy/docs/ENERGY_ADVISOR_V1_IMPLEMENTATION_CONTRACT_2026-11-18.md`.
