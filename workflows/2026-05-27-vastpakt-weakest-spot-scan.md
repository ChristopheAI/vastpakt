# Vastpakt Weakest Spot Scan

## When To Use

Use this when the homepage feels close, but one section may be slowing the route, overclaiming, repeating proof, or adding unproven complexity.

## Input Sources

- current homepage in Browser at desktop and mobile;
- `index.html`;
- `styles.css`;
- `docs/copy/2026-05-27-vastpakt-homepage-copy-classification.md`;
- `docs/experiments/homepage-experiments.tsv`;
- relevant loop notes in `docs/research/`.

## Exact Prompt

```text
[$vastpakt-source-first-homepage-loop](/Users/christophe/.codex/skills/vastpakt-source-first-homepage-loop/SKILL.md)

zoek zwakste plek
```

## Output Format

The session should produce:

- section map of the current homepage;
- weakest section verdict;
- why it is weak: proof gap, repetition, friction, order problem, or category drift;
- smallest useful action: keep, weaken, move, remove, or document no-change;
- updated docs and experiments;
- verification results.

## Review Step

For the candidate weak section, ask:

1. Does it reduce Recognition, Proof, Safety, Choice, or Action doubt?
2. Does it add proof or only add more explanation?
3. Does it slow the route to fit, FAQ, and contact?
4. Is removal safer than rewriting?

If a section adds claims without proof, prefer removal or weakening over making it sound better.
