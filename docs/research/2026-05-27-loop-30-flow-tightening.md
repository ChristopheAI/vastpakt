# Loop 30 - Flow Tightening

## Question

After adopting the landing page architecture as section jobs, what is the next smallest structural improvement?

## Browser Observation

Loop 29 added a secondary CTA after the examples:

```text
Wat krijg ik terug?
```

But the target section `#scan` was still much lower on the page, after the problem, method, connection, and stop sections.

That made the CTA job weaker: the reader asked for the offer details, but the page jumped far down the route.

The header navigation also did not match the actual reading order. It showed:

```text
Voorbeelden -> Eerste Zicht -> Check -> Contact
```

while the page reads:

```text
Hero -> Check -> Voorbeelden -> Eerste Zicht -> Contact
```

## Decision

Move the existing `Eerste Zicht` offer block directly after the secondary CTA.

Update header navigation to:

```text
Check -> Voorbeelden -> Eerste Zicht -> Contact
```

## Classification

No new public copy claim.

This loop is a placement and flow decision:

```text
recognition -> examples -> secondary CTA -> what you get
```

## Remaining Risk

The offer block is now earlier, but proof depth is still the main limitation. BAVAST remains the only named real case.
