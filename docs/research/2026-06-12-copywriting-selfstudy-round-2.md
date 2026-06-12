# Copywriting Selfstudy Round 2: Round-1 Tools Applied to the Live Homepage

Date: 2026-06-12

Type: self-application round. No external source; the round-1 tools (falsifiable test, competitor-sign test, shorter-version test, zoom-in test) run against `index.html` as live.

## Findings

### 1. The strongest copydeck line is not on the page

`Alles loopt. Tot iemand vraagt waar het staat.` and `Je kunt wijzen.` do not appear anywhere in `index.html` (verified by grep). Round 1 scored `Je kunt wijzen.` as the only line passing all four tests including competitor-sign. The copydeck's best asset is unused.

Status: finding, not a change. Whether it belongs on the page is a copy decision for the copydeck process, not an automatic edit.

### 2. Only one of four praktijkcases is falsifiable

The mailbox case carries exact numbers: `Uit 76.307 berichten kreeg de klant drie tabbladen met 9.743 adresregels verdeeld per mailbox.` This is the only sentence on the page that fully passes Dry's `you can't bullshit specifics`.

The other three cases describe but cannot be proven wrong:

- voorraadcase: `hoeveel kg na verbruik overbleef` — has the unit, lacks the number.
- merkwebsite: no number, no before/after measure.
- Word-rapport: no number (rapporten per maand? minuten copy-paste per rapport?).

The benchmark is internal: the mailbox case shows what the page itself already considers provable. Question for Christophe (added to werkboek-route): do the real numbers for the other three cases exist?

### 3. Page-level repetition fails the shorter-version test

The enumeration `opvolging, akkoord, [...]` appears 13 times in 8 slight variations (grep count). Each instance reads fine alone; together they read as template drift — the same risk flagged in the Schrijftrainer reading (`DISC`-blokken herhaald per pagina). Candidate: keep the list in hero + check + FAQ, vary or cut elsewhere.

## Verdict per test

```text
falsifiable:      1 of 4 cases passes; 24u-belofte passes; rest describes.
competitor-sign:  hero "Veel dubbel werk tussen Excel, mail en WhatsApp" is signable;
                  "Je stuurt een offerte. 'Ik hoor het wel.'" is not — keep leaning on that register.
shorter-version:  fails at page level (finding 3), passes at sentence level.
zoom-in:          "Van los naar zichtbaar." is the most abstract H2; the section under it
                  is concrete, so acceptable — but "zichtbaar" zoomed in = "je kunt wijzen" (unused).
```

## Checklist upgrade

Added to `reviews/writing-checklist.md`: a page-level repetition check.

## Classification

- All three findings: review observations, re-testable via grep.
- "Vary or cut elsewhere" and "put `Je kunt wijzen.` on the page": candidates/hypotheses — copy decisions, not applied.
- Missing case numbers: open question for the werkboek-interview (ronde 1, V2 covers the cases).

## Meta-lesson for the loop

A self-application round produced more actionable findings per minute than the reading round, and it found an internal benchmark (the mailbox numbers) that no external source could provide. Encoded in the loop spec.
