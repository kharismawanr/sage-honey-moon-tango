import { chromium } from "playwright";
import { pathToFileURL } from "node:url";
import { writeFileSync } from "node:fs";

const htmlPath = "/workspace/.grok/og-card.html";
const outPath = "/workspace/.grok/og-raw.png";

const browser = await chromium.launch({
  args: ["--font-render-hinting=none", "--disable-font-subpixel-positioning"],
});
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 2,
});
await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "networkidle" });
await page.evaluate(async () => {
  await document.fonts.ready;
  // Force a layout after webfonts settle
  document.body.offsetHeight;
});
await page.waitForTimeout(400);
const buf = await page.screenshot({ type: "png", omitBackground: false });
writeFileSync(outPath, buf);
await browser.close();
console.log(`wrote ${outPath} ${buf.length} bytes`);
