const { chromium } = require('playwright');
const fs = require('fs');

const urls = fs
  .readFileSync('redesign-moodboard/copy/urls.txt', 'utf8')
  .split('\n')
  .map((s) => s.trim())
  .filter((l) => l && !l.startsWith('#'));

(async () => {
  fs.mkdirSync('redesign-moodboard/copy', { recursive: true });
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const page = await ctx.newPage();

  for (const url of urls) {
    const slug = url
      .replace(/^https?:\/\//, '')
      .replace(/[^a-z0-9]+/gi, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 60);
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
      await page.waitForTimeout(2500);

      const data = await page.evaluate(() => {
        const txt = (el) => (el ? el.innerText.replace(/\s+/g, ' ').trim() : null);
        const d = {};
        d.title = document.title;
        d.h1 = txt(document.querySelector('h1'));
        d.headings = Array.from(document.querySelectorAll('h1,h2,h3'))
          .slice(0, 30)
          .map((h) => ({ tag: h.tagName, text: txt(h) }))
          .filter((o) => o.text);
        d.buttons = Array.from(
          document.querySelectorAll('button, a[class*="button"], [class*="btn"], a[role="button"]')
        )
          .slice(0, 25)
          .map(txt)
          .filter(Boolean);
        d.paragraphs = Array.from(document.querySelectorAll('p')).slice(0, 14).map(txt).filter(Boolean);
        d.firstScreen = document.body.innerText.replace(/\s+/g, ' ').trim().slice(0, 1800);

        // Internal link map — reveals the sitemap so a follow-up pass can go deep
        const host = location.hostname.replace(/^www\./, '');
        const seen = new Set();
        d.internalLinks = Array.from(document.querySelectorAll('a[href]'))
          .map((a) => {
            try {
              const u = new URL(a.href);
              if (u.hostname.replace(/^www\./, '') !== host) return null;
              u.hash = '';
              return u.href.replace(/\/$/, '') || u.href;
            } catch (e) {
              return null;
            }
          })
          .filter((h) => h && !seen.has(h) && seen.add(h))
          .slice(0, 60);

        // Cheap quantitative metrics over the headline+paragraph corpus
        const corpus = (
          (d.h1 || '') + ' ' + d.headings.map((h) => h.text).join(' ') + ' ' + d.paragraphs.join(' ')
        ).toLowerCase();
        const c = (re) => (corpus.match(re) || []).length;
        const headingWords = (d.headings.map((h) => h.text).join(' ').match(/[\wà-ÿ]+/g) || []).length;
        d.metrics = {
          first_person_singular_ik_mij: c(/\b(ik|mij|mijn|me|my|i)\b/g),
          second_person_jij_u: c(/\b(jij|je|jouw|jou|u|uw|jullie|you|your)\b/g),
          first_person_plural_wij_ons: c(/\b(wij|we|ons|onze|us|our)\b/g),
          numbers_digits: c(/\d+/g),
          ai_mentions: c(/\b(ai|a\.i\.|artifici|automatis|automation)\w*/g),
          heading_word_count: headingWords,
          heading_count: d.headings.length,
        };
        return d;
      });

      data._url = url;
      fs.writeFileSync(`redesign-moodboard/copy/${slug}.json`, JSON.stringify(data, null, 2));
      console.log('OK', url, '->', slug);
    } catch (e) {
      console.log('FAIL', url, '-', e.message);
    }
  }

  await browser.close();
})();
