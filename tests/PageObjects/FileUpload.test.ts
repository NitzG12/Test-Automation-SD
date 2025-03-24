
import { test } from '@playwright/test';
test('Upload', async ({ page }) => {
    
    await page.goto('https://globalsolutions-reference.gpi-test.globepayroll.net/ui/#/ess/personal-info');

   const uploadINput = await page.locator(input _ngcontent-njq-c77 type="file");

    await uploadINput.setInputFiles('File1.pdf');


    await uploadINput.setInputFiles([]);
  
});