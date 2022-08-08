const { test, expect } = require('@playwright/test');
test('first test', async ({ page }) => {
  await page.goto('https://robotiaga.github.io/');
  await page.click('text=ПЛЮСИК');
  await page.click('text=ПЛЮСИК');
  await page.click('text=ПЛЮСИК');
  await page.click('text=ПЛЮСИК X10');
  await page.click('text=ПЛЮСИК X10');
  await page.click('text=ПЛЮСИК X10');
  await expect(page.locator('#out')).toHaveText('33');
});