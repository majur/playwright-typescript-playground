import { Given, Then, When } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

let browser: Browser;
let page: Page;

Given('there is a user in database', async () => {
});

Given('I open the website {string}', async (url: string) => {
    browser = await chromium.launch(); // Launch the browser
    const context = await browser.newContext(); // Create a new browser context
    page = await context.newPage(); // Open a new page
    await page.goto(url); // Navigate to the provided URL
  });

When('user fills in valid login credentials', async () => {
});

When('user clicks in Submit button', async () => {
});

Then('Contact list is loaded', async () => {
});