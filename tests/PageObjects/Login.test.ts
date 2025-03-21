// tests/login.test.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from './LoginPage';

const credentials = [
  { role: 'Employee', username: 'NiTestEmp@gp.com', password: 'autoss#12' },
  { role: 'Manager', username: 'NiTestMan@gp.com', password: 'autoss#12' },
  { role: 'HR', username: 'NiHr@gp.com', password: 'autoss#12' },
];

credentials.forEach(({ role, username, password }) => {
  test(`Login as ${role}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(username, password);

   
  });
});
