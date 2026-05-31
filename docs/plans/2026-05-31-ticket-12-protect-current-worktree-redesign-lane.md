# Ticket 12 - protect current worktree and create redesign lane

Datum: 2026-05-31

Status: interne uitvoeringsnotitie voor GitHub issue `#12 - 01 - Protect current worktree and create redesign branch`. Geen publieke copy. Geen homepage-build. Geen commit, push, deploy, DNS, analytics, ads, contactroute of lead-log wijziging.

## Verdict

Verdict: `#12` is het juiste ticket om nu te starten.

Waarom:

- `docs/plans/2026-05-31-redesign-execution-control.md` noemt `#12 - 01` als volgende echte uitvoeringsstap.
- GitHub Project `Vastpakt Homepage Redesign` toont `#11 - 00` als `In Progress`, `#12 - 01` als `Todo`, daarna `#16 - 02` en `#13 - 03`.
- GitHub issue `#12` is open en vraagt expliciet om de huidige dirty worktree te documenteren, bestaande changes te bewaren en een duidelijke branch/worktree-lane te kiezen.
- De lokale branch was `main` en `git status --short` was dirty voordat deze ticketnotitie werd gemaakt.

Zekerheid: hoog. De enige nuance is dat `#11` inhoudelijk lokaal bestaat, maar nog niet in branch/commit/PR zit. Daarom blijft `#11` terecht `In Progress` en moet `#12` eerst de lane beschermen.

## Git context

Repo:

```text
ChristopheAI/vastpakt
```

Remote:

```text
origin  https://github.com/ChristopheAI/vastpakt.git (fetch)
origin  https://github.com/ChristopheAI/vastpakt.git (push)
```

Startbranch in de huidige werkmap:

```text
main
```

Nieuwe redesign-lane:

```text
branch: codex/homepage-redesign-shell
worktree: /Users/christophe/.config/superpowers/worktrees/Vastpakt/homepage-redesign-shell
```

De nieuwe worktree is buiten de repo aangemaakt. Daardoor hoeft `.gitignore` niet aangepast te worden en kan de worktree niet per ongeluk tracked worden.

## Dirty worktree snapshot

Snapshot van `git status --short` in `/Users/christophe/Documents/Vastpakt`, genomen voor deze ticketnotitie werd toegevoegd:

```text
 M assets/brand/vastpakt-og-preview.svg
 M docs/copy/2026-05-27-vastpakt-homepage-copy-classification.md
 M docs/experiments/homepage-experiments.tsv
 M docs/operations/2026-05-30-first-lead-response-runbook.md
 M rules.md
 M script.js
 M workflows/README.md
?? assets/brand/exports/
?? assets/brand/linkedin-cover.svg
?? context.md
?? docs/brand/
?? docs/copy/2026-05-30-offerte-opvolging-page-draft-v1.md
?? docs/operations/2026-05-30-meta-ad-dubbel-werk-v1-package.md
?? docs/operations/2026-05-30-round-1-codex-operator-loop.md
?? docs/operations/2026-05-30-three-real-situations-validation-loop.md
?? docs/plans/
?? docs/research/2026-05-29-loop-109-person-led-promise-weakness.md
?? docs/research/2026-05-29-loop-111-action-after-first-response-weakness.md
?? docs/research/2026-05-29-loop-113-check-section-weight-weakness.md
?? docs/research/2026-05-29-loop-115-route-duplication-after-local-cta.md
?? docs/research/2026-05-29-loop-117-contact-exchange-repetition-weakness.md
?? docs/research/2026-05-29-loop-120-first-contact-friction-intent-research.md
?? docs/research/2026-05-29-loop-121-empty-textarea-friction-research.md
?? docs/research/2026-05-29-loop-123-hero-card-label-market-language.md
?? docs/research/2026-05-30-case-alignment-examples-intro.md
?? docs/research/2026-05-30-current-source-content-brief-offerte-opvolging.md
?? docs/research/2026-05-30-mailboxen-excel-deliverable.md
?? docs/research/2026-05-30-operator-language-h1-dubbel-werk.md
?? docs/research/2026-05-30-operator-language-handmatig-controleren.md
?? docs/research/2026-05-30-operator-language-herinnering.md
?? docs/research/2026-05-30-operator-language-hero-question-seintje.md
?? docs/research/2026-05-30-operator-language-verschillende-plekken.md
?? docs/research/2026-05-30-seo-expert-startlist-for-vastpakt.md
?? docs/research/2026-05-30-serp-source-language-offerte-opvolging.md
?? docs/research/2026-05-30-topical-map-opvolging-kmo-v1.md
?? docs/research/2026-05-30-werkplaatsvoorraad-webapp-outcome.md
?? docs/research/2026-05-30-word-rapport-webapp-outcome.md
?? docs/research/2026-05-31-competitor-copy-transfer-map-v1.md
?? docs/research/2026-05-31-copywriter-homepage-structure-map.md
?? docs/research/2026-05-31-exa-homepage-redesign-signals.md
?? docs/research/2026-05-31-flowlift-outcome-correction.md
?? docs/research/2026-05-31-krits-competitor-outcome-language.md
?? docs/research/2026-05-31-letsdevelop-competitor-outcome-language.md
?? docs/research/2026-05-31-pieter-van-leuven-copyresearch.md
?? docs/research/2026-05-31-practitioner-redesign-sequence-check.md
?? docs/research/fb-validation-workshop-2026-05-28/
?? preferences.md
?? vastpakt-linkedin-post-1-hero.png
```

Na deze ticketnotitie komt daar dit bestand bij:

```text
docs/plans/2026-05-31-ticket-12-protect-current-worktree-redesign-lane.md
```

## Bestaande user/local changes

Onderstaande changes bestonden al voor ticket `#12`. Ik claim geen exacte auteur per bestand; de veilige aanname is: niet door dit ticket gemaakt, dus niet aanpassen of terugdraaien.

- Publieke of semi-publieke surface: `script.js`, `assets/brand/vastpakt-og-preview.svg`, `assets/brand/linkedin-cover.svg`, `assets/brand/exports/`, `vastpakt-linkedin-post-1-hero.png`.
- Projectregels en werkafspraken: `rules.md`, `context.md`, `preferences.md`, `workflows/README.md`.
- Operationele validatie en leadproces: `docs/operations/2026-05-30-first-lead-response-runbook.md`, `docs/operations/2026-05-30-three-real-situations-validation-loop.md`, `docs/operations/2026-05-30-round-1-codex-operator-loop.md`, `docs/operations/2026-05-30-meta-ad-dubbel-werk-v1-package.md`.
- Brand/documentatie: `docs/brand/`.
- Copy/research/workshopmateriaal: `docs/copy/`, `docs/research/`, inclusief de FB-validation workshopmap.

## Recente Codex-doc changes

Deze files lijken inhoudelijk recente Codex-redesign of validatie-documentatie te zijn en zijn relevant als bronmateriaal, maar ze zijn nog niet netjes in de redesign-lane opgenomen:

- `docs/plans/2026-05-31-source-first-four-page-wireframe-map-v1.md`
- `docs/plans/2026-05-31-redesign-execution-control.md`
- `docs/plans/2026-05-31-github-spec-new-homepage-redesign.md`
- `docs/plans/2026-05-31-vastpakt-homepage-herontwerpbrief-v1.md`
- `docs/plans/2026-05-31-vastpakt-visual-design-brief-v1.md`
- `docs/plans/2026-05-31-homepage-redesign-decision-layer.md`
- `docs/research/2026-05-31-competitor-copy-transfer-map-v1.md`
- `docs/research/2026-05-31-copywriter-homepage-structure-map.md`
- `docs/research/2026-05-31-flowlift-outcome-correction.md`
- `docs/research/2026-05-31-krits-competitor-outcome-language.md`
- `docs/research/2026-05-31-letsdevelop-competitor-outcome-language.md`
- `docs/research/2026-05-31-pieter-van-leuven-copyresearch.md`
- `docs/research/2026-05-31-practitioner-redesign-sequence-check.md`
- `docs/copy/2026-05-27-vastpakt-homepage-copy-classification.md`
- `docs/experiments/homepage-experiments.tsv`

## Relevantie voor redesign

Hoort later waarschijnlijk wel in de redesign-lane, selectief en bewust:

- `docs/plans/2026-05-31-source-first-four-page-wireframe-map-v1.md`
- `docs/plans/2026-05-31-redesign-execution-control.md`
- `docs/plans/2026-05-31-github-spec-new-homepage-redesign.md`
- `docs/plans/2026-05-31-vastpakt-homepage-herontwerpbrief-v1.md`
- `docs/plans/2026-05-31-vastpakt-visual-design-brief-v1.md`
- `docs/research/2026-05-31-competitor-copy-transfer-map-v1.md`
- `docs/research/2026-05-31-copywriter-homepage-structure-map.md`
- `docs/research/2026-05-31-flowlift-outcome-correction.md`
- `docs/research/2026-05-31-krits-competitor-outcome-language.md`
- `docs/research/2026-05-31-letsdevelop-competitor-outcome-language.md`
- `docs/research/2026-05-31-practitioner-redesign-sequence-check.md`
- copy-classification en experiments alleen waar ze publieke copykeuzes van de redesign verklaren.

Hoort niet automatisch in de redesign-lane:

- brand/social exports tenzij ticket `#14` assets expliciet vraagt;
- meta-ad package en advertentie-operatie;
- FB-workshop raw/transcript/buildmateriaal;
- lead-log of private leadgegevens;
- publieke `script.js`, `index.html`, `styles.css`, routes, `sitemap.xml`, `llms.txt`, `api/contact.js` voordat `#16`, `#13` en latere buildtickets daar expliciet om vragen.

## Bestanden die niet mogen worden geraakt in deze fase

Niet aanraken tijdens `#12`:

- `index.html`
- `styles.css`
- `script.js`
- `api/contact.js`
- `google-analytics.js`
- `metrics.js`
- `vercel.json`
- `sitemap.xml`
- `robots.txt`
- `llms.txt`
- bestaande publieke routebestanden onder `offerte-opvolging/`, `facturatie-bewijs/`, `dubbel-werk/`, `over-vastpakt/`, `privacy/`
- `docs/operations/lead-log.md`
- brand/social image exports
- advertentie-, analytics-, DNS-, deployment- of contactroutebestanden

Let op: `script.js` is al dirty voor deze taak. Dat is precies waarom de nieuwe lane niet in de huidige werkmap mag starten.

## Lane-keuze

Gekozen lane: aparte globale git worktree.

Command uitgevoerd:

```bash
mkdir -p /Users/christophe/.config/superpowers/worktrees/Vastpakt
git worktree add /Users/christophe/.config/superpowers/worktrees/Vastpakt/homepage-redesign-shell -b codex/homepage-redesign-shell
```

Waarom niet branch switchen in de huidige werkmap:

- de huidige worktree bevat veel bestaande dirty changes;
- een branch switch zou die dirty state meenemen;
- toekomstige commits zouden dan makkelijk publieke, brand-, operatie- of researchwijzigingen mengen met redesign-implementatie.

Waarom niet `.worktrees/` of `worktrees/` in de repo:

- er bestaat geen `.worktrees/` of `worktrees/` directory;
- er is geen `CLAUDE.md`-voorkeur gevonden;
- `.gitignore` negeert `.worktrees` of `worktrees` niet;
- `.gitignore` aanpassen en committen is buiten scope van `#12`.

Waarom globale worktree:

- staat buiten de repo en kan niet per ongeluk tracked worden;
- laat de huidige dirty worktree ongemoeid;
- geeft een cleane branch voor latere gecontroleerde overname van relevante docs en buildchanges;
- respecteert het verbod op commit, push en publieke buildwijzigingen.

Baseline van de nieuwe worktree:

```text
git status --short
```

had geen output in:

```text
/Users/christophe/.config/superpowers/worktrees/Vastpakt/homepage-redesign-shell
```

Er is geen `package.json`, `Cargo.toml`, `requirements.txt`, `pyproject.toml` of `go.mod` in de worktree-root gevonden, dus er was geen setup/install-stap.

## GitHub status

Issue:

```text
#12 - 01 - Protect current worktree and create redesign branch
state: OPEN
status on project: Todo
url: https://github.com/ChristopheAI/vastpakt/issues/12
```

Projectvolgorde:

```text
#11 - 00 - Source-first four-page wireframe map: In Progress
#12 - 01 - Protect current worktree and create redesign branch: Todo
#16 - 02 - Inventory URLs, metadata and SEO risk: Todo
#13 - 03 - Define visual system and responsive layout foundation: Todo
```

Boardregel blijft:

```text
Issue-nummers zijn niet de volgorde. Titelprefix is de volgorde.
```

## Exacte volgende stap na #12

Volgende ticket:

```text
#16 - 02 - Inventory URLs, metadata and SEO risk
```

Werk vanaf:

```text
/Users/christophe/.config/superpowers/worktrees/Vastpakt/homepage-redesign-shell
```

Eerste actie in `#16`:

```text
Maak een lichte URL/metadata/SEO-risico-inventaris voordat publieke routes, sitemap, metadata of site shell veranderen.
```

Voor `#16` of `#13` publieke buildwijzigingen starten, moet de redesign-lane selectief de relevante interne bronbestanden krijgen of daar expliciet naar verwijzen. Start geen HTML/CSS/JS-build voor `#16` en `#13` klaar zijn.
