# Reddit Handwork Signal Harvest - Round 2

Date: 2026-05-26

Purpose: turn Reddit complaints into reusable Vastpakt proof material.

Working filter:

```text
Reddit klacht -> verborgen handwerk -> Vastpakt-haak -> proofcard -> match score
```

Do not collect generic automation inspiration. Keep only posts where the loose work can be shown before a tool is proposed.

## Round 2 Harvest

### 1. Workflow Triggers Without A Higher-Level View

Source: https://www.reddit.com/r/smallbusiness/comments/11aulcf/what_tool_to_use_for_documenting_business/

Raw complaint:

> "We have some of our processes documented at the detail level. However we don't have a cohesive, higher level view of work streams and what triggers them."

Handwork signal: undocumented triggers and work streams.

Vastpakt hook:

```text
Welke gebeurtenis zet dit werk eigenlijk in gang?
```

Proofcard:

- Voor: procedures bestaan verspreid op detailniveau.
- Wat blijft hangen: niemand ziet welk event welk werk triggert.
- Vastpakt maakt zichtbaar: triggers, werkstromen, volgorde, eigenaar en uitzonderingen.
- Na: het team ziet welk werk start bij klantvraag, maandbegin, onboarding of facturatie.

Match score: 5/5.

Why it matters: this is almost exactly the Eerste Zicht promise. The poster explicitly does not want workflow automation yet. They want to document triggers and streams first.

### 2. Excel, WhatsApp And Email Folder Chaos

Source: https://www.reddit.com/r/smallbusiness/comments/1rmd39a/is_anyone_elses_business_basically_held_together/

Raw complaint:

> "Everything from tracking supplier contracts to basic client follow-ups is just scattered across Excel, WhatsApp, and email folders."

Handwork signal: fragmented operational state.

Vastpakt hook:

```text
Waar valt opvolging uiteen tussen Excel, WhatsApp en mail?
```

Proofcard:

- Voor: contracten, klantopvolging en reminders zitten in losse plekken.
- Wat blijft hangen: welke spreadsheet de laatste versie is en welke datum opgevolgd moest worden.
- Vastpakt maakt zichtbaar: ingang, eigenaar, status, reminder en laatste betrouwbare versie.
- Na: het werk ligt niet meer in drie plekken tegelijk zonder zichtbaar spoor.

Match score: 5/5.

Why it matters: this gives exact language for the homepage problem section.

### 3. WhatsApp Orders Retyped Into Excel/Xero

Source: https://www.reddit.com/r/smallbusiness/comments/1qald5w/how_are_you_guys_handling_the_flood_of/

Raw complaint:

> "re-type orders from WhatsApp into Excel/Xero for 2 hours every night."

Handwork signal: free-text order intake becomes manual structured data entry.

Vastpakt hook:

```text
Waar wordt een aanvraag eerst gelezen, daarna opnieuw ingevoerd?
```

Proofcard:

- Voor: klant stuurt bestelling via WhatsApp.
- Wat blijft hangen: items, aantallen, klantnaam en facturatiegegevens moeten opnieuw geïnterpreteerd worden.
- Vastpakt maakt zichtbaar: welke velden uit elk bericht nodig zijn voor bestelling, boekhouding en opvolging.
- Na: WhatsApp kan ingang blijven, maar de overdracht naar bestelling en factuur krijgt een controleerbaar spoor.

Match score: 5/5.

Why it matters: very concrete KMO pattern. Strong for distributors, trades, service businesses, horeca suppliers, and local B2B.

### 4. Weekly Tracker Refresh And Email Ritual

Source: https://www.reddit.com/r/excel/comments/1fqb1uo/best_approach_to_automating_weekly_report/

Raw complaint:

> "Every week I have to refresh the table, save the worksheet to a SharePoint shared document folder, and email a copy to my boss."

Handwork signal: recurring report ritual.

Vastpakt hook:

```text
Welke wekelijkse rapportage bestaat alleen omdat iemand ze blijft herhalen?
```

Proofcard:

- Voor: iemand opent Excel, ververst, bewaart, hernoemt en mailt.
- Wat blijft hangen: laatste versie, wie ze nodig heeft, en of mailen nog nodig is.
- Vastpakt maakt zichtbaar: bron, refresh-moment, opslagplek, ontvanger en beslissingswaarde.
- Na: het team weet of het rapport nodig is, waar de actuele versie staat en wat ermee beslist wordt.

Match score: 4/5.

Why it matters: useful, but slightly more office/Excel than KMO-specific. Keep if paired with local examples like planning, voorraad, prestaties, offertes, timesheets.

### 5. Reports Nobody Reads

Source: https://www.reddit.com/r/dataanalysis/comments/1le3jln/data_analysts_whats_the_most_pointless_report_you/

Raw complaint:

> "I manually merge 6 Excel files every Monday just for my boss to glance at it once."

Handwork signal: recurring report with unclear reader and unclear decision.

Vastpakt hook:

```text
Welk rapport wordt gemaakt zonder dat duidelijk is wie ermee beslist?
```

Proofcard:

- Voor: meerdere Excel-bestanden worden samengevoegd op vaste momenten.
- Wat blijft hangen: de ontvanger, beslissingswaarde en stopregel zijn onduidelijk.
- Vastpakt maakt zichtbaar: wie leest, welke beslissing volgt, en wanneer het rapport mag stoppen.
- Na: rapportage wordt gekoppeld aan een echte beslissing of geschrapt.

Match score: 4/5.

Why it matters: strong for the "waarom doen we dit nog?" layer, but less direct as first homepage example.

### 6. Approval Bottleneck At Every Stage

Source: https://www.reddit.com/r/marketing/comments/173wmjw/how_to_deal_with_approval_bottleneck/

Raw complaint:

> "Every single thing we do in the marketing department be approved through them at the idea stage, draft stages, and final polished product stage."

Handwork signal: approval path with too many gates.

Vastpakt hook:

```text
Waar wacht werk omdat akkoord niet zichtbaar begrensd is?
```

Proofcard:

- Voor: elk stuk werk wacht op akkoord in meerdere fasen.
- Wat blijft hangen: wie mag beslissen, welk soort akkoord nodig is, en wanneer stilzwijgen blokkering wordt.
- Vastpakt maakt zichtbaar: akkoordmomenten, beslissingsrechten, wachttijd en escalatiepad.
- Na: niet alles hoeft langs dezelfde persoon of dezelfde stap.

Match score: 4/5.

Why it matters: good signal, but should be translated away from marketing-department language into KMO approvals: offerte, aankoop, planning, meerwerk, betaling, levering.

### 7. Owner As The Hidden Router

Source: https://www.reddit.com/r/startup/comments/1rvz6x8/for_service_businesses_whats_the_one_operational/

Raw complaint:

> "Every decision, every client call, every approval goes through one person."

Handwork signal: one-person routing and approval dependency.

Vastpakt hook:

```text
Welke werking stopt zodra één persoon niet kan antwoorden?
```

Proofcard:

- Voor: zaakvoerder of teamlead verdeelt, keurt goed, beslist en onthoudt context.
- Wat blijft hangen: teamleden weten niet wat ze zelf mogen afhandelen.
- Vastpakt maakt zichtbaar: welke beslissingen echt oordeel vragen en welke gewoonte geworden zijn.
- Na: eenvoudige beslissingen krijgen regels, uitzonderingen krijgen een zichtbaar pad.

Match score: 5/5.

Why it matters: direct fit with Vlaamse KMO reality. This is probably a top-three homepage proof scenario.

### 8. Lead Assignment Stuck With Managers

Source: https://www.reddit.com/r/salesforce/comments/1n8iata/emailbased_lead_assignment_without_logging_into/

Raw complaint:

> "We rely on managers to assign manually."

Handwork signal: lead or request routing based on tacit rules.

Vastpakt hook:

```text
Wie beslist vandaag naar wie een aanvraag moet?
```

Proofcard:

- Voor: aanvraag komt binnen, maar toewijzing hangt af van managerkeuze.
- Wat blijft hangen: regels voor segment, regio, product, senioriteit of dealgrootte zitten in hoofden.
- Vastpakt maakt zichtbaar: routeringsregels, uitzonderingen en wie eigenaar wordt.
- Na: de meeste aanvragen krijgen een zichtbaar eerste pad; uitzonderingen blijven bespreekbaar.

Match score: 3/5.

Why it matters: useful pattern, but Salesforce-specific. Use only after translating to "aanvragen verdelen" instead of CRM jargon.

### 9. Leads Not Worked Through

Source: https://www.reddit.com/r/marketing/comments/1szurec/losing_a_client_because_they_dont_work_the_leads/

Raw complaint:

> "They just aren't working through them all."

Handwork signal: intake volume exceeds follow-up capacity.

Vastpakt hook:

```text
Waar komt werk binnen dat niemand tijdig vastpakt?
```

Proofcard:

- Voor: aanvragen of leads komen binnen, maar slechts een deel krijgt opvolging.
- Wat blijft hangen: wie volgt op, wanneer, en welke aanvragen blijven liggen.
- Vastpakt maakt zichtbaar: binnenkomst, prioriteit, eigenaar, opvolgmoment en verloren aanvragen.
- Na: het team ziet niet alleen hoeveel binnenkomt, maar ook wat werkelijk opgevolgd wordt.

Match score: 4/5.

Why it matters: useful for contact/router framing. Needs local translation: aanvragen, offertevragen, herstellingen, plaatsbezoeken, reservaties.

## Best Round 2 Patterns For Vastpakt

Top three homepage candidates:

1. Excel/WhatsApp/mail chaos.
2. One owner as hidden router.
3. Workflow triggers without a higher-level view.

Strong support examples:

- Weekly report ritual.
- Approval bottleneck.
- Leads or requests not worked through.

Use carefully:

- Salesforce-specific routing.
- Data analyst report debates.
- Tool-specific automation threads.

## Improved Search Method For Round 3

What worked:

- Search by pain phrase, not solution phrase.
- Start from `r/smallbusiness`, then branch to specialist subreddits only for a specific signal.
- Keep the exact complaint line, because Reddit language is closer to customer language than agency language.
- Score each result against Vlaamse KMO reality before adding it to the Vastpakt system.

What slowed round 2 down:

- Some subreddits turn the issue into tool advice too quickly.
- Google snippets are useful for finding posts, but final selection needs the opened Reddit page.
- English results are rich, but not automatically local enough.
- Technical subreddits produce good patterns but bad homepage language.

Round 3 rules:

- Search with noun clusters from KMO work: `order`, `quote`, `invoice`, `timesheet`, `schedule`, `supplier`, `client follow-up`, `WhatsApp`, `Excel`, `email`.
- Pair every search with one hidden-work verb: `retype`, `copy`, `merge`, `approve`, `assign`, `chase`, `follow up`, `waiting`.
- Avoid searches that start with `automate`; they attract tool builders instead of real operators.
- Add Dutch/Flemish probes after the English map is clear:
  - `site:reddit.com/r/belgium zelfstandige Excel factuur`
  - `site:reddit.com/r/BEFreelance offerte opvolging`
  - `site:reddit.com/r/Netherlands zzp Excel administratie`
  - `site:reddit.com/r/werkzaken planning Excel`

## Transfer Into Vastpakt

The page should not say:

```text
Wij automatiseren uw handwerk.
```

It should say, in effect:

```text
Wij tonen eerst waar werk vandaag blijft hangen:
in een hoofd, inbox, spreadsheet, WhatsApp-bericht, rapport of akkoordmoment.
```

Most reusable question:

```text
Waar wordt werk vandaag opnieuw gelezen, opnieuw ingevoerd of opnieuw gevraagd?
```

Best proofcard title candidates:

- WhatsApp-bestelling Zonder Spoor
- Excel Als Laatste Waarheid
- Zaakvoerder Als Router
- Rapport Zonder Beslissing
- Akkoord Dat Blijft Wachten
- Aanvraag Zonder Eigenaar

