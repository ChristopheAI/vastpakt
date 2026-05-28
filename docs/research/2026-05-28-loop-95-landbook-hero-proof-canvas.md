# Loop 95 - Land-book Hero Proof Canvas

## Question

Can Land-book inspire a better Vastpakt homepage design move without copying another site's visual shell?

## Sources Checked

- Land-book home gallery: `https://land-book.com/`
- Land-book sections gallery: `https://land-book.com/sections`
- Land-book hero sections: `https://land-book.com/sections/hero`
- Land-book how-it-works sections: `https://land-book.com/sections/how-it-works`
- Land-book call-to-action sections: `https://land-book.com/sections/call-to-action`
- Land-book case-study sections: `https://land-book.com/sections/case-study`
- Land-book headlines taxonomy: `https://land-book.com/headlines`
- Current Vastpakt rendered homepage at `http://localhost:5502/?loop=93#top`

## Verdict

Land-book does not point to a new Vastpakt style. It points to stronger hierarchy: one composed first-viewport canvas, fewer equal-weight cards, and proof objects kept close to the claim.

The current Vastpakt hero was credible but visually too tall in the in-app browser state. The check section stayed below the first viewport because the hero collapsed to one column at widths where two columns still worked.

## Borrow

- Section composition discipline: one strong object should carry the first impression.
- More breathing room around the next section by reducing card height.
- Keep proof/object close to the first claim.

## Do Not Copy

- Gallery-style SaaS polish.
- 3D/product-render hero treatment.
- Dark glossy case-study panels.
- Broad stats, popularity proof, or visual spectacle without Vastpakt proof.

## Public Change

No public copy changed.

The hero proof card became more compact:

- smaller vertical gaps inside the proof card;
- lower contrast-card height;
- tighter work-trace, state-list, leak-strip, and footer spacing;
- hero remains two-column until a narrower breakpoint, so the check can appear sooner on desktop/tablet-width browser states;
- script query bumped to `loop95`.

## Classification

- visual hierarchy correction
- visual copyflow
- external inspiration translated into Vastpakt proof-object layout
- no new public claim

## Boundary

This loop does not solve the contact-form action blocker from loop 94. The form still needs a confirmed public destination before launch.
