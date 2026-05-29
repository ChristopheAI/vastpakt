# Loop 107 - Homepage Weakness Priority

Date: 2026-05-29

## Loop Question

After loop 106, which homepage weaknesses matter first, and which should not distract the next edit?

## Verdict

Do not sharpen the hero by adding more copy.

The next weakness to fix is the route underneath the hero:

```text
Hero says: which question comes first?
Page delay: the three concrete questions appear after contact and lower support.
```

This creates a promise/support gap. The copy direction is mostly right; the reading order is not.

## Fresh Rendered Facts

Measured at `http://localhost:5502/?loop=105#top`.

Mobile `390 x 844`:

- First viewport shows only the hero.
- No horizontal overflow.
- Hero height: `1475px`.
- Check starts at `1583px`.
- Examples start at `2875px`.
- Offer starts at `6981px`.
- Contact starts at `7830px`.
- Method starts at `10942px`.

Desktop `1440 x 900`:

- First viewport shows hero plus the start of the check.
- No horizontal overflow.
- Hero height: `765px`.
- Method starts at `7353px`.

Text counts:

| Term | Count | Weakness |
|---|---:|---|
| `voorbeeld` | 27 | CTA route is clear, but the word is doing too much across explanation, offer, contact and trust. |
| `loskomt` | 8 | Public language still carries a word the user already challenged. |
| `stroef` | 1 | The better market-readable word appears only once. |
| `vraag` | 14 | The mechanism is present in words, but not concentrated visually. |
| `opvolging` | 4 | Key route word is underused versus `voorbeeld`. |
| `bewijs` | 10 | Strong object word, but dispersed across the page. |
| `volgende stap` | 8 | Strong object phrase, but dispersed across the page. |

## Exa Support Signals

Useful external lesson, paraphrased:

- B2B pages need proof close to the claim it supports.
- One dominant CTA route reduces confusion.
- Specific proof beats broad reassurance.
- Form/action should come after enough fit and credibility are clear.
- Long pages work only when each section answers the next decision question.

Relevant market/workday words already aligned with Vastpakt:

- `minder dubbel werk`
- `manueel werk`
- `informatie verspreid over Excel, e-mail en losse systemen`
- `duidelijkere opvolging`
- `één proces`
- `start klein`
- `blijven hangen`

Classification:

- These are market signals, not public copy to paste.
- For Vastpakt they support this translation: make one concrete work route visible before proposing a change.

## Priority Weaknesses

### P1 - The Three-Question Route Is Too Low

Current late method:

```text
Offerte verstuurd. Wie volgt op?
Klant akkoord. Waar zit het bewijs?
Werk klaar. Welke stap moet nu volgen?
```

Why this matters:

This is the cleanest Six Fingers translation on the page. It makes the abstract hero line concrete. But it appears after the visitor has already passed the offer, form, person, problem and other support.

Next edit:

Move or duplicate a compact version directly after the hero, or replace the current check intro with this question route.

### P1 - `Loskomt` Should Be Retired From Public Copy

Current issue:

`loskomt` still appears in section labels and explanatory lines.

Why this matters:

It is less market-readable than `stroef loopt`, `blijft hangen`, `onduidelijk is`, `verspreid zit`, or concrete work-object wording. The user already challenged the direction.

Next edit:

Replace public `loskomt` lines during the structure pass. Do not do a separate wording-only loop unless there is no structure edit.

### P2 - The Check Recognizes Pain But Does Not Route It

Current check job:

```text
Vink aan waar je vandaag zoekt, overneemt of rondvraagt.
```

Why this matters:

The check makes recognition easy, but it does not clearly say: this signal maps to opvolging, bewijs, or volgende stap. It can become a little diagnostic island.

Next edit:

Either shorten the check or make its result map to the three questions.

### P2 - The Page Has A Second Homepage After Contact

Current lower route:

```text
Contact
-> Person
-> Problem
-> Method
-> Connection
-> Qualification
-> FAQ
```

Why this matters:

Once contact appears, the next sections should reduce hesitation. Instead, the page restarts the problem/method argument. That adds length without increasing decision clarity.

Next edit:

Move essential method/problem material above contact. Below contact, keep trust, boundary and FAQ only.

### P3 - `Voorbeeld` Needs A Job Boundary

Keep:

```text
Stuur één voorbeeld
Welk voorbeeld wil je tonen?
```

Reduce elsewhere:

```text
je voorbeeld
dit voorbeeld
één voorbeeld
```

Why this matters:

`Voorbeeld` works as the action object, but when repeated in every section it starts to feel like internal routing language.

Next edit:

Use `werk`, `plek`, `situatie`, or concrete objects in explanation. Keep `voorbeeld` for CTA/form.

## Not The Main Weakness Now

- Not visual style. The page is not failing because it lacks polish.
- Not hero ambition. The hero direction is now close enough to test.
- Not proof count. More examples would make the page heavier.
- Not a new metaphor. The page needs fewer metaphors, not a stronger one.

## Recommended Loop 108

Make a structure edit:

```text
1. Bring the compact three-question route immediately under the hero.
2. Retire public `loskomt` while touching those sections.
3. Keep `voorbeeld` mainly for CTA/form.
4. Move or cut the late method/problem repetition after contact.
```

Smallest testable version:

```text
Hero
Compact three questions
Check
Proof examples
Eerste Zicht
Contact
Christophe / boundaries / FAQ
```

## Checklist Result

Writing checklist:

- Sourced factual claims: pass.
- Recommendations separated from observations: pass.
- Specific work objects before abstract promises: partial fail on current homepage.
- Generic consultancy language avoided: pass.

Source checklist:

- Source meaning preserved before interpretation: pass.
- External wording not pasted as public copy: pass.
- What to borrow and what not to copy named: pass.
- Uncertainty visible: pass.
