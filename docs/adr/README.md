# Architecture & Strategy Decision Records (ADR)

Eén record per **bewuste beslissing** over structuur, strategie of copy-richting van Vastpakt.
Niet *hoe* de code werkt, wel *waaróm* we iets zo kozen.

## Hoe dit werkt
- Eén ADR = één beslissing. Genummerd: `0001`, `0002`, … (volgende nummer = vorige + 1).
- Sjabloon (Nygard): **Titel · Status · Context · Beslissing · Gevolgen.**
- **Status:** `Voorgesteld` → `Aanvaard` → `Verouderd` → `Vervangen door ADR-XXXX`.
- **Onveranderlijk:** een aanvaarde ADR herschrijf je niet. Verandert het inzicht? Schrijf een
  **nieuwe** ADR die de oude *supersedet*, en zet de oude op `Vervangen door ADR-XXXX`.
  Zo blijft de geschiedenis van het dénken leesbaar.

## Iets toevoegen
1. Kopieer `template.md` naar `NNNN-korte-titel.md` (volgend nummer).
2. Vul Context · Beslissing · Gevolgen in. Status meestal `Aanvaard`.
3. Zet 'm in de index hieronder.

## Relatie tot DISCOVERIES.md
- **DISCOVERIES.md (D-log)** = *empirische* inzichten over markt/copy (bewijs uit de wereld).
- **ADR (hier)** = *onze eigen* bewuste beslissingen. Een ADR mag naar een D verwijzen als grond.

## Index
| ADR | Titel | Status |
|---|---|---|
| [0001](0001-adr-bijhouden.md) | Beslissingen vastleggen in ADR's | Aanvaard |
| [0002](0002-homepage-als-opstap.md) | Homepage is een opstap die naar losse pagina's linkt | Aanvaard |
| [0003](0003-problem-solution-lead.md) | Homepage-copy: Problem-Solution-lead met één Groot Idee | Aanvaard |
| [0004](0004-zelfselectie-blok.md) | "Is dit iets voor jou?" — zelfselectie + eerlijke diskwalificatie | Aanvaard |
| [0005](0005-sessie-copy-supersedet-wireframe-map.md) | Sessie-copy (Problem-Solution) supersedet de wireframe-map Promise-lead | Aanvaard |
| [0006](0006-lean-vierpagina-spine.md) | Lean vierpagina-spine; oude use-case- en over-pagina's redirecten | Aanvaard |
| [0007](0007-prijsposture-stil-lage-drempel.md) | Prijsposture: stil + lage drempel (geen bedrag op de site) | Aanvaard |
