import type { Page } from '@playwright/test';

export class TransferPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(): Promise<void> {
    await this.page.goto('http://localhost:3000/transfer.html');
  }

  async clickTransferButton(): Promise<void> {
    await this.page.click('#transferBtn');
  }
}
