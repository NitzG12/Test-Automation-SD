import { test } from '@playwright/test';

test('Upload', async ({ page }) => {
    await page.goto('https://globalsolutions-reference.gpi-test.globepayroll.net/ui/#/ess/personal-info');

    // Correct locator using the full XPath
    const uploadInput = await page.locator('//html/body/app/div/div[2]/div[2]/ess-personal-info/gp-contract-data/gp-modal/div/div/div/div[2]/form/gp-form-card-field[2]/div/div/gp-form-field-file/label/input');
    //const uploadInput = await page.locator('input[test-id="CertificationScannedCopy"]');

   // await page.getByRole('button', { name: ' Add' }).click();

  //  Upload a file
    await uploadInput.setInputFiles(['testFile.txt'],{timeout: 15000});

    // // Clear the file input
    // await uploadInput.setInputFiles([]);
});