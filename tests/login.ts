import { Before, Given, Then, When } from '@cucumber/cucumber';
import { chromium, Browser, Page, expect } from '@playwright/test';
import { RandomCredentialGenerator } from '../tools/randomCredentialGenerator';


let browser: Browser;
let page: Page;

// Initialize the browser and page before any scenario runs
Before(async () => {
  browser = await chromium.launch({ headless: false }); // Launch the browser
  const context = await browser.newContext(); // Create a new browser context
  page = await context.newPage(); // Open a new page
});


Given('the website {string} is opened with generated user', {timeout: 20000}, async function (url: string) {
  const randomEmail = RandomCredentialGenerator.generateRandomEmail();
  const randomPassword = RandomCredentialGenerator.generateRandomPassword();
  const randomString = RandomCredentialGenerator.generateRandomString(8);

  this.randomEmail = randomEmail;
  this.randomPassword = randomPassword;

  await page.goto('https://thinking-tester-contact-list.herokuapp.com/');
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('First' + randomString);
  await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').fill('Last' + randomString);
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(randomEmail);
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill(randomPassword);
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Logout' }).click();
});

When('user fills in valid login credentials', {timeout: 20000}, async function () {
  const randomEmail = this.randomEmail;
  const randomPassword = this.randomPassword;

  await page.getByPlaceholder('Email').fill(randomEmail);
  await page.getByPlaceholder('Password').fill(randomPassword);
});

When('user fills in invalid login credentials', {timeout: 20000}, async function () {
  const randomEmail = this.randomEmail;
  const randomPassword = this.randomPassword;

  await page.getByPlaceholder('Email').fill(randomEmail);
  await page.getByPlaceholder('Password').fill(randomPassword +'invalid password');
});

When('user clicks in Submit button', async () => {
  await page.getByRole('button', { name: 'Submit' }).click();
});

Then('Contact list is loaded', async function () {
  const expectedUrl = 'https://thinking-tester-contact-list.herokuapp.com/contactList';
  await expect(page).toHaveURL(expectedUrl);
});

Then('error shows up', async function () {
  await expect(page.getByText('Incorrect username or password')).toBeVisible();
});
