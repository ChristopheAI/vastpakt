# 0006 — Lean vierpagina-spine; oude use-case- en over-pagina's redirecten

- **Status:** Aanvaard
- **Datum:** 2026-06-07

## Context
De homepage-redesign (ADR-0003/0005, `COPY-DRAFT.md`) verving het oude "Eerste Zicht / zichtbaar
maken"-paradigma. De huidige site draagt naast de spine nog drie use-case-pagina's
(`/offerte-opvolging/`, `/facturatie-bewijs/`, `/dubbel-werk/`) en een `/over-vastpakt/`, allemaal nog
in de oude framing. De nieuwe homepage linkt er niet meer prominent naar — ze zijn half-wees geworden
(de drie homepage-projectkaarten uit de wireframe-map zijn vervallen, blok 4 = enkel BAVAST). De
wireframe-map liet hun lot expliciet open (regel 402–407: "of `/over-vastpakt/` blijft", "of oude
SEO-routes intern doorlinken"). Spanning: **SEO-oppervlak** (de koper zoekt letterlijk "offerte
opvolging", "dubbel werk Excel") versus **focus + onderhoud** (Vastpakt is solo; elke extra pagina is
werk én een plek waar de oude stem terugsluipt).

## Beslissing
De canonieke site is een **lean vierpagina-spine**: `/` · `/voor-wie/` · `/werk/` · `/over-mij/`
(ADR-0002 + wireframe-map). De rest wordt geretireerd via **301/permanente redirects** (in `vercel.json`):
- `/offerte-opvolging/`, `/facturatie-bewijs/`, `/dubbel-werk/` → `/voor-wie/` (zelfkwalificatie vangt
  de pijn-herkenning op).
- `/over-vastpakt/` → `/over-mij/` (redundant; één duidelijke "wie ik ben"-pagina).
- `/privacy/` blijft (juridisch).

Besluit Christophe (spar-sessie 2026-06-07): *retiren/redirecten* boven behouden of nu-herwerken.

## Gevolgen
- Eén coherente stem over de hele site; geen pagina zegt nog "Eerste Zicht / Check / Voorbeelden".
- Minder onderhoud voor een solo — focus bij launch boven SEO-breedte.
- Footer/nav vereenvoudigt tot de spine (+ Privacy, Contact).
- **Geaccepteerd verlies:** de drie use-case-pagina's als aparte SEO-instappen. Omkeerbaar — de
  pagina's blijven in de git-historie en de redirects zijn terug te draaien als fase-2-SEO-spel.
- 301 behoudt link-juice; geen 404's. Vercel-redirects gaan vóór op filesystem.
