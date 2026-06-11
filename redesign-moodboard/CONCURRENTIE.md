# Concurrentie-analyse — Vastpakt (juni 2026)

> ⚠️ **v2-upgrade 2026-06-07 — lees eerst de sectie hieronder.** De v1-analyse leunde op zoek-snippets;
> v2 is **eerstehands geverifieerd** via de copy-extract Action (echte site-copy, in de repo onder
> `redesign-moodboard/copy/*.json`).

## v2 — Eerstehands geverifieerd (2026-06-07)

> Bron: volledige site-copy van 12 spelers, geharvest via `.github/workflows/copy.yml` (Playwright,
> GitHub-omgeving). Citaten zijn nu **letterlijk**; register-metrics zijn **geteld**, niet geschat.

### De drie meetbare vondsten (nieuw t.o.v. v1)

**1. De ik-stem is in Vlaanderen volledig onbezet — nu bewezen met cijfers.**

| Speler | ik/mij | wij/ons | AI-mentions |
|---|---|---|---|
| Nordant | **0** | 18 | 11 |
| Codelines | **0** | 11 | 19 |
| CAIKMO | **0** | 1 | 19 |
| Nunki (de "gezicht"-speler!) | **0** | 2 | 12 |
| Flowlift | **0** | 6 | 9 |
| Onoweb | **0** | 7 | 0 |
| Krits | **0** | 4 | 11 |
| LeadExpert | **0** | 7 | 10 |
| Hugarro | 1 | 8 | **24** |
| — miransweb (NL) | **25** | 1 | 5 |
| — stefhan.ai (NL) | 6 | 0 | 4 |

→ **Geen enkele Vlaamse speler spreekt in de ik-vorm.** Zelfs Nunki (het enige duo mét namen) schrijft
"wij/uw". De enige ik-stemmen in het hele veld zijn **Nederlands** (Miran, Stefhan). Vastpakts
ik-register + gezicht is dus niet "een beetje anders" — het is **categorisch uniek in Vlaanderen.**

**2. Iedereen CTA't naar een agenda; niemand naar een zin.**
Geverifieerde CTA's: "Plan een gesprek" (Nordant) · "Plan een kennismaking →" + "Bereken jouw ROI →"
(CAIKMO) · "Plan je afspraak" (Flowlift) · "Gratis intake aanvragen" (Codelines) · "Gratis AI-scan
aanvragen" (LeadExpert). → Vastpakts **"Beschrijf één situatie"** (schrijven, async, 24u-antwoord) is
de enige niet-agenda-CTA in de categorie. Structureel lagere drempel, niet enkel toon.

**3. AI-dichtheid = hype-meetlat.** Hugarro 24× · CAIKMO 19× · Codelines 19× AI-vermeldingen op één
pagina. Vastpakts homepage: **0×** (AI staat bewust enkel op /over-mij/, eerlijk gekaderd). In een
Realism-markt (MARKT-STADIUM.md) is die stilte een feature.

### Per speler — geverifieerde kern (selectie)
- **CAIKMO** — "Automatiseer met impact." Ondanks het anti-consultancy-imago uit v1: hype-leunend
  ("innovatie zorgt voor maximale winst", ROI-calculator, 19× AI). Wij-stem, geen gezicht.
- **Nunki** — "Automatiseer uw repetitieve taken met slimme AI." Formeel u-register, wij-stem. Het
  "gezicht"-voordeel uit v1 zit dus in hun nieuwspagina's, **niet** in hun site-copy.
- **Flowlift** — "Automatiseer je routine. Win elke maand uren terug... **zonder toolwissel**." ⚠️
  claimt onze markttaal (bestaande tools); CTA = afspraak.
- **LeadExpert** — eerstehands prijs: **€8.400 excl. BTW** + "€0 betalen vóór resultaat" + countdown
  "Geldig t.e.m. 22/06" (= **nepschaarste**, het patroon dat wij rejecten). Valt zelf concurrenten aan:
  "Geen chatbot van YouTube. Geen n8n-template."
- **AI voor KMO** — "Tussen AI-dromen en AI-doen zit een kloof. Wij bouwen de brug." ⚠️ gebruikt
  **"brug"** (ons woord) — maar hun model is *enablement/training* ("je team werkt binnen 90 dagen
  zelfstandig met AI"), niet done-for-you. Andere lane.
- **Nordant** — "wij leveren geen rapport"; traject eindigt op "Partner blijven" (continuïteit als
  betaald model, eerstehands bevestigd). Valt consultants aan.
- **Codelines** — "Agentic AI", Gartner-stats, "+30%", "6 weken", EU-AI-Act-badge. Claimt "bovenop
  jouw bestaande stack" + "geen vendor lock-in" (overlap met onze wig — onze scherpere draai "valt mij
  iets, elke dev kan verder" zegt níémand).
- **Miransweb** — "Ik bedenk het. AI bouwt." 25× ik. Bevestigt Bron 04 integraal, nu eerstehands:
  "Jij betaalt voor mijn oordeel en resultaat" · "Ik zeg liever 'dat hoeft niet gebouwd te worden'".
  Geen prijs op de homepage gezien (de "vanaf"-sectie zit dieper of is weg).
- **Stefhan.ai** — "Waar processen vastlopen, ontwerp ik een slimmere manier van werken." Ik-stem,
  ontwerper/adviseur-frame, geen agenda-CTA op de homepage.

### Aangescherpte witte ruimte (v2)
De v1-conclusie blijft staan, maar is nu hard te maken: **de zichtbare, eerlijke Vlaamse solo in de
ik-vorm, met een schrijf-CTA i.p.v. een agenda-CTA, nul AI-hype op de voordeur, en de bus-factor-
garantie** — dat profiel bestaat in de geharveste data exact **nul** keer. Vastpakt bezet het al
volledig; de enige nog-missende bouwsteen is **publieke proof** (#19).

### Realism-stage bevestigd in het veld
Verkopers vallen elkaar openlijk aan (Nordant → consultants; LeadExpert → YouTube-chatbots/n8n-
templates; Codelines → "experimenten") en nepschaarste duikt op (LeadExpert-countdown). Beide zijn
letterlijk Sultanic's Realism-symptomen (MARKT-STADIUM.md) — de markt zit waar we dachten.

---


> **Scope:** solo & kleine (1-3p) AI-/automatiserings-bouwers voor Vlaamse KMO's,
> focus Antwerpen — de categorie van Flowlift en Vastpakt zelf.
> **Methode:** 5 parallelle research-agents (WebSearch + WebFetch), Belgische/NL markt.
> **Betrouwbaarheid:** alle aanbieders-sites blokkeerden directe fetch (HTTP 403). Citaten
> komen uit zoek-snippets → "zeer waarschijnlijk letterlijk", niet woord-voor-woord op de
> live pagina geverifieerd. Prijscijfers van CAIKMO en AI-voor-KMO zaten consistent over
> meerdere bronnen (hogere zekerheid). Teamgrootte/oprichters vaak "onbekend" — niet verzonnen.

---

## 1. De spelers

### Directe categorie (AI-automatisering voor KMO)

| Speler | Regio | Positionering (≈letterlijk) | Prijs-signaal | Gezicht? | Toon |
|---|---|---|---|---|---|
| **Flowlift** | onbekend (NL) | "AI-automatisatie voor KMO's — win uren terug"; gefaseerd; "duidelijke prijzen, zonder verrassingen" | géén bedrag | nee | menselijk-pragmatisch |
| **CAIKMO** | Vlaanderen | "AI voor KMO's zonder IT-afdeling, zonder complexiteit, zonder angst"; "geen consultancy-theater" | **vanaf €8.000** + **€250/mnd** onderhoud | nee | nuchter, anti-corporate |
| **Nordant** | Vlaanderen | "werkende automatiseringen i.p.v. rapporten"; "vaste AI-partner" | **vast maandbedrag, geen uurtje-factuurtje** | nee | no-nonsense |
| **AI voor KMO** | Vlaanderen | "spreek met een mens"; AI-wake-up-call; "echte implementatie op de werkvloer" | **AI-Scan €750**; keynote €450; training €200/p | half (telefoon, "mens") | menselijk, laagdrempelig |
| **Hugarro** | Lokeren | "AI-automatisering voor slimme ondernemers"; "laat je systemen samenwerken" | website **vanaf €2.500**; "transparante prijzen" | nee | toegankelijk |
| **Nunki.ai** | Leuven (duo) | "AI-automatisering voor KMO's in Vlaanderen" | **transparant pay-per-use** | **JA — Willaert & Biermans** | ondernemend, onafhankelijk |
| **Autonomate** | België | "laat AI voor je werken; bespaar tijd, verhoog conversies" | op aanvraag | nee | marketing-hype |

### Maatwerk-software (AI als argument)

| Speler | Regio | Positionering (≈letterlijk) | Prijs | Gezicht? | Opmerking |
|---|---|---|---|---|---|
| **Codelines** | **Antwerpen** | "AI-agents & maatwerksoftware voor KMO's — in 6 weken live"; "geen vendor lock-in" | op aanvraag (KMO-portefeuille 20-30%) | nee | 4-10p → al **bureau**, niet solo |
| **Onoweb** | Vlaanderen | "kracht van een team + directe lijn van een freelancer"; "eerlijk advies"; "geen standaardpakket" | onbekend | nee | register dichtst bij Vastpakt, **maar géén AI** |
| **LeadExpert** | Vlaanderen | "AI-agent KMO — automatisering in 4 weken" | gratis AI-scan; **"betaal pas als je tevreden bent"** | nee | sales/leadgen-gekleurd |

### Tool-specialisten (no-code / n8n / Airtable)

| Speler | Regio | Tool | Zwakte |
|---|---|---|---|
| **Sevendays** | **Antwerpen** | n8n; "lokale partner, persoonlijke aanpak" | automatisering = 1 van meerdere diensten |
| **n8n-expert.be** | België | n8n; "Certified Workflow Specialist", 50+ projecten | tool-jargon schrikt KMO af; geen gezicht |
| **n8n-automatisatie.be** | België | n8n; migratie Zapier/Make→n8n | mogelijk zelfde persoon; polariserend |
| **Databaser** | Vlaanderen | Airtable; "1-op-1 begeleiding" | mono-tool |
| **Steven Cornelis** (Malt) | Vlaanderen | Airtable/Make/Coda/Softr | geen eigen merk/site |

---

## 2. Markt-patronen (over alle spelers)

1. **Tijdwinst is de universele belofte** — "uren terugwinnen", "2-4u/week per medewerker",
   "50-80% efficiëntie". Iedereen zegt hetzelfde → het onderscheidt niet meer.
2. **Een doorlooptijd-hook is bijna verplicht** — "6 weken live", "in 4 weken", "in 30 dagen",
   "6-12 weken". Vastpakt noemt momenteel geen termijn (behalve "eerste blik binnen 24u").
3. **Prijs = gespleten markt.**
   - **Tonen het:** CAIKMO (€8k + €250/mnd), AI-voor-KMO (€750-scan), Hugarro (vanaf €2.500),
     Nordant ("geen uurtje-factuurtje"), LeadExpert ("betaal pas als tevreden").
   - **Verzwijgen het:** Flowlift, Codelines, Autonomate, Sevendays, Onoweb. → **Vastpakt zit nu
     in de zwijgende groep.**
4. **Twee toon-polen.** De *bouwers* leunen hype ("agentic AI", "autonome agents", "2026: je
   KMO kan niet zonder"); de *adviseurs* leunen nuchter/menselijk. → Vastpakt's anti-hype +
   menselijk register staat lijnrecht tegenover de bouwer-pool. **Onderscheidend.**
5. **Support ná oplevering is marktbreed zwak.** Enkel CAIKMO heeft een geprijsd onderhouds-
   abonnement; AI-voor-KMO een "tot het werkt"-nazorggarantie. De rest: niet vermeld.
6. **Continuïteit / "wat als de bouwer wegvalt" is het minst ingevulde thema.** Alleen
   Codelines claimt "geen vendor lock-in". Vastpakt adresseert dit sinds v3.8 (bus-factor) —
   **maar een solo moet dit scherper maken dan een bureau**, want het is net de solo-twijfel.
7. **Bijna niemand toont een gezicht.** Uitzondering: **Nunki.ai** (namen + award). Voor een
   markt waar vertrouwen alles is, is dit een opvallend gat.
8. **Geografie:** geen enkele *solo* claimt hard "Antwerpen". De Antwerpse namen zijn
   **Codelines** (bureau) en **Sevendays** (n8n-breed). → Solo + Antwerpen + KMO is relatief open.

---

## 3. Witte ruimte voor Vastpakt

De vier hefbomen die concurrenten ELK los wel aanraken, maar **niemand combineert**:

| Hefboom | Wie doet het wel | Wie mist het | Vastpakt nu |
|---|---|---|---|
| **Echt gezicht/naam** | Nunki (duo) | ~iedereen | ⚠️ deels (over-mij, geen echte foto) |
| **Eerlijke prijs / afgebakende eerste stap** | CAIKMO, AI-voor-KMO, Nordant, Hugarro | Flowlift, Codelines, Sevendays | ❌ zwijgt |
| **Anti-hype, menselijk register** | AI-voor-KMO, CAIKMO | de bouwer-pool | ✅ sterk |
| **Continuïteit / je bezit alles** | Codelines (bureau) | ~iedereen | ✅ sinds v3.8 |

> **De scherpste onbezette hoek:** *de zichtbare, eerlijke solo uit (de regio) die een echt
> gezicht toont, een eerlijke prijs/afgebakende eerste stap durft noemen, de AI-hype weigert,
> én de continuïteit garandeert (open stack, jij bezit alles, elke dev kan verder).*
> Géén concurrent bezet alle vier tegelijk. Twee ervan staan al in v3.8; de twee resterende
> (**gezicht + prijs**) zijn exact de hefbomen die ik eerder als "user-content nodig" markeerde.

---

## 4. Concrete homepage-implicaties

**Nu te doen (markt bevestigt het):**
- **Prijs-helderheid invoeren** is geen aanname meer maar een *gevalideerd onderscheid*: de
  helft van de markt durft het, de zwijgende helft (incl. Flowlift) laat hier vertrouwen liggen.
  Minimaal: de "eerste stap" expliciet afbakenen ("een kleine, vaste eerste stap — geen
  open-eind-factuur"). Vereist jouw prijs-keuze.
- **Echt gezicht + naam prominent** = grootste onbenutte vertrouwens-hefboom in deze markt.
  Vervang de "illustratief"-placeholder door een echte foto. Vereist jouw foto.

**Al goed gepositioneerd (vasthouden):**
- Anti-hype/menselijk register — bewust tegen de "agentic AI"-bouwer-pool in.
- Continuïteit (v3.8) — maar **scherper als solo-troef**: niet enkel "geen lock-in" (dat zegt
  bureau Codelines ook), wél "valt mij iets, elke ontwikkelaar kan verder" (de solo-angst zelf).

**Te overwegen:**
- **"Praat met wie bouwt"** is jouw natuurlijke wig tegen Codelines/Onoweb: zij *claimen*
  directe lijn; als solo *ben* je het. Dit harder maken.
- Een **eerlijke doorlooptijd** noemen (de markt verwacht een termijn-hook), zonder te
  overpromisen à la "6 weken live".
- Een **"tot het werkt"- of "geen uurtje-factuurtje"-geruststelling** (Nordant/AI-voor-KMO/
  LeadExpert-patroon) — enkel als jouw businessmodel het draagt.

---

*Bronnen: flowlift.be, caikmo.be, nordant.be, aivoorkmo.be, hugarro.be, nunki.ai,
autonomateagency.be, codelines.be, onoweb.be, leadexpert.be, sevendays.be, n8n-expert.be,
n8n-automatisatie.be, databaser.be, malt.be/profile/stevencornelis. Alle via zoek-snippets
(directe fetch geblokkeerd).*
