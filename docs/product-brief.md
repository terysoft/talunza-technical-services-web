# Talunza Technical Services Web App — Product Brief

Status: CANONICAL PRODUCT BRIEF.

## Product identity
**Talunza Technical Services — Chiredzi & Lowveld**

Positioning: One trusted technical service network for installation, repair, connectivity, fabrication and maintenance across Chiredzi and surrounding Lowveld areas.

Primary territory: Chiredzi.
Extended service areas: Triangle, Hippo Valley, Mkwasine, Boli, Chingele, Ngundu, Rutenga and surrounding Lowveld communities. Add new zones only when travel economics and technician coverage are viable.

Customer promise: **One number. Many technical problems solved.**

Core line: **Install • Repair • Connect • Protect**

## Why this product exists
The founder already has local recognition for electrical tubing/installations, solar, CCTV and Starlink work. The product should formalise and scale an existing reputation rather than invent a new market position.

Talunza's main corporate/software website remains technology/software-focused. This is a dedicated local service website/web app with its own customer journey and operations.

## Initial service catalogue
### Lead services — founder reputation
- Electrical tubing and installations
- Solar installation and troubleshooting
- CCTV installation and repair
- Starlink installation
- Wi-Fi and networking
- Satellite dish installation

### Expanded Talunza service network
- Computer repair and software troubleshooting
- Refrigeration: fridges, freezers and related equipment
- Domestic appliance repair
- Welding and custom fabrication
- Poultry incubator fabrication, repair and controls
- Mechanical repair and maintenance
- Auto electrical diagnosis and repair
- Selected farm/field technical equipment

Talunza must not imply that one technician personally performs every trade. Jobs can be fulfilled by verified Talunza partners/technicians while Talunza owns customer intake, quotation, assignment, evidence, QA, warranty and follow-up.

## Public web experience
### Homepage
- Clear Chiredzi/Lowveld identity
- Lead with Electrical, Solar, CCTV, Starlink
- Strong `Report a Problem` / `Book a Technician` CTA
- Real founder/work photos rather than generic stock imagery
- Service-area summary
- Recent completed-work proof cards
- WhatsApp CTA
- Social-media links and share actions

### Service pages
One SEO/shareable landing page per service family with:
- What Talunza does
- Common problems solved
- Example work
- What information to send before visit
- Typical service process
- Service area
- Call/WhatsApp/book CTA
- Safety/compliance disclaimer where applicable

### Customer signup/account
Customers may use guest booking first; account creation becomes useful for repeat service.

Account capabilities:
- Profile and contact information
- Saved properties/locations
- Saved assets/equipment
- Current jobs
- Previous jobs
- Quotes
- Invoices/receipts
- Warranty records
- Maintenance reminders
- Upload photos/videos of faults
- Rebook previous service
- Rate completed work

Do not force signup before first contact. Low-friction acquisition is more important than account creation.

## Core booking / report-a-problem flow
1. Select service/problem category.
2. Describe the problem in plain language.
3. Upload photos/video where useful.
4. Add location and service area.
5. Add preferred contact method.
6. Choose urgency: normal / urgent / emergency where supported.
7. Talunza triage.
8. Remote diagnosis attempt where appropriate.
9. Call-out / inspection decision.
10. Quote.
11. Customer accepts.
12. Technician/partner assigned.
13. Work performed.
14. Before/after evidence captured.
15. Customer confirms completion.
16. Payment recorded.
17. Warranty/maintenance record created.
18. Customer receives share/review prompt.

## Job lifecycle
NEW → TRIAGE → AWAITING_INFO → SITE_VISIT_REQUIRED → QUOTED → ACCEPTED → ASSIGNED → IN_PROGRESS → TESTING → COMPLETED → PAID → WARRANTY_ACTIVE → CLOSED

Include CANCELLED and DISPUTED states with audit history.

## Technician / partner interface
A lightweight mobile web interface should allow authorised technicians to:
- See assigned jobs
- Call/message customer
- Navigate to location
- Record diagnosis
- Request parts/materials
- Capture before/during/after photos
- Record measurements/test results
- Record work performed
- Mark job ready for QA
- Record customer sign-off

Partner earnings/customer pricing must remain controlled by Talunza operations, not exposed as arbitrary technician-to-customer negotiation.

## Admin/dispatcher interface
- New-job inbox
- Triage queue
- Customer history
- Technician/partner directory
- Skill/capability tags
- Availability and service zones
- Quote builder
- Job assignment
- Parts/material notes
- Payment status
- Warranty claims
- Disputes/rework
- Evidence gallery
- Performance metrics based on objective operational data

Avoid opaque worker scoring. Track auditable facts: response times, completion, callbacks/rework, customer-confirmed outcomes, evidence completeness.

## Social and growth features
### WhatsApp
- Direct booking / report problem CTA
- Pre-filled share messages for service pages
- Share quote/job reference where appropriate
- Share completed project cards with customer permission
- Customer referral links/codes later

### Facebook / Instagram / TikTok / YouTube
- Public links from profile/service pages
- Generate social-ready before/after project cards
- Deep-link from social posts into specific service landing pages
- Track campaign source without invasive advertising trackers

### Proof-of-work system
Every completed job can produce an optional public case-study card:
- service type
- general area, not exact private address
- problem
- solution
- before/after images
- verified completed date
- customer testimonial only with permission

This becomes Talunza's local trust engine.

## Payments
V1 should support cash/manual EcoCash/bank/payment-state recording without blocking launch.

Future integration candidates:
- Paynow server-to-server/payment links, which supports multiple Zimbabwe payment methods and external site integration.
- EcoCash developer APIs where merchant onboarding and compliance make direct integration appropriate.

Never hard-code payment secrets in client code.

## Service-area model
Do not promise identical call-out economics everywhere.

Suggested model:
- Zone A: Chiredzi local
- Zone B: near-Chiredzi / Triangle / Hippo Valley
- Zone C: extended Lowveld such as Mkwasine, Boli, Chingele, Ngundu, Rutenga
- Custom: remote/farm/off-route jobs

Exact towns and prices must be field-validated before publishing fixed fees.

## Product architecture principles
- Mobile-first PWA/web app
- Android 10+ browser friendly
- Works acceptably on low bandwidth
- Compress user-uploaded photos/video
- Offline-tolerant technician notes where practical
- Server-authoritative job state and audit history
- Privacy-first analytics
- Role-based access
- Explicit customer consent for public proof/social sharing
- No exact home addresses in public case studies
- Sensitive asset/security details never published

## V1 scope
The first live version should include:
1. Premium public homepage
2. Service catalogue and individual landing pages
3. Chiredzi/Lowveld service-area pages
4. Report-a-problem form
5. Photo upload
6. WhatsApp handoff
7. Admin job inbox
8. Quote/job status basics
9. Technician assignment
10. Before/after evidence
11. Customer job-status link
12. Basic customer account optional, not mandatory
13. Social-shareable completed-work cards
14. Privacy-safe analytics

Exclude from initial launch:
- complex marketplace bidding
- automated technician pricing
- national expansion
- deep AI automation
- advanced payments
- large ERP features

## AI opportunities after operational data exists
- classify incoming problem descriptions/photos
- suggest triage questions
- recommend likely tools/parts
- draft quote descriptions
- retrieve previous similar jobs
- technician troubleshooting assistant
- maintenance prediction from asset history
- generate customer-friendly explanations

AI advises; it does not silently authorise electrical, mechanical or safety-critical work.

## Business model
Revenue sources can include:
- call-out/diagnostic fee
- labour
- installation fee
- materials/parts margin
- fabrication margin
- project management/orchestration margin
- maintenance plans
- emergency premium where justified
- recurring support contracts for businesses/farms/schools

## Operating principle
**Talunza owns the customer relationship and quality standard even when a partner performs the technical work.**

The company records who did what, what was tested, what evidence exists, what was charged and what warranty applies.
