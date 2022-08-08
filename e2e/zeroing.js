const { test, expect } = require('@playwright/test');
test('second test', async ({ page }) => {
  await page.goto('https://robotiaga.github.io/');
  await page.click('text=ПЛЮСИК');
  await page.click('text=ПЛЮСИК');
  await page.click('text=ПЛЮСИК');
  await page.click('text=CLEAR');
  await expect(page.locator('#out')).toHaveText('0');
});