import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Set viewport size
  await page.setViewportSize({ width: 1440, height: 900 });

  // Homepage
  await page.goto('http://localhost:5173/');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: '/Users/crystalma/Desktop/GIVE/West Papua Care/screenshots/01-homepage-hero.png', fullPage: false });
  await page.screenshot({ path: '/Users/crystalma/Desktop/GIVE/West Papua Care/screenshots/02-homepage-full.png', fullPage: true });

  // About page
  await page.goto('http://localhost:5173/about');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: '/Users/crystalma/Desktop/GIVE/West Papua Care/screenshots/03-about-page.png', fullPage: true });

  // Project page
  await page.goto('http://localhost:5173/project');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: '/Users/crystalma/Desktop/GIVE/West Papua Care/screenshots/04-project-page.png', fullPage: true });

  // Get Involved page
  await page.goto('http://localhost:5173/get-involved');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: '/Users/crystalma/Desktop/GIVE/West Papua Care/screenshots/05-get-involved-page.png', fullPage: true });

  // Contact page
  await page.goto('http://localhost:5173/contact');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: '/Users/crystalma/Desktop/GIVE/West Papua Care/screenshots/06-contact-page.png', fullPage: true });

  // Mobile view
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('http://localhost:5173/');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: '/Users/crystalma/Desktop/GIVE/West Papua Care/screenshots/07-mobile-homepage.png', fullPage: true });

  await browser.close();
  console.log('Screenshots captured successfully!');
})();
