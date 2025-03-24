import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://signon-acc1.globepayroll.net/auth/realms/globalsolutions-reference/protocol/openid-connect/auth?client_id=GPFRONT&redirect_uri=https%3A%2F%2Fglobalsolutions-reference.gpi-test.globepayroll.net%2Fui%2F%23%2Fess%2Fpersonal-info&state=e9e90d52-b56b-4654-91c7-8d11c9e4e587&response_mode=fragment&response_type=code&scope=openid&nonce=86eb145c-f2c6-4da7-9971-674eac901ac9');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('NiTestEmp@gp.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('autoss#12');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('a').filter({ hasText: /^Personal information$/ }).click();
  await page.locator('a').filter({ hasText: 'Education' }).click();
  await page.getByText('Certifications', { exact: true }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox', { name: ' Choose or drop a file' }).click();
});