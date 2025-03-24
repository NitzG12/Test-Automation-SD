
import { test } from '@playwright/test';
test('Upload', async ({ page }) => {
    
    await page.goto('https://globalsolutions-reference.gpi-test.globepayroll.net/ui/#/ess/personal-info');

    const uploadINput = page.locator('a').filter({ hasText: /^Personal information$/ }).click();
    await page.locator('a').filter({ hasText: 'Education' }).click();
    await page.getByText('Certifications', { exact: true }).click();
    await page.getByRole('button', { name: ' Add' }).click();
    

    await uploadINput.setInputFiles('File1.pdf');


    await uploadINput.setInputFiles([]);
  
});