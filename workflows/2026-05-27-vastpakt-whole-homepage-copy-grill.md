# Vastpakt Whole Homepage Copy Grill

## When To Use

Use this when the homepage copy feels plausible but may be too polished, too internal, too clever, or not traceable enough to source/workday language.

## Input Sources

- `/Users/christophe/Documents/Vastpakt/AGENTS.md`
- `index.html`
- `docs/copy/2026-05-27-vastpakt-homepage-copy-classification.md`
- `docs/experiments/homepage-experiments.tsv`
- relevant files in `docs/research/`
- `/Users/christophe/.codex/skills/vastpakt-copy-grill-with-docs/SKILL.md`
- rendered homepage in Browser at desktop and mobile

## Exact Prompt

```text
[$vastpakt-copy-grill-with-docs](/Users/christophe/.codex/skills/vastpakt-copy-grill-with-docs/SKILL.md)

hele homepage
```

## Output Format

The session should produce:

- a direct verdict on the weakest copy lines;
- line-level source status where needed;
- the smallest useful edit, only if the line is fixable;
- no broad rewrite;
- updated copy classification and experiments TSV;
- bumped `script.js?v=loopNN` if public files changed;
- verification commands and results.

## Review Step

Before editing, ask:

1. Can this sentence be tied to a source, work object, user-approved line, or real workday situation?
2. Does the so-what chain land on something the reader can see, follow, decide, or show?
3. Does the line sound like AI agency, SaaS, consultancy, or generic automation language?
4. Is the fix a small edit rather than a new positioning idea?

If the answer is not strong enough, weaken or remove the line instead of polishing it.
