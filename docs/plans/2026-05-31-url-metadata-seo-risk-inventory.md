# URL, metadata and SEO risk inventory

Datum: 2026-05-31

Status: uitvoering van GitHub issue `#16 - 02 - Inventory URLs, metadata and SEO risk`. Intern inventarisdocument. Geen publieke copy. Geen implementatie. Geen public-file wijziging.

Werkmap:

```text
/Users/christophe/.config/superpowers/worktrees/Vastpakt/homepage-redesign-shell
```

Branch:

```text
codex/homepage-redesign-shell
```

## Verdict

Verdict: `#16` is het juiste ticket voor deze stap.

Waarom:

- GitHub issue `#16` is open en vraagt expliciet om een kleine current-site URL, metadata en SEO-risk inventory.
- GitHub Project `Vastpakt Homepage Redesign` toont `#16 - 02` voor `#13 - 03`.
- De redesign-plannen zeggen dat bestaande routes behouden moeten blijven tenzij een later SEO/content-ticket bewust iets wijzigt.
- Dit document wijzigt geen publieke HTML, CSS, JS, sitemap, robots, llms, contactroute, analytics, deployment, DNS, ads of lead-log.

## Current public URL set

Huidige indexeerbare publieke routes:

```text
/
/over-vastpakt/
/dubbel-werk/
/offerte-opvolging/
/facturatie-bewijs/
/privacy/
```

Speciale route:

```text
/404.html
```

System/static files:

```text
/sitemap.xml
/robots.txt
/llms.txt
/.well-known/security.txt
```

Geplande nieuwe routes voor de redesign:

```text
/voor-wie/
/werk/
/over-mij/
```

Default redirect-besluit:

```text
Geen redirects nodig zolang bestaande routes blijven bestaan.
```

Als een bestaande route later verdwijnt of van taak verandert, moet dat in issue `#9 - 14 - Update sitemap, metadata and internal links` expliciet beslist worden.

## Route inventory

| Route | Source file | Title | Meta description | Canonical | Robots | Contact/form/script dependencies | Belangrijkste interne links/nav | SEO/status risk |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | `index.html` | `Vastpakt: Eerste zicht op werk dat blijft hangen` | `Werk blijft hangen tussen Excel, mail en WhatsApp? Stuur één voorbeeld. Christophe toont binnen 24 uur waar opvolging, akkoord, status of laatste actie blijft hangen.` | `https://vastpakt.be/` | `index,follow` | `loshangCheck` local form; `contactForm` posts to `/api/contact`; loads `/google-analytics.js`, `https://analytics.vastpakt.be/cvh-insights`, `metrics.js`, `script.js?v=loop152`. | Header anchors: `#check`, `#voorbeelden`, `#scan`, `#contact`. Footer links to `/dubbel-werk/`, `/offerte-opvolging/`, `/facturatie-bewijs/`, `/over-vastpakt/`, `/privacy/`. | High redesign risk: homepage structure will change, but `/` must remain canonical. Current nav is anchor-based and will need route-nav replacement later. Keep contact route behavior unchanged. |
| `/offerte-opvolging/` | `offerte-opvolging/index.html` | `Offerte-opvolging zichtbaar maken | Vastpakt` | `Offerte verstuurd, maar opvolging zit in mail, Excel, CRM of iemands hoofd? Vastpakt kijkt eerst waar status, eigenaar of volgende stap onduidelijk wordt.` | `https://vastpakt.be/offerte-opvolging/` | `index,follow` | `contactForm` posts to `/api/contact`; loads `/google-analytics.js`, `https://analytics.vastpakt.be/cvh-insights`, `../metrics.js`, `../script.js?v=offerte-opvolging-v1`. | Header links back to homepage anchors; footer links to current route set. | Protected SEO/content route. Do not remove when adding `/werk/` or homepage cards. If `/werk/` later references offerte cases, keep this page reachable or deliberately map it. No redirect currently needed. |
| `/facturatie-bewijs/` | `facturatie-bewijs/index.html` | `Facturatie en bewijs zichtbaar maken | Vastpakt` | `Werk is klaar, maar facturatie wacht op akkoord, bewijs of een seintje? Vastpakt kijkt eerst waar het factuurmoment onduidelijk wordt.` | `https://vastpakt.be/facturatie-bewijs/` | `index,follow` | `contactForm` posts to `/api/contact`; loads `/google-analytics.js`, `https://analytics.vastpakt.be/cvh-insights`, `../metrics.js`, `../script.js?v=facturatie-bewijs-v1`. | Header links back to homepage anchors; footer links to current route set. | Protected SEO/content route. Do not collapse into `/werk/` without explicit redirect/content decision. No redirect currently needed. |
| `/dubbel-werk/` | `dubbel-werk/index.html` | `Dubbel werk tussen Excel, mail en facturatie | Vastpakt` | `Veel dubbel werk tussen Excel, mail en facturatie? Beschrijf één situatie. Vastpakt geeft binnen 24 uur een korte eerste blik op waar info blijft hangen of opnieuw wordt overgenomen.` | `https://vastpakt.be/dubbel-werk/` | `index,follow` | `contactForm` posts to `/api/contact`; loads `/google-analytics.js`, `https://analytics.vastpakt.be/cvh-insights`, `../metrics.js`, `../script.js?v=dubbel-werk-v1`. | Minimal header; footer links to `/`, `/offerte-opvolging/`, `/facturatie-bewijs/`, `/over-vastpakt/`, `/privacy/`, `/#contact`. | Protected SEO/content route and close to the redesign outcome. Risk: new homepage may compete with this page around `dubbel werk`; keep this route as a focused SEO/support page unless later merged deliberately. No redirect currently needed. |
| `/over-vastpakt/` | `over-vastpakt/index.html` | `Over Vastpakt: eerst zien waar werk blijft hangen` | `Vastpakt helpt Vlaamse KMO's eerst te zien waar opvolging, akkoord, status of laatste actie blijft hangen tussen mail, Excel, CRM, facturatie en afspraken.` | `https://vastpakt.be/over-vastpakt/` | `index,follow` | No form; loads `/google-analytics.js`, `https://analytics.vastpakt.be/cvh-insights`, `../metrics.js`. Includes mailto `christophe@vastpakt.be`. | Header links back to homepage anchors; footer links to current route set. | Protected current trust/entity route. New `/over-mij/` should not silently replace this. Decide later whether `/over-vastpakt/` remains entity/about-company and `/over-mij/` becomes Christophe-person page. No redirect currently needed. |
| `/privacy/` | `privacy/index.html` | `Privacy | Vastpakt` | `Lees welke gegevens Vastpakt verwerkt wanneer je de website gebruikt of een concrete werksituatie via het contactformulier beschrijft.` | `https://vastpakt.be/privacy/` | `index,follow` | No form; loads `/google-analytics.js`, `https://analytics.vastpakt.be/cvh-insights`, `../metrics.js`. Includes mailto `christophe@vastpakt.be`. | Header links back to homepage anchors; footer links to current route set. | Must remain reachable from footer and form context. If contact path changes later, privacy copy may need review, but no redirect or metadata change currently needed. |
| `/404.html` | `404.html` | `Pagina niet gevonden | Vastpakt` | `Deze Vastpakt-pagina bestaat niet of is verplaatst. Ga terug naar de homepage of beschrijf je concrete werksituatie.` | none | `noindex,follow` | No form; loads `/google-analytics.js`, `https://analytics.vastpakt.be/cvh-insights`, `/metrics.js`. | Header and footer links to homepage anchors and current route set. | Correctly noindex. Later route additions should ensure 404 links still point to valid primary routes. Canonical absence is acceptable for noindex 404. |

## System file inventory

### `sitemap.xml`

Current sitemap includes:

```text
https://vastpakt.be/
https://vastpakt.be/over-vastpakt/
https://vastpakt.be/dubbel-werk/
https://vastpakt.be/offerte-opvolging/
https://vastpakt.be/facturatie-bewijs/
https://vastpakt.be/privacy/
```

Current sitemap does not include:

```text
https://vastpakt.be/voor-wie/
https://vastpakt.be/werk/
https://vastpakt.be/over-mij/
```

Implication:

- No sitemap change during `#16`.
- Issue `#9 - 14 - Update sitemap, metadata and internal links` must add the new routes after they exist.
- Keep all current sitemap routes unless a later ticket deliberately changes a route.

### `robots.txt`

Current content:

```text
User-agent: *
Allow: /

Sitemap: https://vastpakt.be/sitemap.xml
```

Implication:

- No robots change needed for `#16`.
- If staging/preview routes ever appear under production paths, robots would need a separate decision. Not relevant now.

### `llms.txt`

Current `llms.txt` describes:

- homepage;
- `/dubbel-werk/`;
- `/offerte-opvolging/`;
- `/facturatie-bewijs/`;
- `/over-vastpakt/`;
- contact route;
- sitemap, robots and security contact.

Current `llms.txt` does not yet describe:

```text
/voor-wie/
/werk/
/over-mij/
```

Implication:

- No `llms.txt` change during `#16`.
- Later update after new routes exist.
- Do not let `llms.txt` keep presenting `Eerste Zicht` as the first conceptual layer if the redesign moves that lower in the page hierarchy.

### `.well-known/security.txt`

Current content:

```text
Contact: mailto:christophe@vastpakt.be
Preferred-Languages: nl, en
Canonical: https://vastpakt.be/.well-known/security.txt
Expires: 2027-05-30T00:00:00Z
```

Implication:

- No change needed for redesign.
- Keep route and canonical intact.

## Protected routes

These routes must remain reachable unless a later ticket explicitly chooses a redirect or replacement:

```text
/
/offerte-opvolging/
/facturatie-bewijs/
/dubbel-werk/
/over-vastpakt/
/privacy/
```

Special:

```text
/404.html
/.well-known/security.txt
/sitemap.xml
/robots.txt
/llms.txt
```

## Planned new routes

These are additions, not replacements by default:

```text
/voor-wie/
/werk/
/over-mij/
```

Expected source files later:

```text
voor-wie/index.html
werk/index.html
over-mij/index.html
```

SEO implications:

- `/voor-wie/` should receive its own title, description, canonical and sitemap entry once built.
- `/werk/` should receive its own title, description, canonical and sitemap entry once proof/privacy has passed.
- `/over-mij/` should receive its own title, description, canonical and sitemap entry once real Christophe material is available.
- Existing `/over-vastpakt/` should not be removed just because `/over-mij/` exists.

## Redirect decision

Current decision:

```text
No redirects needed.
```

Reason:

- No existing route is being removed in `#16`.
- The planned routes are additions.
- Existing content routes already have canonical URLs and sitemap entries.

Redirects become relevant only if later tickets:

- remove `/over-vastpakt/`;
- merge `/dubbel-werk/`, `/offerte-opvolging/`, or `/facturatie-bewijs/` into `/werk/`;
- rename an existing public route;
- replace a content page with a different URL.

## Key risks before build

1. Anchor nav risk:
   - Current nav points to homepage anchors: `#check`, `#voorbeelden`, `#scan`, `#contact`.
   - Redesign wants first-level routes: `/voor-wie/`, `/werk/`, `/over-mij/`.
   - Later build tickets must replace or rebalance nav without breaking the homepage contact route.

2. Content-route preservation risk:
   - `/dubbel-werk/`, `/offerte-opvolging/`, and `/facturatie-bewijs/` are current SEO/content routes.
   - New `/werk/` proof page should not accidentally cannibalize or delete them.

3. About-route overlap:
   - Existing `/over-vastpakt/` is entity/about-company.
   - Planned `/over-mij/` is Christophe/person page.
   - Keep both unless there is a deliberate route strategy.

4. Metadata drift:
   - Current metadata leans on `Eerste Zicht`, `zichtbaar maken`, `werk blijft hangen`, and `dubbel werk`.
   - Redesign direction says outcome first: `minder dubbel werk`, `duidelijkere opvolging`, and bridge outcome.
   - Later metadata changes need source-first copy classification and must not overclaim automation, ROI, KPI or software implementation.

5. Contact dependency risk:
   - Homepage and three content pages post to `/api/contact`.
   - `script.js` handles `#contactForm` and `#loshangCheck`.
   - Future route work must preserve form behavior or deliberately avoid form duplication.

6. Crawl file timing:
   - `sitemap.xml` and `llms.txt` should change only after new pages exist.
   - Do not add dead routes before files render.

## Ticket handoff

Next ticket:

```text
#13 - 03 - Define visual system and responsive layout foundation
```

Do not start:

- `#1 - 04 - Create four-page site shell`;
- homepage hero build;
- public copy pass;
- sitemap/metadata edits.

until `#13` is complete.
