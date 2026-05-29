---
name: Vastpakt
description: "Recognition-first operational clarity for Flemish KMOs. Open with the stuck work, land immediately with Christophe looking at one real example. Calm, grounded, no tool-first hype."
register: brand

# Visual values below mirror styles.css :root verbatim. styles.css is the
# source of truth. If a token changes there, update both. New colors get
# declared in OKLCH per Impeccable; the existing set is kept in hex because
# that is what ships today.
colors:
  ink: "#17201b"          # headlines, body, <strong>
  muted: "#5f6b63"        # captions, labels, secondary text
  line: "#d8ded7"         # default border / divider (1px)
  paper: "#f7f9f7"        # page ground: neutral off-white, faint green lean (not cream)
  panel: "#ffffff"        # cards, raised surfaces
  soft: "#eef3ed"         # cool green-grey tint  (resolved / neutral state)
  soft-warm: "#f7efe8"    # warm tint  (problem / "before" state)
  accent: "#2f6f57"       # primary brand green: CTA, active, eyebrow
  accent-dark: "#194536"  # deep green: headings-on-tint, eyebrow text
  warn: "#b45b38"         # terracotta: the "stuck / not yet" signal, used sparingly

typography:
  family: "Schibsted Grotesk, ui-sans-serif, system-ui, -apple-system, sans-serif"  # webfont via <link> in head; system stack as fallback
  h1:
    fontSize: "clamp(2.55rem, 5.4vw, 5.1rem)"
    fontWeight: 850
    letterSpacing: "0"
  h2:
    fontSize: "clamp(1.9rem, 3.4vw, 3.45rem)"
    fontWeight: 850
  h3:
    fontSize: "1.18rem"
    fontWeight: 750
  body:
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  eyebrow:
    fontSize: "0.9rem"
    fontWeight: 850
    color: "{colors.accent-dark}"

rounded:
  card: "8px"
  pill: "999px"

material:
  card-border: "1px solid {colors.line}"
  card-shadow: "0 3px 8px rgba(23, 32, 27, 0.07)"   # defined, tight; pairs with the 1px border
---

# Design System: Vastpakt

## 1. North star

**Recognition first, Christophe as the safe entry point.**

Vastpakt earns attention by naming the stuck work a Flemish KMO recognises
instantly, and only then makes clear that one real person, Christophe, looks at
one real example. The problem opens the door. Christophe makes it concrete, safe
and actionable.

This replaces the older "north star is person-led" rule. Person-led was right for
trust but weaker for recognition. Vastpakt does not sell Christophe as a
consultant. It sells the feeling "ik zie eindelijk waar dit werk loskomt", and
that becomes safe because Christophe is the one who does it. So the page opens
with the practitioner pain, for example "Werk blijft hangen tussen Excel, mail en
WhatsApp", and lands immediately with the person who picks up one concrete
situation.

The seven rules that hold this together:

1. **The hero may lead with a concrete stuck-work scene.** Excel, mail, WhatsApp,
   offerte, factuur, planning, akkoord, versie, opvolging. The opening line is the
   reader's workday, not a positioning statement.
2. **Christophe appears in the first screen or first interaction.** The visitor
   should know quickly that a real person, not an agency funnel, a generic scan or
   a tool, looks at the example.
3. **The CTA stays small and concrete.** Prefer "Stuur één voorbeeld" over generic
   asks like "Boek een call", "Vraag advies" or "Start project".
4. **Vastpakt is not tool-first.** Never position the first answer as automation,
   software, AI, procesoptimalisatie, digitale transformatie or a new system.
5. **The diagnostic frame stays.** Status, eigenaar, bewijs, beslissing, volgende
   actie.
6. **The recognition test.** A Vlaamse KMO-zaakvoerder or operations person should
   think: "Ja, zo loopt het hier vast. Alles staat ergens, maar niemand weet zeker
   wat klopt of wat nu moet gebeuren."
7. **Person-led, reframed.** The problem opens the door. Christophe makes it
   concrete, safe and actionable.

The interface should still feel like a calm, capable colleague looking at your
real work with you. Grounded, plainspoken, Flemish. Not a SaaS dashboard, not a
consultancy brochure, not an AI demo.

Everything below serves one test, borrowed from how the copy already gets
written here: for every block on the page, point to the sentence that makes it
specifically Vastpakt. If you cannot, it is generic by default.

## 2. Colors

The system is light and quiet. Green carries the brand; terracotta carries one
meaning only.

- **Ink** (`#17201b`): all primary text and headlines. Warm near-black, never pure black.
- **Muted** (`#5f6b63`): captions, labels, secondary lines. Must still clear 4.5:1 on its background; do not let it drift lighter "for elegance".
- **Accent green** (`#2f6f57`) and **Accent-dark** (`#194536`): the brand. Primary CTA fill, active state, eyebrow text, resolved-state emphasis. If one color must stand for Vastpakt, it is this green.
- **Terracotta warn** (`#b45b38`): the "stuck, waiting, not yet" signal. It marks the gap, never decoration. One meaning, used sparingly.
- **Soft** (`#eef3ed`) vs **Soft-warm** (`#f7efe8`): the two state tints. Warm = the problem / "before"; cool green-grey = neutral / "after". This pairing is content, not styling, so keep it consistent wherever a before/after appears.

**The green carries brand rule.** Do not introduce a second brand hue. No blue "trust", no purple, no gradient accents.

**The terracotta has one job rule.** Terracotta means an unresolved operational gap. Do not reuse it as a generic highlight or heading color.

## 3. Typography

One family, hierarchy through weight and scale. Weights in use: 400 body, 750
sub-headings, 850 headlines and labels.

- **h1** `clamp(2.55rem, 5.4vw, 5.1rem)`, weight 850, letter-spacing 0. Max stays under the 6rem ceiling on purpose; the page states, it does not shout.
- **h2** `clamp(1.9rem, 3.4vw, 3.45rem)`, weight 850. Section anchors.
- **h3** `1.18rem`, weight 750. Panel and card headings.
- **Body** `1rem`, weight 400, line-height 1.5. Cap line length at 65 to 75ch.

**No all-caps sentences rule.** Uppercase only for short labels of four words or fewer.

**The eyebrow is rationed rule.** See Open Decision 4. The eyebrow style (0.9rem, weight 850, accent-dark) is fine as a device; the problem is using it above every section.

## 4. Material

Mostly flat. Depth comes from the 1px hairline border and a single soft shadow,
not from layered effects.

- Cards: `#ffffff` on the page ground, 1px `#d8ded7` border, 8px radius.
- Radius tops out at 8px for cards and panels; 999px pills are for buttons and tags only. Do not round cards past 12px.

**No nested cards rule.** A card never contains another bordered, rounded card.
Group inner content with background tints, spacing, or a single hairline divider
instead. (This is already applied in the hero card.)

**No glass, no gradient text rule.** No decorative blur, no `background-clip: text`.

## 5. Voice and the anti-references

This is the heart of the contract, and it comes straight from the loop research.
Vastpakt is defined as much by what it refuses to say as by what it says.

**What Vastpakt says:**

- Plain Flemish operator language: opvolging, bewijs, akkoord, volgende stap, wat is klaar, wie is aan zet.
- One concrete situation, not the whole operation. "Eén situatie is genoeg."
- Make visible first, decide later. "Eerst zichtbaar maken. Dan pas kiezen wat moet veranderen."
- The mechanism, in the reader's own words. A workday sentence, not an abstract "vraag".

**What Vastpakt refuses (mined from the research docs, verbatim intent):**

- **No tool-first answer.** "Ze hebben niet altijd een nieuwe tool nodig." "Niet elk probleem vraagt meteen een nieuwe tool." The page never opens with software.
- **No more-paperwork promise.** The frame is "meer zicht, niet meer papierwerk".
- **No Excel-shaming.** "Sometimes Excel is not the problem. The unclear status around Excel is the problem."
- **No CRM-readiness pressure.** "Ge moet nog niet klaar zijn voor een CRM. Eén situatie is genoeg."
- **No automation-first stance.** "Niet elk manueel stuk moet ge automatiseren. Sommige stukken moet ge eerst begrijpen."
- **No build-to-impress.** "Ik bouw niet om te tonen wat technisch kan."
- **No pure task/status tracking framing.** "A task is not enough." The business must know what was agreed, what counts as done, when payment follows.
- **No internal jargon in public copy.** "Vastpakken" is the internal positioning verb, not market proof. No "KPI" or "ROI" in v1 unless tied to a real measured output.
- **No generic filler.** No "geen gedoe", no "ontzorgen", no consultancy adjectives.
- **No first-contact friction.** Do not ask the visitor to upload a real mail, offer, Excel row, or document as the first action (loop 120). Ask them to describe the stuck spot in one sentence (loop 121).
- **No coverage-creep.** "The page should feel sharper, not heavier." Leave operational issues out rather than list them all.

**No em dashes rule.** Use commas, colons, semicolons, periods, or parentheses.
This applies to every word that ships on the page.

## 6. Do and Do Not

### Do
- Do lead with the reader's stuck moment, in their words.
- Do keep green as the only brand color and terracotta as the only gap signal.
- Do keep one type family, hierarchy through weight.
- Do keep cards flat, bordered, 8px, never nested.
- Do let sections vary in shape and length. One sentence is allowed to be a section.
- Do say less than the research knows. Sharper, not heavier.

### Do Not
- Do not open with, or lean on, a new tool / automation / CRM.
- Do not introduce a second brand hue, a gradient, or gradient text.
- Do not put an eyebrow above every section.
- Do not nest cards or round them past 12px.
- Do not use internal jargon, KPI/ROI language, or generic SaaS adjectives publicly.
- Do not make the first contact action an upload or a document.
- Do not use em dashes.

## 7. Resolved identity decisions

The three flagged tells were resolved on 2026-05-29, each toward the option that
removes the AI default while preserving the calm, light, person-led identity.

1. **Page ground: warm cream to neutral off-white.** `#fbfaf6` became `#f7f9f7`,
   a near-neutral off-white with a faint green lean toward the brand hue, not
   warm-by-default. The page stays light and calm; the cream tell is gone. Warmth
   now lives only where it carries meaning: the terracotta accent and the
   `soft-warm` "problem" state tint. The sticky header and the two section
   gradients were retinted to match (cool, tokenized), so nothing reads as cream.

2. **Type family: Schibsted Grotesk, chosen on the real UI.** Inter was never
   loaded, so the page rendered in the system font. Three non-tell candidates
   (Hanken Grotesk, Schibsted Grotesk, Bricolage Grotesque) were loaded live on
   the hero and compared as real renders, not names. Christophe picked Schibsted
   Grotesk: editorial and confident, with a utility/operator clarity that fits
   "grounded, Flemish, not SaaS" without reading as trendy. It loads via a
   `<link>` in the head (preconnect + stylesheet, not a blocking `@import`), with
   the system stack as fallback. Not on Impeccable's overused-face tell list.

3. **Card shadow: from floaty to defined.** `0 18px 60px` (60px blur) became
   `0 3px 8px` (8px blur). Cards keep slight lift but no longer pair a 1px border
   with a wide soft shadow, so the "ghost card" tell is gone.

With these resolved, the detector runs clean (0 anti-patterns), and this file is
now a hard guardrail: every future edit, by anyone or any AI harness, reads it
first and preserves the identity instead of re-deciding it from scratch.

## 8. The first-response artifact (operating truth)

Confirmed by Christophe on 2026-05-29. The first response is a free, short,
written first look at the one example you submitted, within 24 hours. It is not
an audit, not a call, not a paid deliverable. It is a complete small piece of
work that stands alone, not the full fix.

Four parts (the post-first-contact summary pattern, transformed to Vastpakt's
voice; never framed as audit/scan/report):

1. Wat je stuurde, in jouw woorden.
2. Wat er eigenlijk speelt: waar status, bewijs of volgende stap onduidelijk wordt.
3. De kleine volgende stap, als je verder wil.
4. Wat dit niet is: het eerlijke nee.

Any homepage copy about the first response must stay true to this. Do not
promise more than this artifact delivers, and do not let it drift into
"audit / scan / report" framing. This is what makes the offer-certainty claim
honest rather than invented.
