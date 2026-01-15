import type { Page } from '@playwright/test';

export class ShopPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Navigate to the demo site
  async navigate(): Promise<void> {
    await this.page.goto('https://www.saucedemo.com/');
  }

  // Login using provided credentials
  async login(username: string, password: string): Promise<void> {
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  }

  // Add first product to cart
  async addFirstProductToCart(): Promise<void> {
    await this.page.click('.inventory_item:first-child button.btn_inventory');
  }

  // Navigate to cart
  async goToCart(): Promise<void> {
    await this.page.click('.shopping_cart_link');
  }

  // Get cart item names
  async getCartItems(): Promise<string[]> {
    return this.page.$$eval('.cart_item .inventory_item_name', items =>
      items.map(i => i.textContent?.trim() || '')
    );
  }

  // Get cart item prices
  async getCartItemPrices(): Promise<string[]> {
    return this.page.$$eval('.cart_item .inventory_item_price', items =>
      items.map(i => i.textContent?.trim() || '')
    );
  }
}
