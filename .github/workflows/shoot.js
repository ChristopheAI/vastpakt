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

  // Desktop context
  const deskCtx = await browser.newContext({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
  const desk = await deskCtx.newPage();
  // Mobile context (iPhone-ish)
  const mobCtx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true });
  const mob = await mobCtx.newPage();

  for (const url of urls) {
    const slug = url
      .replace(/^https?:\/\//, '')
      .replace(/^file:\/\/.*\//, '')
      .replace(/[^a-z0-9]+/gi, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 60);
    try {
      await desk.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
      await desk.waitForTimeout(2500);
      await desk.screenshot({ path: `redesign-moodboard/shots/${slug}-fold.png` });
      await desk.screenshot({ path: `redesign-moodboard/shots/${slug}-full.png`, fullPage: true });

      await mob.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
      await mob.waitForTimeout(2000);
      await mob.screenshot({ path: `redesign-moodboard/shots/${slug}-m.png` });
      await mob.screenshot({ path: `redesign-moodboard/shots/${slug}-m-full.png`, fullPage: true });

      console.log('OK', url, '->', slug);
    } catch (e) {
      console.log('FAIL', url, '-', e.message);
    }
  }

  await browser.close();
})();
