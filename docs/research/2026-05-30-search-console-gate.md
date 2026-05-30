# Search Console gate

Date: 2026-05-30

## Verdict

Do not publish a new SEO page from Search Console evidence yet.

Search Console currently gives no query, impression, or click signal that can support an `offerte-opvolging` page decision. The indexing signal only proves that the homepage can be crawled and indexed.

## Observed in Search Console

Property:

- `sc-domain:vastpakt.be`

Account:

- `christophe@vastpakt.be`

Performance report:

- Report: `Prestaties`
- Search type: `Web`
- Range: `3 maanden`
- Last update shown: `3,5 uur geleden`
- Total clicks: `0`
- Total impressions: `0`
- Average CTR: `0%`
- Average position: `0`
- Query table: `Geen gegevens`

Performance report after deploy and indexing request:

- Report: `Prestaties`
- Search type: `Web`
- Range: `3 maanden`
- Last update shown: `3,5 uur geleden`
- Total clicks: `1`
- Total impressions: `1`
- Average CTR: `100%`
- Average position: `1`
- Query table: `Geen gegevens`
- Page table:
  - `https://vastpakt.be/`: `1` click, `1` impression
- Country table:
  - `Tsjechië`: `1` click, `1` impression
- Device table:
  - `Desktop`: `1` click, `1` impression
- Search appearance table:
  - `Geen gegevens`
- Day table:
  - `28 mei 2026`: `1` click, `1` impression
  - `27 mei 2026`: `0` clicks, `0` impressions

Indexing report:

- Search Console showed: `Gegevens worden verwerkt. Controleer het over enkele dagen opnieuw.`

Sitemaps report before action:

- Submitted sitemaps table showed `0-0 van 0`.
- No sitemap was listed as submitted or read inside Search Console.

Live technical check:

- `https://vastpakt.be/robots.txt` is live and contains `Sitemap: https://vastpakt.be/sitemap.xml`.
- `https://vastpakt.be/sitemap.xml` is live and returns HTTP 200.
- The sitemap currently contains only `https://vastpakt.be/`.

Action taken:

- Submitted `https://vastpakt.be/sitemap.xml` in Search Console.
- Search Console accepted it.
- Result after submission:
  - Sitemap: `https://vastpakt.be/sitemap.xml`
  - Type: `Sitemap`
  - Submitted: `30 mei 2026`
  - Last read: `30 mei 2026`
  - Status: `Succesvol`
  - Discovered pages: `1`
  - Discovered videos: `0`
- Ran URL inspection for `https://vastpakt.be/`.
- Google index result:
  - `URL is geïndexeerd door Google`
  - `Pagina is geïndexeerd`
  - `HTTPS`: `Pagina wordt weergegeven via HTTPS`
- Ran live URL test for `https://vastpakt.be/`.
- Live test result:
  - Tested on: `30 mei 2026, 09:38`
  - `URL is beschikbaar voor Google`
  - `Pagina kan worden geïndexeerd`
  - HTTP response: `200 OK`
  - Page resources: `Alle bronnen zijn geladen`
  - JavaScript console messages: `Geen berichten`
- Requested indexing for `https://vastpakt.be/`.
- Search Console confirmed:
  - `Indexering aangevraagd`
  - `URL is toegevoegd aan een prioriteitscrawlwachtrij.`
- Opened the tested page details.
- Google's tested HTML includes:
  - `<title>Vastpakt: Eerste zicht op werk dat blijft hangen</title>`
  - the meta description
  - `<link rel="canonical" href="https://vastpakt.be/" />`
  - the homepage H1: `Werk blijft hangen tussen Excel, mail en WhatsApp.`
- Added missing share and entity metadata locally:
  - `robots` index/follow
  - Open Graph metadata
  - Twitter card metadata
  - JSON-LD `WebSite`
  - JSON-LD `ProfessionalService`
- Committed and pushed the homepage metadata update:
  - Commit: `d0ccfa6`
  - Message: `Add homepage metadata fundamentals`
  - File included in the commit: `index.html`
- Verified the live homepage after deploy:
  - `og:title` is present
  - `twitter:card` is present
  - `application/ld+json` is present
  - JSON-LD includes `ProfessionalService`
- Requested indexing again after the metadata deploy.
- Search Console confirmed again:
  - `Indexering aangevraagd`
  - `URL is toegevoegd aan een prioriteitscrawlwachtrij.`
- Added a small measurement layer after the first GSC performance signal:
  - file: `metrics.js`
  - tracks `contact_anchor_clicked` for links to `#contact`
  - tracks `contact_form_started` on the first focus inside the contact form
  - leaves the existing `contact_form_submitted` event in `script.js` unchanged
  - avoids touching the already-modified `script.js`
- Verified the live measurement deployment:
  - `https://vastpakt.be/metrics.js` returns HTTP 200
  - the live homepage includes `metrics.js`
  - the Umami script `https://analytics.vastpakt.be/cvh-insights` returns HTTP 200
- Verification boundary:
  - the in-app browser did not expose `window.umami`, likely because the site honors `data-do-not-track="true"` and/or the browser has tracking protection active
  - `https://analytics.vastpakt.be/` requires an Umami login
  - therefore event storage must be confirmed inside the Umami dashboard after login
- Umami dashboard check after login:
  - website `vastpakt.be` is present with id `cdc47221-8fbd-4120-a10b-79a8ecd6e520`
  - last 24 hours overview showed `10` visitors, `15` visits, `27` views
  - path table showed `/` and `/#contact`
  - countries showed Belgium and United States
  - Events initially showed no data
- Improved `metrics.js` so `contact_form_started` fires on either `focusin` or `pointerdown`.
- Committed and pushed:
  - Commit: `ba2a0c9`
  - Message: `Broaden contact form start tracking`
- Verified updated events in Umami:
  - `contact_anchor_clicked`: `2`
  - `contact_form_started`: `1`
  - `contact_form_submitted`: not observed in this pass
- Created the Umami funnel `Contact intent`:
  - window: `60`
  - step 1: triggered event `contact_anchor_clicked`
  - step 2: triggered event `contact_form_started`
  - step 3: triggered event `contact_form_submitted`
- Ran an explicitly approved live test submission through the contact form.
- Verified the live form success state:
  - status text: `Verstuurd. Je krijgt binnen 24 uur antwoord.`
  - form fields reset after submit
- Verified updated events in Umami after the test submission:
  - `contact_anchor_clicked`: `2`
  - `contact_form_started`: `2`
  - `contact_form_submitted`: `1`
- Verified Resend delivery after login on 2026-05-30 10:50 CEST:
  - to: `christophe@vastpakt.be`
  - status: `delivered`
  - subject: `Vastpakt voorbeeld van Vastpakt testlead`
  - sent: `4 minutes ago` in the Resend dashboard at verification time
- Verified Resend domain authentication on 2026-05-30:
  - domain: `vastpakt.be`
  - provider: `Cloudflare`
  - domain status: `verified`
  - DKIM status: `verified`
  - sending/SPF records: `verified`
  - sending: enabled
  - region: `eu-west-1 Ireland`
  - receiving: not enabled

## What this means

Observed fact:

- Search Console now has a first tiny performance signal: `1` click and `1` impression.
- The query itself is still hidden as `Geen gegevens`.
- The signal is for the homepage, from desktop, country `Tsjechië`, on `28 mei 2026`.
- The sitemap is now submitted and successfully read by Google.
- The homepage is already indexed.
- The live homepage is available to Google and can be indexed.
- A fresh indexing request has been submitted.
- Google's tested HTML sees the critical SEO basics: title, description, canonical, and H1.
- The local homepage now has stronger sharing and structured metadata, but this still needs deployment before Google can see it.
- The metadata update is now live on `https://vastpakt.be/`.
- Contact intent is now measurable before a full form submission, once the measurement layer is deployed.
- The contact route is now proven end to end for the approved test submission: live form -> `/api/contact` -> Resend -> delivered email -> Umami submit event.
- The Resend sending domain is authenticated for sending. Receiving is not enabled, but that is not required for the current contact form because the form only sends email to `christophe@vastpakt.be`.

Inference:

- Google can crawl, index, and show the homepage.
- The `1` click / `1` impression signal is too small and too geographically off-target to use as Flemish/KMO SEO language evidence.
- Because the query is hidden, this signal cannot validate `offerte`, `opvolging`, `Excel`, `CRM`, `facturatie`, or any other copy direction.

Decision:

- Keep `docs/copy/2026-05-30-offerte-opvolging-page-draft-v1.md` internal.
- Do not treat the `offerte opvolging` page as validated.
- Do not create a live SEO page from this gate alone.

## Next optimal step

1. Do not request indexing again for the same homepage unless a meaningful page change is deployed.
2. Treat the technical contact path as complete unless a real visitor reports a failure.
3. Re-check Search Console after more data accumulates, specifically for visible query rows and Belgium/Flanders-relevant traffic.
4. Watch analytics for `contact_anchor_clicked`, `contact_form_started`, and `contact_form_submitted`.
5. Do not create more fake submissions now that the approved test submission has proven the route.
6. Keep the `offerte-opvolging` draft internal until there is a stronger signal.
7. Only turn the internal `offerte-opvolging` draft into a public page when at least one of these is true:
   - Search Console shows relevant query/impression data.
   - Current SERP/source research produces a stronger page angle than generic CRM/offertesoftware competitors.
   - There is a concrete Vastpakt proof object or client/workday situation that makes the page visibly different.

## Weakest unsupported claim

The phrase `offerte-opvolging blijft liggen` is still a hypothesis for Vastpakt public copy.

It is directionally close to current source language around open offers, reminders, CRM, and follow-up, but Search Console currently provides no proof that Vastpakt is already being discovered for this language.
