// tests/pageObjects/LoginPage.ts
import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly url: string = 'https://signon-acc1.globepayroll.net/auth/realms/globalsolutions-reference/protocol/openid-connect/auth?client_id=GPFRONT&redirect_uri=https%3A%2F%2Fglobalsolutions-reference.gpi-test.globepayroll.net%2Fui%2F%23%2Finbox%2Ftasks&state=6df0f057-b5b4-4359-a400-25670e8e9769&response_mode=fragment&response_type=code&scope=openid&nonce=aca2b9cd-7378-4975-aae4-520e74e12ecd';

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async login(username: string, password: string) {
    // Click and fill the username field
    await this.page.getByRole('textbox', { name: 'Username or email' }).click();
    await this.page.getByRole('textbox', { name: 'Username or email' }).fill(username);

    // Click and fill the password field
    await this.page.getByRole('textbox', { name: 'Password' }).click();
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);

    // Click the login button (adjust the locator as needed)
    await this.page.getByRole('button', { name: 'Sign In' }).click(); 
  }
}
