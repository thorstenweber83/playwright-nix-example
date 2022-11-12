import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://www.heise.de/');

  await page.frameLocator('#sp_message_iframe_730580').getByRole('button', { name: 'Zustimmen' }).click();
  await expect(page).toHaveURL('https://www.heise.de/');

  await page.getByRole('link', { name: 'Netzpolitik' }).click();
  await expect(page).toHaveURL('https://www.heise.de/newsticker/netzpolitik/');

  await expect(page).toHaveScreenshot();
});
