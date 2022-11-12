import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://whatsmyuseragent.org/');
  await page.screenshot({ path: `example.png` });
});
