# Vastpakt New Session Handoff Prompt

## When To Use

Use this when starting a fresh Codex session for the Vastpakt homepage after a useful loop session. The goal is to make the next session faster, safer, and less likely to lose source-first constraints.

## Input Sources

- `/Users/christophe/Documents/Vastpakt/AGENTS.md`
- `index.html`
- `styles.css`
- `script.js`
- `docs/research/`
- `docs/copy/2026-05-27-vastpakt-homepage-copy-classification.md`
- `docs/experiments/homepage-experiments.tsv`
- `/Users/christophe/.codex/skills/vastpakt-source-first-homepage-loop/SKILL.md`
- `/Users/christophe/.codex/skills/vastpakt-copy-grill-with-docs/SKILL.md`
- Current local browser URL, usually `http://localhost:5502/?loop=NN#top`
- Latest completed loop notes from the prior session

## Exact Prompt

```text
You are Codex working in /Users/christophe/Documents/Vastpakt.

Goal:
Continue the Vastpakt homepage work from the current state. This is a source-first homepage loop for a Flemish KMO website about how work actually runs inside companies, where time is lost, and what must become visible before anything changes.

First read:
- /Users/christophe/Documents/Vastpakt/AGENTS.md
- index.html
- styles.css
- script.js
- docs/research/
- docs/copy/2026-05-27-vastpakt-homepage-copy-classification.md
- docs/experiments/homepage-experiments.tsv
- /Users/christophe/.codex/skills/vastpakt-source-first-homepage-loop/SKILL.md
- /Users/christophe/.codex/skills/vastpakt-copy-grill-with-docs/SKILL.md

Hard rules:
- Preserve user changes.
- Do not run destructive git commands.
- Do not delete files, add dependencies, touch secrets, change deployment config, commit, or push.
- Public copy must never mention: research, source-backed, Swipefile, agent, proof mechanism, verkoopkracht, copy move, ordinary sentence.
- Do not treat “vastpakken”, “situatiekaart”, “tijdlek”, or “Eerste Zicht” as proven market language.
- Use je/jouw in public copy.
- Do not copy Swipefile, Hugarro, X posts, Exa sources, or competitors visually or verbally.
- Do not write polished synthesis unless it is tied to source, work object, or user-provided fact.

Current method:
- Exa gives market/workday language when needed.
- Swipefile gives proof placement and page-discipline only.
- Browser gives rendered truth.
- Vastpakt translates into plain Flemish KMO workday language.
- Every useful loop updates docs/copy classification and docs/experiments TSV.
- If public files change, bump script query version in index.html.

Current site state:
- Local site: http://localhost:5502/
- Latest completed loop: loop 41.
- index.html currently loads script.js?v=loop41.
- Current page architecture:
  hero -> check -> compact BAVAST proof -> examples -> scroller CTA -> Eerste Zicht -> problem -> method -> connection -> Past dit -> FAQ -> contact -> footer.
- The check appears directly after the hero.
- Check heading: “Waar gaat tijd verloren?”
- Compact BAVAST proof sits directly under the check.
- BAVAST proof says report content is automatically prepared in the existing Word template, with control staying with the plaatsbeschrijver.
- BAVAST one-hour claim is user-provided practice evidence, not a general public promise.

Recent loop decisions:
- Loop 38 removed the lower stopmoment section because it added risk/conflict scenarios without new proof and slowed the route to fit/FAQ/contact.
- Loop 39 used Exa + Swipefile to decide how to handle “the person behind the company”.
  Verdict: person block should not be a biography; it should reduce contact friction near the form.
  Recommended placement: inside contact or directly between FAQ and contact.
- Loop 40 added a small contact trust line:
  “Christophe kijkt eerst naar dat ene voorbeeld. Geen projectbrief, geen standaardpakket.”
- Loop 41 used user-provided facts:
  public name = Christophe
  role = zaakvoerder van Vastpakt
  Current contact trust line:
  “Christophe, zaakvoerder van Vastpakt, kijkt eerst naar dat ene voorbeeld. Geen projectbrief, geen standaardpakket.”

Important unresolved person-block facts:
- Who replies after the example is submitted?
- Is there a public reply window or no timing promise?
- Photo yes/no/later?
- Can public copy promise an honest “this does/does not fit” response?
- Is there a safe proof anchor beyond BAVAST?
Do not write a fuller person block until these facts are known.

Likely next loop:
Continue the person-block work only if enough facts are provided. Otherwise ask for the missing facts or keep the existing one-line contact trust note.

Verification commands:
- git diff --check
- node --check script.js
- curl -s 'http://localhost:5502/?loop=NN#contact' | rg -n "loopNN|Christophe|Waar gaat tijd verloren|Stuur één voorbeeld"
- (rg -n "research|source-backed|Swipefile|agent|proof mechanism|verkoopkracht|copy move|ordinary sentence|AI-powered|future-proof|transform|unlock|scale|streamline|workflow|workflows|procesoptimalisatie|tijdlek|AI-score|besparingsbelofte" index.html styles.css script.js || true) | rg -v "initial-scale"
- Browser verification at desktop and mobile if visible copy/layout changes:
  no horizontal overflow;
  check still directly after hero;
  BAVAST proof still under check;
  contact path coherent;
  public copy does not leak internal terms.

Final response must include:
- Verdict.
- What loop was done.
- Files touched.
- Verification commands and results.
- Remaining uncertainty.
```

## Output Format

The next session should produce one of these:

- A small, verified homepage loop with updated docs and `script.js?v=loopNN`.
- A documented no-change decision if facts are missing.
- A short list of missing facts if public copy would otherwise be invented.

Final response should include:

- Verdict.
- Loop number and loop name.
- Files touched.
- Verification results.
- Remaining uncertainty.

## Review Step

Before reusing this prompt, check:

1. Is the latest completed loop still `loop 41`?
2. Does `index.html` still load `script.js?v=loop41`?
3. Did the user provide new facts after this workflow was written?
4. Did any public copy constraints change in `AGENTS.md`?
5. Does the local browser still point to the Vastpakt homepage?

If any answer changed, update the prompt before pasting it into a new session.
