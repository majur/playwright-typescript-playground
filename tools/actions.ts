import { Page, expect } from '@playwright/test';

export class Actions {
  constructor(private page: Page) {}

  async openWebsite(url: string) {
    await this.page.goto(url);
  }

  async signUpUser(firstName: string, lastName: string, email: string, password: string) {
    await this.page.getByRole('button', { name: 'Sign up' }).click();
    await this.page.getByPlaceholder('First Name').fill(firstName);
    await this.page.getByPlaceholder('Last Name').fill(lastName);
    await this.page.getByPlaceholder('Email').fill(email);
    await this.page.getByPlaceholder('Password').fill(password);
    await this.page.getByRole('button', { name: 'Submit' }).click();
  }

  async logOutUser() {
    await this.page.getByRole('button', { name: 'Logout' }).click();
  }

  async fillLoginCredentials(email: string, password: string) {
    await this.page.getByPlaceholder('Email').fill(email);
    await this.page.getByPlaceholder('Password').fill(password);
  }

  async fillContactRequered(firstName: string, lastName: string) {
    await this.page.getByPlaceholder('First Name').fill(firstName);
    await this.page.getByPlaceholder('Last Name').fill(lastName);
  }

  async clickSubmitButton() {
    await this.page.getByRole('button', { name: 'Submit' }).click();
  }

  async clickAddANewContactButton() {
    await this.page.getByRole('button', { name: 'Add a New Contact' }).click();
  }

  async clickEditContactButton() {
    await this.page.getByRole('button', { name: 'Edit Contact' }).click();
  }

  async expectUrl(expectedUrl: string) {
    await expect(this.page).toHaveURL(expectedUrl);
  }

  async expectErrorMessage(errorMessage: string) {
    await expect(this.page.getByText(errorMessage)).toBeVisible();
  }

  async expectContactCreated(firstName: string) {
    await expect(this.page.getByRole('cell', { name: firstName })).toBeVisible();
  }

  async expectContactIsUpdated(firstName: string) {
    const updatedContactName = `${firstName} edited`;
    await expect(this.page.locator(`text=${updatedContactName}`)).toBeVisible();
  }

  async clickOnContactDetail(firstName: string) {
    const contactCell = this.page.getByRole('cell', { name: firstName });
    await contactCell.waitFor({ state: 'visible' });
    await contactCell.click();
  }
}
