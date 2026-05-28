# Loop 86 - Remaining Two-Step Line Breaks

## Question

After loop 85, where else does the same visual-copyflow issue appear?

## Verdict

Two public lines should use an always-visible break:

- `Eerst één werking zichtbaar maken. Dan pas kiezen wat moet veranderen.`
- `Twijfel je wat Vastpakt wel en niet doet? Hou het klein.`

## Change

Changed the break in both lines from mobile-only to always visible.

## Not Changed

Left these mobile-only breaks unchanged:

- `Alles loopt. Tot iemand vraagt waar het staat.`
- `Goedgekeurd design. Beheerbare blokken.`
- `Drie mailboxen. Eén lijst per mailbox.`

Reason: those breaks are responsive rhythm. The two changed lines carry step/contrast meaning that benefits from an intentional split on all viewport sizes.

## Boundary

No public wording, proof claim, CTA, offer or promise changed.
