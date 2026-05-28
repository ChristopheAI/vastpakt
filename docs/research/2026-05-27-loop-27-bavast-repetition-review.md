# Loop 27 - BAVAST Repetition Review

## Question

Does BAVAST need to stay both as compact proof below the check and as a full example card, or should the full example card become a different concrete situation while BAVAST remains the close proof?

## Browser Observation

At desktop width, the page read in this order:

1. Hero.
2. `Waar gaat tijd verloren?` check.
3. Compact BAVAST practice proof.
4. Examples grid with three workday situations plus a second BAVAST card.

The placement is useful, but the repetition was slightly heavy because the same named case and one-hour result appeared twice within the first example flow.

At mobile width, the repeated BAVAST card appeared much later, so it was less visually heavy. The issue was not layout overflow. The issue was proof hierarchy: one real case was doing two different jobs.

## Decision

Keep BAVAST as compact proof under the check.

Do not replace the full card with a new unsupported case yet. That would weaken the source-first rule, because there is no equally concrete second measured practice case in the current source set.

Instead, change the full card from a second compact case claim into a worked example:

```text
Uitgewerkt voorbeeld
Van transcript naar gecontroleerd Word-rapport.
```

This lets the compact proof carry the result claim while the examples card shows the work trace.

## Classification

- `Praktijkcase: BAVAST`: keep in the compact proof near the check.
- `Uitgewerkt voorbeeld`: public section label for a work trace, not a new claim.
- `Van transcript naar gecontroleerd Word-rapport.`: light edit from captured BAVAST work-object language.
- `De rapportinhoud wordt klaargezet in het bestaande BAVAST Word-template`: light edit from loop 26 Exa-supported `automatisch klaargezet` plus local BAVAST work object.
- `Hetzelfde dossierwerk blijft herkenbaar, maar het overzetten naar Word hangt niet meer aan copy-paste.`: Vastpakt translation from the BAVAST flow and market language around copy-paste/manual Word work.

## Remaining Risk

BAVAST is still the only real named case on the homepage. That is acceptable for now, but a future loop should add another sourced concrete situation before using the examples grid as a broader proof library.
