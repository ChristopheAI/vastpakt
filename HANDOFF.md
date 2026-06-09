# Vastpakt — Session Handoff (2026-06-07, avond)

> Plak dit als openingsbericht in de nieuwe sessie (of zeg: "lees HANDOFF.md").
> Je werkt verder als **Christophes copywriter** (hij noemt je "Alen", naar Alen Sultanic).

## 0. Lees eerst (bron van waarheid, in volgorde)
1. `CLAUDE.md` — Honesty Protocol (verify-before-write, niets verzinnen, zeg "niet geverifieerd").
2. `AGENTS.md` — source-first copy-discipline (captured language eerst).
3. `STRATEGY.md` — strategisch anker; **§8 = waar alle canonieke docs leven** (lees die tabel).
4. `redesign-moodboard/COPY-PLAYBOOK.md` + de `docs/adr/` (0001–0007).

## 1. DE DIRECTE TAAK: maak `/over-mij/` af
We deden een **live interview** met Christophe en schreven een nieuwe over-mij. Alles staat klaar:
- **Interview-capture:** `redesign-moodboard/OVER-MIJ-INTERVIEW.md` (zijn ruwe woorden + notities).
- **De draft:** `redesign-moodboard/OVER-MIJ-V2-DRAFT.md` (volledige nieuwe over-mij, belief-chain).
- **Wacht op 3 antwoorden van Christophe** (vraag ze als hij ze nog niet gaf):
  1. 🔴 Mag **"Nicola" + poederlakkerij** bij naam? (anders anonimiseren)
  2. 🔴 **Feiten reconcileren:** de draft zegt "15 jaar IT → 2 jaar geleden de verkoop in"; de huidige
     `/over-mij/` zegt *Cisco / eigen bedrijf FixZit / sinds 2005.* Wat klopt + mag publiek?
  3. 🟡 Eén **menselijke toets** terug (papa / circuit) of bewust strak houden?
- **Daarna:** `source-first-copy-audit` + `ogilvy-audit` op de nieuwe regels → de draft in
  `over-mij/index.html` zetten (vervangt de huidige profile-page hobby-collage) → renderen → deploy-klaar.
- **Waarom de huidige over-mij weg moet:** het is een personal-brand-collage (opent met muzieksmaak,
  hobby's vóór de credibility). De nieuwe is een **operator-trust belief-chain** (Realism: "the guru
  becomes the product").

## 2. Branch + PR (super specifiek)
- Werk op **`codex/homepage-redesign-shell`** (canoniek). Een **mirror** `claude/cool-keller-fk8cE` houden
  we identiek (force-sync na elke push). Huidige tip: **`8f4746e`**.
- **PR #21 is open:** `codex/homepage-redesign-shell` → `main`. ⚠️ **Mergen naar `main` = productie-deploy
  naar vastpakt.be** — pas doen als Christophe akkoord is.
- Een **stop-hook** waarschuwt bij niet-gecommitte/untracked files → commit + push na elke wijziging.
- Push-patroon: `git push origin HEAD:codex/homepage-redesign-shell`, dan
  `git branch -f claude/cool-keller-fk8cE HEAD` + `git push origin HEAD:claude/cool-keller-fk8cE --force`.

## 3. Wat al AF is (deze sessie)
De hele site staat op de nieuwe lat, geaudit (source-first 0🔴 + ogilvy 0 kritiek), gerenderd, gepusht:
- **`/` homepage v2** — Sultanic/Realism belief-chain, mechanisme-led ("van hoofd → systeem dat van jou
  is"). Hero met mechanisme-seed; "je bent de harde schijf"; nieuw blok "waarom harder werken niet werkt";
  BAVAST-proof met grens; operator-blok; zelfselectie; eerste stap; slot. Contactformulier intact.
- **`/werk/`** — pijn-first bewijsbibliotheek (4 echte cases, elk met "wat we niet beloven").
- **`/voor-wie/` v2** — recognition + signalen met mechanisme-tie + eerlijke Wel/Niet + FAQ.
- **`/over-mij/`** — nog de OUDE versie live; de v2-draft wacht (taak 1).
- **Lean 4-pagina-spine** (ADR-0006): oude pagina's → 301-redirects in `vercel.json`. sitemap/llms/nav coherent.

## 4. Werkregels (niet onderhandelbaar)
- **Honesty:** verify-before-write; nooit verzonnen proof/cijfers/quotes/scarcity; alleen het publiek-
  gecleardde BAVAST-cijfer (30 min–1 u). Zeg "niet geverifieerd" als je het niet checkte.
- **Source-first:** elke publieke regel traceert naar een bron/captured sentence. Draai
  `source-first-copy-audit` (doel 0🔴) + `ogilvy-audit` vóór je copy shipt.
- **Stem = Sultanic-craft in Vastpakts nuchtere Vlaamse register** (je/jouw): belief-chain, mechanisme als
  ruggengraat, **waarheid/herkenning i.p.v. hype** (de markt is in de **Realism-stage** — zie
  `MARKT-STADIUM.md`). Géén nepschaarste, géén bro-toon, leid met de **pijn**, niet met "ik bouw apps".
- **Interview-methode** (als je meer van Christophe nodig hebt): hij wil **heldere, enkele vragen als
  trigger**; jij vangt zijn **letterlijke woorden** (captured language) en graaft één vraag dieper.

## 5. De strategie-stack (waar alles leeft — `redesign-moodboard/`)
`STRATEGY.md` (anker) · `POSITIONING.md` (de lane = eigenaarschap/onafhankelijkheid) ·
`UNIQUE-MECHANISM.md` (van hoofd → systeem) · `MODEL-TEARDOWN.md` (aanbod-ladder + content-motor) ·
`PDOCS-AVATAR.md` · `MARKT-VRAGEN.md` (echte zoek-vragen + markt-bevestiging) · `MARKT-STADIUM.md`
(Realism) · `BUYER-BRIEF.md` (49-vragen) · `HOMEPAGE-BRIEF.md` · `HOMEPAGE-V2-COPY.md` ·
`CONCURRENTIE.md` · `MARKT-TAAL.md` (Bron 01–04) · `CASES-bavast.md` · `OVER-MIJ-INTERVIEW.md` +
`OVER-MIJ-V2-DRAFT.md`.

## 6. Omgeving-valkuilen (bespaart uren)
- **Netwerk-gate:** `WebFetch` faalt (403) op de meeste externe hosts; `WebSearch` werkt (US-geïndexeerd).
  Geen Vercel-deploy/CLI vanuit de sandbox (API geblokkeerd).
- **Geen lokale browser.** Visuele QA via de **`site-shots` GitHub Action**: `mcp__github__actions_run_trigger`
  → `run_workflow`, `workflow_id: shots.yml`, `ref: codex/homepage-redesign-shell`. `urls.txt` staat al op
  de 4 live pagina's. Wacht tot de bot een commit pusht (poll `git ls-remote`), pull, lees de PNG's in
  `redesign-moodboard/shots/`.
- **GitHub MCP** (`mcp__github__*`) valt soms even weg en komt terug; grote list-outputs → naar bestand
  (parse met python/jq, niet inline).

## 7. Open blockers (Christophes input / beslissingen)
- **`/over-mij/` afmaken** = taak 1 (3 antwoorden hierboven).
- **#19 — rauwe BAVAST klant-quote** (blok 5 homepage / `/werk/`): de laatste open proof-hefboom.
- **Deploy:** Christophe regelt Vercel (branch-preview) of mergt PR #21 → main (= live).
- **Pricing (#18):** bewust geen bedrag op de site (ADR-0007); floor-cijfer/continuïteit-model = later, intern.

## 8. Guardrails
- Vastpakt leidt met de **pijn**, niet met de bouw. Realism-markt → currency = **waarheid**.
- **Compounding dient shippen.** De research is rijk; de beperking is nu **shippen + Christophes inputs**.
