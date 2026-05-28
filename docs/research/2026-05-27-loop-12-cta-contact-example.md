# Loop 12 - CTA/contact example

Date: 2026-05-27

Purpose: make the first contact action more concrete after loops 9-11 made the hero and offerte card more source-near.

## Question

Does `Toon één situatie` tell the visitor enough about what to send and what comes back?

## Local Signals

- Project spec: first contact should be a tiny diagnostic exchange, not a heavy lead form.
- Project spec: the CTA block should explain what the reader gives and what Vastpakt returns.
- Local line: `Ge krijgt terug of dit geschikt is voor een Eerste Zicht-scan, en welk stuk we eerst zouden bekijken.`
- Local objects: mail, offerte, Excel, CRM, afspraak, bewijs, akkoord, factuurmoment.

## Exa / Swipefile Signals

Swipefile search signals:

- Signup/contact pages should repeat the offer at the friction point.
- Form copy should feel low-commitment and focused on one action.
- Human, concrete form fields lower intimidation.

Exa market signals:

- Dutch service forms often say what happens after submission: response within a time window, advice, suitable offer, or next step.
- Construction/offerte forms ask for a short situation description or files when the provider needs context.

## Decision

Replace the generic action label:

```text
Toon één situatie
```

with:

```text
Stuur één voorbeeld
```

Then make the contact block concrete:

```text
Stuur één mail, offerte of Excel-voorbeeld waar je vandaag moet zoeken.
```

## Classification Of Shipped Lines

- `Stuur één voorbeeld`: light edit from local tiny diagnostic exchange rule.
- `Stuur één mail, offerte of Excel-voorbeeld waar je vandaag moet zoeken`: Vastpakt translation from local work objects.
- `Geen voorbereiding. Eén echt voorbeeld is genoeg.`: CTA/support copy.
- `Een mail, offerte, Excel-rij, CRM-notitie of afspraak...`: market/workday objects.
- `Of een Eerste Zicht-scan past, welke vraag eerst zichtbaar moet worden, en welke kleine stap logisch is.`: Vastpakt translation of local post-contact expectation.
- `deze offerte is verstuurd, maar ik zie niet welke laatste stap genomen is`: light edit from loop 10 source-near offerte language.

## Remaining Risk

`Stuur één voorbeeld` is clearer than `Toon één situatie`, but may slightly underplay the fact that this is a business/workflow situation, not a random file. The surrounding copy now carries that context.
