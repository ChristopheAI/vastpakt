# Vastpakt Mobile Visual Copyflow

## When To Use

Use this when the user points out that a line break, heading rhythm, or mobile layout makes the copy read in the wrong order.

## Input Sources

- user screenshot or Browser mobile view;
- current `index.html`;
- current `styles.css`;
- Browser desktop and mobile verification;
- `docs/copy/2026-05-27-vastpakt-homepage-copy-classification.md`;
- `docs/experiments/homepage-experiments.tsv`.

## Exact Prompt

```text
op mobile zie je duidelijk in de hero dat

tot iemand

best begint op de lijn eronder

[screenshot]
```

Follow-up prompt that generalized the pattern:

```text
waar op de homepage is er ook zoiets gelijkbaardig?

okay zodus doen
```

## Output Format

The session should produce:

- visual-copyflow verdict;
- exact line(s) affected;
- CSS/HTML helper only if it preserves meaning;
- no public claim changes;
- updated docs and experiments;
- desktop/mobile Browser verification.

## Review Step

Check:

1. Does mobile read the intended sentence beats?
2. Did desktop meaning stay unchanged?
3. Did any text overflow or overlap?
4. Did the change add new public copy claims?

Only apply mobile line-break helpers to high-confidence two-beat sentences.
