
import { test, expect } from '@playwright/test';
import { LoginPage } from './LoginPage.test.ts';

// Array of user credentials for parameterized tests
const users = [
    { username: 'NiTestEmp@gp.com', password: 'autoss#12' },
    { username: 'NiHr@gp.com', password: 'autoss#12' },
    { username: 'NiTestMan@gp.com', password: 'autoss#12' },
    { username: 'InvalidUser@gp.com', password: 'wrongpass' }, // Invalid credentials test
];

// Loop through each user and create a separate test case
users.forEach(({ username, password }) => {
    test(`Login test for ${username}`, async ({ page }) => {
        const loginPage = new LoginPage(page);

        // Navigate to the login page
        await loginPage.goto();

        // Use the LoginPage method to log in with current credentials
        await loginPage.login(username, password);

        if (username === 'InvalidUser@gp.com') {
            // Assert that login fails for invalid credentials
            await expect(page.locator('.error-message')).toBeVisible();
        } else {
            // Assert that the login was successful (for example, checking the URL)
            await expect(page).toHaveURL(/dashboard/);
        }
    });
});

// Additional test to verify logout functionality
test('Logout test', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Navigate to the login page
    await loginPage.goto();

    // Log in with valid credentials
    await loginPage.login('NiTestEmp@gp.com', 'autoss#12');

    // Assert that the login was successful
    await expect(page).toHaveURL(/dashboard/);

    // Perform logout
    await loginPage.logout();

    // Assert that the user is redirected to the login page
    await expect(page).toHaveURL(/login/);
});

