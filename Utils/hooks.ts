import { chromium, Page, Browser, BrowserContext } from '@playwright/test';
import { BeforeAll, AfterAll, Before, After, Status } from '@cucumber/cucumber';
import { pageFixture } from './pageFixture';

let browser: Browser;
let context: BrowserContext;
let page: Page;

BeforeAll(async function () {
    // Launch the browser globally before all tests
    browser = await chromium.launch({ headless: false }); // Set headless to false for visible browser
    context = await browser.newContext();
    page = await context.newPage(); // Initialize the page
    pageFixture.page = page; // Share the page globally
});

Before(async function ({ pickle }) {
    // Create a new browser context and page for each scenario
    const scenarioName = pickle.name.replace(/\s+/g, '_'); // Replace spaces with underscores for safe filenames
    context = await browser.newContext();
    page = await context.newPage();
    pageFixture.page = page;
    console.log(`Starting scenario: ${scenarioName}`);
});

AfterAll(async function () {
    // Close the browser and context after all tests
    await pageFixture.page.close();
    await context.close();
    await browser.close();
});

After(async function ({ pickle, result }) {
    // Capture a screenshot if the scenario fails
    if (result?.status === Status.FAILED) {
        const screenshotPath = `./test-result/screenshot/${pickle.name.replace(/\s+/g, '_')}.png`; // Replace spaces in filenames
        const screenshot = await pageFixture.page.screenshot({
            path: screenshotPath,
            type: 'png',
        });
        console.log(`Screenshot saved at: ${screenshotPath}`);
        await this.attach(screenshot, 'image/png'); // Attach the screenshot to the Cucumber report
    }
});