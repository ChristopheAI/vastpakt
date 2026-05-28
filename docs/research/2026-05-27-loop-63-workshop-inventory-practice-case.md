# Loop 63 - Workshop Inventory Practice Case

Date: 2026-05-27

## Question

Can the Bouwsmederijloots voorraad webapp become another homepage practice case?

## Source Signals

- User-provided fact: Christophe made a voorraad webapp for Bouwsmederijloots, and it is still actively used today.
- Local workdirectory checked: `/Users/christophe/Projects/MLcoatingbackend`.
- Local app manifest: `ML Coating Poedervoorraad Tool`, described as a web-based stock management system for powder coatings.
- App purpose note: keep total available weight in kg per unique powder type; update by `X kg gebruikt` or `Nog Y kg over`; replace manual tracking; give a quick overview of what is in house and what is almost empty.
- App UI/source files show tabs for `Voorraad Overzicht`, `Nieuw Poeder Toevoegen`, `Verbruik Registreren`, and `Dashboard`.
- Local app docs list fields and features: RAL/code, brand, laktype, weight, status, visual status indicators, usage history, low-stock warnings, Express API, PostgreSQL/Supabase data model.

## Grill Verdict

Use the case, but anonymize it.

The exact business name is not needed for the homepage. Search also surfaced older client/admin/credential-like files elsewhere, so the safe public copy must stay away from names, contacts, domains, deployment details, access details, and old exports.

## Public Translation

- Label: `Praktijkcase: werkplaatsvoorraad`
- Main line: `Van losse telling naar voorraad in kg.`
- Work object: powder stock, kg, usage update, stock status, dashboard.
- Case claim allowed: still active in daily use, because this is user-provided practice evidence.

## Remaining Uncertainty

- The local source confirms the app and its work object.
- The active-use fact comes from the user, not from a live production login.
- Do not turn this into a broad inventory-product promise.
