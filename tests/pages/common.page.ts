import { Page, Locator } from '@playwright/test';

export class CommonPage {
  readonly page: Page;
  readonly headerLogo: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerLogo = page.locator('//h2[text()="new arrivals"]');
  }
  /**
   * Navigate to application Home Page
   */
  async navigateToHomePage(): Promise<void> {
    await this.page.goto('https://practice.automationtesting.in/');
  }
}
