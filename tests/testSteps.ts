import { Before, Given, Then, When } from '@cucumber/cucumber';
import { chromium, Browser, Page, expect } from '@playwright/test';
import { RandomCredentialGenerator } from '../tools/randomCredentialGenerator';
import { Actions } from '../tools/actions';

let browser: Browser;
let page: Page;
let actions: Actions;

Before(async () => {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  actions = new Actions(page);
});

Given('the website {string} is opened with generated user', { timeout: 20000 }, async function (url: string) {
  const randomEmail = RandomCredentialGenerator.generateRandomEmail();
  const randomPassword = RandomCredentialGenerator.generateRandomPassword();
  const randomString = RandomCredentialGenerator.generateRandomString(8);

  this.randomEmail = randomEmail;
  this.randomPassword = randomPassword;

  await actions.openWebsite(url);
  await actions.signUpUser('First' + randomString, 'Last' + randomString, randomEmail, randomPassword);
  await actions.logOutUser();
});

Given('contact is in database', { timeout: 20000 }, async function () {
  const randomEmail = this.randomEmail;
  const randomPassword = this.randomPassword;
  const randomString = RandomCredentialGenerator.generateRandomString(8);

  this.firstName = randomString;
  this.lastName = randomString;

  await actions.fillLoginCredentials(randomEmail, randomPassword);
  await actions.clickSubmitButton();
  await actions.clickAddANewContactButton();
  await actions.fillContactRequered(this.firstName, this.lastName);
  await actions.clickSubmitButton();
});

When('user fills in valid login credentials', { timeout: 20000 }, async function () {
  const randomEmail = this.randomEmail;
  const randomPassword = this.randomPassword;

  await actions.fillLoginCredentials(randomEmail, randomPassword);
});

When('user fills in invalid login credentials', { timeout: 20000 }, async function () {
  const randomEmail = this.randomEmail;
  const invalidPassword = this.randomPassword + 'invalid password';

  await actions.fillLoginCredentials(randomEmail, invalidPassword);
});

When('user clicks on Submit button', async () => {
  await actions.clickSubmitButton();
});

When('user clicks on Add a New Contact button', async () => {
  await actions.clickAddANewContactButton();
})

When('user fills required fields', async function () {
  const randomString = RandomCredentialGenerator.generateRandomString(8);

  this.firstName = randomString;
  this.lastName = randomString;

  await actions.fillContactRequered(this.firstName, this.lastName);
});

When('user opens contact detail', async function () {
  await actions.clickOnContactDetail(this.firstName);
})

When('update contact', { timeout: 20000 }, async function () {
  await actions.clickEditContactButton();
  await page.getByLabel('First Name:').fill(this.firstName + ' edited');
  await page.getByLabel('Last Name:').fill(this.lastName);
  await actions.clickSubmitButton();
});

When('delete contact', async function () {
  page.once('dialog', async dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.accept();
  });
  await page.getByRole('button', { name: 'Delete Contact' }).click();
});


Then('Contact list is loaded', async function () {
  const expectedUrl = 'https://thinking-tester-contact-list.herokuapp.com/contactList';
  await actions.expectUrl(expectedUrl);
});

Then('error shows up', async function () {
  await actions.expectErrorMessage('Incorrect username or password');
});

Then('contact is created', async function () {
  await actions.expectContactCreated(this.firstName);
});

Then('all data are correct', async function () {
  await actions.expectContactCreated(this.firstName);
});

Then('contact is updated', { timeout: 20000 }, async function () {
  await actions.expectContactIsUpdated(this.firstName);
});

Then('contact is deleted', async function () {
  await actions.openWebsite('https://thinking-tester-contact-list.herokuapp.com/contactList');
  await expect(page.locator('html')).not.toContainText(this.firstName);

})

