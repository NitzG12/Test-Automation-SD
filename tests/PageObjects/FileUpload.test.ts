
import { test } from '@playwright/test';
test('Upload', async ({ page }) => {
    
    await page.goto('https://globalsolutions-reference.gpi-test.globepayroll.net/ui/#/ess/personal-info');

    const uploadINput = page.locator('input[type="file"]');
    await uploadINput.setInputFiles('"C:\Test Automation Evaluation\Valid upload\File1.pdf"');


    await uploadINput.setInputFiles([]);
  
});