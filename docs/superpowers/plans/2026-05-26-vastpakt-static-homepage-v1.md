# Vastpakt Static Homepage V1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the first concrete Vastpakt homepage from the current proof-system spec as a static, locally openable website.

**Architecture:** Use a minimal static site: `index.html` for structure and copy, `styles.css` for responsive visual treatment, and `script.js` for the ungated Loshang-check. No build tool, framework, router, CMS, or package manager is needed for v1 because the repo currently contains only docs and the job is to test positioning, proof objects, and first contact clarity.

**Tech Stack:** HTML, CSS, vanilla JavaScript, browser manual verification.

---

## Source Of Truth

- Main spec: `docs/superpowers/specs/2026-05-26-vastpakt-homepage-before-after-proof-system-design.md`
- Latest clarity gap: `docs/research/2026-05-26-reddit-b2b-internal-ops-reading-round-20.md`

## File Structure

- Create `index.html`: one-page homepage with hero, proof cards, problem examples, method, Eerste Zicht-scan offer, Loshang-check, qualification, FAQ, and final CTA.
- Create `styles.css`: restrained KMO-oriented visual system, responsive layout, proof-object styling, accessible form states, and mobile-first spacing.
- Create `script.js`: Loshang-check score calculation and result rendering. No network calls.
- Create `README.md`: how to open and verify the static site.

## Implementation Tasks

### Task 1: Create Static Homepage Skeleton

**Files:**
- Create: `index.html`
- Create: `README.md`

- [ ] **Step 1: Create the first `index.html` structure**

Add this exact initial structure:

```html
<!doctype html>
<html lang="nl-BE">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Vastpakt - Eerst zien waar ge staat</title>
    <meta name="description" content="Vastpakt helpt Vlaamse KMO's eerst zien waar werk blijft hangen tussen aanvraag, afspraak, offerte, factuur en opvolging.">
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <header class="site-header" aria-label="Hoofdnavigatie">
      <a class="brand" href="#top" aria-label="Vastpakt start">Vastpakt</a>
      <nav class="nav-links" aria-label="Pagina onderdelen">
        <a href="#voorbeelden">Voorbeelden</a>
        <a href="#scan">Eerste Zicht</a>
        <a href="#check">Loshang-check</a>
      </nav>
    </header>

    <main id="top">
      <section class="hero section-band">
        <div class="hero-copy">
          <p class="eyebrow">Voor Vlaamse KMO's waar werk te veel in hoofden, mails of gewoontes zit.</p>
          <h1>Eerst zien waar ge staat. Daarna pas kiezen wat moet veranderen.</h1>
          <p class="hero-lede">Vastpakt helpt zien waar werk vandaag blijft hangen tussen aanvraag, afspraak, offerte, factuur en opvolging.</p>
          <div class="hero-actions" aria-label="Eerste acties">
            <a class="button primary" href="#contact">Toon waar het vandaag blijft hangen</a>
            <a class="button secondary" href="#voorbeelden">Bekijk voorbeelden</a>
          </div>
          <p class="reassurance">Meer zicht, niet meer papierwerk. Geen nieuwe tool om uw onduidelijkheid in te bewaren.</p>
        </div>
        <div class="situation-card hero-card" aria-label="Voorbeeld van een Situatiekaart">
          <p class="card-label">Situatiekaart</p>
          <div class="flow-row">
            <span>Aanvraag</span>
            <span class="missing">Geen eigenaar</span>
            <span>Volgende stap?</span>
          </div>
          <dl class="state-list">
            <div><dt>Status</dt><dd>Wacht op klant</dd></div>
            <div><dt>Eigenaar</dt><dd>Niet zichtbaar</dd></div>
            <div><dt>Bewijs</dt><dd>Mail + offerte</dd></div>
            <div><dt>Actie</dt><dd>Vrijdag opvolgen</dd></div>
          </dl>
        </div>
      </section>
    </main>

    <script src="script.js"></script>
  </body>
</html>
```

- [ ] **Step 2: Create `README.md`**

```markdown
# Vastpakt Static Homepage

First static homepage version for Vastpakt.

## Open Locally

Open `index.html` in a browser.

## Verify

- Hero explains the promise in under 5 seconds.
- Three concrete proof examples appear before broad claims.
- The first contact action asks for one loose situation.
- The page does not read like an AI agency, legal advice, accounting advice, or generic process consultancy.
```

- [ ] **Step 3: Verify files exist**

Run:

```bash
test -f index.html && test -f README.md
```

Expected: no output and exit code `0`.

- [ ] **Step 4: Commit**

```bash
git add index.html README.md
git commit -m "feat: scaffold static Vastpakt homepage"
```

### Task 2: Add Homepage Sections And Copy

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Insert sections before `</main>`**

Add these sections after the hero section and before `</main>`:

```html
<section id="voorbeelden" class="section-band proof-section">
  <div class="section-heading">
    <p class="eyebrow">Herkenbare plekken waar werk loshangt</p>
    <h2>Niet elke losse werking ziet eruit als chaos. Soms ziet ze eruit als stilte.</h2>
  </div>
  <div class="proof-grid">
    <article class="proof-card">
      <h3>Aanvraag zonder eigenaar</h3>
      <p class="hook">De aanvraag bestaat wel, maar niemand kan in één oogopslag zeggen van wie ze nu is.</p>
      <dl>
        <div><dt>Voor</dt><dd>Mail, telefoon en WhatsApp lopen door elkaar.</dd></div>
        <div><dt>Ontbreekt</dt><dd>Eigenaar en volgende stap.</dd></div>
        <div><dt>Na</dt><dd>Elke aanvraag krijgt een plaats en een route.</dd></div>
      </dl>
    </article>
    <article class="proof-card">
      <h3>Offerte zonder opvolgspoor</h3>
      <p class="hook">De offerte is weg, maar de volgende stap leeft alleen nog in iemands geheugen.</p>
      <dl>
        <div><dt>Voor</dt><dd>Verstuurd, maar niemand ziet wanneer opvolging nodig is.</dd></div>
        <div><dt>Ontbreekt</dt><dd>Status, reminder en eigenaar.</dd></div>
        <div><dt>Na</dt><dd>Morgen vraagt iemand waar ze staat. Ge kunt wijzen.</dd></div>
      </dl>
    </article>
    <article class="proof-card">
      <h3>Bewijs naar geld</h3>
      <p class="hook">Een klus is klaar, maar facturatie krijgt geen helder seintje.</p>
      <dl>
        <div><dt>Voor</dt><dd>Akkoord, oplevering en bewijs zitten verspreid.</dd></div>
        <div><dt>Ontbreekt</dt><dd>Factuurmoment en bewijsroute.</dd></div>
        <div><dt>Na</dt><dd>Oplevering, akkoord en factuurtrigger hangen samen.</dd></div>
      </dl>
    </article>
  </div>
</section>

<section class="section-band problem-section">
  <div class="section-heading">
    <p class="eyebrow">Zo hangt werking los</p>
    <h2>Als niemand nog vraagt, beslist of terugkoppelt, is dat ook een status.</h2>
  </div>
  <ul class="problem-list">
    <li>Een klant vraagt iets aan, maar niemand ziet wie volgt.</li>
    <li>Een offerte is verstuurd, maar de herinnering zit in iemands hoofd.</li>
    <li>Een project is gestart of afgerond, maar facturatie krijgt geen seintje.</li>
    <li>Een collega vertrekt en pas dan wordt zichtbaar hoeveel in één hoofd zat.</li>
    <li>Een afdeling staat in freeze, maar nieuwe vragen blijven binnenkomen zonder harde grens.</li>
  </ul>
  <p class="dependency-question">Blijft dit stuk werking zichtbaar als de enige persoon die het kent er vandaag niet is?</p>
</section>

<section class="section-band method-section">
  <div class="section-heading">
    <p class="eyebrow">Eerst Zicht</p>
    <h2>Eerst tonen we waar het loshangt. Daarna kiezen we samen één stuk dat we vastpakken.</h2>
  </div>
  <ol class="steps">
    <li>We kiezen een afgebakend stuk werking.</li>
    <li>Iemand toont hardop hoe het vandaag loopt.</li>
    <li>We brengen ingang, status, eigenaar, akkoord, bewijs en volgende stap in kaart.</li>
    <li>We zoeken waar handwerk zich verstopt.</li>
    <li>We kiezen pas daarna wat eerst moet veranderen.</li>
  </ol>
</section>

<section id="scan" class="section-band offer-section">
  <div class="offer-layout">
    <div>
      <p class="eyebrow">Eerste Zicht-scan</p>
      <h2>Een klein genoeg eerste stap om serieus te zijn.</h2>
      <p>In een Eerste Zicht-scan brengen we één stuk werking in kaart. Niet alles. Een stuk dat vandaag tijd, geld of opvolging lekt.</p>
    </div>
    <div class="deliverables">
      <h3>Wat ge krijgt</h3>
      <ul>
        <li>Situatiekaart</li>
        <li>Lijst van loshangende punten</li>
        <li>Overdraagbaarheidscheck</li>
        <li>Klein voor/na-beeld</li>
        <li>Voorstel voor één eerste prioriteit</li>
      </ul>
    </div>
  </div>
</section>

<section id="check" class="section-band check-section">
  <div class="section-heading">
    <p class="eyebrow">De Loshang-check</p>
    <h2>Vijf vragen om te voelen of werk te veel loshangt.</h2>
  </div>
  <form class="check-form" id="loshangCheck">
    <label><input type="checkbox" name="signal"> Wie eigenaar is van de volgende stap, is niet altijd zichtbaar.</label>
    <label><input type="checkbox" name="signal"> De status staat in mails, WhatsApp, Excel of geheugen.</label>
    <label><input type="checkbox" name="signal"> Als één persoon er niet is, moet iemand zoeken of navragen.</label>
    <label><input type="checkbox" name="signal"> Een reminder zit vooral in iemands hoofd.</label>
    <label><input type="checkbox" name="signal"> Iemand anders kan dit morgen niet vlot volgen.</label>
    <output class="check-result" id="checkResult">Vink aan wat herkenbaar is.</output>
  </form>
</section>

<section class="section-band qualification-section">
  <div class="section-heading">
    <p class="eyebrow">Past dit?</p>
    <h2>Vastpakt is niet de route voor “doe maar iets met AI”.</h2>
  </div>
  <div class="fit-grid">
    <div>
      <h3>Wel passend als</h3>
      <ul>
        <li>opvolging verspreid zit over mailbox, telefoon, WhatsApp of geheugen;</li>
        <li>mensen anders kijken naar waar werk staat;</li>
        <li>ge één stuk zichtbaar wilt maken voor ge tools kiest.</li>
      </ul>
    </div>
    <div>
      <h3>Niet passend als</h3>
      <ul>
        <li>ge meteen een tool wilt zonder verantwoordelijkheid te benoemen;</li>
        <li>ge juridisch of boekhoudkundig advies zoekt;</li>
        <li>ge een groot transformatietraject wilt starten zonder eerste bewijs.</li>
      </ul>
    </div>
  </div>
</section>

<section id="contact" class="section-band contact-section">
  <div class="contact-copy">
    <p class="eyebrow">Eerste stap</p>
    <h2>Toon één stuk werking dat vandaag blijft hangen.</h2>
    <p>Ge krijgt terug of dit geschikt is voor een Eerste Zicht-scan, en welk stuk we eerst zouden bekijken.</p>
  </div>
  <form class="contact-form">
    <label>Naam <input type="text" name="name" autocomplete="name"></label>
    <label>E-mail <input type="email" name="email" autocomplete="email"></label>
    <label>Waar blijft iets vandaag hangen? <textarea name="situation" rows="5"></textarea></label>
    <button class="button primary" type="button">Verstuur voorlopig handmatig</button>
  </form>
</section>
```

- [ ] **Step 2: Verify section anchors**

Run:

```bash
rg -n "Aanvraag zonder eigenaar|Eerste Zicht-scan|De Loshang-check|Toon één stuk werking" index.html
```

Expected: all four phrases are found.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add Vastpakt homepage content sections"
```

### Task 3: Add Responsive Visual System

**Files:**
- Create: `styles.css`

- [ ] **Step 1: Create `styles.css`**

```css
:root {
  color-scheme: light;
  --ink: #17201b;
  --muted: #5f6b63;
  --line: #d8ded7;
  --paper: #fbfaf6;
  --panel: #ffffff;
  --soft: #eef3ed;
  --accent: #2f6f57;
  --accent-dark: #194536;
  --warn: #b45b38;
  --shadow: 0 18px 60px rgba(23, 32, 27, 0.09);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  color: var(--ink);
  background: var(--paper);
  line-height: 1.5;
}

a { color: inherit; }

.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 18px clamp(18px, 4vw, 56px);
  background: rgba(251, 250, 246, 0.92);
  border-bottom: 1px solid var(--line);
  backdrop-filter: blur(14px);
}

.brand {
  font-weight: 800;
  text-decoration: none;
  letter-spacing: 0;
}

.nav-links {
  display: flex;
  gap: 18px;
  font-size: 0.95rem;
}

.nav-links a {
  color: var(--muted);
  text-decoration: none;
}

.section-band {
  padding: clamp(48px, 7vw, 96px) clamp(18px, 4vw, 56px);
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
  align-items: center;
  gap: clamp(28px, 5vw, 72px);
  min-height: calc(100vh - 74px);
}

.eyebrow {
  margin: 0 0 12px;
  color: var(--accent-dark);
  font-size: 0.9rem;
  font-weight: 800;
}

h1, h2, h3, p { overflow-wrap: anywhere; }

h1 {
  max-width: 820px;
  margin: 0;
  font-size: clamp(2.55rem, 6vw, 5.6rem);
  line-height: 0.98;
  letter-spacing: 0;
}

h2 {
  max-width: 820px;
  margin: 0;
  font-size: clamp(1.9rem, 3.6vw, 3.5rem);
  line-height: 1.05;
  letter-spacing: 0;
}

h3 {
  margin: 0 0 12px;
  font-size: 1.15rem;
}

.hero-lede,
.section-heading p + h2 + p {
  max-width: 680px;
  color: var(--muted);
  font-size: clamp(1.05rem, 1.6vw, 1.35rem);
}

.hero-actions,
.button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 28px 0 16px;
}

.button {
  display: inline-flex;
  min-height: 46px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 12px 16px;
  border: 1px solid var(--accent);
  font-weight: 800;
  text-decoration: none;
}

.button.primary {
  color: white;
  background: var(--accent);
}

.button.secondary {
  color: var(--accent-dark);
  background: transparent;
}

.reassurance {
  max-width: 560px;
  color: var(--muted);
}

.situation-card,
.proof-card,
.deliverables,
.fit-grid > div,
.contact-form {
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--panel);
  box-shadow: var(--shadow);
}

.hero-card {
  padding: clamp(18px, 3vw, 30px);
}

.card-label {
  margin: 0 0 18px;
  color: var(--muted);
  font-weight: 800;
}

.flow-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  margin-bottom: 22px;
}

.flow-row span {
  min-height: 70px;
  display: grid;
  place-items: center;
  padding: 10px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--soft);
  text-align: center;
  font-weight: 800;
}

.flow-row .missing {
  color: #fff;
  background: var(--warn);
  border-color: var(--warn);
}

.state-list,
.proof-card dl {
  display: grid;
  gap: 10px;
  margin: 0;
}

.state-list div,
.proof-card dl div {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 10px;
  padding: 10px 0;
  border-top: 1px solid var(--line);
}

dt {
  color: var(--muted);
  font-weight: 800;
}

dd { margin: 0; }

.section-heading {
  margin-bottom: clamp(24px, 4vw, 44px);
}

.proof-grid,
.fit-grid,
.offer-layout {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.proof-card,
.fit-grid > div,
.deliverables,
.contact-form {
  padding: 22px;
}

.hook {
  color: var(--muted);
  font-weight: 700;
}

.problem-list,
.steps {
  display: grid;
  gap: 12px;
  max-width: 880px;
  margin: 0;
  padding-left: 22px;
  font-size: 1.12rem;
}

.dependency-question {
  max-width: 780px;
  margin-top: 28px;
  padding: 18px;
  border-left: 5px solid var(--accent);
  background: var(--soft);
  font-weight: 800;
}

.offer-layout {
  grid-template-columns: minmax(0, 1fr) minmax(280px, 420px);
}

.deliverables ul,
.fit-grid ul {
  margin: 0;
  padding-left: 20px;
}

.check-form,
.contact-form {
  display: grid;
  gap: 14px;
  max-width: 820px;
}

.check-form label,
.contact-form label {
  display: grid;
  gap: 6px;
  font-weight: 700;
}

input,
textarea {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 12px;
  color: var(--ink);
  background: #fff;
  font: inherit;
}

.check-result {
  padding: 16px;
  border-radius: 8px;
  background: var(--soft);
  font-weight: 800;
}

.contact-section {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(320px, 1.1fr);
  gap: 28px;
  align-items: start;
}

@media (max-width: 860px) {
  .site-header,
  .nav-links,
  .hero-actions {
    align-items: flex-start;
  }

  .site-header {
    position: static;
    flex-direction: column;
  }

  .nav-links {
    flex-wrap: wrap;
  }

  .hero,
  .proof-grid,
  .offer-layout,
  .fit-grid,
  .contact-section {
    grid-template-columns: 1fr;
  }

  .hero {
    min-height: auto;
  }

  .flow-row {
    grid-template-columns: 1fr;
  }

  .state-list div,
  .proof-card dl div {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 2: Verify CSS selectors exist**

Run:

```bash
rg -n "\\.hero|\\.proof-grid|\\.situation-card|\\.check-form|@media" styles.css
```

Expected: all selectors are found.

- [ ] **Step 3: Commit**

```bash
git add styles.css
git commit -m "feat: style Vastpakt homepage"
```

### Task 4: Add Loshang-Check Interaction

**Files:**
- Create: `script.js`

- [ ] **Step 1: Create `script.js`**

```js
const checkForm = document.querySelector("#loshangCheck");
const checkResult = document.querySelector("#checkResult");

function resultForScore(score) {
  if (score === 0) {
    return "Vink aan wat herkenbaar is.";
  }

  if (score <= 1) {
    return "Laag risico: dit stuk werking lijkt redelijk zichtbaar.";
  }

  if (score <= 3) {
    return "Middel risico: opvolging hangt op één of twee plekken los.";
  }

  return "Hoog risico: dit zit vooral in hoofden, mailboxen of gewoontes.";
}

if (checkForm && checkResult) {
  checkForm.addEventListener("change", () => {
    const checked = checkForm.querySelectorAll('input[name="signal"]:checked').length;
    checkResult.textContent = resultForScore(checked);
  });
}
```

- [ ] **Step 2: Verify script syntax**

Run:

```bash
node --check script.js
```

Expected: no syntax errors.

- [ ] **Step 3: Verify script is linked**

Run:

```bash
rg -n "script.js|loshangCheck|checkResult" index.html script.js
```

Expected: each term is found.

- [ ] **Step 4: Commit**

```bash
git add script.js index.html
git commit -m "feat: add Loshang check interaction"
```

### Task 5: Verify Against Acceptance Criteria

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Add verification checklist to `README.md`**

Append:

```markdown
## Acceptance Checklist

- [ ] 5-second test: reader sees Vastpakt starts by making one piece of operation visible.
- [ ] Proof test: at least three concrete proof examples appear before broad claims.
- [ ] Category test: page does not read like an AI agency, legal advisor, accountant, website shop, or generic process consultant.
- [ ] First-step test: page says what the reader brings, gets, and what happens after.
- [ ] Contact threshold test: first contact asks for one loose situation and no budget.
- [ ] Situatiekaart weight test: proof object appears in hero and offer section.
- [ ] Future workday test: at least one after-state says the reader can point instead of search.
```

- [ ] **Step 2: Run static checks**

Run:

```bash
node --check script.js
rg -n "Eerst zien waar ge staat|Situatiekaart|Aanvraag zonder eigenaar|Offerte zonder opvolgspoor|Bewijs naar geld|Geen nieuwe tool|Ge krijgt terug" index.html
git diff --check
```

Expected:

- `node --check` prints no errors.
- `rg` finds all key phrases.
- `git diff --check` prints no whitespace errors.

- [ ] **Step 3: Manual browser verification**

Open `index.html` in the in-app browser or local browser and check:

- Desktop width: hero and Situatiekaart are visible without overlap.
- Mobile width: nav wraps, proof object stacks, text does not overflow.
- Loshang-check changes result when boxes are checked.
- Contact section asks only for name, email, and one loose situation.

- [ ] **Step 4: Commit**

```bash
git add README.md
git commit -m "docs: add static homepage verification checklist"
```

## Self-Review

Spec coverage:

- Hero promise: Task 1.
- Proof examples: Task 2.
- Problem recognition: Task 2.
- Method and offer: Task 2.
- Loshang-check: Task 2 and Task 4.
- Visual proof object: Task 1 and Task 3.
- Acceptance verification: Task 5.

Known deliberate exclusions:

- No backend form submission in v1. The button says "Verstuur voorlopig handmatig" to avoid pretending the form sends.
- No analytics, CMS, routing, blog, pricing, or automation feature.
- No AI positioning.

Execution command preference:

```bash
open index.html
```

or use the in-app browser to open the absolute file path.
