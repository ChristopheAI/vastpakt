# Vastpakt — Session Handoff (2026-06-07)

> Plak dit als openingsbericht in de nieuwe sessie (of zeg: "lees HANDOFF.md").
> Branch: **`codex/homepage-redesign-shell`**.

Je zet het werk aan de Vastpakt-homepage voort. Vastpakt = solo Vlaamse KMO AI/automatisering-bouwer
(Christophe). Done-for-you. De site moet de overweldigde zaakvoerder omzetten in één lage-drempel-actie:
*"beschrijf één situatie."*

## 0. Lees eerst (bron van waarheid, in deze volgorde)
1. `CLAUDE.md` — Honesty Protocol (4 lagen).
2. `AGENTS.md` — source-first copy-discipline.
3. `rules.md`.
4. `STRATEGY.md` — strategisch anker (doel, koper, wedge, Groot Idee, meetlat).
5. `redesign-moodboard/COPY-DRAFT.md` — de canonieke homepage-copy (9 blokken).
6. `docs/adr/` — beslissingen 0001–0005.
7. `docs/plans/2026-05-31-source-first-four-page-wireframe-map-v1.md` — let op de **v2-sectie bovenaan**.

## 1. Werkregels (niet onderhandelbaar)
- **Honesty protocol:** verify-before-write (lees bestaande bestanden vóór je claimt/schrijft); nooit
  "het werkt"/"done" zonder verificatie; zeg expliciet "I haven't verified this"; verwijs naar `file:line`.
- **Source-first:** elke publieke regel traceert naar een bron. Draai de **`source-first-copy-audit`**-skill
  op copy vóór shippen (doel: 0 🔴). Synthese mag nooit hero/proof/CTA dragen.
- **Branch + commit:** ontwikkel op `codex/homepage-redesign-shell`, `git push -u origin <branch>` na elke
  afgeronde wijziging (een **stop-hook** waarschuwt bij niet-gecommitte changes).
- **Skills (in `.claude/skills/`):** `source-first-copy-audit` (bron-waarheid), `ogilvy-audit` (schrijf-craft),
  `compound-learnings` (learnings vastleggen in bestaande stores).
- **Agents (in `.claude/agents/`):** ai-engineer, backend-architect, workflow-architect, mcp-builder,
  offer-lead-gen-strategist, content-creator, seo-specialist, aeo-foundations, pricing-analyst.

## 2. Waar we staan
- **Richting vastgelegd** (ADR-0003 + 0005): Problem-Solution-lead, schuld-absolutie. De sessie-copy
  supersedet het oude Promise-lead-plan (de wireframe-map kreeg een v2-sectie).
- **Homepage-copy** (`COPY-DRAFT.md`): 9 blokken, source-led, audit schoon (0 🔴 nadat blok 8 herkaderd is).
  Draad: hero → herkenning ("jij bent het systeem") → brug ("we halen het uit je hoofd") → BAVAST-proof →
  wig ("praat met wie het bouwt") → over-mij-teaser → "is dit iets voor jou?" → eerste stap → slot-CTA.
- **GESHIPT in `index.html`:** de nieuwe **hero** (Problem-Solution, één CTA "Beschrijf één situatie").
  Blok 8 (eerste stap) is herkaderd naar een **eerlijke interim** (gratis gesprek + transparante afspraak,
  GEEN verzonnen prijs).
- ⚠️ **`index.html` is HALF-NIEUW:** nieuwe hero bovenaan, daaronder nog het oude "Eerste Zicht"-concept.

## 3. De directe taak: de homepage-body afshippen
Map `COPY-DRAFT.md` blokken 2–9 op de bestaande secties in `index.html` (grotendeels copy vervangen,
bestaande CSS):

| COPY-DRAFT blok | Bestaande sectie in index.html |
|---|---|
| 2 Herkenning | `questions-section` / `problem-section` |
| 3 Brug | `aftercare-section` of nieuwe band |
| 4 BAVAST-proof (pijn-first) | `proof-section` (BAVAST-case staat er al ~regel 292) |
| 5 Wig | `person-section` |
| 6 Over-mij-teaser | kleine band → `/over-mij/` |
| 7 Zelfselectie (Wel/Niet) | `qualification-section` (boundary-grid) |
| 8 Eerste stap (interim) | `offer-section` (#scan) |
| 9 Slot-CTA | `contact-section` |

Werk in reviewbare brokken (per 2–3 secties een commit). Na elke brok: `source-first-copy-audit` +
`ogilvy-audit`; `git diff --check`; `node --check script.js`.
Daarna nog: `<title>`/meta updaten (staan nog op "Eerste Zicht") = ticket #9.

## 4. Browser-screenshots (de reden voor de nieuwe sessie)
`agent-browser` (vercel-labs) is de gekozen browser-QA-tool, maar is **niet gepersisteerd** (globale
npm-install, nieuwe container = weg). Stappen:
1. `npm install -g agent-browser`
2. Gate testen: `curl -sS -o /dev/null -w "%{http_code}" --max-time 30 https://googlechromelabs.github.io/chrome-for-testing/last-known-good-versions-with-downloads.json`
3. **Als 200** → `agent-browser install` → `agent-browser open "file:///home/user/vastpakt/index.html"` →
   `agent-browser screenshot` (desktop + mobiele viewport) → lever de screenshots.
4. **Als 403 "Host not in allowlist"** → de allowlist (`googlechromelabs.github.io` + `storage.googleapis.com`)
   is nog niet actief; meld dit eerlijk, ga verder met de structurele self-check (markup + leesvolgorde via
   een html-parse) en laat de visuele check aan Christophe's branch-preview.

## 5. Heeft Christophe nodig (de échte blockers — niet verzinnen)
- **#18** prijsmodel (vast bedrag? kmo-portefeuille? project- of maandmodel? of bewust geen bedrag).
- **#7/#14** Over-mij verhaal (hoe erin gerold, achtergrond) + één echte warme foto.
- **#19** letterlijke klant-quote bij BAVAST (sterkste social proof).
- Identiteitslijn-hypothese bevestigen (`STRATEGY.md §5`): *"Ik haal het werk uit je hoofd — en zet het in
  een systeem dat van jou is."*

## 6. Open tickets (19)
Origineel #1–#16 (4-page redesign, 00–15). Nieuw deze sessie: **#18** prijs, **#19** klant-proof,
**#20** bus-factor. Blockers voor go-live: #18 + de implementatie (#2 hero ✅ gedeeltelijk, #3/#4/#5/#6/#7).

## 7. Guardrails
- **Vastpakt leidt met de pijn, niet met de bouw** (≠ "Miran in Vlaanderen", Bron 04). `/werk` blijft
  pijn-first ("ik haalde de chaos uit één hoofd"), niet "ik bouw apps".
- **Compounding dient shippen.** De beperking is nu *shippen + Christophe's inputs*, niet meer research.
  Bouw geen nieuw apparaat als het de lancering niet dichterbij brengt.

## 8. Housekeeping
- Oude remote-branch `claude/determined-gates-1VURx` bestaat nog op origin (lokaal verwijderd; remote-delete
  gaf proxy-403). Optioneel opruimen via de GitHub-UI.
