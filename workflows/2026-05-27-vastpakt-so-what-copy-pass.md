# Vastpakt So-What Copy Pass

## When To Use

Use this when the page says what Vastpakt does, but not clearly enough what the visitor can now see, follow, decide, or safely ask next.

## Input Sources

- current `index.html`
- `docs/copy/2026-05-27-vastpakt-homepage-copy-classification.md`
- `docs/experiments/homepage-experiments.tsv`
- relevant source notes around transferability, proof, contact, and first scan
- `/Users/christophe/.codex/skills/vastpakt-copy-grill-with-docs/SKILL.md`

## Exact Prompt

```text
ken je de so what test

test eens bij vastpakt copy

okay move forward in the optimal way possible
```

## Output Format

For each important line reviewed:

- current line;
- so-what result;
- source status;
- keep/change/remove decision;
- smallest next action.

If editing:

- change only the lines where the so-what chain fails;
- avoid clever metaphors;
- keep claims tied to source/work object/user-approved wording;
- update classification and experiments TSV;
- bump `script.js?v=loopNN`;
- verify.

## Review Step

Run this chain:

```text
Line says X.
So what?
The visitor can see/follow/ask/decide Y.
So what?
That matters in concrete workday situation Z.
```

If the chain ends in efficiency, growth, AI, transformation, or a vague benefit, the line is not ready.
