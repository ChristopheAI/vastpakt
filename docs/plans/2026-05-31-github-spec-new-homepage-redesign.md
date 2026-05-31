# GitHub spec: build the new Vastpakt homepage and site shell

Date: 2026-05-31

Status: GitHub-ready implementation specification. This is not public copy and not a live website change.

Repository: `ChristopheAI/vastpakt`

Suggested GitHub issue title:

```text
Build new Vastpakt homepage structure around minder dubbel werk outcome
```

Suggested labels:

```text
homepage
redesign
spec-ready
source-first-copy
```

## Context

Vastpakt is moving into a real homepage redesign. This is not a polish pass on the current homepage.

The new site direction has been decided from these internal source files:

- `docs/plans/2026-05-31-vastpakt-homepage-herontwerpbrief-v1.md`
- `docs/plans/2026-05-31-vastpakt-visual-design-brief-v1.md`
- `docs/research/2026-05-31-copywriter-homepage-structure-map.md`
- `docs/research/2026-05-31-flowlift-outcome-correction.md`
- `docs/research/2026-05-31-letsdevelop-competitor-outcome-language.md`
- `docs/research/2026-05-31-krits-competitor-outcome-language.md`
- `docs/copy/2026-05-27-vastpakt-homepage-copy-classification.md`
- `docs/experiments/homepage-experiments.tsv`
- `docs/research/2026-05-31-practitioner-redesign-sequence-check.md`
- `rules.md`
- `AGENTS.md`
- `context.md`
- `preferences.md`

External structure references:

- CopyJay homepage: `https://copyjay.com/`
- Pieter Van Leuven homepage: `https://www.pietervanleuven.com/`
- Pieter Van Leuven `/voor-wie`: `https://www.pietervanleuven.com/voor-wie`
- Pieter Van Leuven `/werk`: `https://www.pietervanleuven.com/werk`
- Pieter Van Leuven `/over-mij`: `https://www.pietervanleuven.com/over-mij`
- Let's Develop homepage: `https://www.letsdevelop.tech/`
- Let's Develop workflow automation: `https://www.letsdevelop.tech/applicatieontwikkeling/workflow-automatisering/`
- Let's Develop cases: `https://www.letsdevelop.tech/klantcases/`
- Krits homepage: `https://krits.be/`
- Krits over page: `https://krits.be/over-krits`
- Krits solutions and cases: `https://krits.be/oplossingen`, `https://krits.be/projecten`

Competitor/outcome correction:

- Flowlift shows the buyer outcome more clearly than the old Vastpakt notes did: less double work, clearer follow-up, less manual checking, less loose status/proof/action, and work that can become smarter or automatic.
- Let's Develop strengthens the same outcome layer through concrete work objects: Excel, CRM, ERP, boekhouding, orders, forms, documents, invoices, status updates, manual transfer, duplicate input and existing systems that do not talk.
- Krits confirms the same buyer outcome from a Flemish software/AI angle: loose tools and spreadsheets, manual work, disconnected systems, first understand the process, then build. It is also a category-risk source: Vastpakt must not become a smaller AI/software builder pitch.
- Vastpakt is not a pre-step before Flowlift or Axxit.
- `Zichtbaar maken` is the Vastpakt route/mechanism, not the homepage outcome.

## Product-to-system check

### 1. Wat probeer ik te bouwen?

Build a new Vastpakt homepage and site shell that leads with the chosen outcome:

```text
minder dubbel werk
-> duidelijkere opvolging
-> wat straks slimmer, duidelijker of automatisch kan
```

The homepage uses CopyJay as the structural spine:

```text
typographic hero
-> bridge line
-> project cards
-> method/proof/contact rhythm
```

The homepage uses Pieter Van Leuven as the personal trust layer:

```text
Hoi, ik ben Christophe
-> why block
-> closing CTA
-> contact/footer
```

This is not a software/automation landing page, not a consultancy pitch, and not a service menu.

### 2. Hoe moet dit systeem werken?

The visitor should understand, in this order:

1. This is about my workday.
2. This is about concrete work objects: mail, offerte, Excel, CRM, facturatie, afspraak, bewijs, status, eigenaar, volgende stap.
3. The desired outcome is less double work and clearer follow-up.
4. I do not need to know the solution yet.
5. I do not need to send a file first.
6. I can describe one concrete situation.
7. Christophe sends a short written first look within 24 hours, or an honest no.

The site should have these first-level routes:

```text
/
/voor-wie/
/werk/
/over-mij/
```

Keep existing public routes working unless deliberately changed in a later SEO/content task:

```text
/offerte-opvolging/
/facturatie-bewijs/
/dubbel-werk/
/over-vastpakt/
/privacy/
```

### 3. Welke componenten heb ik nodig?

Homepage components:

- top navigation with `Voor wie`, `Werk`, `Over mij`;
- CopyJay-style typographic hero;
- bridge line:

```text
Ik bouw de brug tussen je dubbel werk vandaag
en wat straks slimmer, duidelijker of automatisch kan.
```

- low-friction CTA near hero;
- Pieter-style person block: `Hoi, ik ben Christophe`;
- why block: why Christophe looks at today's double work first;
- three project cards, not a broad services menu;
- proof preview that routes to `/werk/`;
- closing CTA;
- contact/footer.

Subpage components:

- `/voor-wie/`: qualification page around who this is for, which situations fit, and what does not fit.
- `/werk/`: proof/case page with real work objects and case-specific outcomes.
- `/over-mij/`: full Christophe page based on Pieter's structure: personal world, drive, curiosity, conversations with real people, concrete subjects, specialities, limits, contact.

Technical components:

- static HTML pages, matching the current repo pattern;
- shared `styles.css`;
- existing `script.js` only where interaction is still needed;
- existing contact endpoint `/api/contact` unchanged;
- metadata and sitemap updates for new routes;
- no analytics, deployment, DNS, or contact-route changes in this issue.

### 4. Waar moet deze logica leven?

Implementation files:

- `index.html`
- `voor-wie/index.html`
- `werk/index.html`
- `over-mij/index.html`
- `styles.css`
- `script.js` only if needed
- `sitemap.xml`
- `llms.txt` if the public site map changes enough to require it

Planning and source files that must remain the reference:

- `docs/plans/2026-05-31-vastpakt-homepage-herontwerpbrief-v1.md`
- `docs/plans/2026-05-31-vastpakt-visual-design-brief-v1.md`
- `docs/research/2026-05-31-flowlift-outcome-correction.md`
- `docs/research/2026-05-31-letsdevelop-competitor-outcome-language.md`
- `docs/research/2026-05-31-krits-competitor-outcome-language.md`
- `docs/research/2026-05-31-copywriter-homepage-structure-map.md`
- `docs/copy/2026-05-27-vastpakt-homepage-copy-classification.md`

Do not treat this GitHub spec as final public copy. Public lines still need source-first classification before shipping.

### 5. Waarom breekt dit ding?

This redesign breaks if:

- the homepage starts with method instead of outcome;
- `zichtbaar maken` becomes the end promise again;
- `automatisch` becomes the first promise;
- the page reads like a small Flowlift/Axxit pre-audit;
- the CopyJay/Pieter references are copied literally instead of structurally translated;
- the Let's Develop reference turns the site into a software/automation offer instead of an outcome/use-case language source;
- the Krits reference pulls Vastpakt into AI-first, maatwerksoftware, build-speed, pricing or quantified-savings language;
- the person block becomes biography instead of trust tied to work;
- project cards become a broad services menu;
- proof/cases claim general outcomes from one case;
- mobile pushes the CTA, bridge line, or person proof too far down;
- `Eerste Zicht`, `vastpakken`, `situatiekaart`, or other internal terms carry the first layer;
- contact feels like file upload, discovery call, consultancy intake, or software quote request.

### 6. Verdict

Verdict: bouwen

Build the spec in phases, starting with a wireframe-level implementation branch before polishing final public copy.

## Implementation phases

### Phase 0: Pre-build control

- [ ] Create the missing four-page wireframe/content map before implementation starts.
- [ ] Add the Let's Develop source note to the wireframe inputs as the operational outcome/use-case layer, not as a visual blueprint.
- [ ] Add the Krits source note as a close outcome/category competitor and use it to keep Vastpakt distinct from AI/software-builder positioning.
- [ ] Document the dirty worktree and choose a clean branch/worktree lane before code changes.
- [ ] Inventory current public URLs, metadata and SEO risk before changing site structure.
- [ ] Define the visual/layout foundation before individual homepage blocks invent their own CSS.
- [ ] Decide and prepare real Christophe/page assets before building the person block and `/over-mij/`.
- [ ] Run a proof/privacy pass before building `/werk/` cases.

### Phase 1: Build a static site shell

- [ ] Create `/voor-wie/`, `/werk/`, and `/over-mij/` directories with `index.html`.
- [ ] Keep the existing homepage available at `/` while replacing its structure in one controlled branch.
- [ ] Add top navigation with `Voor wie`, `Werk`, `Over mij`.
- [ ] Keep contact endpoint and form behavior unchanged.
- [ ] Update internal links so the four-page structure is navigable.
- [ ] Preserve existing SEO/content routes.

### Phase 2: Homepage structure

- [ ] Build a CopyJay-style typographic hero: large text, whitespace, accent words, no heavy hero card.
- [ ] Lead with `minder dubbel werk` as the outcome hierarchy.
- [ ] Place the approved bridge line directly under the hero proposition.
- [ ] Add a low-friction CTA close to the bridge line.
- [ ] Add a Pieter-style `Hoi, ik ben Christophe` person block.
- [ ] Add a why block after the person block.
- [ ] Add three project cards with one central CTA.
- [ ] Add proof preview that links to `/werk/`.
- [ ] Add closing CTA and contact/footer.

### Phase 3: Subpage structure

- [ ] `/voor-wie/`: explain fit through concrete work situations, not abstract sectors first.
- [ ] `/werk/`: move proof/cases into a page where each case has before-state, work object, route, outcome, boundary.
- [ ] `/over-mij/`: use Pieter's page architecture for Christophe, but only with Christophe's real material.
- [ ] Add clear back-routes between subpages and homepage.

### Phase 4: Source-first copy pass

- [ ] Classify every important public line as captured sentence, light edit, Vastpakt translation, synthesis, or unproven.
- [ ] Keep `minder dubbel werk` as outcome hierarchy, not automatically final H1.
- [ ] Keep `duidelijkere opvolging` as supporting outcome.
- [ ] Keep `slimmer, duidelijker of automatisch` as bridge outcome, not a guarantee.
- [ ] Remove or weaken public lines that cannot point to a source, work object, user-approved wording, or real case.
- [ ] Avoid public internal words: `research`, `source-backed`, `Swipefile`, `agent`, `proof mechanism`, `copy move`, `ordinary sentence`, `tijdlek`, `AI-score`, `besparingsbelofte`.

### Phase 5: Verification

- [ ] Run `git diff --check`.
- [ ] Run `node --check script.js`.
- [ ] Serve locally and inspect desktop and mobile.
- [ ] Verify no horizontal overflow.
- [ ] Verify first viewport shows outcome, bridge, route, and CTA without crowding.
- [ ] Verify contact route still works and does not imply file upload.
- [ ] Verify no public copy leaks internal method language.
- [ ] Verify new routes appear in `sitemap.xml`.

## Acceptance criteria

The build is acceptable when:

- [ ] A four-page wireframe/content map exists before implementation starts.
- [ ] Implementation happens on a clear branch/worktree lane and unrelated local changes are preserved.
- [ ] Current URLs, metadata, sitemap implications and redirect needs are inventoried before build.
- [ ] Visual/layout foundation exists before hero/person/cards are polished.
- [ ] Christophe/page assets are selected with responsive and alt-text plan.
- [ ] `/werk/` case material has proof/privacy boundaries before public case build.
- [ ] `/` has the new homepage structure: navigation, typographic hero, bridge line, person block, why block, project cards, proof preview, closing CTA, footer.
- [ ] `/voor-wie/`, `/werk/`, and `/over-mij/` exist and are reachable from the homepage.
- [ ] The first homepage outcome is visibly `minder dubbel werk`, supported by `duidelijkere opvolging`.
- [ ] The approved bridge line appears in the hero area or directly under the main proposition.
- [ ] The page does not position Vastpakt as a pre-step before Flowlift/Axxit.
- [ ] The page does not lead with AI, automation, software, consultancy, ROI, KPI, or tool implementation.
- [ ] `zichtbaar maken` appears only as route/method, not as the final outcome.
- [ ] Project cards are work-situation entries, not a service menu.
- [ ] Person block is substantial and trust-building, not a tiny bio.
- [ ] `/werk/` holds proof/cases; the homepage does not become a full proof archive.
- [ ] `/over-mij/` holds the full Christophe page and contact route.
- [ ] Existing contact endpoint `/api/contact` is unchanged.
- [ ] Existing routes for SEO/content pages are not broken.
- [ ] Desktop and mobile render without overlap, clipped text, or horizontal overflow.

## Non-goals

- Do not create a new brand identity.
- Do not copy CopyJay's exact text, colors, logo, icons, or category.
- Do not copy Pieter's exact text, personal details, photo treatment, jokes, or copywriter role.
- Do not add ads, analytics, tracking, deployment, DNS, lead-log changes, or contact endpoint changes.
- Do not make ROI, time-saving, conversion, KPI, or revenue claims unless a separate source/proof task approves them.
- Do not turn this into a broad automation/software website.

## Open questions before final copy

- Which exact public H1 wins after wireframe review?
- Which three project cards should ship first?
- Which Christophe personal material is true enough for `/over-mij/`?
- Which contact details may be publicly prominent in the footer?
- Which case outcomes on `/werk/` can be shown without overclaiming or exposing private client details?

## Suggested branch and PR

Suggested branch:

```text
codex/new-homepage-redesign-spec
```

Suggested PR title:

```text
Build new Vastpakt homepage and site shell
```

Suggested PR checklist:

- [ ] I read `rules.md`, `AGENTS.md`, `context.md`, and `preferences.md`.
- [ ] I preserved unrelated existing worktree changes.
- [ ] I started from the four-page wireframe/content map.
- [ ] I respected the proof/privacy pass for `/werk/` cases.
- [ ] I did not change contact endpoint, analytics, deployment, DNS, ads, or lead-log.
- [ ] I ran `git diff --check`.
- [ ] I ran `node --check script.js`.
- [ ] I verified desktop and mobile rendering.
- [ ] I updated `docs/copy/2026-05-27-vastpakt-homepage-copy-classification.md` and `docs/experiments/homepage-experiments.tsv` for public copy changes.
