---
name: source-first-copy-audit
description: Audits Vastpakt website/marketing copy against the source-first discipline in AGENTS.md. Every important line must trace to a real source — market language, Reddit/workday language, a captured sentence, a real work object, or user-approved wording. Each line is classified (captured / light edit / Vastpakt translation / synthesis / unproven), synthesis is blocked from carrying hero/proof/CTA, internal process language is flagged, and je/jouw register plus the anti-hype reject list are enforced. Trigger whenever Vastpakt hero, proof, CTA, offer, use-case, or homepage/subpage copy is reviewed, audited, scored, or proposed — or when the user asks "is this source-backed", "is this proven", "classify this copy", "can this go live", or "what's unproven here". Produces a diagnostic with ship/block verdicts and a specific fix per line. It is not a rewrite tool.
---

# Source-First Copy Audit

You are auditing Vastpakt copy against the **source-first** rules in `AGENTS.md` (and `CLAUDE.md`'s honesty protocol). The project's core belief: copy must be **found in real sources**, not invented because it sounds good. Your job is to show, line by line, which copy is traceable to a source and ship-eligible, and which is synthesis/unproven and must not carry public hero/proof/CTA.

This is a **diagnostic with ship/block verdicts and a specific fix per line.** It is not a rewrite tool. You show where copy fails the source-first rules and what to do (find the source, downgrade to internal hypothesis, or remove), so the writer fixes it.

## How to run

### Step 1: Get the copy and locate the sources
- If the user hasn't given copy, ask for it (a block, a page, or `redesign-moodboard/COPY-DRAFT.md`).
- Locate the source corpus. Read what's relevant before judging:
  - `redesign-moodboard/MARKT-TAAL.md` (Bron 01–04, market/competitor language)
  - `redesign-moodboard/CASES-*.md` (real client cases / product-truth)
  - `redesign-moodboard/INTENT-*.md` (intent / VoC research)
  - `docs/copy/`, `docs/research/` (copydeck + source notes)
  - `redesign-moodboard/COPY-DRAFT.md` and the wireframe map in `docs/plans/`
  - User-approved and user-rejected lines from the conversation.
- **Do not invent sources.** If you cannot find a source for a line, that absence IS the finding.

### Step 2: Read the full rubric
Read `references/rules.md` before auditing — the exact classification definitions, examples, the proof-gate rules, the internal-term leak list, the anti-hype reject list, and the register rule. Don't rely on memory.

### Step 3: Classify every important line
For each hero, proof, CTA, offer, and section-lead line, assign exactly one classification:
`market language` · `Reddit/workday language` · `captured sentence` · `light edit` · `Vastpakt translation` · `synthesis` · `unproven`.
Note where the line sits (hero / proof / CTA / offer / body) — placement changes severity.

### Step 4: Apply the gates
- **Synthesis/unproven gate:** a `synthesis` or `unproven` line may NOT carry the hero, a proof claim, or the CTA. It may live only as an internal note/testable hypothesis.
- **Proof gate:** any claim, number, outcome, testimonial, or named result needs a real, permissioned source. No invented figures.
- **Internal-term leak:** public copy must not contain internal process words (see list in rules).
- **Register:** default `je/jouw`; flag `ge/gij/uw` unless preserving a source quote.
- **Anti-hype reject list:** flag AI-agency / automation-first / consultancy-theatre / ROI-without-proof / "sounds-good-only" lines.

### Step 5: Output

Use this exact structure:

```
# Source-First Copy Audit

**Overall read:** [1–2 sentences. Is this copy source-led or invented? What's the single biggest risk?]

---

## 🔴 Block — must not ship
| Line | Where | Classification | Why blocked | Fix |
|---|---|---|---|---|
| "[quote]" | hero/proof/CTA/offer | synthesis / unproven | [1 sentence] | [find source X / downgrade to internal hypothesis / remove] |

## 🟡 Source-near — cite or prove
| Line | Where | Classification | What's missing | Fix |
|---|---|---|---|---|

## 🟢 Sourced — ship-eligible (after context check)
| Line | Where | Classification | Source |
|---|---|---|---|

---

## Internal-language leaks
[List any public line containing internal terms, or "None."]

## Register & anti-hype
[je/jouw violations + anti-hype list hits, or "Clean."]

## Sources I checked
[The files/notes you actually read.]

## Lines that need Christophe input
[Lines that cannot be classified or proven without his material — the real blockers.]
```

If a severity bucket is empty, write "None" — an empty Block list is the goal and writers should see it.

## Behavioral notes
- **The default test (AGENTS.md):** *"Can I point to the source, work object, or real workday situation behind this sentence?"* If not — do not ship it. Apply this to every public line.
- **Be specific, never vague.** Quote the exact line and name the exact source (file + what it says) or the exact gap. "This is synthesis" alone is useless; "this combines Bron 01 + the BAVAST case but no captured sentence carries it — downgrade or attach `CASES-bavast.md` quote" is useful.
- **Don't invent sources or proof.** Honesty protocol Layer 1: if you didn't verify a source exists, say "not verified." The whole point is to surface the unsourced.
- **`user-approved` is a real source.** A line Christophe explicitly approved in conversation is `user-approved` and ship-eligible after a context check — note it, don't block it as synthesis.
- **Synthesis is not banned — it's positioned.** Synthesis is fine as an internal note or a hypothesis to test. It is blocked only from carrying public hero/proof/CTA without a captured sentence nearby.
- **Don't moralize, don't pad.** Audit the line's sourcing, not the writer. Keep it tight.
- **Don't manufacture blocks.** If the copy is genuinely source-led, say so. A short audit with an empty Block list is a better audit than invented complaints.
- **Pairs with `ogilvy-audit`.** This skill checks *sourcing/truth*; ogilvy-audit checks *writing craft*. Run both for a full pass; they don't overlap.
