# Homepage Market Survey Middle Route

Date: 2026-05-30

## Loop Question

Survey the market first, then replace remaining internal Vastpakt field bundles only where market language is stronger.

## Browser Finding

The live middle route still used the internal bundle:

- `opvolging, bewijs, akkoord of de volgende stap`
- `opvolging, bewijs of volgende stap`
- `waar status, bewijs of volgende stap onduidelijk wordt`

These words are not all wrong. `status` and `bewijs` exist in market language. The issue is the repeated bundle: it reads as a Vastpakt inspection model instead of the KMO's own workday objects.

## Exa Market Signals

- KMO-Facturatie: `laatste actie`, `genomen acties`, `offertes en facturen opvolgen`, `aanvaarding of weigering`, `welke laatste stap werd genomen`.
- Flexina: `status van uw facturen en betalingen`, `gepersonaliseerde opvolging`, `taken en commerciële notities`, `offertes en bestellingen`.
- Djaboo: `volgende actie`, `opvolging`, `offerte is getekend`, `factuur te laat`, `taken`.
- ZenFactuur: `status van facturen`, `offertes ... aanvaard of afgewezen`, `betalingen opvolgen`.
- DeskManager: `taken, afspraken en deadlines`, `facturen`, `klantgegevens`, `opvolging`.

## Google Autosuggest Signals

- `offerte aanvaarden`
- `offerte aanvaarden voorbeeld`
- `offerte goedkeuren via mail`
- `offerte goedkeuren voorbeeld`
- `betalingsopvolging`

## Classification

- `status, bewijs of volgende stap`: internal Vastpakt field bundle.
- `opvolging`: market language.
- `akkoord`: workday language, supported by autosuggest around offerte aanvaarden/goedkeuren.
- `laatste actie`: market language from KMO-Facturatie.
- `openstaande factuur`: market language from earlier survey and Exa KMO pages.

## Homepage Change

Changed the middle route only:

- `opvolging, bewijs, akkoord of de volgende stap` -> `opvolging, akkoord, openstaande factuur of laatste actie`
- `opvolging, bewijs of volgende stap` -> `opvolging, akkoord of laatste actie`
- `status, bewijs of volgende stap` -> `opvolging, akkoord of laatste actie`

## Not Changed

- `bewijsstuk` remains in the checkbox where the work object is concrete.
- `Waar staat bewijs?` remains as a question card for now because `bewijs factuur` and `factuur bewijs van betaling` are search-supported.
- The hero remains unchanged.
