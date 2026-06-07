# 0005 — Sessie-copy (Problem-Solution-spine) supersedet de wireframe-map Promise-lead

- **Status:** Aanvaard
- **Datum:** 2026-06-07

## Context
De canonieke wireframe-map (`docs/plans/2026-05-31-source-first-four-page-wireframe-map-v1.md`,
deliverable van issue #11) legt een **Promise-lead** homepage vast: hero "minder dubbel werk" + een
als `user-approved` gelabelde brugzin ("Ik bouw de brug tussen je dubbel werk vandaag / en wat straks
slimmer, duidelijker of automatisch kan."). Onze sessie (juni 2026) bouwde, met regel-voor-regel
goedkeuring van Christophe, een afwijkende **Problem-Solution-spine** (ADR-0003): hero
"Je werkt harder dan je bedrijf. Dat is niet jouw schuld." Deze divergentie kwam aan het licht bij
verify-before-write (CLAUDE.md, laag 2). `AGENTS.md` zegt dat plan-bestanden vóórgaan op chat — maar
de sessie is nieuwer en is expliciet, blok per blok, goedgekeurd.

## Beslissing
De sessie-copy wint (besluit Christophe: *"de sessie is nieuwer, deze wint"*). De canonieke
homepage-spine is voortaan die van `redesign-moodboard/COPY-DRAFT.md` (Problem-Solution, schuld-absolutie).
De wireframe-map v1 Promise-lead hero + blokkenvolgorde zijn gesupersed; de map kreeg een
**v2-reconciliatie-sectie** die naar `COPY-DRAFT.md` + deze ADR verwijst. De v1 `user-approved` brugzin
wordt vervangen door "We halen het uit jouw hoofd" — **omkeerbaar punt**: terughalen of als A/B-variant
testen kan later.

## Gevolgen
- Plan en copy zijn weer één waarheid; de bouw-tickets (#1/#2…) zijn nu veilig op de Problem-Solution-spine.
- De subpagina-secties van de map (`/voor-wie/`, `/werk/`, `/over-mij/`) blijven geldig — daar was geen conflict.
- De map blijft brondocument, maar voor de **homepage-spine** is `COPY-DRAFT.md` leidend.
- De oude `user-approved`-status van de brugzin is bewust losgelaten en gedocumenteerd (niet stil geschrapt).
- Bevestigt en versterkt ADR-0003 (Problem-Solution-lead).
