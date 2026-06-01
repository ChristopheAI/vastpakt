# Visual system and responsive layout foundation

Datum: 2026-06-01

Status: uitvoering van GitHub issue `#13 - 03 - Define visual system and responsive layout foundation`. Intern foundationdocument. Geen publieke copy. Geen homepage-build. Geen HTML/CSS/JS-implementatie.

Werkmap:

```text
/Users/christophe/.config/superpowers/worktrees/Vastpakt/homepage-redesign-shell
```

Branch:

```text
codex/homepage-redesign-shell
```

## Bronnen

- `rules.md`
- `AGENTS.md`
- `docs/plans/2026-05-31-redesign-execution-control.md`
- `docs/plans/2026-05-31-source-first-four-page-wireframe-map-v1.md`
- `docs/plans/2026-05-31-github-spec-new-homepage-redesign.md`
- `docs/plans/2026-05-31-url-metadata-seo-risk-inventory.md`
- `docs/plans/2026-05-31-vastpakt-file-lane-map.md`
- `docs/plans/2026-05-31-vastpakt-visual-design-brief-v1.md`
- GitHub issue `#13`
- GitHub Project `Vastpakt Homepage Redesign`
- Specification Website checklist als technische sanity check, niet als scope-uitbreiding
- Andy Bell / CUBE CSS / Every Layout lens: global styles voor components, compositions voor blocks, semantic HTML, progressive enhancement, kleine veerkrachtige CSS

## Ticketvolgorde

Verdict: `#13` is de juiste volgende inhoudelijke ticketstap na `#12` en `#16`.

Waarom:

- De execution-control volgorde is titelprefix-gedreven, niet issue-nummer-gedreven.
- De relevante volgorde is `01 - #12`, `02 - #16`, `03 - #13`, daarna `04 - #1`.
- De clean redesign lane bestaat lokaal op `codex/homepage-redesign-shell`.
- De URL/metadata/SEO-inventaris bestaat lokaal als `docs/plans/2026-05-31-url-metadata-seo-risk-inventory.md`.
- GitHub Project toont `#13 - 03` na `#16 - 02`.

GitHub-status op moment van uitvoering:

- Issue `#13` staat open.
- Projectstatus van `#13` staat nog `Todo`.
- Projectstatussen van `#12` en `#16` staan op GitHub nog `Todo`, ook al bestaat de lokale bronlaag en is die in de redesign branch gecommit.

## Scopebesluit

Verdict: bouwen als interne visual/layout foundation, niet als CSS-build.

GitHub issue `#13` noemt in de acceptatiecriteria dat `styles.css` een coherente foundation heeft. De huidige uitvoering vraagt expliciet om een intern document en verbiedt public-file wijzigingen zonder noodzaak. Daarom wordt in deze run geen `styles.css` aangepast.

Besluit:

- Dit document legt de foundation vast.
- De CSS-toepassing gebeurt pas in het eerste buildticket dat public files mag wijzigen.
- De eerste public-file stap blijft `#1 - 04 - Create four-page site shell`, tenzij Christophe eerst een apart CSS-foundation-commit-ticket vraagt.

## 1. Wat probeer ik te bouwen?

Ik probeer een klein visueel systeem te definieren voor een statische B2B-site.

Niet:

- een homepage bouwen;
- een nieuwe brand identity maken;
- publieke copy finaliseren;
- CopyJay of Pieter visueel kopieren;
- een framework of component library toevoegen;
- route-, metadata-, sitemap-, analytics-, contact- of deploygedrag veranderen.

Wel:

- bepalen welke globale CSS-regels later de basis moeten vormen;
- bepalen welke layoutcomposities de vier pagina's dragen;
- bepalen hoe type, spacing, cards, buttons, sections en nav zich responsive gedragen;
- voorkomen dat hero, person block, project cards en footer elk hun eigen CSS-systeem krijgen;
- Vastpakt visueel sober, menselijk en source-first houden.

## 2. Hoe moet dit systeem werken?

De layout moet eerst de echte Vastpakt-inhoud dienen:

```text
concrete werkobjecten
-> minder dubbel werk
-> duidelijkere opvolging
-> eventueel slimmer, duidelijker of automatisch later
```

De site mag visueel duidelijker en typografischer worden, maar moet niet richting SaaS-dashboard, agency-showcase, AI-tool, softwarebouwer of decoratief portfolio schuiven.

De CSS-richting:

```text
global styles
-> design tokens via custom properties
-> layout compositions
-> small blocks
-> utility helpers alleen waar ze echt herbruikbaar zijn
```

## Visual-system verdict

Verdict: kies een sober typografisch systeem met warme menselijke accenten, niet een decoratief redesign.

Richting:

- Typografie draagt de eerste indruk.
- Witruimte en ritme dragen vertrouwen.
- Kleur ondersteunt hierarchie en menselijke aanwezigheid, maar mag geen CopyJay/Pieter-kopie worden.
- Componenten blijven rustig, scanbaar en functioneel.
- Layoutregels zijn inhoudsregels: de tekst, route, CTA en proof bepalen de compositie.
- Public copy wordt later source-first geclassificeerd voordat ze live gaat.

Niet doen:

- geen gradient-orbs, bokeh, zware hero-card of dashboardpanelen;
- geen nested cards;
- geen one-note palette;
- geen letterlijke CopyJay/Pieter-kleuren, iconen, foto-oplossingen of tekststructuren;
- geen global viewport-width font scaling;
- geen framework of dependency voor layout.

## Typografie-principes

Typografie moet drie rollen onderscheiden:

1. Display/hero: groot, rustig, links geankerd, weinig regels, geen card eromheen.
2. Leestekst: duidelijk, menselijk, voldoende regelhoogte, korte measures.
3. UI/labels: compact, scanbaar, niet schreeuwerig.

Basisregels:

- Gebruik een systeemfont of bestaande fontkeuze tenzij een later ticket bewust een font toevoegt.
- Stel globale `line-height`, `font-size`, `font-weight` en kleur via tokens in.
- Gebruik `letter-spacing: 0` als norm. Geen negatieve tracking.
- Beperk tekstbreedte met `max-inline-size`, niet door losse line breaks in public copy te forceren.
- Gebruik headings voor echte documentstructuur, niet voor visuele grootte alleen.
- Bewaar hero-scale type voor de hero en grote section openers.
- Compacte panels, cards en nav krijgen kleinere, stabiele typografische rollen.

## Fluid type scale richting

Later in CSS:

```text
--step--1
--step-0
--step-1
--step-2
--step-3
--step-4
--step-5
```

Richting:

- `--step-0` is bodytekst.
- `--step--1` is metadata, labels en kleine ondersteunende tekst.
- `--step-1` en `--step-2` zijn cardtitels en kleine section heads.
- `--step-3` en `--step-4` zijn grotere section openers.
- `--step-5` is alleen voor de homepagehero of vergelijkbare first-viewport titel.

Implementatieprincipe:

- Gebruik `clamp()` met custom properties.
- Kies een min/max viewport range, bijvoorbeeld ongeveer `360px` tot `1180px` of `1280px`.
- Test minimaal op 375, 768, 1024 en 1440px.
- Geen font-size direct koppelen aan `vw` zonder `rem`-begrenzing.
- Lange Nederlandse woorden en CTA-labels moeten binnen hun container passen.

## Fluid spacing scale richting

Later in CSS:

```text
--space-3xs
--space-2xs
--space-xs
--space-s
--space-m
--space-l
--space-xl
--space-2xl
--space-3xl
```

Pair tokens:

```text
--space-xs-s
--space-s-m
--space-m-l
--space-l-xl
--space-xl-2xl
```

Gebruik:

- section padding gebruikt ruime pair tokens;
- card padding gebruikt vaste kleine/middelgrote tokens;
- inline nav en button gaps gebruiken kleine tokens;
- flow tussen tekstblokken gebruikt `--flow-space`;
- grid gaps komen uit dezelfde spacing scale.

Niet doen:

- geen losse arbitraire margins per block tenzij er een duidelijke uitzondering is;
- geen grote viewport-gebonden paddings die mobiel de eerste CTA wegduwen;
- geen section-card-stacking waarbij elke sectie als zwevende kaart leest.

## Layout compositions

De build moet later met compositions beginnen, niet met component-CSS.

### Wrapper

Rol:

- centrale max-breedte;
- veilige inline padding;
- consistent alignment over homepage en subpages.

Richting:

```text
.wrapper {
  max-inline-size: var(--wrapper-max);
  margin-inline: auto;
  padding-inline: var(--gutter);
}
```

Gebruik:

- voor page sections;
- voor nav inner;
- voor footer inner;
- niet als visuele kaart.

### Flow

Rol:

- verticale ruimte tussen tekst, headings, lijsten, CTA's en card-inhoud.

Richting:

```text
.flow > * + * {
  margin-block-start: var(--flow-space, var(--space-m));
}
```

Gebruik:

- standaard op tekstgroepen;
- per block mag `--flow-space` lokaal wijzigen.

### Cluster

Rol:

- nav links;
- button groups;
- footer links;
- metadata/tags;
- kleine proof/object groepen.

Richting:

```text
.cluster {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--cluster-gap, var(--space-s));
}
```

Gebruik:

- items mogen wrappen zonder layoutbreuk;
- geen fixed widths voor korte labels.

### Grid

Rol:

- projectkaarten;
- proof previews;
- route cards waar later nodig.

Richting:

```text
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--grid-min)), 1fr));
  gap: var(--grid-gap, var(--space-l));
}
```

Gebruik:

- inhoud bepaalt `--grid-min`;
- cards moeten gelijkwaardig aanvoelen zonder vaste hoogte te forceren;
- geen nested card grids.

### Switcher

Rol:

- hero/person layouts die breed naast elkaar mogen staan en smal moeten stapelen;
- niet voor elke sectie, alleen waar twee inhoudsblokken echt gelijkwaardig zijn.

Richting:

- gebruik intrinsic layout en `flex-wrap`;
- laat de inhoud stapelen wanneer de beschikbare ruimte te smal is;
- vermijd harde breakpoints als de composition dit zelf kan oplossen.

## Responsive aanpak

Verdict: mobile-first en intrinsic-first.

Richting:

- Baseline werkt op smal scherm zonder media query.
- Compositions lossen zoveel mogelijk wrapping, stacking en gridkolommen op.
- Media queries zijn uitzonderingen voor echte inhouds- of navigatieknelpunten.
- Breakpoints worden niet ontworpen als device-lijst, maar als layout-breukpunten.

Praktische testviewports later:

```text
320px  fallback/smalste check
375px  gangbare mobiel
768px  tablet/small laptop
1024px laptop/tablet landscape
1440px desktop
```

Max/min aanpak:

- `--gutter` is fluid, maar begrensd.
- `--wrapper-max` voorkomt te lange regels op desktop.
- `--measure` begrenst leestekst.
- Hero mag breder zijn dan bodytekst, maar tekstregels moeten beheersbaar blijven.
- Eerste viewport mag niet overvol worden door proof/cards/contact tegelijk.

## Semantic HTML en progressive enhancement

Basisregels voor de latere build:

- Gebruik echte landmarks: `header`, `nav`, `main`, `section`, `footer`.
- Gebruik exact een duidelijke `h1` per pagina.
- Headingvolgorde moet de paginataak volgen.
- Links blijven links; buttons blijven echte acties.
- De site moet bruikbaar blijven zonder JavaScript.
- Contactgedrag en `/api/contact` blijven ongewijzigd tot een apart ticket dat expliciet vraagt.
- Formulieren houden labels, foutmeldingen en privacycontext.
- Nieuwe routes krijgen later eigen title, meta description en canonical.

Focus en motion:

- `:focus-visible` moet duidelijk zichtbaar zijn.
- Focusringen mogen niet door resets verdwijnen.
- Gebruik `prefers-reduced-motion: reduce` voor animaties/transities.
- Geen belangrijke informatie alleen via hover.
- Tap targets moeten bruikbaar zijn op mobiel.

Accessibility basis:

- Kleurcontrast is een harde randvoorwaarde.
- Alt-tekst voor Christophe/page assets hoort bij ticket `#14`.
- Iconen zijn ondersteunend, niet de enige drager van betekenis.
- Cards die klikbaar zijn, moeten een duidelijke linkstructuur krijgen.
- Specification Website blijft hier een checklist voor fundamentals, accessibility en metadata, niet een reden om extra features toe te voegen.

## Componentregels

### Sections

- Sections zijn full-width bands of onopgesmukte layouts met een wrapper erin.
- Geen section als grote floating card.
- Elke section heeft een duidelijke inhoudstaak.
- Section-padding komt uit de spacing scale.
- Warme of contrasterende bands mogen, maar niet als CopyJay/Pieter kleurkopie.

### Cards

- Cards zijn voor herhaalde items: projectkaarten, proof previews, case previews.
- Geen card-in-card.
- Cards moeten scanbaar blijven: korte titel, concrete werkobjecten, korte supporting text.
- Geen pakketten- of servicecatalogusgevoel.
- Hoogtes mogen visueel rustig zijn, maar content mag niet worden afgekapt.

### Buttons en links

- Primaire CTA blijft laag-frictie en consistent.
- Secundaire links moeten duidelijk anders lezen dan primaire CTA.
- Button spacing en line-height moeten lange Nederlandse labels aankunnen.
- Geen buttonstijl voor gewone navigatielinks tenzij het echt een command/CTA is.
- Hover/focus/active states moeten zichtbaar zijn en niet alleen op kleur vertrouwen.

### Navigation

- De nieuwe hoofdroute-logica is:

```text
/voor-wie/
/werk/
/over-mij/
```

- Topnav moet later route-gebaseerd worden, niet alleen anchor-gebaseerd.
- Existing protected routes blijven footer/context-routes tot een later ticket anders beslist.
- Op mobiel moet nav kunnen wrappen of collapsen zonder JS-afhankelijkheid als dat haalbaar blijft.

### Person block

- De person block mag uitgesprokener zijn dan de rest, maar moet echte Christophe-aanwezigheid dragen.
- Niet bouwen met placeholder-foto of verzonnen persoonlijk materiaal.
- De volledige assetkeuze en alt-tekst horen bij `#14`.

### Project cards

- Project cards zijn werk-situatie-ingangen, geen dienstenkaarten.
- De cardstructuur moet concrete objecten kunnen dragen zoals mail, Excel, offerte, CRM, facturatie, afspraak, bewijs, status, eigenaar en volgende stap.
- De publieke titels en bodycopy worden later source-first geclassificeerd.

## Wat expliciet niet gebouwd of gestyled wordt in `#13`

Niet in deze stap:

- geen wijziging aan `index.html`;
- geen wijziging aan `styles.css`;
- geen wijziging aan `script.js`;
- geen nieuwe directories `voor-wie/`, `werk/`, `over-mij/`;
- geen route-, sitemap-, robots-, llms- of metadatawijziging;
- geen contactroute, analytics, deployment, DNS, ads of lead-log wijziging;
- geen Christophe assetkeuze;
- geen publieke hero-H1;
- geen publieke projectkaarttitels;
- geen browsercheck of devserver.

## Public files die later pas mogen wijzigen

Pas vanaf het passende buildticket:

```text
index.html
styles.css
script.js
voor-wie/index.html
werk/index.html
over-mij/index.html
sitemap.xml
llms.txt
robots.txt
404.html
```

Beschermd tenzij apart ticket of expliciete approval:

```text
api/contact.js
google-analytics.js
metrics.js
vercel.json
docs/operations/lead-log.md
docs/operations/
assets/brand/
assets/brand/exports/
```

Bestaande SEO/content-routes blijven beschermd:

```text
offerte-opvolging/index.html
facturatie-bewijs/index.html
dubbel-werk/index.html
over-vastpakt/index.html
privacy/index.html
```

## Specification Website sanity check

Alleen relevant als check op:

- foundations;
- semantic HTML;
- accessibility;
- SEO/metadata later;
- security/well-known files later;
- performance/resilience later.

Niet relevant voor scope-uitbreiding in `#13`:

- geen extra audit;
- geen nieuwe routes buiten de vierpaginastructuur;
- geen security/deploywijziging;
- geen robots/sitemap/llms update in deze stap.

## Volgende ticketstap

Exacte volgende ticket:

```text
#1 - 04 - Create four-page site shell
```

Doel van die stap:

- maak de vierpagina-shell voor `/`, `/voor-wie/`, `/werk/`, `/over-mij/`;
- pas pas dan public files aan;
- hou bestaande SEO/content-routes werkend;
- hou `/api/contact`, analytics, deployment, DNS, ads en lead-log ongewijzigd.

Voorwaarde voor die stap:

- dit foundationdocument moet als bron gebruikt worden;
- als `styles.css` in `#1` wordt aangepast, moet dat gebeuren vanuit compositions en tokens, niet vanuit losse block-styling;
- publieke copy blijft source-first en mag niet uit deze interne planning worden overgenomen zonder classificatie.
