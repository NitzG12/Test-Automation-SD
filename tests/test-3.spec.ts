import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://signon-acc1.globepayroll.net/auth/realms/globalsolutions-reference/protocol/openid-connect/auth?client_id=GPFRONT&redirect_uri=https%3A%2F%2Fglobalsolutions-reference.gpi-test.globepayroll.net%2Fui%2F%23%2Finbox%2Ftasks&state=6df0f057-b5b4-4359-a400-25670e8e9769&response_mode=fragment&response_type=code&scope=openid&nonce=aca2b9cd-7378-4975-aae4-520e74e12ecd');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('NiTestEmp@gp.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('autoss#12');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.goto('https://globalsolutions-reference.gpi-test.globepayroll.net/ui/#/');
});


