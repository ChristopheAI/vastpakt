# Let's Develop competitor outcome language

Date: 2026-05-31

Status: internal redesign source note. This is not public copy and not approval to copy their wording.

## Why this note exists

Christophe added `https://www.letsdevelop.tech/` as a strong competitor/reference for the Vastpakt redesign.

Verdict: partially correct.

Correct part: Let's Develop is a strong source for outcome language around double work, manual transfer, Excel, loose systems, status updates, existing systems and concrete case proof.

Correction: Let's Develop is not the visual model in the same way CopyJay and Pieter are. CopyJay still carries the homepage spine. Pieter still carries the personal trust layer. Let's Develop should be used as the operational outcome and use-case layer.

## Sources inspected

- `https://www.letsdevelop.tech/`
- `https://www.letsdevelop.tech/applicatieontwikkeling/workflow-automatisering/`
- `https://www.letsdevelop.tech/applicatieontwikkeling/applicatie-koppelingen/`
- `https://www.letsdevelop.tech/human-in-the-loop/`
- `https://www.letsdevelop.tech/klantcases/`
- `https://www.letsdevelop.tech/klantcases/blokhutwinkel-automatiseert-het-gehele-verkoopproces-in-een-complete-ordertool/`
- `https://www.letsdevelop.tech/klantcases/slimme-api-koppelt-bestellingen-webshops-brezo-automatisch-met-erp-pakket/`

Search method:

- Browser/open-page read of the homepage and key service/case pages.
- Exa search for Let's Develop workflow automation, software koppelen and klantcases.
- Exa fetch of homepage, workflow automation, Blokhutwinkel and Brezo pages.

## What is visibly proven

Facts from the public pages:

- The homepage positions Let's Develop around software building, systems connecting and workflow streamlining.
- The homepage has three main service buckets: software development, integrations/automation, and software modernization.
- Their homepage has a why block, a for-who block, a method block, an AI/regie block, case proof cards and contact/footer.
- Their workflow automation page names manual steps, loose tools, duplicate input, CRM, ERP, boekhouding, Excel, orders, forms, status updates and administrative handwork.
- Their case overview and individual cases use concrete before/after proof: manual typing, multiple screens, mailbox/paper, Excel, order flow, ERP/webshop/CRM, status checking.

Claims from Let's Develop:

- They claim to build software that fits existing business processes.
- They claim automation becomes relevant when multiple systems or repeated manual actions create delay, errors and double work.
- They claim existing systems often do not need to be replaced; they can often be connected.
- They claim their cases reduced manual work and made order/status/document flows more reliable.

Customer claims visible in cases:

- Blokhutwinkel says work moved from several screens, paper and mailbox into one order system.
- Blokhutwinkel says they no longer had to retype things several times.
- Brezo/Print.com says a high order volume made manual typing and manual mails undesirable.

Inference:

- The strongest Vastpakt-relevant layer is not their software offer. It is their way of making the pre-automation problem recognizable through concrete work objects.
- Their case proof works because it names the old operational surface before naming the new software.

## Strong mechanisms Vastpakt can borrow

### 1. Signal list before service menu

Source basis:

- Workflow automation page: signals include repeated input, Excel as overview, manual processing of orders/forms, disconnected CRM/ERP/bookkeeping, manual status updates and lost admin time.

Why it works:

- The reader can recognize the workday before deciding whether software is the answer.

Vastpakt use:

- `/voor-wie/` should contain a signal block:
  - je voert dezelfde gegevens opnieuw in;
  - Excel is het overzicht, maar niet de afspraak;
  - klantmail, offerte, factuur of bestelling vraagt telkens manuele opvolging;
  - CRM, boekhouding of mailbox tonen niet dezelfde status;
  - iemand moet blijven controleren of er een volgende stap nodig is.

What not to copy:

- Do not call this `workflow automatisering nodig`.
- Do not make automation the first promise.

### 2. Work object before technology

Source basis:

- Let's Develop talks about CRM, ERP, boekhouding, Excel, orders, forms, documents, invoices, status updates and customer portals before naming the technical layer.

Why it works:

- The operational object carries the problem. The technology becomes the route after the problem is understood.

Vastpakt use:

- Homepage project cards should be built around work objects:
  - dubbel werk tussen Excel, mail en CRM;
  - offerte, factuur of afspraak zonder duidelijke opvolging;
  - losse documenten/statussen die later slimmer of automatisch moeten kunnen.

What not to copy:

- Do not borrow `softwarelaag`, `API`, `middleware`, `schaalbaarheid`, `architectuur` as first-layer public language.

### 3. Existing systems do not need to disappear

Source basis:

- Their pages repeatedly frame the route as connecting or extending existing systems.

Why it works:

- It lowers fear that a company must replace everything before getting relief.

Vastpakt use:

- Public copy can safely say the first step does not require choosing a new tool yet.
- This belongs near the CTA or FAQ:
  - je hoeft nog niet te weten welke tool de oplossing is;
  - begin met waar het werk vandaag dubbel loopt.

What not to copy:

- Do not imply Vastpakt will implement API connections unless the specific project does that.

### 4. Case proof as old route -> new route

Source basis:

- Blokhutwinkel: planning/orders/mailbox/tickets/paper moved toward one order system.
- Brezo: orders/status moved between ERP and webshops without manual typing.

Why it works:

- The case does not need a clever claim. The old route and new route show the value.

Vastpakt use:

- `/werk/` cases should use this format:
  - Wat liep waar?
  - Waar zat dubbel werk?
  - Welk object was leidend?
  - Wat werd gebouwd, uitgesplitst of zichtbaar gemaakt?
  - Wat is bewezen en wat niet?

What not to copy:

- Do not use named client-style case confidence without permission.
- Do not invent measured time savings.

### 5. Outcome cluster: less double work, clearer status, fewer manual checks

Source basis:

- The inspected pages repeatedly connect manual transfer, duplicate input, status updates, Excel, invoices/documents and systems that do not talk.

Why it works:

- This validates the already chosen Vastpakt hierarchy:
  - minder dubbel werk;
  - duidelijkere opvolging;
  - straks slimmer, duidelijker of automatisch.

Vastpakt use:

- Add Let's Develop as a third source confirming the outcome layer in the wireframe.

What not to copy:

- Do not adopt their software-company category or future-company claim.

## Swipefile cards for the redesign

### Card 1: Signal list

- Source: workflow automation page.
- Observation: The page lists operational warning signs before a deep technical explanation.
- Abstract lesson: Let readers self-qualify by symptoms.
- Vastpakt use: `/voor-wie/` fit block.
- Risk: Becomes a checklist for automation instead of a first-look offer.

### Card 2: Object nouns carry trust

- Source: homepage and workflow pages.
- Observation: CRM, ERP, boekhouding, Excel, orders, forms, documents and status updates make the offer concrete.
- Abstract lesson: Use nouns from the workday before method words.
- Vastpakt use: hero/project cards.
- Risk: Too many nouns in the hero create noise.

### Card 3: Existing systems stay

- Source: software koppelen and workflow FAQ.
- Observation: The route often starts from systems already in use.
- Abstract lesson: Lower the fear of replacement.
- Vastpakt use: CTA support and FAQ.
- Risk: Suggesting Vastpakt itself integrates systems as the default.

### Card 4: Case as route change

- Source: Blokhutwinkel and Brezo cases.
- Observation: The before/after is expressed through where the work used to live and where it lives now.
- Abstract lesson: A case should show movement of the work object.
- Vastpakt use: `/werk/` case template.
- Risk: Claiming outcomes that belong to software implementation, not Vastpakt's first look.

### Card 5: Manual status updates

- Source: workflow automation page and Brezo case.
- Observation: Status visibility is a repeat friction, not just data entry.
- Abstract lesson: Double work is often status work.
- Vastpakt use: project card around offerte/factuur/afspraak follow-up.
- Risk: Narrowing Vastpakt to status notification tooling.

### Card 6: One small automation later

- Source: workflow FAQ says many cases can start small.
- Observation: The page reduces the perceived scale of the next step.
- Abstract lesson: Do not make the first move feel like a transformation program.
- Vastpakt use: bridge line and first-step CTA.
- Risk: Promising implementation speed without proof.

## What this changes for the wireframe

Before this source, the redesign had two main reference roles:

- CopyJay: structure and typographic homepage spine.
- Pieter: personal trust and page rhythm.

After this source, add:

- Let's Develop: outcome/use-case language for operational pain and proof.

This should change issue `#11` content, not the whole board order:

- The four-page wireframe should include a Let's Develop-inspired signal block on `/voor-wie/`.
- The homepage three cards should be closer to work outcomes than service categories.
- `/werk/` cases should use old route/new route proof.
- The CTA support should make clear that the reader does not need to know the tool or solution yet.

## What Vastpakt must not copy

- `Your future company` style.
- Software-company positioning.
- Automation-first hero.
- AI/regie category.
- `KPI`, `roadmap`, `pricing`, `implementatie`, `schaalbaarheid`, `API`, `middleware`, `architectuur` as first-layer language.
- Measured case claims unless Vastpakt has its own proof.
- Named client logos or case confidence without permission.
- Dutch MKB phrasing if the site must stay Flemish/KMO-readable.

## Open questions

- Which three homepage project cards best map to the outcome layer?
- Should `/voor-wie/` have a visible signal checklist above or below the first CTA?
- Which existing Vastpakt proof cases can use old route/new route without overclaiming?
- Is `minder handmatig controleren` strong enough as a third outcome, or should it remain supporting language under `duidelijkere opvolging`?

## Decision

Add Let's Develop as a competitor source for the redesign.

Do not replace the CopyJay/Pieter architecture.

Use Let's Develop to sharpen:

```text
workday signs -> work object -> old route -> possible new route -> proof boundary
```
