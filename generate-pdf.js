import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Load the HTML file
  await page.goto('file:///Users/crystalma/Desktop/GIVE/West%20Papua%20Care/West-Papua-Care-Website-Design.html');

  // Wait for images to load
  await page.waitForTimeout(3000);

  // Generate PDF
  await page.pdf({
    path: '/Users/crystalma/Desktop/GIVE/West Papua Care/West-Papua-Care-Website-Design.pdf',
    format: 'A4',
    printBackground: true,
    margin: {
      top: '20px',
      right: '20px',
      bottom: '20px',
      left: '20px'
    }
  });

  await browser.close();
  console.log('PDF generated successfully!');
})();
