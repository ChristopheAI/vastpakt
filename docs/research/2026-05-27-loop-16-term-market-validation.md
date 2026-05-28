# Loop 16 - term market validation

Date: 2026-05-27

Purpose: validate whether the public page should say `workflow`, `proces`, `werking`, `stuk werk`, or a more ordinary sentence.

## User Claim

`Vastpakt bekijkt eigenlijk hoe workflows in bedrijven lopen.`

## Verdict

Correct as internal understanding.

Not optimal as public copy.

## Why

The market does use `workflow`, `proces`, `procesdigitalisering`, `process mapping`, and `werkstroom`. But the strongest reader-near lines are not nouns. They are ordinary diagnostic sentences:

- `hoe het vandaag loopt`
- `waar info vandaag zit`
- `waar loopt het vandaag stroef?`
- `Waar staan we?`
- `informatie zit verspreid over Excel, e-mail en losse systemen`
- `Je weet dat de informatie ergens staat. Je weet alleen niet meer waar.`
- `Begin bij wat er nu is.`
- `Schrijf het op. Letterlijk. Niet hoe je wilt dat het gaat, maar hoe het nu werkelijk gaat.`

## Exa Signals

### Codelines

Source: https://www.codelines.be/inzichten/artikel/procesdigitalisering-voor-kmos-minder-chaos-meer-overzicht/

Useful captured / near-captured language:

- `Start bij je werking, niet bij software`
- `waar loopt het vandaag stroef?`
- `informatie niet meer verspreid zit over Excel, e-mail en losse systemen`
- `Noteer waar info vandaag zit (tools + mensen)`
- `Waar staan we?`

Classification:

- `werking`: market language, but method-like.
- `waar info vandaag zit`: captured sentence, strong public direction.
- `Excel, e-mail en losse systemen`: market language.

### Florette Vervloet

Source: https://www.florettevervloet.be/bedrijfsprocessen-optimaliseren

Useful captured / near-captured language:

- `Je weet dat de informatie ergens staat. Je weet alleen niet meer waar.`
- `Begin bij wat er nu is.`
- `Hoe verloopt de overdracht tussen jou en je team?`
- `Schrijf het op. Letterlijk. Niet hoe je wilt dat het gaat, maar hoe het nu werkelijk gaat.`
- `Waar staat de informatie die je team nodig heeft?`
- `in mijn hoofd`
- `verspreid over drie kanalen`

Classification:

- `hoe het nu werkelijk gaat`: captured sentence.
- `waar staat de informatie`: captured sentence.
- `in mijn hoofd` / `verspreid`: workday language.

### Odoo / Odive

Sources:

- https://www.odive.be/blog/crm-software-kmo/
- https://www.odive.be/blog/odoo-lead-to-cash-belgie/

Useful captured / near-captured language:

- `opvolging, zichtbaarheid en overdraagbaarheid`
- `opvolging in je hoofd`
- `één eigenaar per lead`
- `een duidelijke volgende actie`
- `opvolging van openstaande posten`
- `routine met timing en eigenaarschap`

Classification:

- `eigenaar` and `volgende actie`: market language in CRM/process pages, not invented by Vastpakt.
- `routine met timing en eigenaarschap`: market language but too software/process-heavy for hero.

### Plugnotes / Process Mapping

Source: https://www.plugnotes.com/nl/blog/bedrijfsprocessen-te-optimaliseren

Useful captured / near-captured language:

- `Kijk waar het vandaag stroef loopt`
- `Documenteer hoe het vandaag loopt`
- `huidige situatie`
- `eenvoudig schema op een whiteboard`
- `optimaliseer eerst, automatiseer pas daarna`

Classification:

- `hoe het vandaag loopt`: captured sentence / market language.
- `huidige situatie`: market language, but more generic.

## Decision

The internal model can stay:

```text
Vastpakt kijkt hoe workflows in bedrijven lopen.
```

The public page should usually say:

```text
hoe het vandaag loopt
waar info binnenkomt
waar info zit
wat blijft wachten
wat daarna moet gebeuren
```

Use `werking` only as the Vastpakt method anchor:

```text
Eerst één werking zichtbaar maken. Dan pas kiezen wat moet veranderen.
```

Avoid making `workflow`, `procesoptimalisatie`, or `werkstroom` the public frame. They are real words, but they pull the page toward software, consultancy, or generic process improvement.

## Site Change

Changed:

```text
We kijken mee hoe één stuk werk door mail, Excel, CRM en mensen beweegt: waar het binnenkomt, waar iemand zoekt, wat blijft wachten en wat daarna moet gebeuren.
```

To:

```text
We kijken mee hoe het vandaag loopt: waar info binnenkomt, waar ze in mail, Excel, CRM of bij mensen zit, wat blijft wachten en wat daarna moet gebeuren.
```

## What Still Needs Proof

The new line is better sourced, but still combines multiple market signals. It should be tested with real Flemish KMO readers:

- Do they immediately understand what Vastpakt looks at?
- Does `info` feel concrete enough, or should the line name `mail, offerte, planning of factuurmoment` instead?
- Does `bij mensen zit` feel natural or too vague?
