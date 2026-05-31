# Source-first four-page wireframe map v1

Datum: 2026-05-31

Status: uitvoering van GitHub issue `#11 - 00 - Source-first four-page wireframe map`. Intern plan. Geen publieke copy. Geen implementatie.

Doel: de competitor transfer map opnemen in een bouwbare vierpagina-architectuur voor het Vastpakt-homepageherontwerp.

Bronnen:

- `rules.md`
- `AGENTS.md`
- `context.md`
- `preferences.md`
- `index.html`
- `docs/plans/2026-05-31-vastpakt-homepage-herontwerpbrief-v1.md`
- `docs/plans/2026-05-31-vastpakt-visual-design-brief-v1.md`
- `docs/plans/2026-05-31-github-spec-new-homepage-redesign.md`
- `docs/research/2026-05-31-competitor-copy-transfer-map-v1.md`
- `docs/research/2026-05-31-copywriter-homepage-structure-map.md`
- `docs/research/2026-05-31-letsdevelop-competitor-outcome-language.md`
- `docs/research/2026-05-31-krits-competitor-outcome-language.md`
- `docs/research/2026-05-31-flowlift-outcome-correction.md`
- `docs/copy/2026-05-27-vastpakt-homepage-copy-classification.md`

## 1. Wat probeer ik te bouwen?

Ik probeer geen publieke website te bouwen.

Ik probeer de eerste inhoudelijke blauwdruk te bouwen voor:

```text
/
/voor-wie/
/werk/
/over-mij/
```

Deze wireframe-map moet vastleggen:

- welke pagina welke taak krijgt;
- welke blokken op welke pagina horen;
- welk competitor-mechanisme elk blok draagt;
- welke Vastpakt-copyrichting al bruikbaar is;
- welke copy alleen hypothese is;
- welke proof of Christophe-input nog ontbreekt;
- wat later in code mag worden gebouwd en wat eerst nog niet.

De kernkeuze:

```text
CopyJay = homepage-spine.
Pieter = persoon, vertrouwen en over-mij-architectuur.
Let's Develop, Krits en Flowlift = workday/outcome/boundary-taal.
```

De huidige homepage is bronmateriaal, niet de te beschermen eindvorm.

## 2. Hoe moet dit systeem werken?

De nieuwe site moet de bezoeker in deze volgorde laten begrijpen:

1. Dit gaat over mijn werkdag.
2. Dit gaat over concrete werkobjecten: mail, offerte, Excel, CRM, facturatie, afspraak, bewijs, status, eigenaar en volgende stap.
3. De gewenste richting is minder dubbel werk en duidelijkere opvolging.
4. Ik hoef nog geen tool, automatisering of oplossing te kennen.
5. Ik kan één concrete situatie beschrijven.
6. Ik hoef geen bestand te sturen.
7. Christophe geeft binnen 24 uur een korte geschreven eerste blik, of een eerlijk nee.

De vier pagina's verdelen de bewijslast:

| Pagina | Hoofdtaak | Wat ze niet moet doen |
| --- | --- | --- |
| `/` | Eerste herkenning, richting, persoon, drie projectingangen en lage-frictie actie. | Volledige cases, volledige biografie, brede dienstenwinkel. |
| `/voor-wie/` | Zelfkwalificatie via herkenbare signalen en niet-fit. | Sectorlijst zonder werkobjecten, automatiseringsdiagnose, sales intake. |
| `/werk/` | Bewijsbibliotheek per werkobject/case. | Algemene beloftes, testimonials zonder toestemming, softwareportfolio. |
| `/over-mij/` | Christophe als persoon en werkwijze. | Copywriter-imitatie, cv-pagina, losse bio zonder werkmethode. |

## 3. Welke componenten heb ik nodig?

Minimaal nodig voor issue `#11`:

- Vier paginajobs.
- Blokkenvolgorde per pagina.
- Per blok:
  - bronmechanisme;
  - Vastpakt-richting;
  - copylabel;
  - proof gate;
  - no-copy grens.
- Een lijst van huidige homepage-onderdelen die meegaan, verhuizen, verzwakken of verdwijnen.
- Een beslislog voor wat nog niet live mag.

Niet nodig voor issue `#11`:

- HTML.
- CSS.
- browserlayout.
- responsive details.
- metadata.
- sitemap.
- nieuwe assets.
- contactroute-aanpassing.
- publieke copyfinalisatie.

## 4. Waar moet deze logica leven?

Dit document is het bronbestand voor issue `#11`:

```text
docs/plans/2026-05-31-source-first-four-page-wireframe-map-v1.md
```

Latere publieke implementatie mag pas hierna naar:

- `index.html`
- `voor-wie/index.html`
- `werk/index.html`
- `over-mij/index.html`
- `styles.css`
- `script.js` alleen indien nodig
- `sitemap.xml`
- `llms.txt` indien de publieke routes veranderen

Deze map mag later worden gebruikt door:

- issue `#12` voor branch/worktree-lane;
- issue `#16` voor URL/metadata/SEO-inventaris;
- issue `#13` voor visuele layoutbasis;
- issue `#1` en verder voor echte build.

## 5. Waarom breekt dit ding?

Dit wireframe breekt als:

- het competitor-copy vertaalt naar letterlijke zinnen;
- de homepage opnieuw te veel tegelijk wil doen;
- `Eerste Zicht` weer het eerste begrip wordt dat de bezoeker moet snappen;
- `zichtbaar maken` weer de eindbelofte wordt;
- `automatisch` de eerste promise wordt;
- projectkaarten als diensten of pakketten lezen;
- `/werk/` cases algemene outcomes claimen;
- `/over-mij/` een imitatie van Pieter wordt;
- Let’s Develop/Krits/Flowlift de site richting software, AI, KPI, ROI of implementatie duwen;
- de 24-uursbelofte of "geen bestand nodig" niet dicht bij de CTA staat;
- proof gates verdwijnen zodra er aantrekkelijke copy staat.

## 6. Verdict: bouwen

Verdict: bouwen

Niet bouwen in code. Wel bouwen als interne wireframe-map.

Dit document is voldoende richtinggevend voor issue `#11`, maar niet voldoende voor publieke copy of implementatie.

## Copylabels

Gebruik deze labels in alle pagina's:

| Label | Betekenis | Mag live zonder extra check? |
| --- | --- | --- |
| `user-approved` | Door Christophe expliciet goedgekeurde richting of zin. | Alleen na proof/contextcheck. |
| `current-site` | Staat al in de huidige Vastpakt-site. | Alleen als de redesigncontext klopt. |
| `market language` | Herkenbare woorden uit competitor/market/workday-bronnen. | Alleen ingebed in Vastpakt-context. |
| `Vastpakt translation` | Eigen Vastpakt-draai op bronmateriaal. | Niet zonder bron/proof nabij. |
| `synthesis` | Nieuwe lijn uit meerdere bronnen gecombineerd. | Nee, eerst valideren. |
| `proof needed` | Claim heeft case, asset, toestemming of runbookbewijs nodig. | Nee. |
| `internal only` | Goed voor planning, niet als publieke taal. | Nee. |

## Homepage `/`

### Paginajob

De homepage moet een onbekende Vlaamse KMO-bezoeker laten denken:

```text
Dit gaat over mijn dubbel werk vandaag.
Ik moet nog geen oplossing kennen.
Ik kan klein beginnen door één situatie te beschrijven.
```

De homepage is geen bewijsarchief, geen dienstenpagina en geen volledige over-mij.

### Blokkenvolgorde

| Volgorde | Blok | Bronmechanisme | Vastpakt-richting | Copylabel | Proof gate | Niet kopieren |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Topnavigatie | Pieter: `Werk`, `Voor wie`, `Over mij` als routes. | `Voor wie`, `Werk`, `Over mij`. | `user-approved` site-architectuur. | Routes moeten later bestaan en SEO/URL-check passeren. | Huidige anchor-nav als hoofdstructuur behouden. |
| 2 | Typografische hero | CopyJay: grote belofte, rustige subcopy. | Grote outcome rond minder dubbel werk, niet rond methode. | `market language` + `Vastpakt translation`. | Exacte H1 nog niet beslist. Moet bronzin/werkobject nabij hebben. | `Bereik meer`, copywriter, marketingbackground. |
| 3 | Brugzin | CopyJay-mechanisme, user-approved Vastpakt-zin. | `Ik bouw de brug tussen je dubbel werk vandaag / en wat straks slimmer, duidelijker of automatisch kan.` | `user-approved`, nog niet final public H1. | Bewijs/CTA er dichtbij, en `automatisch` mag geen garantie lijken. | CopyJay's exacte brug rond verhaal en klanten. |
| 4 | CTA + support | Huidige site en runbook. | `Beschrijf je situatie`; steunzin: geen bestand nodig, binnen 24 uur eerste blik of eerlijk nee. | `current-site` + `proof needed` voor consistent waarmaken. | Runbook moet blijven kloppen; contactroute onveranderd. | Discovery call, offerteaanvraag, demo, intake. |
| 5 | Kort bewijs- of vertrouwenssignaal | Practitioner/proof dichtbij CTA plus huidige cases. | Eén bewijsobject of bewijsgrens vlak na hero. | `proof needed`. | Welke case mag hier publiek en veilig? | Logo wall, percentages, testimonials zonder toestemming. |
| 6 | Persoonsblok | Pieter: `Hoi, ik ben...` groot en zichtbaar. | `Hoi, ik ben Christophe` als structuur. | `user-approved` structuur, copy `proof needed`. | Echte Christophe-input en beeldmateriaal. | Pieter's stijl, jokes, copywriterframe. |
| 7 | Waarom-blok | Pieter: persoonlijke drijfveer naar methode. | Waarom Christophe eerst naar dubbel werk kijkt en niet meteen naar tool/automatisering. | `Vastpakt translation`, deels `synthesis`. | Christophe moet dit zelf kunnen dragen. | Verhalen/communicatie-groeitaal. |
| 8 | Drie projectingangen | CopyJay dienstenblok + Flowlift/Let’s Develop use-cases. | Drie kaarten rond werkobjecten. | `market language` + `proof needed`. | Drie projecttypes moeten echte cases of duidelijke voorbeelden hebben. | Dienstenmenu, pakketten, automation cases. |
| 9 | Proof preview naar `/werk/` | Pieter werkgalerij + old-route/new-route. | Maximaal 2-3 proofkaarten met boundary. | `proof needed`. | Privacy en toestemming via issue `#15`. | Softwareportfolio of algemene resultatenclaims. |
| 10 | Afsluit-CTA en footer | Pieter/CopyJay einde met contact. | Rustige afsluitactie: situatie beschrijven of werk bekijken. | `current-site` + `Vastpakt translation`. | Contactgegevens en route later bepalen. | Salesy afsluiter, prijs/KPI/roadmap. |

### Homepage copyslots

| Slot | Richting | Label | Status |
| --- | --- | --- | --- |
| Hero outcome | Minder dubbel werk vandaag. | `market language` | Wireframe, geen finale H1. |
| Hero support | Duidelijkere opvolging. | `market language` + `Vastpakt translation` | Wireframe, proof nabij nodig. |
| Brugzin | Ik bouw de brug tussen je dubbel werk vandaag en wat straks slimmer, duidelijker of automatisch kan. | `user-approved` | Richtinganker, niet automatisch live. |
| CTA | Beschrijf je situatie. | `current-site` | Sterk kandidaat, behouden tenzij test faalt. |
| CTA support | Geen bestand nodig. Binnen 24 uur een korte eerste blik of eerlijk nee. | `current-site` + runbook | Sterk kandidaat, route moet onveranderd blijven. |
| Person opener | Hoi, ik ben Christophe. | `user-approved` structuur | Echte invulling nodig. |

### Drie homepage-projectkaarten

Voorlopige kaarten, niet finale titels:

| Kaart | Werkobjecten | Bronmechanisme | Copylabel | Proof gate |
| --- | --- | --- | --- | --- |
| Dubbel werk tussen mail, Excel en CRM | mail, Excel, CRM, Word, facturatie | Let’s Develop/Krits/Flowlift workday-taal | `market language` | Heeft Vastpakt een echte case of concreet voorbeeld? |
| Offerte, afspraak of taak zonder duidelijke opvolging | offerte, afspraak, status, eigenaar, seintje | Flowlift sales/offerte + huidige site | `market language` + `current-site` | Mag dit niet als opvolgsoftware klinken? |
| Factuur, bewijs of akkoord dat los zit | factuur, bewijs, akkoord, dossier | huidige site + Krits/Let’s Develop objecttaal | `market language` | Casebewijs of duidelijke no-claim boundary nodig. |

### Homepage huidige-site beslissingen

| Huidig onderdeel | Actie in redesign |
| --- | --- |
| Huidige H1 `Veel dubbel werk tussen Excel, mail en WhatsApp` | Meenemen als bronzin, niet automatisch als finale H1. |
| Hero-vragenrij | Verzwakken of verspreiden; te veel vragen tegelijk in eerste viewport. |
| `Beschrijf je situatie` | Waarschijnlijk behouden als primaire CTA. |
| `Bekijk hoe Eerste Zicht werkt` | Niet als even sterke hero-CTA behouden. |
| Hero-persoonskaart | Verhuizen naar volwaardig persoonsblok lager op homepage. |
| Checksectie | Mogelijk naar `/voor-wie/` als signalenlijst. |
| Voorbeelden/cases | Verhuizen naar `/werk/`, met proof/privacy pass. |
| `Eerste Zicht` als navlabel | Niet bovenaan dragen zonder extra bewijs dat de term werkt. |

## `/voor-wie/`

### Paginajob

`/voor-wie/` moet de bezoeker helpen bepalen of Vastpakt past bij zijn werkdag.

De pagina moet niet starten met sectoren. Ze moet starten met herkenbare signalen.

### Blokkenvolgorde

| Volgorde | Blok | Bronmechanisme | Vastpakt-richting | Copylabel | Proof gate | Niet kopieren |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Intro: wanneer dit past | Pieter aparte voor-wie pagina. | Voor Vlaamse KMO's waar werk blijft hangen tussen mensen, mails, lijsten en tools. | `Vastpakt translation`, deels `synthesis`. | Echte doelgroep nog scherp houden. | Brede sectorclaim. |
| 2 | Herkenbare signalen | Let’s Develop workflow signal list. | Je voert opnieuw in, zoekt status, volgt handmatig op, Excel is overzicht maar geen afspraak. | `market language`. | Bronwoorden zijn sterk, publieke formulering nog classificeren. | `workflow automatisering nodig`. |
| 3 | Werkobjecten | Vastpakt context + competitors. | mail, offerte, Excel, CRM, factuur, afspraak, bewijs, status, eigenaar, volgende stap. | `market language` + project context. | Niet te veel in één blok. | Interne taxonomy. |
| 4 | Wat past wel | Krits/Flowlift same outcome different route. | Eén concreet stuk werk dat nu dubbel of onduidelijk loopt. | `Vastpakt translation`. | Moet niet als full audit lezen. | Softwareproject intake. |
| 5 | Wat past niet | Pieter grenzen + Vastpakt rules. | Geen juridisch/boekhoudkundig advies, geen toolverkoop, geen volledige softwarebouw als eerste vraag. | `current rules`. | Grenzen moeten juridisch/operationeel kloppen. | Defensieve anti-copy. |
| 6 | Eerste stap | Huidige CTA/runbook. | Beschrijf in één zin waar het blijft hangen. | `current-site`. | Formulier moet dit ondersteunen. | Projectbrief, bestandupload, demo. |

### `/voor-wie/` signaallijst

Kandidaten, niet finale copy:

- Je typt dezelfde gegevens opnieuw over.
- Excel is het overzicht, maar niemand weet wat de afspraak is.
- Mail, CRM en facturatie tonen niet dezelfde status.
- Een offerte is verstuurd, maar opvolging hangt aan één persoon.
- Werk is klaar, maar factuur, bewijs of akkoord zit elders.
- Iemand moet handmatig blijven controleren of er een herinnering nodig is.

Labels:

- `market language`: dubbele invoer, Excel, CRM, facturatie, status.
- `current-site`: offerte, openstaande factuur, seintje, geen bestand nodig.
- `Vastpakt translation`: status/eigenaar/bewijs/volgende stap raakt los.

Proof gates:

- Minstens 3 signalen moeten later aan huidige site, market/source notes of echte leadtaal gekoppeld worden.
- Geen signaal mag automatisch concluderen dat automatisering nodig is.

## `/werk/`

### Paginajob

`/werk/` moet bewijzen dat Christophe werkobjecten kan lezen, ordenen en bruikbaar maken.

De pagina moet niet bewijzen dat Vastpakt een softwarebouwer is. Ze moet tonen:

```text
wat lag waar
waar raakte het los
wat deed Christophe
wat werd zichtbaar of gemaakt
wat is bewezen
wat blijft buiten claim
```

### Blokkenvolgorde

| Volgorde | Blok | Bronmechanisme | Vastpakt-richting | Copylabel | Proof gate | Niet kopieren |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Werkintro | Pieter `/werk` als bewijsbibliotheek. | Geen portfolio om indruk te maken, wel bewijs van werkobjecten. | `Vastpakt translation`. | Moet niet als casebrag lezen. | Portfolio/showcase-taal. |
| 2 | Categorie/filter | Pieter categorieen + workobjecten. | Mail/opvolging, Excel/data, factuur/bewijs, document/rapport, webapp later alleen indien bewezen. | `current-site` + `market language`. | Categorieen moeten op echte cases passen. | SaaS/use-case library zonder bewijs. |
| 3 | Casekaart template | Let’s Develop old-route/new-route + Pieter details. | Werkobject, waar los, wat deed Christophe, wat veranderde, bewijsgrens. | `proof needed`. | Iedere case door issue `#15` proof/privacy pass. | Metrics, percentages, algemene resultaten. |
| 4 | Case detail | Pieter rolbeschrijving. | Welke input, welke route, welke output. | `proof needed`. | Klantidentiteit/privéinfo niet lekken. | Klantclaim zonder toestemming. |
| 5 | CTA na bewijs | CopyJay/Pieter contact na bewijs. | Herken je iets vergelijkbaars? Beschrijf je situatie. | `Vastpakt translation`. | Niet te salesy maken. | Demo/offertegesprek. |

### Case template

Gebruik dit template voor elke case:

```text
Werkobject:
Wat lag er:
Waar liep het dubbel of onduidelijk:
Wat Christophe deed:
Wat zichtbaar werd:
Wat daarna mogelijk werd:
Wat niet bewezen of niet beloofd wordt:
Bron/proof:
Privacystatus:
```

### Eerste casekandidaten uit huidige homepage

| Huidige case | Mogelijke `/werk/` categorie | Risico |
| --- | --- | --- |
| Werkplaatsvoorraad | Excel/data/voorraad -> mogelijk webapp outcome. | Kan te veel softwarebouw verwachten. |
| Merkwebsite/data | Data/websiteblokken. | Context moet helder blijven. |
| Mailboxen naar Excel | Mailbox/data/export. | Mag niet als leadgeneratie of verrijking lezen. |
| Word-rapport/webapp | Document/rapport/copy-paste verminderen. | Kan als softwarecase domineren. |

Proof gates:

- Welke cases mogen publiek?
- Welke moeten anoniem?
- Welke outcome kan bewezen worden zonder percentages?
- Welke cases moeten lager omdat ze softwarebouwverwachting oproepen?

## `/over-mij/`

### Paginajob

`/over-mij/` moet uitleggen waarom Christophe geschikt is om naar vastgelopen werk te kijken.

Niet door credentials te stapelen. Wel door persoon, nieuwsgierigheid, werkwijze, onderwerpen, specialiteiten en grenzen te verbinden.

### Blokkenvolgorde volgens Pieter-architectuur

| Volgorde | Blok | Bronmechanisme | Vastpakt-richting | Copylabel | Proof gate | Niet kopieren |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Persoonlijke wereld | Pieter over-mij. | Christophe als mens, maar alleen echte details. | `proof needed`. | Christophe-input nodig. | Pieter's culturele details. |
| 2 | Drijfveer | Pieter: passie naar werk. | Waarom hij kijkt naar werk dat blijft hangen. | `synthesis` tot Christophe dit bevestigt. | Interview/grill nodig. | Grootse missie. |
| 3 | Nieuwsgierigheid | Pieter: praten met gepassioneerde mensen. | Praten met mensen die het werk echt doen. | `Vastpakt translation`. | Echte werkwijze bevestigen. | Copywriter/interview-stijl imiteren. |
| 4 | Concrete onderwerpen | Pieter sector/onderwerpenlijst. | Mail, Excel, offertes, facturatie, CRM, afspraken, documenten, bewijs, status. | `market language`. | Niet doen alsof alle sectoren bewezen zijn. | Breed "elk onderwerp" claimen. |
| 5 | Specialiteiten | Pieter specialiteiten. | Vastgelopen werk zichtbaar maken, eerste blik, routes rond status/eigenaar/bewijs/volgende stap. | `synthesis` + `proof needed`. | Moet aan cases en runbook hangen. | Consultancy/servicecatalogus. |
| 6 | Grenzen | Pieter eerlijke grens. | Geen boekhouder, jurist, toolverkoper of automatiseringspartij als eerste antwoord. | `current rules`. | Formulering niet defensief maken. | Speelse Pieter-grens. |
| 7 | Contact onderaan | Pieter contactfooter. | Situatie beschrijven, geen bestand nodig, 24 uur eerste blik of eerlijk nee. | `current-site`. | Contactgegevens en privacyroute blijven correct. | Salesformulier of lange intake. |

### Christophe-input die nog ontbreekt

Nodig voordat `/over-mij/` publieke copy kan krijgen:

- Welke persoonlijke wereld mag zichtbaar worden?
- Waarom kijkt Christophe graag naar vastgelopen werk?
- Welke echte gesprekken of situaties tonen zijn manier van kijken?
- Welke onderwerpen heeft hij al echt gedaan?
- Welke grenzen wil hij hard benoemen?
- Welke foto/beeldtaal hoort hierbij?

## Eerste routing tussen pagina's

| Van | Naar | Reden |
| --- | --- | --- |
| `/` | `/voor-wie/` | Bezoeker twijfelt of dit voor hem is. |
| `/` | `/werk/` | Bezoeker zoekt bewijs. |
| `/` | `/over-mij/` | Bezoeker wil weten wie kijkt. |
| `/voor-wie/` | `/` CTA/contact | Bezoeker herkent situatie en wil beschrijven. |
| `/werk/` | `/` CTA/contact | Bezoeker herkent bewijs en wil eigen situatie delen. |
| `/over-mij/` | contact | Bezoeker vertrouwt Christophe en wil situatie sturen. |

Nog niet beslissen:

- of contact een aparte route wordt;
- of `/over-vastpakt/` blijft bestaan naast `/over-mij/`;
- of oude SEO-routes intern naar nieuwe pagina's linken;
- welke routes in topnav versus footer komen.

## Public copy readiness

| Element | Readiness | Waarom |
| --- | --- | --- |
| `Beschrijf je situatie` | Hoog | Huidige site en contactfrictie-route. |
| `Geen bestand nodig` | Hoog | Huidige site en drempelverlaging. |
| `Binnen 24 uur ... of eerlijk nee` | Hoog, mits runbook blijft | Huidige site en operationele afspraak. |
| Brugzin | Middel | User-approved, maar proof/positie nog nodig. |
| `minder dubbel werk` | Middel | Sterke market/workday-taal, maar finale H1 nog niet. |
| `duidelijkere opvolging` | Middel | Source-near, maar outcomeclaim heeft bewijs nodig. |
| Drie projectkaarten | Laag-middel | Structuur helder, echte kaarttitels/cases nodig. |
| Christophe over-mij | Laag | Echte Christophe-input ontbreekt. |
| `/werk/` cases | Laag-middel | Cases bestaan, maar proof/privacy pass nodig. |

## Wat nu niet bouwen

- Geen HTML voor de nieuwe pagina's.
- Geen CSS of visuele details.
- Geen nieuwe homepage-H1.
- Geen publieke `/voor-wie/`, `/werk/` of `/over-mij/` routes.
- Geen sitemap of metadata.
- Geen contactendpoint.
- Geen analytics, deployment, ads, lead-log of GitHub-board.
- Geen testimonial, logo wall of cijfers.
- Geen pricing, KPI, ROI, roadmap of automatiseringsbelofte.

## Issue `#11` acceptatiecriteria

Issue `#11` is inhoudelijk klaar wanneer:

- deze vierpagina-map bestaat;
- de homepage-blokkenvolgorde vastligt;
- `/voor-wie/`, `/werk/`, `/over-mij/` elk een duidelijke paginajob hebben;
- competitor-mechanismes per blok zijn gekoppeld;
- copylabels per belangrijk blok bestaan;
- proof gates per risicoblok zichtbaar zijn;
- huidige homepage-onderdelen verhuisd, behouden, verzwakt of verwijderd zijn;
- het document expliciet zegt wat nog niet gebouwd mag worden.

Dit document voldoet aan die criteria als interne v1.

## Open vragen voor volgende tickets

Voor issue `#12`:

- Welke branch/worktree-lane gebruiken we gezien de huidige dirty worktree?

Voor issue `#16`:

- Welke bestaande routes moeten behouden, doorlinken of in sitemap blijven?

Voor issue `#13`:

- Welke visuele basis kan CopyJay/Pieter-achtig zijn zonder hun stijl te kopieren?

Voor issue `#14`:

- Welke Christophe-foto en persoonlijke input worden gebruikt?

Voor issue `#15`:

- Welke cases mogen publiek en met welke proof/privacy boundary?

Voor publieke copy-pass:

- Welke hero-H1 wordt getest?
- Welke drie projectkaarttitels krijgen genoeg bewijs?
- Welke brugzinpositie maakt `automatisch` niet te groot?
- Welke proof past dichtst bij de eerste CTA?
