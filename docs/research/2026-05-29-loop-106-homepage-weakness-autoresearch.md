# Loop 106 - Homepage Weakness Autoresearch

Date: 2026-05-29

## Loop Question

Where are the new weaknesses on the homepage after translating the Six Fingers lesson into the Vastpakt hero?

## Verdict

The page is stronger than before, but the new weakness is structural:

```text
The hero now says "which question comes first",
but the page hides the three concrete questions too late.
```

The Six Fingers lesson was not just "ask a better question". Their page routes abstract service language toward concrete project questions close to the method. Vastpakt now has the right question direction, but the supporting question route is split across the page.

## Sources Used

- Current local homepage at `http://localhost:5502/?loop=105#top`
- `docs/research/2026-05-29-six-fingers-zicht-verruimen-autoresearch.md`
- Exa market-language scan across Belgian/KMO digitalisation, process, Odoo, ERP and automation pages
- Local `reviews/writing-checklist.md`
- Local `reviews/source-checklist.md`

## Rendered Page Facts

Mobile viewport measured: `390 x 844`

Section heights:

| Order | Section | Height | Finding |
|---:|---|---:|---|
| 1 | Hero | 1475px | No overflow, but tall for a first decision screen. |
| 2 | Check | 1292px | Useful, but delays proof and offer. |
| 3 | Examples | 3571px | Proof is concrete but very long on mobile. |
| 4 | CTA bridge | 535px | Works as a route after examples. |
| 5 | Eerste Zicht | 849px | Offer is clear but repeats the same "voorbeeld" route. |
| 6 | Contact | 1131px | Action route is clear, but late. |
| 7 | Person | 1197px | Trust block is useful, but adds more distance before lower support. |
| 8 | Problem | 784px | Re-opens the problem after the action route. |
| 9 | Method | 1049px | The strongest Six Fingers translation appears too late. |
| 10 | Connection | 1031px | Useful support, but reads like a second explanation pass. |
| 11 | Qualification | 917px | Useful boundary. |
| 12 | FAQ | 1035px | Useful for hesitation. |

No horizontal overflow was detected.

Text repetition count:

| Term | Count | Interpretation |
|---|---:|---|
| `voorbeeld` | 27 | The route is clear, but the word is overburdened. |
| `vraag` | 14 | The method frame is visible in copy, but not visually concentrated. |
| `loskomt` | 8 | Still present despite the user's correction and the better `stroef loopt` direction. |
| `stroef` | 1 | Stronger market word appears only once. |
| `blijft hangen` | 3 | Useful workday phrasing, but not yet used consistently. |

## Exa Market Signals

Captured / near-captured market language:

- `informatie niet meer verspreid zit over Excel, e-mail en losse systemen`
- `minder dubbel werk`
- `minder manueel werk`
- `duidelijkere opvolging`
- `één proces écht oplossen`
- `één belangrijk proces end-to-end`
- `waar zit de winst`
- `blijven hangen`
- `één flow van offerte tot factuur`
- `waar info vandaag zit`
- `wie doet wat, wanneer`
- `start klein`

Classification:

- `Excel`, `e-mail`, `losse systemen`, `dubbel werk`, `manueel werk`, `opvolging`: market language.
- `één proces`, `één flow`, `start klein`: market language, but must be translated carefully because Vastpakt does not sell a full ERP/Odoo flow as first step.
- `stroef loopt`, `blijft hangen`: light market/workday language; safer than `loskomt` for public copy.
- `welke vraag komt eerst`: Vastpakt translation of the Six Fingers project-question architecture.

## Weaknesses Found

### 1. The method proof is too late

Current hero:

```text
Eén voorbeeld uit je werkdag. Welke vraag komt eerst?
```

Current method section, much lower:

```text
Offerte verstuurd. Wie volgt op?
Klant akkoord. Waar zit het bewijs?
Werk klaar. Welke stap moet nu volgen?
```

Why this is weak:

The hero makes "the first question" the mechanism, but the concrete examples of those questions appear after contact, person, problem and proof. That means the strongest explanation of Vastpakt's method is not close enough to the claim.

Decision:

Move or compress the three-question route upward, or remove the late method section and let its best material support the hero/check/offer.

### 2. `Voorbeeld` is now carrying too much

Current public route depends heavily on:

```text
één voorbeeld
je voorbeeld
dit voorbeeld
Stuur één voorbeeld
```

Why this is weak:

As an action route, `voorbeeld` works. As a repeated explanation word across the whole page, it starts to feel mechanical. The user already correctly rejected `waar je voorbeeld vandaag stroef loopt` in the hero lede because the visitor has not chosen an example yet.

Decision:

Keep `voorbeeld` for CTA and form. Use `werk`, `plek`, `situatie`, or the concrete object list in explanatory sections where the visitor has not yet acted.

### 3. `Loskomt` is still leaking through the page

Current surviving lines include:

```text
Dan kijken we wat daar loskomt
waar status, bewijs of volgende stap loskomt
waar opvolging, bewijs of volgende stap loskomt
```

Why this is weak:

The user challenged this direction, and Exa showed better market/workday alternatives: `stroef loopt`, `blijft hangen`, `onduidelijk is`, `verspreid zit`, `moet zoeken`, `dubbel werk`.

Decision:

Replace remaining public `loskomt` instances unless they are intentionally kept as an internal Vastpakt metaphor. Public copy should prefer `stroef loopt`, `blijft hangen`, `onduidelijk is`, or a concrete work object.

### 4. The lower page re-opens the argument after contact

Current order after contact:

```text
Person
Problem
Method
Connection
Qualification
FAQ
```

Why this is weak:

After the offer and contact form, the page starts explaining the problem and method again. That makes the lower half feel like a second homepage rather than support for hesitant readers.

Decision:

After contact, keep only trust, boundaries and FAQ unless a support section answers a clear hesitation. Move essential method/problem lines above the first contact route.

### 5. The hero is conceptually good but visually heavy

Rendered fact:

```text
Hero height on mobile: 1475px
```

Why this is weak:

The first viewport shows the core idea, but the proof card and reassurance make the hero a long first screen. This is not broken, but the page has become top-heavy while still pushing the real method questions down.

Decision:

Do not keep adding copy to the hero. If the hero needs sharpening, simplify or relocate support rather than adding another sentence.

### 6. The check is useful, but it may be doing the method's job

Current check:

```text
Vink aan waar je vandaag zoekt, overneemt of rondvraagt.
```

Why this is weak:

The check helps recognition, but it does not clearly connect each signal to the three question routes: opvolging, bewijs, volgende stap. The visitor may recognize friction without seeing what Vastpakt will do with it.

Decision:

Either make the check outcome map to the three questions, or keep the check shorter and put the question route immediately after it.

## What Vastpakt Can Borrow From Six Fingers Here

- Put the method's concrete questions close to the abstract service promise.
- Let questions carry proof, not adjectives.
- Keep the CTA as a low-friction question route.
- Make the reader understand the route before asking them to fill a form.

## What Vastpakt Must Not Borrow

- Do not turn this into innovation-agency language.
- Do not copy Six Fingers' future/strategy framing.
- Do not make the page broader by adding more examples.
- Do not hide weak structure behind smoother copy.

## Recommended Loop 107

Make a structure pass, not a hero-copy pass.

Smallest useful test:

```text
Hero
-> compact three-question route
-> check or examples
-> proof
-> Eerste Zicht
-> contact
-> trust / boundaries / FAQ
```

Candidate principle:

```text
Gebruik "voorbeeld" voor de actie.
Gebruik "werk", "plek", of concrete objecten voor de uitleg.
Gebruik "stroef", "blijft hangen", "onduidelijk" waar nu "loskomt" publiek staat.
```

## Review Checklist Result

Writing checklist:

- Factual claims sourced or marked: pass.
- No generic AI/consultancy filler in recommendations: pass.
- Opening concrete: pass.
- Overclaim avoided: pass.
- Recommendations separated from observed facts: pass.
- Important public lines classified: pass.
- Specific work objects before abstract promises: partial fail on current homepage because method questions sit too low.

Source checklist:

- Source meaning preserved before interpretation: pass.
- Direct/near source language separated from Vastpakt translation: pass.
- Blended public lines marked: pass.
- Market words captured before recommendations: pass.
- Claims traceable to sources or work objects: pass.
- What to borrow and not copy named: pass.
- Uncertainty visible: pass.
