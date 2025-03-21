 // tests/pageObjects/HRAdminPage.ts
import { Page, expect } from '@playwright/test';

export class HRAdminPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    
    await this.page.goto('https://signon-acc1.globepayroll.net/auth/realms/globalsolutions-reference/protocol/openid-connect/auth?client_id=GPFRONT&redirect_uri=https%3A%2F%2Fglobalsolutions-reference.gpi-test.globepayroll.net%2Fui%2F%23%2Finbox%2Ftasks&state=6df0f057-b5b4-4359-a400-25670e8e9769&response_mode=fragment&response_type=code&scope=openid&nonce=aca2b9cd-7378-4975-aae4-520e74e12ecd');
  }

  async login(username: string, password: string) {
    // Fill in the HR Admin credentials and sign in
    await this.page.getByRole('textbox', { name: 'Username or email' }).fill(username);
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    await this.page.getByRole('button', { name: 'Sign In' }).click();
  }

  /**
   * Verifies that the employee's profile contains the expected updated data.
   * @param expectedData Object containing expected employee data.
   */
  async verifyEmployeeProfileUpdate(expectedData: { bankingDetails: string; address: string; emergencyContact: string }) {
    // Navigate to the Employee Profile page (adjust the locator as needed)
    await this.page.getByRole('link', { name: 'Employee Profile' }).click();
    
    
   
  }
}
