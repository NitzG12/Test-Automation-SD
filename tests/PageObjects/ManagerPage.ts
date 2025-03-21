 // tests/pageObjects/ManagerPage.ts
import { Page, expect } from '@playwright/test';

export class ManagerPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    
    await this.page.goto('https://signon-acc1.globepayroll.net/auth/realms/globalsolutions-reference/protocol/openid-connect/auth?client_id=GPFRONT&redirect_uri=https%3A%2F%2Fglobalsolutions-reference.gpi-test.globepayroll.net%2Fui%2F%23%2Finbox%2Ftasks&state=6df0f057-b5b4-4359-a400-25670e8e9769&response_mode=fragment&response_type=code&scope=openid&nonce=aca2b9cd-7378-4975-aae4-520e74e12ecd');
  }

  async login(username: string, password: string) {
    // Fill in the Manager's credentials and sign in
    await this.page.getByRole('textbox', { name: 'Username or email' }).fill(username);
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    await this.page.getByRole('button', { name: 'Sign In' }).click();
  }

  async navigateToTasks() {
    // Navigate to the My Tasks section
    await this.page.getByRole('link', { name: 'My Tasks' }).click();
  }

  async approveUpdate() {
    // Locate the update task, then click on it and approve the update
    await this.page.getByRole('button', { name: 'Update Personal Information' }).first().click();
    await this.page.getByRole('button', { name: 'Approve' }).click();
  }

  async verifyApproval() {
    // Verifies that an approval confirmation is visible on the page
    await expect(this.page.locator('text=Update approved')).toBeVisible();
  }
}
