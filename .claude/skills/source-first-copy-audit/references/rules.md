# Source-First Copy — Full Reference

Detailed rubric for auditing Vastpakt copy against `AGENTS.md`. Use it to classify accurately and give specific, example-grounded findings.

## Source of these rules
- `AGENTS.md` — Source-First Vastpakt Copy, Captured Language, Research Intent, Vastpakt Words Agent, Review Standards.
- `CLAUDE.md` — Honesty Protocol (don't claim what you haven't verified).
- Project corpus: `redesign-moodboard/MARKT-TAAL.md`, `CASES-*.md`, `INTENT-*.md`, `docs/copy/`, `docs/research/`.

---

## The seven classifications

| Label | Definition | Ship as public hero/proof/CTA? |
|---|---|---|
| `captured sentence` | A direct or near-direct line from a source, a real work object, or user-approved wording. | Yes, after a context check. |
| `light edit` | A small readability edit that **preserves one captured sentence's** situation and logic. | Yes, after a context check. |
| `market language` | Recognizable words seen on adjacent/competitor/market pages, embedded in Vastpakt context. | Yes, only embedded in Vastpakt context. |
| `Reddit/workday language` | Raw language from real operators/freelancers/owners about their workday. | Yes, embedded and classified. |
| `Vastpakt translation` | Vastpakt's own turn on sourced pain, **after** the source is already clear. | Only with a source/proof nearby. |
| `synthesis` | A new line built by combining several source signals. | **No.** Internal note / hypothesis only. |
| `unproven` | Sounds good but does not trace to one source, one work object, or one real workday situation. | **No.** Remove or label as hypothesis. |

**The dividing line:** `captured`/`light edit`/`market`/`workday` are *found*. `Vastpakt translation` is *turned from* something found. `synthesis`/`unproven` are *invented* — they may be useful internally but may not carry public hero/proof/CTA.

---

## Examples (good vs bad)

### Captured / light edit
- Source: "Na het opmaken van verschillende offertes laten klanten regelmatig niets meer weten."
- Light edit (preserves situation): "Je stuurt een offerte. Daarna hoor je niets meer."
- ✅ Ship-eligible — the situation traces directly to the source.

### Vastpakt translation (with source nearby)
- Source/work object: BAVAST — "de kennis zat in een mens en in een gewoonte, niet in een systeem" (`CASES-bavast.md`).
- Translation: "Jij bént het systeem geworden."
- ✅ Allowed — a real work object carries it.

### Synthesis (block from hero/proof/CTA)
- Signals: offerte + opvolging + eigenaar + status all appear across sources.
- Synthesised line: "Eigenaar, status en volgende stap staan naast de offerte."
- 🔴 If used as hero/proof/CTA → block. It combines signals with no captured sentence carrying it. Usable only as an internal note.

### Unproven
- "Bespaar tot 40% van je tijd." with no real case behind it.
- 🔴 Block — a number/outcome with no permissioned source. (Contrast BAVAST's "30 min–1 u per dossier", which IS sourced + cleared.)

---

## The gates

### Synthesis/unproven gate
Public hero, proof claim, and CTA must not **start from** synthesis. If a line combines several source signals, it may be used only as an internal note or a clearly labeled testable hypothesis. It may not carry the main hero, proof, or CTA without a captured sentence nearby.

### Proof gate
Every claim, number, outcome, named result, or testimonial needs a real, permissioned source.
- No invented figures, ROI, %, time-savings.
- Testimonials need consent and must be verbatim (no paraphrase-as-quote).
- A case outcome is case-specific — it must not silently become a general Vastpakt claim.

### Default copy test
> "Can I point to the source, work object, or real workday situation behind this sentence?"
If not → do not ship it.

### Default copy sequence (AGENTS.md)
`Bronzin → werkvraag → zichtbaar maken → Vastpakt-object`
A public line that skips straight to a polished Vastpakt-object without a Bronzin behind it is suspect.

---

## Internal-term leak list (must NOT appear in public copy)
`research`, `source-backed`, `Swipefile`, `agent`, `proof mechanism`, `verkoopkracht`, `copy move`,
`ordinary sentence`, `tijdlek`, `AI-score`, `besparingsbelofte`, `hypothese`, `synthesis`, `proof gate`.
These are internal tools, not public-facing section labels.

## Anti-hype reject list (flag if present in public copy)
- AI-agency language; automation-first language; generic process-optimization language.
- Consultancy theatre; ROI/KPI claims without proof.
- Hero lines that only sound good (no situation behind them).
- "Geen projectbrief" / "Geen standaardpakket" / "Geen voorbereiding".

## Register rule
- Default public address: `je` / `jouw`.
- Flag `ge` / `gij` / `uw` unless it preserves a source quote or is a deliberately marked informal test variant.

## Market-language recognition set (safe, embedded in Vastpakt context)
`manueel werk · copy-paste · dubbele invoer · vergeten opvolging · losse tools · bestaande systemen · CRM · Excel · facturatie · status · offerte · afspraak · bewijs · eigenaar · volgende stap`
Then make the Vastpakt turn: *"Waar raakt status, eigenaar, bewijs of volgende stap los?"*

---

## Calibration: which verdict?

- 🔴 **Block** — synthesis/unproven carrying hero/proof/CTA; an internal-term leak in public copy; a claim/number/testimonial with no permissioned source; an anti-hype line in a public slot.
- 🟡 **Source-near** — a `Vastpakt translation` or `light edit` whose source isn't cited nearby, or a line whose proof gate is still open (case exists but permission/figure unconfirmed).
- 🟢 **Sourced** — `captured` / `light edit` / `market` / `workday` / `user-approved` with a traceable source, or a `Vastpakt translation` with the source/work object sitting right next to it.

When torn between 🟡 and 🔴, ask: *would this line mislead a reader or overclaim if it shipped as-is?* If yes → 🔴.

When the copy is genuinely source-led across the board, say so plainly and leave the Block list empty. Do not manufacture findings.
