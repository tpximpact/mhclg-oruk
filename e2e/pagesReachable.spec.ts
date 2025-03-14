const { test, expect } = require('@playwright/test');

const data = [
  {
    path: "/",
    lookFor: "Open"
  }
];

test.describe('Page Content Validation Tests', () => {
  data.forEach(({ path, lookFor }) => {
    test(`should find "${lookFor}" on ${path}`, async ({ page }) => {
      await page.goto(path);

      // Check if the status code is 200
      const response = await page.goto(path);
      expect(response.status()).toBe(200);

      const bodyText = await page.textContent('body');
      expect(bodyText).toContain(lookFor);
    });
  });
});
