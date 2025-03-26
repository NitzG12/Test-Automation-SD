import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://signon-acc1.globepayroll.net/auth/realms/globalsolutions-reference/protocol/openid-connect/auth?client_id=GPFRONT&redirect_uri=https%3A%2F%2Fglobalsolutions-reference.gpi-test.globepayroll.net%2Fui%2F%23%2Fess%2Fpersonal-info&state=f7877304-8ae4-4776-8925-d7e2ae9f847d&response_mode=fragment&response_type=code&scope=openid&nonce=84d2bebb-f928-41ce-9e63-c3204212588a');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('NiTestEmp@gp.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('autoss#12');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.goto('https://globalsolutions-reference.gpi-test.globepayroll.net/ui/#/ess/personal-info');
  await page.locator('a').filter({ hasText: 'Education' }).click();
  await page.getByText('Certifications', { exact: true }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox', { name: ' Choose or drop a file' }).click();
  await page.getByRole('textbox', { name: ' Choose or drop a file' }).setInputFiles('testdoc.pdf');
  await page.getByText('testdoc.pdf').click();
  await page.getByRole('button', { name: 'Submit' }).click();
});