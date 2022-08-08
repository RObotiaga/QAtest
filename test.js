const { test, expect } = require('@playwright/test');
test('basic test', async ({ page }) => {
  await page.goto('RObotiaga.github.io');
  await page.click('text=ПЛЮСИК');
  await page.click('text=ПЛЮСИК');
  await page.click('text=ПЛЮСИК');
  await page.click('text=ПЛЮСИК X10');
  await page.click('text=ПЛЮСИК X10');
  await page.click('text=ПЛЮСИК X10');
  await expect('#out').toHaveText('33');
});