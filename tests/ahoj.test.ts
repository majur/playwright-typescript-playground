import { Given, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

let browser: Browser;
let page: Page;

Given('I open the {string} website', async (url: string) => {
  browser = await chromium.launch();
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto(url);
});

Then('the page title should be {string}', async (expectedTitle: string) => {
  const title = await page.title();
  if (title !== expectedTitle) {
    throw new Error(`Expected title to be "${expectedTitle}" but was "${title}"`);
  }
  await browser.close();
});
