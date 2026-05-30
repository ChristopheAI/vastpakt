# Homepage Market Survey Task Action

Date: 2026-05-30

## Loop Question

Survey the market first, then replace internal Vastpakt words only where market language is stronger.

## Browser Finding

The live check route still used `volgende stap` in five places. This is not always wrong, but in the check card it described practical work someone must do:

- `Welke volgende stap moet iemand kunnen volgen?`
- `Als één persoon er niet is, weet niemand welke volgende stap hoort te gebeuren.`

In that specific context, `taak` and `actie` are more ordinary KMO work words.

## Exa Market Signals

- DeskManager: `taken, afspraken en deadlines centraal`.
- Odoo lead-to-cash: `taken`, `reminders`, `duidelijke volgende actie`, `opvolgingstaken`.
- BlueCRM: `Taken & Delegeren`, `Plan taken in`, `laatste afspraken`.
- KMO-Facturatie: `laatste stap`, `laatste actie`, `genomen acties`.
- UNIVO: `taken en subtaken toewijzen`, `taken beheren`, `taakbeheer`.

## Google Autosuggest Signals

- `taken opvolgen`
- `afspraak opvolgen`

## Classification

- `volgende stap`: workable Vastpakt/public phrase, but in the check card it still sounds like a model field.
- `taak`: market language from software pages and search.
- `actie`: market/workday language from KMO-Facturatie and earlier loops.
- `taak of actie`: light edit that preserves the question while making the work object more ordinary.

## Homepage Change

Changed only the check route:

- `Welke volgende stap moet iemand kunnen volgen?` -> `Welke taak of actie moet iemand kunnen volgen?`
- `welke volgende stap hoort te gebeuren` -> `welke taak of actie hoort te gebeuren`

## Not Changed

- Other `volgende stap` uses remain where they describe the response/follow-up, not a concrete task in the workday.
- The hero, proof cards, offer scope, and contact route remain unchanged.
