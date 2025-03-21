import { test, expect } from '@playwright/test';

test('ScreenshotEmP test', async ({ page }) => {

    page.goto('https://globalsolutions-reference.gpi-test.globepayroll.net/ui/#/inbox/tasks');

    await page.getByRole('button', { name: 'Submit' }).click();
    
    const s: Promise<Buffer> = page.screenshot({
        path: 'screenshot/screenshot.png'
    });

    // page.screenshot({path: 'screenshots/screenshot-advanced.jpeg',
    //     fullPage:true,
    //     mask: await	page.getByTestId('location').all()

    // });

    await expect(page.locator('.invalid-feedback')).toHaveCount(4);

})