import { test, expect } from '@playwright/test';

test('Happy path', async ({ page }) => {
  await page.goto('http://localhost:4001/');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('JPMadmin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'ADD TRANSACTION' }).click();
  await page.getByPlaceholder('Sender').click();
  await page.getByPlaceholder('Sender').fill('Company A');
  await page.getByPlaceholder('Receiver').click();
  await page.getByPlaceholder('Receiver').fill('Company B');
  await page.getByPlaceholder('Amount').click();
  await page.getByPlaceholder('Amount').fill('100,0000');
  await page.getByPlaceholder('Currency').click();
  await page.getByPlaceholder('Currency').fill('SGD');
  await page.getByRole('button', { name: 'TO CHECKLIST' }).click();
  await page.getByRole('button', { name: 'CONFIRM' }).click();
  await page.goto('http://localhost:4002/');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('HLBadmin');
  await page.getByPlaceholder('Username').press('Tab');
  await page.getByPlaceholder('Password').fill('admin');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'CONFIRM' }).click();
  await page.getByRole('button', { name: 'CONFIRM' }).click();
  await page.waitForTimeout(1000 * 10);
  await page.locator('#transactionsDiv').getByRole('link').last().click();
  await expect(page.getByText('COMPLETED')).toHaveText('COMPLETED')
});