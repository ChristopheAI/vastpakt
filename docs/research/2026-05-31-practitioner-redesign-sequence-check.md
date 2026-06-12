# Practitioner redesign sequence check

Date: 2026-05-31

Status: internal sequencing check for the GitHub board. Not public copy.

## Question

How certain should we be about the order of the Vastpakt homepage redesign tickets?

## Exa sources checked

- Involve Digital, `Website Redesign Checklist & Process Guide 2026`
  - URL: `https://www.involvedigital.com/insights/website-redesign-checklist-guide`
  - Useful signal: discovery and information architecture before design; wireframes before visual design; design system/global styles before page-level build; content readiness is a major timeline risk.
  - Reliability: B. Agency/practitioner guide, directly about redesign process.

- Brand Vision, `Web Design Agency Process: Discovery to Launch, Step by Step (2026)`
  - URL: `https://www.brandvm.com/post/web-design-agency-process-2026`
  - Useful signal: deliverables by phase; discovery, IA, content planning, UX/UI design system, development, QA; design QA checks grid, spacing, typography, mobile behavior, edge cases and accessibility before development.
  - Reliability: B. Agency/practitioner guide, directly about delivery sequence.

- Digital1010, `When to actually redesign a website`
  - URL: `https://digital1010.com/insights/website-redesign-guide`
  - Useful signal: weeks 1-2 discovery/IA approved on paper before pixel decisions; typography/palette and design tokens before build; imagery direction and shot lists before brand-defining visuals; QA/instrumentation before launch.
  - Reliability: B. Practitioner article with concrete week-by-week sequencing.

- Rawcut Creative, `Web Design Process: Discovery, UX, Design, Development, and Launch`
  - URL: `https://rawcutcreative.com/web-design-process/`
  - Useful signal: discovery -> architecture/sitemap -> UX strategy/wireframes -> UI visual system -> development -> QA.
  - Reliability: B. Agency process page, useful for sequence.

- Search Engine Land, `Site redesign checklist to preserve SEO & improve visibility`
  - URL: `https://searchengineland.com/guide/site-redesign-seo-checklist`
  - Useful signal: before layout/fonts, get clear on content strategy, audit/inventory URLs and metadata, draft architecture and URL strategy, validate wireframes/prototypes before high-fidelity build, and run staging QA.
  - Reliability: B. SEO practitioner/editorial guide, strong on migration/URL risk.

## Finding

The previous order was close but not strong enough.

Confirmed:

- `#11` wireframe/content map must come before implementation.
- `#12` worktree/branch protection must come before code.
- `#13` visual system/foundation should come before `#1` page shell if the shell includes reusable CSS and layout patterns.
- `#14` assets should come before the person block.
- `#15` proof/privacy should come before `/werk/`.

Missing:

- A current URL/metadata/SEO-risk inventory before implementation. Even for a small static site, existing routes and metadata should be recorded before a redesign changes navigation, sitemap or page responsibilities.

## Board correction made

Added GitHub issue:

```text
#16 - 00c - Inventory current URLs, metadata and SEO-risk before redesign
```

Final board order:

```text
#11 Wireframe/content map
#12 Protect current worktree and create redesign branch
#16 Current URLs, metadata and SEO-risk inventory
#13 Visual system and responsive layout foundation
#1 Four-page site shell
#2 Homepage typographic hero and bridge line
#14 Christophe/page assets
#3 Christophe person block and why block
#4 Three project cards section
#15 Proof and privacy pass for /werk cases
#5 /werk proof page structure
#6 /voor-wie fit page structure
#7 /over-mij Christophe page structure
#8 Footer, contact routes and navigation
#9 Sitemap, metadata and internal links
#10 Final mobile browser and source-first QA
```

## Confidence

Confidence after practitioner check: high.

Reason:

- The order now matches the common professional sequence: discovery/IA/content map -> work protection -> URL/SEO inventory -> design system -> implementation -> page-specific content/assets/proof -> metadata/QA.
- The remaining uncertainty is not sequence, but exact content decisions inside each ticket.
