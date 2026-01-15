import { test, expect } from '@playwright/test';
import { TransferPage } from '../pages/transferPage.js';

test.describe('Money Transfer API Mocking', () => {

  test('Test A - Successful transfer (200 OK)', async ({ page }) => {
  await page.route('**/api/transfer', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        Status: 'Success',
        TransactionID: '12345'
      })
    });
  });

  const transferPage = new TransferPage(page);
  await transferPage.navigate();

  // Use page.once to catch the next dialog only
  const [dialog] = await Promise.all([
    page.waitForEvent('dialog'),
    transferPage.clickTransferButton(), // triggers the dialog
  ]);

  expect(dialog.message()).toContain('Transaction ID: 12345');
  await dialog.accept();
});


  test('Test B - Failed transfer (400 Bad Request)', async ({ page }) => {
  await page.route('**/api/transfer', async route => {
    await route.fulfill({
      status: 400,
      contentType: 'application/json',
      body: JSON.stringify({ Error: 'Insufficient funds' })
    });
  });

  const transferPage = new TransferPage(page);
  await transferPage.navigate();

  const [dialog] = await Promise.all([
    page.waitForEvent('dialog'),
    transferPage.clickTransferButton(),
  ]);

  expect(dialog.message()).toContain('Insufficient funds');
  await dialog.accept();
});

});
