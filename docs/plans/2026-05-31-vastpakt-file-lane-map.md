# Vastpakt file lane map

Datum: 2026-05-31

Status: interne repo-hygiene en branch/worktree-beslissing. Geen publieke copy. Geen redesign-build. Geen commit/push/deploy.

Doel: bepalen welke documenten en publieke bestanden in welke lane thuishoren, zodat de redesign branch niet alles uit de huidige dirty worktree meesleept.

## 1. Wat probeer ik te bouwen?

Een file-lane kaart voor Vastpakt.

Niet: de homepage bouwen, files verplaatsen, oude research opruimen, commits maken of publieke copy wijzigen.

Wel:

- beslissen welke filegroepen naar de redesign-lane mogen;
- benoemen welke filegroepen op `main`/productie moeten blijven;
- isoleren wat operations, ads, brand/social of archief is;
- een importvolgorde geven voor de clean worktree.

## 2. Hoe moet dit systeem werken?

Elke file krijgt een primaire lane:

1. `production-main`: live statische site, contactroute, deployment en security.
2. `redesign-lane`: bron- en buildmateriaal voor het nieuwe vierpagina-homepageherontwerp.
3. `validation-ops`: leadbehandeling, eerste-reactieproces, validatielogica en ad/experiment-operatie.
4. `brand-social`: merkregels, logo's, LinkedIn/social exports en visuele assetproductie.
5. `research-archive`: ruwe of zware bronmaterialen, transcriptmaps, workshopdownloads en brede copy/research loops.
6. `codex-process`: regels, checklists, workflows en handoff-prompts voor Codex-werk.

Een file mag later naar een andere lane gekopieerd worden, maar niet stilzwijgend. De default is: een file blijft in zijn primaire lane tenzij een ticket expliciet zegt waarom ze nodig is.

## 3. Welke componenten heb ik nodig?

- Een lane-definitie met doel en verboden.
- Een lijst van public files die beschermd blijven.
- Een lijst van redesign-bronfiles die naar de clean branch mogen.
- Een lijst van dirty files die niet automatisch mee mogen.
- Een importvolgorde voor de clean worktree.
- Een stopregel voor zware/raw bestanden.

## 4. Waar moet deze logica leven?

Deze logica leeft hier:

```text
docs/plans/2026-05-31-vastpakt-file-lane-map.md
```

De clean redesign worktree leeft hier:

```text
/Users/christophe/.config/superpowers/worktrees/Vastpakt/homepage-redesign-shell
```

De huidige dirty worktree blijft hier:

```text
/Users/christophe/Documents/Vastpakt
```

## 5. Waarom breekt dit ding?

Dit breekt als:

- `script.js`, brand assets, operations-docs, research en redesign-plannen samen in één PR belanden;
- ruwe workshopvideo's of zware bronbestanden in een normale site branch worden opgenomen;
- `Eerste Zicht` of oude homepage-copy door de redesign heen blijft lekken zonder bron/proof-besluit;
- ad/lead-operatie vermengd wordt met homepage-architectuur;
- de clean redesign branch start zonder de juiste bronfiles en dan opnieuw uit geheugen of losse notities wordt gebouwd;
- public files worden aangepast voor `#16` en `#13` klaar zijn.

## 6. Verdict

Verdict: bouwen

Niet bouwen als website. Wel bouwen als lane-kaart en importcontract.

## Lane A: production-main

Doel: live site en productiegedrag beschermen.

Hoort hier primair:

```text
index.html
styles.css
script.js
404.html
offerte-opvolging/index.html
facturatie-bewijs/index.html
dubbel-werk/index.html
over-vastpakt/index.html
privacy/index.html
api/contact.js
google-analytics.js
metrics.js
vercel.json
sitemap.xml
robots.txt
llms.txt
favicon.svg
.well-known/security.txt
assets/images/
assets/brand/logo-lockup.svg
assets/brand/logo-mark-small.svg
assets/brand/logo-mark.svg
assets/brand/vastpakt-og-preview.svg
README.md
DESIGN.md
```

Regels:

- Niet wijzigen tijdens housekeeping.
- Niet wijzigen voor `#16` URL/metadata/SEO-inventaris klaar is.
- Niet wijzigen voor `#13` visual foundation klaar is, behalve als een expliciet later ticket dat vraagt.
- `api/contact.js`, analytics, metrics, Vercel en DNS/deployfiles alleen met expliciete approval.

Huidige dirty file in deze lane:

```text
script.js
assets/brand/vastpakt-og-preview.svg
```

Besluit:

- Niet meenemen in de redesign-lane zonder aparte review.
- `script.js` is vooral risicovol omdat het public behavior verandert.

## Lane B: redesign-lane

Doel: gecontroleerde bron- en implementatielane voor `Vastpakt Homepage Redesign`.

Branch/worktree:

```text
codex/homepage-redesign-shell
/Users/christophe/.config/superpowers/worktrees/Vastpakt/homepage-redesign-shell
```

Mag vroeg naar deze lane:

```text
docs/plans/2026-05-31-redesign-execution-control.md
docs/plans/2026-05-31-ticket-12-protect-current-worktree-redesign-lane.md
docs/plans/2026-05-31-vastpakt-file-lane-map.md
docs/plans/2026-05-31-source-first-four-page-wireframe-map-v1.md
docs/plans/2026-05-31-github-spec-new-homepage-redesign.md
docs/plans/2026-05-31-vastpakt-homepage-herontwerpbrief-v1.md
docs/plans/2026-05-31-vastpakt-visual-design-brief-v1.md
docs/plans/2026-05-31-homepage-redesign-decision-layer.md
```

Mag mee als bronlaag, maar alleen selectief:

```text
docs/research/2026-05-31-competitor-copy-transfer-map-v1.md
docs/research/2026-05-31-copywriter-homepage-structure-map.md
docs/research/2026-05-31-flowlift-outcome-correction.md
docs/research/2026-05-31-krits-competitor-outcome-language.md
docs/research/2026-05-31-letsdevelop-competitor-outcome-language.md
docs/research/2026-05-31-practitioner-redesign-sequence-check.md
docs/research/2026-05-31-exa-homepage-redesign-signals.md
docs/research/2026-05-31-pieter-van-leuven-copyresearch.md
docs/copy/2026-05-27-vastpakt-homepage-copy-classification.md
docs/experiments/homepage-experiments.tsv
```

Mag later naar deze lane wanneer het ticket erom vraagt:

```text
index.html
styles.css
script.js
voor-wie/index.html
werk/index.html
over-mij/index.html
sitemap.xml
llms.txt
robots.txt
404.html
assets/images/
```

Niet automatisch:

```text
api/contact.js
google-analytics.js
metrics.js
vercel.json
docs/operations/lead-log.md
docs/operations/2026-05-30-meta-ad-dubbel-werk-v1-package.md
assets/brand/exports/
vastpakt-linkedin-post-1-hero.png
docs/research/fb-validation-workshop-2026-05-28/
```

## Lane C: validation-ops

Doel: bewaken of de huidige belofte werkt: een echte KMO-persoon beschrijft één concrete situatie en krijgt binnen 24 uur een korte eerste blik of eerlijk nee.

Hoort hier:

```text
docs/operations/2026-05-30-first-lead-response-runbook.md
docs/operations/2026-05-30-three-real-situations-validation-loop.md
docs/operations/2026-05-30-round-1-codex-operator-loop.md
docs/operations/lead-log.md
```

Twijfelgeval:

```text
docs/operations/2026-05-30-meta-ad-dubbel-werk-v1-package.md
```

Besluit:

- Dit is geen redesign-bronfile.
- Het hoort in een ads/validation lane, niet in een homepage build branch.
- `lead-log.md` mag niet in redesign-commits belanden zonder expliciete en privacy-veilige reden.

## Lane D: brand-social

Doel: merkdocumentatie en social/export assets beheren.

Hoort hier:

```text
docs/brand/
assets/brand/linkedin-cover.svg
assets/brand/exports/
vastpakt-linkedin-post-1-hero.png
tmp/linkedin-assets/
tmp/*brand*
tmp/*logo*
tmp/linkedin-cover-export.html
tmp/linkedin-post-export.html
```

Besluit:

- Niet mengen met homepage-redesign, tenzij ticket `#14 - Select and prepare Christophe/page assets` expliciet een asset kiest.
- `assets/brand/exports/` is klein genoeg om later bewust te committen, maar niet als bijvangst.
- `tmp/` blijft tijdelijk en hoort niet in de redesign branch.

## Lane E: research-archive

Doel: bronmateriaal bewaren zonder de website-PR te vervuilen.

Hoort hier:

```text
docs/research/2026-05-26-*.md
docs/research/2026-05-27-*.md
docs/research/2026-05-28-*.md
docs/research/2026-05-29-*.md
docs/research/2026-05-30-*.md
docs/research/fb-validation-workshop-2026-05-28/
docs/superpowers/specs/
docs/superpowers/plans/
tmp/*-extracted.txt
```

Belangrijke observatie:

```text
docs/research/fb-validation-workshop-2026-05-28/ is ongeveer 543 MB
```

Daarin zitten o.a.:

```text
480M docs/research/fb-validation-workshop-2026-05-28/downloaded/GMT20260528-150930_Recording_1832x982.mp4
61M  docs/research/fb-validation-workshop-2026-05-28/downloaded/GMT20260528-150930_Recording.m4a
```

Besluit:

- Niet opnemen in redesign-lane.
- Niet opnemen in normale website-PR.
- Als dit bewaard moet worden, kies apart: git-lfs, externe opslag, of lokale archive-only map.
- De `study/*.md` samenvattingen kunnen later selectief als bronmateriaal dienen; de raw media niet.

## Lane F: codex-process

Doel: regels, checklists en herbruikbare workflows beheren.

Hoort hier:

```text
AGENTS.md
rules.md
context.md
preferences.md
reviews/
workflows/
docs/autoresearch-program.md
```

Besluit:

- `rules.md`, `context.md`, `preferences.md` zijn belangrijk voor Codex-gedrag, maar geen redesign-public-files.
- Ze kunnen samen in een aparte housekeeping commit of als ondersteunende docs in de redesign branch, maar niet gemengd met HTML/CSS.
- `workflows/README.md` is momenteel dirty; niet meenemen in de homepage build zonder aparte reden.

## Concrete importvolgorde voor de clean redesign worktree

Werk in:

```text
/Users/christophe/.config/superpowers/worktrees/Vastpakt/homepage-redesign-shell
```

Stap 1: importeer alleen lane-map en control docs:

```text
docs/plans/2026-05-31-redesign-execution-control.md
docs/plans/2026-05-31-ticket-12-protect-current-worktree-redesign-lane.md
docs/plans/2026-05-31-vastpakt-file-lane-map.md
```

Stap 2: importeer de directe redesign source docs:

```text
docs/plans/2026-05-31-source-first-four-page-wireframe-map-v1.md
docs/plans/2026-05-31-github-spec-new-homepage-redesign.md
docs/plans/2026-05-31-vastpakt-homepage-herontwerpbrief-v1.md
docs/plans/2026-05-31-vastpakt-visual-design-brief-v1.md
docs/plans/2026-05-31-homepage-redesign-decision-layer.md
```

Stap 3: importeer alleen de 2026-05-31 redesign research die het wireframe direct draagt:

```text
docs/research/2026-05-31-competitor-copy-transfer-map-v1.md
docs/research/2026-05-31-copywriter-homepage-structure-map.md
docs/research/2026-05-31-flowlift-outcome-correction.md
docs/research/2026-05-31-krits-competitor-outcome-language.md
docs/research/2026-05-31-letsdevelop-competitor-outcome-language.md
docs/research/2026-05-31-practitioner-redesign-sequence-check.md
```

Stap 4: voer ticket `#16` uit.

Pas daarna:

- `#13` visual foundation;
- dan pas publieke site shell/buildtickets;
- pas dan `index.html`, `styles.css`, nieuwe routes, sitemap en metadata wijzigen.

## Niet doen

- Geen bulk `git add docs/`.
- Geen bulk `git add .`.
- Geen `docs/research/fb-validation-workshop-2026-05-28/` in de redesign branch.
- Geen `tmp/` in de redesign branch.
- Geen ads package in de redesign branch.
- Geen `script.js` meenemen omdat het al dirty is.
- Geen contactroute, analytics, deployment of lead-log in de redesign branch zonder apart ticket.

## Praktische staging-regel

Gebruik per lane expliciete pathspecs.

Goed:

```bash
git add docs/plans/2026-05-31-redesign-execution-control.md
git add docs/plans/2026-05-31-source-first-four-page-wireframe-map-v1.md
```

Fout:

```bash
git add docs/
git add .
```

## Resterende onzekerheid

- Of `docs/copy/2026-05-27-vastpakt-homepage-copy-classification.md` volledig mee moet naar de redesign branch of alleen relevante extracts. Omdat het bestand lang en historisch is, is `selectief mee` veiliger dan automatisch volledig.
- Of `docs/experiments/homepage-experiments.tsv` als historisch bewijs of als actief redesignlog moet dienen. Voorlopig alleen meenemen wanneer een public copychange ernaar verwijst.
- Of brand/social exports ooit in git moeten. Nu niet beslissen binnen de redesign-lane.
