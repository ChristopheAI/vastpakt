# Over Vastpakt Copy Improvement Loop

Date: 2026-05-30

## Question

The live `/over-vastpakt/` page worked technically, but the copy mostly repeated `llms.txt`. It did not yet show enough recognisable workday situations for a Vlaamse KMO visitor or an agentic reader.

## Exa source signals

- MindYourOwnBusiness article on Vlaamse KMO all-in-one platforms used market language around mailbox, CRM, planning, facturatiesoftware, information spread across systems, data manually transferred from CRM to invoice software, project details copied from quote to planning, and status not being up to date across tools.
- Let's get DIGITAL used direct pain around CRM not talking to facturatie, leads kept in Excel, handmatig facturen overtypen, and facturatie/offertes linked to CRM.
- Odoo/KMO content used language around losse tools, spreadsheets, manuele controles, offerte to order to factuur, scattered mailbox/Excel/accounting package, and people still keeping Excel for certainty.

## What Vastpakt can borrow

- Market words: losse tools, spreadsheets, Excel, CRM, facturatie, offerte, opvolging, status, manueel overnemen, verspreid.
- Workday situations: an offer is sent but follow-up is unclear; customer data is copied between CRM, Excel and facturatie; proof or approval exists but is not beside the dossier.
- Question pattern: where is the last version, who owns the next step, what proof/approval/invoice moment belongs to this?

## What Vastpakt must not copy

- The all-in-one platform promise.
- Odoo/ERP implementation framing.
- Dashboard, automation, KPI, ROI or efficiency claims.
- Strong claims about time saved, growth, compliance or fully connected data.

## Public copy decisions

- Keep the entity page job: explain what Vastpakt is, who replies, what fits, what does not fit, and how the first step works.
- Replace the vague H1 `Vastpakt helpt waar werk blijft hangen` with the more precise route: `Eerst zien waar werk blijft hangen.`
- Add a `Wanneer herken je dit?` block with three concrete situations before the identity/trust blocks.
- Add a `Wat kijkt Christophe eerst na?` block to make the first response operational, not biographical.
- Make the proof section about existing work objects instead of a thin list.

## Classification

- `Eerst zien waar werk blijft hangen.`: Vastpakt translation from `llms.txt` plus source signals that the first move should precede platform/tool choice.
- `Een offerte is verstuurd...`: light edit from local homepage/offerte language plus Exa market language around offerte/opvolging.
- `Klantgegevens worden opnieuw overgenomen...`: light edit from Exa market language around CRM, Excel and facturatie.
- `Een akkoord of bewijs bestaat wel...`: Vastpakt translation from local homepage questions around akkoord/bewijs/dossier.
- `Waar staat de laatste versie? / Wie is eigenaar? / Welk bewijs...`: light edit from current homepage question set.

## Guardrail

This is still an entity/trust page, not a conversion landing page. Do not turn it into an all-in-one platform page or an SEO article.

## Follow-up: `werkobjecten` market-language correction

User challenge: `Welke werkobjecten passen?` sounds like internal language rather than market language.

Additional Exa signals:

- Odoo/Belgian KMO lead-to-cash pages talk about leadopvolging in persoonlijke mailboxen, offertes in losse PDFs, facturatie in an apart boekhoudritme, overdrachtsmomenten without owner, scope, betaalvoorwaarden, leveringsafspraak, factuur and klantdata.
- KMO-Facturatie talks about offertes, bestelbonnen, digitale werkbonnen, facturen, betalingsopvolging, klantenfiche, verzonden e-mails and which last step happened on an offer.
- BlueCRM talks about klantgegevens in Excel, contracten in a map, afspraken on a post-it, e-mails, afspraken, notities, facturen, foto's, documenten, taken and klant/prospect dossiers.

Decision:

- Remove `werkobjecten` from public heading and OG image alt.
- Replace with a reader question: `Waar mag je vraag over gaan?`
- Keep concrete nouns in the body: klantmail, offerte, Excel-lijst, CRM-notitie, afspraak, planningwijziging, factuur, Word-document.

Classification:

- `Waar mag je vraag over gaan?`: Vastpakt translation. It fits the current contact route and avoids internal taxonomy.
- Concrete noun list: market/workday language from local copydeck plus Exa source language.

## Follow-up: remaining internal-language pass

User request: keep going with remaining internal language and use Exa to catch public market language.

Additional Exa signals:

- DeskManager uses ordinary admin language: facturatie, offertes, klantenbeheer, projectopvolging, losse info, centraal overzicht, planning, afspraken, Excel, agenda's, papieren notities, taken and deadlines.
- KMO-Facturatie uses: facturen, offertes, bestelbonnen, werkbonnen, betalingsopvolging, betaalstatus, laatste actie, aanvaarding/weigering, overzicht van offertes.
- Afandi uses: offerte tot definitieve factuur, zonder manuele overschrijving, betalingen opvolgen, openstaande saldi, herinneringen.
- UNIVO uses: klantenbeheer, contactgeschiedenis, notities, klantcommunicatie, taken, afspraken, facturen, projectopvolging, werfplanning.

Removed or weakened public internal terms:

- `werksituatie op tafel leggen` -> `één concrete vraag beschrijven`
- `factuurroute` -> `factuur die blijft wachten`
- `Wat kijkt Christophe eerst na?` -> `Waar kijkt Christophe eerst naar?`
- `Wie is eigenaar van de volgende stap?` -> `Wie moet opvolgen?`
- `bewijs` in one checklist line -> `akkoord, document of factuurmoment`
- `In Eerste Zicht lees je...` -> `Je krijgt een korte geschreven reactie...`
- `losse plek in het werk` -> `onduidelijke stap`
- `Vastpakt kijkt naar wat er vandaag al ligt` -> `Voorbeelden uit mail, lijsten en documenten`
- `Publieke contactroute` -> `Contactpagina`
- `Antwoord` -> `Reactie`
- `bewijs` in the top page layer -> `akkoord`, `document`, `laatste actie`

Kept deliberately:

- `Eerste Zicht` in navigation, because it is the offer label, but the explanatory card no longer requires the term to carry meaning.
- `status` in metadata and hero, because Exa repeatedly shows status, betaalstatus, laatste actie and opvolging language in adjacent market pages. It now sits beside `akkoord` and `laatste actie`, not as an internal field model.
