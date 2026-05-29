# Loop 128 - Lead the Hero With the Person

Date: 2026-05-29

## Decision Intent

The brand is one person (DESIGN.md section 1: "Vastpakt is one person, Christophe, who picks up the operational thread"), but the hero led with a dense diagram card and hid Christophe far down the page. Test leading the hero with the person instead.

## Scene

The hero right column. Before: a `situation-card` telling the offerte to opvolging story four ways (scene-contrast + work-trace + state-list + leak-strip + footer).

## Evidence Lenses (Exa)

Steal the mechanism (lead with the human), not the surface.

- **Founder-Led Credibility Hero** (Landdding pattern 9, `https://landdding.com/blog/above-the-fold-landing-page-design-patterns-that-increase-signups`): "People trust people more than brands. A founder face plus a direct personal statement create a trust signal no logo wall can replicate. Best for the 0 to 10k stage, niche B2B where the founder is a recognized practitioner." This is Vastpakt exactly.
- **Lockerfella** (`https://www.mcneece.com/2026/05/lockerfella-one-man-van-website-strategy/`): "Here's Sean. Here's his face. Bin the 'team of experts' rubbish. Show the human, not a stock photo." Won because it was honest, one real person.
- **Mojojet** (`https://www.apexure.com/landing-page-examples/mojojet-landing-page`): "'Hi, I'm Nick and Zack' makes the relationship personal before the product is described. B2B buyers are hiring people, not an abstraction."
- **Subtraction** (DigitalApplied `https://www.digitalapplied.com/blog/landing-page-conversion-study-2000-pages-tested-2026`; CopyCrest `https://copycrest.com/research/b2b-homepage-conversion-study`): "the fix is usually subtraction, not addition"; stacking too much above the fold is cognitive load.

## Mechanism

- **What works:** show the real person, with a direct first-person statement, for a one-person niche brand.
- **What Vastpakt borrows:** Christophe's real photo in the hero, a first-person promise that folds in the section 8 artifact, and one tight offerte beat instead of the four-way diagram.
- **What Vastpakt must not copy:** Lockerfella's tradie voice, Mojojet's gradient, any stock photo (DESIGN anti-reference).
- **Why it works:** for a 0 to 10k, niche, one-person brand the face is the proof. It unifies three things that were separate: the person (section 1), offer certainty (section 8), and subtraction.

## Change

Replaced the hero `situation-card` with a person block: Christophe's real photo plus "Ik ben Christophe. Stuur één voorbeeld uit je werkdag. Binnen 24 uur krijg je een korte geschreven eerste blik terug, of een eerlijk nee." and one offerte beat ("Je stuurt een offerte. 'Ik hoor het wel.' Wat gebeurt er daarna?").

Revise pass after the first want verdict: resolved a voice clash by changing the left lede from third person ("Christophe kijkt mee") to second person ("Je krijgt iemand die meekijkt"), so the right column owns the first-person reveal ("Ik ben Christophe"). Kept one beat (subtraction).

## Want Verdict

Keep (revised). The hero now leads with the human, carries the offer-certainty promise above the fold, and drops the four-way retelling. Voice is consistent (left sets up, right reveals).

## Open / Next

- Photo crop (`object-position: center 28%`) was set without a clear large screenshot; verify the face framing on a real screen and nudge if needed.
- The old hero-card CSS (`.scene-contrast`, `.work-trace`, `.state-list`, `.leak-strip`, `.card-footer`) is now unused. Clean up in a separate loop; leaving it does no harm but it is dead code.
- Headline is still a question ("Iemand nodig die dit vastpakt?"). A statement variant remains an open test (statements win 3 of 3 in MarketingExperiments; the question is on-brand and echoes Six Fingers). Separate loop.

## Source Appendix

- Landdding: `https://landdding.com/blog/above-the-fold-landing-page-design-patterns-that-increase-signups`
- Lockerfella / McNeece: `https://www.mcneece.com/2026/05/lockerfella-one-man-van-website-strategy/`
- Mojojet / Apexure: `https://www.apexure.com/landing-page-examples/mojojet-landing-page`
- Digital Applied: `https://www.digitalapplied.com/blog/landing-page-conversion-study-2000-pages-tested-2026`
- CopyCrest: `https://copycrest.com/research/b2b-homepage-conversion-study`
- FoundryCRO (headline benchmarks): `https://foundrycro.com/blog/landing-page-headline-benchmarks-2026/`
