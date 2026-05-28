# Vastpakt Person Block Source Pass

## When To Use

Use this when deciding whether or how to show the person behind Vastpakt on the homepage.

## Input Sources

- current contact section in `index.html`;
- `docs/research/2026-05-27-loop-39-person-trust-exa-swipefile.md`;
- latest copy classification and experiments TSV;
- Exa examples of founder-led/solo consultant pages when new comparison is needed;
- Swipefile discipline as placement logic only;
- user-provided person facts.

## Exact Prompt

```text
laten we focussen op hoe andere website's dat doen rond de persoon van het bedrijf

stop met samenvatten zinnen zelf te schrijven!!!!!

swipefile gaat u hier beter op antwoorden samen met exa search mcp
```

Useful follow-up facts:

```text
Christophe
ik ben de zaakvoerder van Vastpakt
```

## Output Format

The session should produce:

- verdict on whether a person block is justified;
- Exa pattern table if external comparison was used;
- placement decision;
- facts needed before public copy;
- no public biography unless facts are known;
- if editing, only a small contact-friction line;
- updated docs and experiments;
- verification.

## Review Step

Before writing public copy, confirm:

1. Public name format.
2. Public role/title.
3. Who reads submitted examples.
4. Who replies.
5. Reply window or no timing promise.
6. Photo yes/no/later.
7. Honest fit/no-fit promise yes/no.
8. Safe proof anchor.

If these facts are missing, do not write a fuller person block. Keep or document the one-line contact trust note.
