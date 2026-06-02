const { chromium } = require('playwright');
const fs = require('fs');

const urls = fs
  .readFileSync('redesign-moodboard/shots/urls.txt', 'utf8')
  .split('\n')
  .map((s) => s.trim())
  .filter((l) => l && !l.startsWith('#'));

(async () => {
  fs.mkdirSync('redesign-moodboard/shots', { recursive: true });
  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    deviceScaleFactor: 1,
  });
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
      await page.screenshot({ path: `redesign-moodboard/shots/${slug}-fold.png` });
      await page.screenshot({
        path: `redesign-moodboard/shots/${slug}-full.png`,
        fullPage: true,
      });
      console.log('OK', url, '->', slug);
    } catch (e) {
      console.log('FAIL', url, '-', e.message);
    }
  }

  await browser.close();
})();
