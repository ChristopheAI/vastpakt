const { chromium } = require('playwright');
const fs = require('fs');

const urls = fs
  .readFileSync('redesign-moodboard/dna/urls.txt', 'utf8')
  .split('\n')
  .map((s) => s.trim())
  .filter((l) => l && !l.startsWith('#'));

(async () => {
  fs.mkdirSync('redesign-moodboard/dna', { recursive: true });
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
        const gcs = (el) => (el ? getComputedStyle(el) : null);
        const typoProps = ['fontFamily', 'fontSize', 'fontWeight', 'lineHeight', 'letterSpacing', 'textTransform', 'color'];
        const pick = (el) => {
          const s = gcs(el);
          if (!s) return null;
          const o = {};
          typoProps.forEach((p) => (o[p] = s[p]));
          return o;
        };
        const result = {};

        // Representative typography
        const sel = { h1: 'h1', h2: 'h2', h3: 'h3', p: 'p', link: 'a', button: 'button, [class*="button"], [class*="btn"]' };
        result.typography = {};
        for (const k in sel) result.typography[k] = pick(document.querySelector(sel[k]));

        // Loaded fonts
        try {
          result.fonts = Array.from(new Set(Array.from(document.fonts).map((f) => `${f.family} ${f.weight} ${f.style}`)));
        } catch (e) { result.fonts = []; }

        // Walk elements -> tally tokens
        const els = Array.from(document.querySelectorAll('*')).slice(0, 4000);
        const t = (m, k) => { if (k) m[k] = (m[k] || 0) + 1; };
        const bg = {}, fg = {}, radius = {}, shadow = {}, pad = {}, gap = {}, fs2 = {}, weights = {};
        els.forEach((el) => {
          const s = getComputedStyle(el);
          if (s.backgroundColor && s.backgroundColor !== 'rgba(0, 0, 0, 0)' && s.backgroundColor !== 'transparent') t(bg, s.backgroundColor);
          if (s.color) t(fg, s.color);
          if (s.borderRadius && s.borderRadius !== '0px') t(radius, s.borderRadius);
          if (s.boxShadow && s.boxShadow !== 'none') t(shadow, s.boxShadow);
          ['paddingTop', 'paddingBottom'].forEach((p) => { if (s[p] && s[p] !== '0px') t(pad, s[p]); });
          if (s.gap && s.gap !== 'normal' && s.gap !== '0px') t(gap, s.gap);
          if (s.fontSize) t(fs2, s.fontSize);
          if (s.fontWeight) t(weights, s.fontWeight);
        });
        const top = (m, n = 12) => Object.entries(m).sort((a, b) => b[1] - a[1]).slice(0, n);
        result.palette = { backgrounds: top(bg, 12), text: top(fg, 12) };
        result.radius = top(radius, 8);
        result.shadow = top(shadow, 6);
        result.verticalSpacing = top(pad, 16);
        result.gaps = top(gap, 10);
        result.fontSizes = top(fs2, 18);
        result.fontWeights = top(weights, 8);

        // :root CSS variables (same-origin sheets only)
        const rootVars = {};
        try {
          for (const sheet of Array.from(document.styleSheets)) {
            let rules;
            try { rules = sheet.cssRules; } catch (e) { continue; }
            if (!rules) continue;
            for (const rule of Array.from(rules)) {
              if (rule.selectorText && rule.selectorText.includes(':root') && rule.style) {
                for (let i = 0; i < rule.style.length; i++) {
                  const pn = rule.style[i];
                  if (pn.startsWith('--')) rootVars[pn] = rule.style.getPropertyValue(pn).trim();
                }
              }
            }
          }
        } catch (e) {}
        result.cssVariables = rootVars;

        return result;
      });

      data._url = url;
      fs.writeFileSync(`redesign-moodboard/dna/${slug}.json`, JSON.stringify(data, null, 2));
      console.log('OK', url, '->', slug);
    } catch (e) {
      console.log('FAIL', url, '-', e.message);
    }
  }

  await browser.close();
})();
