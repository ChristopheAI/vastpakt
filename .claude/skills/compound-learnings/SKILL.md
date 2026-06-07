---
name: compound-learnings
description: Capture a structured learning after a Vastpakt work iteration so future work compounds — each finished/reviewed copy, build, or research step turns its friction and fixes into a reusable rule, routed into the project's EXISTING knowledge stores (DISCOVERIES.md for empirical findings, docs/adr/ for decisions, COPY-PLAYBOOK.md for craft patterns, reviews/ for fail-able checklist rules, MARKT-TAAL.md for market voice). Promotes recurring learnings into pattern docs. Trigger after finishing or reviewing an iteration, or when the user says "capture this", "log the learning", "what did we learn", "compound this", or "wat hebben we geleerd".
---

# Compound Learnings

You are capturing a **learning** so the next unit of Vastpakt work is easier than the last (compound engineering). A learning turns one iteration's friction + fix into a durable, retrievable rule. The goal is not a new archive — it is to **route the learning into the store that already exists**, so there is one source of truth per domain.

## How to run

### Step 1: Reconstruct the iteration
Briefly: what were we doing, what slowed us or went wrong, what did we try, what worked? Use the actual transcript/diff — don't invent. (Honesty protocol: if a cause is unverified, say so.)

### Step 2: Write the learning (template)
```
## Learning: [short title]
- Date: YYYY-MM-DD
- Context: [what we were doing]
- Friction / problem: [what slowed us or went wrong]
- What we tried: [...]
- What worked: [the fix]
- Reusable rule: [the generalizable takeaway — one sentence]
- Confidence: tentative | solid | proven
- Routed to: [exact file + section]
```

### Step 3: Route it into the EXISTING store (do not create a parallel one)
| Learning type | Goes to |
|---|---|
| Empirical insight about market/copy/reader | `redesign-moodboard/DISCOVERIES.md` (new `Dxx`) |
| A deliberate decision (and why) | a new ADR in `docs/adr/` |
| A reusable copy/craft pattern or anti-pattern (e.g. an AI-tell) | `redesign-moodboard/COPY-PLAYBOOK.md` (e.g. §7) |
| A fail-able review rule | the matching `reviews/*.md` checklist |
| Real market/customer voice | `MARKT-TAAL.md` (new Bron) or `CASES-*.md` |
| Strategic shift | `STRATEGY.md` |

### Step 4: Promote to a pattern (governance)
When **≥3 learnings point to the same rule**, promote it to a pattern doc (usually `COPY-PLAYBOOK.md`):
- A pattern is higher-leverage but **riskier when outdated** — stamp it with a date/version.
- If a later learning contradicts a pattern, supersede it explicitly (like ADR-0005 did), never silently overwrite.

### Step 5: Confirm
State where you wrote it and the one-sentence reusable rule, so the user sees the compounding happen.

## Behavioral notes
- **Route, don't duplicate.** The value is concentration in one store per domain, not a second pile.
- **One rule per learning.** If you found three, write three learnings.
- **Tie to evidence.** Cite the `file:line`, the diff, or the source behind the rule. No invented causes.
- **Anti-patterns count.** "We did X and it backfired" is as valuable as a positive rule (e.g. the mirrored-fragment AI-tell, the team-assumption voice-leak — both already in COPY-PLAYBOOK §7).
- **Keep it lean.** A learning is a few lines, not an essay. Compounding fails if capture is heavy.
- **Compounding serves shipping.** Capture learnings *around* real shipped work — not as a substitute for shipping.

## Examples already in this repo (retro-fit)
- AI-tell: gespiegelde fragmenten ("niet X / net Y") → `COPY-PLAYBOOK.md §7`.
- Voice-leak: nooit "je team" aannemen (lezer is vaak solo) → `COPY-PLAYBOOK.md §7`.
- Verify-before-write caught the plan↔copy divergence → `docs/adr/0005`.
These are compound-learnings before the ritual had a name.
