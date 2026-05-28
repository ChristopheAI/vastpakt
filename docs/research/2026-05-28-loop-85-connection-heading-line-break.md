# Loop 85 - Connection Heading Line Break

## Question

Should `De context staat vaak ergens anders.` sit visually under `Het werk staat ergens.`?

## Verdict

Yes.

The heading has two contrast thoughts:

1. the work exists somewhere;
2. the context is often somewhere else.

The second thought should read underneath the first, not as a hidden mobile-only break.

## Finding

Before loop 85:

```html
Het werk staat ergens.<br class="mobile-beat-break"> De context staat vaak ergens anders.
```

The `.mobile-beat-break` class is hidden on desktop and shown only under the mobile breakpoint.

## Change

Changed the heading break to an always-visible `<br>`.

## Boundary

No copy, proof claim, CTA, offer, or promise changed.
