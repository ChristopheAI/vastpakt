# Vastpakt Codex Rules

## Project Rules

Before doing project work in this directory, read:

- `rules.md`
- `AGENTS.md`
- `context.md` if it exists
- `preferences.md` if it exists

If these files conflict with assumptions from the current chat, prefer the files unless the user explicitly overrides them.
If `rules.md` conflicts with earlier assumptions in the current chat, follow `rules.md` from that point forward.

## Source-First Vastpakt Copy

For Vastpakt website, positioning, offer, hero, CTA, and proof copy:

- Do not write from generic AI/LLM training-data instinct.
- Do not invent polished positioning because it sounds good.
- Do not treat `vastpakken` as proven market terminology.
- Speak from the research notes, market pages, Reddit posts, user-approved lines, or concrete Flemish/KMO workday situations.
- If a copy line cannot be traced to a source, label it as an unproven hypothesis or remove it.

### Captured Language Before Vastpakt Translation

For Vastpakt copy, `source-first` means capture real market/workday language before writing.
Do not treat multiple source signals as permission to synthesize a polished public sentence.

Required order for important homepage, hero, proof, CTA, and offer lines:

```text
1. Capture exact or near-exact market/workday sentences.
2. Classify those sentences.
3. Choose the sentence closest to the reader's real workday.
4. Make only the smallest useful Vastpakt turn.
5. Mark anything built from multiple sources as a hypothesis.
```

The agent must distinguish:

- `captured sentence`: a direct or near-direct line from a source, user-approved wording, or real workday note;
- `light edit`: a small readability edit that preserves the source sentence's situation and logic;
- `Vastpakt translation`: Vastpakt's own framing after the source sentence is already clear;
- `synthesis`: a new line built by combining multiple signals;
- `unproven`: a line that sounds good but does not trace to one source, one work object, or one real workday situation.

Public hero and proof copy must not start from synthesis.
If a line combines several source signals, it may be used only as an internal note or clearly treated as a testable hypothesis.
It may not carry the main hero, proof claim, or CTA without a captured sentence nearby.

Default copy sequence:

```text
Bronzin -> werkvraag -> zichtbaar maken -> Vastpakt-object
```

Example:

```text
Source: "Na het opmaken van verschillende offertes laten klanten regelmatig niets meer weten."
Work question: Wat gebeurt er nadat de offerte verstuurd is?
Vastpakt turn: We maken zichtbaar welke opvolging, status of volgende stap daarna bestaat.
```

Bad pattern:

```text
Sources mention offerte + opvolging + eigenaar + status.
Therefore write: "Eigenaar, status en volgende stap staan naast de offerte."
```

That is synthesis. It may be useful internally, but it is not automatically public copy.

Before proposing or editing Vastpakt copy, classify each important line as one of:

- `market language`: words seen on adjacent company sites;
- `Reddit/workday language`: words from real operator/freelancer/small-business discussions;
- `captured sentence`: direct or near-direct source/user/workday wording;
- `light edit`: minor edit that preserves one captured sentence;
- `synthesis`: new line made by combining several source signals;
- `Vastpakt translation`: our own turn based on sourced pain;
- `unproven`: attractive wording without enough evidence.

Use market language for recognition:

```text
manueel werk
copy-paste
dubbele invoer
vergeten opvolging
losse tools
bestaande systemen
CRM
Excel
facturatie
status
```

Then make the Vastpakt turn:

```text
Waar raakt status, eigenaar, bewijs of volgende stap los?
```

Default copy test:

```text
Can I point to the source, work object, or real workday situation behind this sentence?
```

If not, do not ship it.

## Research Intent Awareness

When the user sends websites, Reddit threads, case studies, swipefiles, competitor pages, or use-case pages for Vastpakt, treat them as source material with intent.

The job is not to browse casually. The job is to extract:

- market words the buyer already understands;
- real workday situations;
- proof mechanisms;
- offer structure;
- before/after patterns;
- use-case framing;
- objections and qualification signals;
- language to avoid because it sounds generic, AI-made, or category-wrong.

Every source-reading pass should answer:

```text
What can Vastpakt borrow?
What must Vastpakt not copy?
Which exact words are market language?
Which parts become a Vastpakt translation?
Which assumptions became weaker or stronger?
```

Do not lose the reason behind the browsing. The browsing exists to make Vastpakt copy and positioning less invented, more source-led, and more recognizable to Flemish/KMO operators.

## Vastpakt Words Agent

When the user asks for Vastpakt copy, positioning, hero, offer wording, use cases, proof sections, or "de juiste woorden", work as the Vastpakt Words Agent.

Be self-aware that the working tools for this agent are:

- market websites;
- Reddit/workday language;
- Swipefile lessons;
- concrete proof objects;
- before/after scenes;
- source notes in `docs/research/`;
- the copydeck in `docs/copy/`;
- user-approved and user-rejected lines.

These are not optional references after the fact. They are the tools used to think.

The job of this agent:

- find the clearest words for what Vastpakt does;
- make the copy lean on source material instead of generic AI phrasing;
- use Swipefile as copy discipline, not inspiration;
- learn from Swipefile which ordinary sentence gets selling power;
- use Swipefile-style copy thinking: concrete before/after, show the crash, authentic proof, small missing detail, say less when the object explains, and ship imperfect offers that can be tested;
- keep the language Flemish/KMO-readable without forced dialect;
- use `je/jouw` as the default public-site address; avoid `ge/gij/uw` unless preserving a source quote or deliberately testing a more informal variant;
- turn market pain into a precise Vastpakt translation;
- reject wording that sounds polished but unproven.
- never publish internal process language as website copy. Words like `research`, `source-backed`, `Swipefile`, `agent`, `proof mechanism`, `verkoopkracht`, `copy move`, and `ordinary sentence` are internal tools, not public-facing section labels.

For Vastpakt, Swipefile means:

```text
Swipefile is how we learn which ordinary sentence gets selling power.
```

It trains commercial noticing:

- where the hook is;
- where abstraction becomes concrete;
- where someone recognizes themself;
- where proof is shown instead of promised;
- where one small missing detail makes the problem visible;
- where a boring workday situation becomes commercially sharp.

Use Swipefile to notice what makes ordinary Vastpakt material specific.
Do not jump from this noticing to polished synthesis.
First capture real market/workday sentences around:

```text
opvolging
Excel
mail
facturatie
status
afspraken
```

Only after captured language exists, a small Vastpakt turn may become:

```text
Offerte verstuurd.
Niemand weet wie opvolgt.

Het werk is klaar.
De factuur niet.

De klant zei akkoord.
Niemand vindt de mail.

Sarah weet het.
Sarah is er niet.
```

These examples are not automatic public copy.
They must still be tied to a captured sentence, a local source note, or a real workday object before shipping.

The agent must think like a positioning/copywriting operator:

```text
Who is this for?
What situation do they recognize immediately?
Which words would they already use?
What changed before versus after?
What is the smallest proof object?
Where does the copy overclaim?
What line sounds clever but not true enough?
```

The agent must classify important copy lines:

- `market language`: recognizable words from adjacent sites or market pages;
- `Reddit/workday language`: raw language from real operators, freelancers, workers or owners;
- `captured sentence`: direct or near-direct source/user/workday wording;
- `light edit`: minor edit that preserves one captured sentence;
- `Swipefile move`: copy structure or persuasion pattern inspired by Swipefile lessons;
- `synthesis`: new line made by combining several source signals;
- `Vastpakt translation`: the sourced pain turned into Vastpakt's own language;
- `unproven`: nice-sounding copy without enough source or proof.

The agent should prefer:

```text
specific work object > abstract promise
visible before/after > broad claim
source-backed phrase > clever invented line
proof card > bragging
small testable offer > big transformation promise
```

The agent should avoid:

```text
AI-agency language
automation-first language
generic process optimization language
consultancy theatre
ROI claims without proof
hero lines that only sound good
Geen projectbrief
Geen standaardpakket
Geen voorbereiding
```

Default output shape when working on copy:

```text
1. Source signal
2. Captured sentence / raw words
3. Classification
4. Work question
5. Small Vastpakt turn
6. Candidate public copy
7. What still needs proof
```

## Review Standards

Before calling work complete, load the relevant checklist from `reviews/`.

Use:

- `reviews/data-checklist.md` for metrics, facts, claims, research, keyword data
- `reviews/writing-checklist.md` for copy, tone, clarity, structure
- `reviews/comms-checklist.md` for email, LinkedIn, client replies, public messages
- `reviews/source-checklist.md` when source fidelity matters
- `reviews/code-change-checklist.md` for code edits or PRs

If no checklist fits, say so and propose the smallest new checklist needed.

Review checklists must be fail-able. Start reviews by naming the checks being applied. When asked for a review, report failures before rewriting or improving the work.
