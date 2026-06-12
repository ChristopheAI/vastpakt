# 0001 — Beslissingen vastleggen in ADR's

- **Status:** Aanvaard
- **Datum:** 2026-06-03

## Context
Het project heeft een sterk *empirisch* logboek (DISCOVERIES.md, de D-nummers): wat we leerden uit
de markt. Maar onze *bewuste* keuzes — structuur van de site, copy-strategie, positionering — leefden
verspreid in commits en gesprekken. Bij elke nieuwe sessie moest het "waaróm" opnieuw gereconstrueerd
worden, en eerdere keuzes werden soms onbewust overschreven.

## Beslissing
We houden Architecture & Strategy Decision Records bij in `docs/adr/`, volgens het Nygard-sjabloon
(Context · Beslissing · Gevolgen). ADR's zijn onveranderlijk: een nieuw inzicht leidt tot een **nieuwe**
ADR die de oude supersedet, niet tot een herschrijving. DISCOVERIES.md blijft voor empirische inzichten;
ADR's zijn voor onze eigen beslissingen.

## Gevolgen
- Makkelijker: het "waarom" overleeft sessies; nieuwe keuzes bouwen voort i.p.v. te botsen.
- Makkelijker: een beslissing terugdraaien is expliciet en zichtbaar (superseding), niet stil.
- Moeilijker: elke betekenisvolle keuze vraagt een korte schrijf-stap. Dat is bewust de prijs.
