# Loop 15 - public term decision

Date: 2026-05-27

Purpose: decide which public term should carry the idea that Vastpakt looks at how workflows run inside companies.

## Question

Which term should Vastpakt use publicly?

- workflow
- proces
- werkstroom
- werking
- hoe het vandaag loopt
- stuk werk

## Local Signals

Local market-language notes:

- `proces`: acceptable, but can sound like consultancy.
- `workflow`: understandable to software buyers, cold to many KMO readers.
- `werking`: broader than process flow; should also hold status, proof, decision context, and fallback.
- Stable anchor: `Eerst één werking zichtbaar maken. Dan pas kiezen wat moet veranderen.`

Local spec:

- Do not make `workflow` the public-facing problem.
- Readers talk more about where they stand, what is proven, what may come back later, or which step they cannot forget.
- The page must not sound like generic process consulting.

## Exa Signals

Market pages use:

- `processen`
- `procesflow`
- `workflow`
- `hoe taken vandaag verlopen`
- `hoe het vandaag loopt`
- `waar informatie staat`
- `verspreid over mailboxen, Excel en systemen`
- `e-mail, afspraken, notities`

Interpretation:

- `workflow/proces/procesflow` are real market words, but they pull toward software, ERP, CRM, process optimization, or consultancy.
- `hoe het vandaag loopt` is more ordinary and closer to KMO workday language.
- `stuk werk` is concrete and flexible enough for offerte, planning, akkoord, factuurmoment, overdracht, and opvolging.

## Decision

Use this hierarchy:

1. Internal reasoning: `workflow`.
2. Method anchor: `werking`.
3. Public explanation: `hoe één stuk werk door mail, Excel, CRM en mensen beweegt`.
4. Short public shorthand: `één stuk werk`.
5. Avoid as main public frame: `workflow`, `proces`, `procesoptimalisatie`, `werkstroom`.

## Site Change

Kept:

```text
Eerst één werking zichtbaar maken. Dan pas kiezen wat moet veranderen.
```

Changed unsupported/standalone uses:

```text
Blijft dit stuk werking zichtbaar...
```

to:

```text
Blijft dit stuk werk zichtbaar...
```

and:

```text
één werking zichtbaar maken
```

to:

```text
één stuk werk zichtbaar maken
```

## Remaining Risk

`stuk werk` is clear but broad. It should stay beside concrete examples: offerte, akkoord, planning, factuurmoment, overdracht, mail, Excel, CRM, mensen.
