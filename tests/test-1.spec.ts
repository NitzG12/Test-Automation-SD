import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://signon-acc1.globepayroll.net/auth/realms/globalsolutions-reference/protocol/openid-connect/auth?client_id=GPFRONT&redirect_uri=https%3A%2F%2Fglobalsolutions-reference.gpi-test.globepayroll.net%2Fui%2F%23%2Finbox%2Ftasks&state=746daf5c-d85a-4392-8715-97da30e24008&response_mode=fragment&response_type=code&scope=openid&nonce=9c5cc5cd-86bc-4afe-8e99-e4be0fde642d');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('NiTestEmp@gp.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('autoss#12');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('#ess-menu').click();
  await page.locator('#ess-documents-menu').click();
  await page.locator('#ess-personal-info-menu').click();
  await page.locator('a').filter({ hasText: 'Education' }).click();
  await page.getByText('Certifications', { exact: true }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox', { name: ' Choose or drop a file' }).click();
  await page.getByRole('textbox', { name: ' Choose or drop a file' }).setInputFiles('file2.pdf');
  await page.locator('datepicker-input i').click();
  await page.getByRole('button', { name: '›' }).click();
  await page.getByRole('button', { name: '24' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
});






