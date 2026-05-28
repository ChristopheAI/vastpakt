# Loop 20 - BAVAST Use Case Proof

## Question

How can the homepage show a real Vastpakt outcome without turning it into a generic automation claim?

## Local Source Signals

- BAVAST Vercel README: upload a Plaud `.docx` transcript, extract source text, generate `RapportData`, inject the BAVAST Word template, store DOCX/receipt artifacts, and show readiness/download for Bart.
- BAVAST upload UI: `Transcript lezen`, `Ruimtes herkennen`, `Rapportinhoud maken`, `Word-document en controle voorbereiden`.
- BAVAST readiness UI: `Het Word-rapport is gegenereerd en klaar om te downloaden.`
- User-provided case signal: a plaatsbeschrijver wins about one hour because manual copy-paste from documents into Word now runs through a Python tool.

## Exa Market Signals

- PB Plus: `minder manueel werk`, `uniforme rapporten`, `vaste structuur`, `Foto's + vaststellingen netjes samen, geen zoekwerk`.
- Outspoken: `Geen papier, geen templates, geen typwerk`, `Je ontvangt het afgewerkte document als Word of PDF`.
- Kodi article: place descriptions are often `tijdrovend, foutgevoelig en manueel`; repetitive work includes rooms, damage, repeated formulations, and legal wording.
- PlaceGenie: photos/voice to report, report generated in minutes, time-saving claims.

## Classification

- `Plaud transcript` -> captured local work object.
- `Word-rapport` -> market/local work object.
- `minder manueel werk`, `geen typwerk`, `geen zoekwerk` -> market language.
- `ongeveer één uur minder copy-paste en Word-werk per dossier` -> user-provided case claim, not independently measured in the repo.
- `Python maakt de rapportinhoud en zet die in het BAVAST Word-template` -> local implementation fact from BAVAST repo.
- `Vastpakt maakte zichtbaar welke stappen nodig zijn` -> Vastpakt translation based on local BAVAST flow.

## Small Vastpakt Turn

Do not claim that Vastpakt always saves a fixed amount of time.

Show one real work trace:

```text
Plaud transcript
-> transcript lezen
-> ruimtes herkennen
-> rapportinhoud maken
-> Word-document voorbereiden
-> plaatsbeschrijver controleert
```

Then attach the outcome:

```text
Ongeveer één uur minder copy-paste en Word-werk per dossier.
```

## Decision

Add BAVAST as a fourth proof card under examples, because the homepage needed one non-hypothetical case beside the three recognizable workday scenes.

Keep the claim small and concrete. Do not generalize it to all clients.

## Still Unproven

- The exact one-hour saving is user-provided practice evidence, not a measured benchmark in the BAVAST repo.
- The site still needs a fuller case page or proof note later if this becomes a headline claim.
