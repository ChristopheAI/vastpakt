# Over Vastpakt source-of-truth draft

Date: 2026-05-30

Status: internal source-first draft. Do not publish yet without a source/check pass.

Intended route: `/over-vastpakt/`

## Copy job

This page must help Google, AI/agentic browsers, and a Vlaamse KMO visitor understand what Vastpakt is, who handles the first contact, what work situations fit, what does not fit, and how the first step works.

This is not a sales landing page. It is an entity and trust page.

## Source anchors

### Captured / approved local source

- `llms.txt`: `Vastpakt helpt Vlaamse KMO's waar werk blijft hangen tussen Excel, mail, WhatsApp, CRM, facturatie, afspraken of documenten.`
- `llms.txt`: `De eerste stap is geen nieuwe tool of groot traject.`
- `llms.txt`: `Een bezoeker stuurt of beschrijft een echte werksituatie.`
- `llms.txt`: `Christophe geeft binnen 24 uur een korte geschreven eerste blik terug, of een eerlijk nee.`
- `llms.txt`: `Eerste Zicht is de kleine eerste stap.`
- homepage: `Werk blijft hangen tussen Excel, mail en WhatsApp.`
- homepage: `Welke versie klopt? Wie volgt op? Waar staat bewijs? Wie heeft wat goedgekeurd? Waar leeft de volgende actie?`
- homepage: `Je situatie komt rechtstreeks bij Christophe terecht.`
- homepage: `Vastpakt geeft geen juridisch of boekhoudkundig advies.`
- operations runbook: first reply must stay small and should not become a sales call by default.
- Resend/Umami verification note: contact form, mail delivery, and submit tracking are technically proven for the approved testlead.

### Market language allowed for recognition

- manueel werk
- copy-paste
- dubbele invoer
- vergeten opvolging
- losse tools
- bestaande systemen
- CRM
- Excel
- facturatie
- status

## Page outline

1. What Vastpakt is
2. Who handles it
3. What situations fit
4. What Vastpakt does first
5. What Vastpakt does not do
6. Proof objects
7. Contact and response expectation
8. Machine-readable entity facts

## Draft copy with classification

### H1

```text
Over Vastpakt
```

Classification: public copy.

Source: entity page job; neutral label.

### Intro

```text
Vastpakt helpt Vlaamse KMO's waar werk blijft hangen tussen Excel, mail, WhatsApp, CRM, facturatie, afspraken of documenten.
```

Classification: captured sentence.

Source: `llms.txt`.

```text
Het eerste antwoord is geen nieuwe tool of groot traject. Je stuurt één echte werksituatie. Christophe kijkt waar status, eigenaar, bewijs, beslissing of volgende stap onduidelijk wordt.
```

Classification: light edit.

Source: `llms.txt`, homepage, operations runbook.

Risk: combines several source signals. Keep only if nearby page sections unpack each part.

### Who

```text
Vastpakt is de website van Christophe, zaakvoerder van Vastpakt.
```

Classification: light edit.

Source: homepage says Christophe is zaakvoerder; `llms.txt` says Vastpakt is de website van Christophe.

```text
Een ingestuurde situatie komt rechtstreeks bij Christophe terecht.
```

Classification: light edit.

Source: homepage: `Je situatie komt rechtstreeks bij Christophe terecht.`

### What fits

```text
Vastpakt past wanneer normaal werk vastloopt in gewone werkobjecten: een mail, offerte, Excel-rij, CRM-notitie, afspraak, factuurroute, planningwijziging of Word-document.
```

Classification: synthesis.

Source: `llms.txt` work objects and homepage examples.

Risk: `past wanneer` is stronger than source. Candidate public copy only if supported by fit/wrong-fit examples.

Safer version:

```text
Herkenbare werkobjecten zijn: mail, offerte, Excel-rij, CRM-notitie, afspraak, factuurroute, planningwijziging en Word-document.
```

Classification: captured/light edit.

Source: `llms.txt`.

### First response

```text
De kleine eerste stap heet Eerste Zicht.
```

Classification: captured/light edit.

Source: `llms.txt`: `Eerste Zicht is de kleine eerste stap.`

```text
In Eerste Zicht lees je wat je stuurde, waar status, bewijs of volgende stap onduidelijk wordt, en welke kleine volgende stap logisch is als verdergaan zinvol is.
```

Classification: light edit.

Source: `llms.txt` first-response bullets.

```text
Als het niet past, krijg je een eerlijk nee.
```

Classification: captured sentence.

Source: `llms.txt` and homepage.

### What Vastpakt does not do

```text
Vastpakt geeft geen juridisch of boekhoudkundig advies.
```

Classification: captured sentence.

Source: homepage FAQ.

```text
Vastpakt start niet met automatisering als de losse plek in het werk nog niet zichtbaar is.
```

Classification: Vastpakt translation.

Source: `llms.txt`: first step is no new tool or big trajectory; homepage: first visible before tool.

Risk: useful but interpretive. Keep as page copy only if paired with concrete examples.

### Proof objects

```text
Voorbeelden van werkobjecten die Vastpakt bekijkt: voorraadlijst, websiteblokken, mailboxlijst en Word-rapport.
```

Classification: light edit.

Source: homepage practice cases.

Risk: needs short context or links; otherwise it reads like a random list.

### Contact

```text
De publieke contactroute is https://vastpakt.be/#contact.
```

Classification: captured sentence.

Source: `llms.txt`.

```text
Je krijgt binnen 24 uur een korte geschreven eerste blik terug, of een eerlijk nee.
```

Classification: captured sentence.

Source: `llms.txt`, homepage, operations runbook.

## Recommended public version v0

Use this as the first live version only after one more source review:

```text
# Over Vastpakt

Vastpakt helpt Vlaamse KMO's waar werk blijft hangen tussen Excel, mail, WhatsApp, CRM, facturatie, afspraken of documenten.

Vastpakt is de website van Christophe, zaakvoerder van Vastpakt. Een ingestuurde situatie komt rechtstreeks bij Christophe terecht.

De kleine eerste stap heet Eerste Zicht. Je stuurt of beschrijft één echte werksituatie. Christophe kijkt waar status, eigenaar, bewijs, beslissing of volgende stap onduidelijk wordt.

Herkenbare werkobjecten zijn: mail, offerte, Excel-rij, CRM-notitie, afspraak, factuurroute, planningwijziging en Word-document.

In Eerste Zicht lees je wat je stuurde, waar status, bewijs of volgende stap onduidelijk wordt, en welke kleine volgende stap logisch is als verdergaan zinvol is.

Als het niet past, krijg je een eerlijk nee.

Vastpakt geeft geen juridisch of boekhoudkundig advies.

Je krijgt binnen 24 uur een korte geschreven eerste blik terug, of een eerlijk nee.
```

## JSON-LD direction

If this becomes a live page, align it with existing homepage `ProfessionalService` JSON-LD:

- `@type`: `ProfessionalService`
- `name`: `Vastpakt`
- `url`: `https://vastpakt.be/`
- `email`: `christophe@vastpakt.be`
- `areaServed`: `Belgium`
- `description`: reuse a light edit of the `llms.txt` description
- `sameAs`: add only verified public profiles

Do not add social/profile URLs until the profile is verified and consistent.

## What not to publish yet

- `AI/agentic source-of-truth page`
- `Charles Floate-style`
- `entity stack`
- `lead machine`
- `SEO`
- any claim about rankings, revenue, ROI, or conversion quality

Those are internal strategy terms, not public Vastpakt language.

## Next smallest step

Review this draft against source checklist, then decide whether to implement `/over-vastpakt/` as a simple static HTML page and link it from the footer.
