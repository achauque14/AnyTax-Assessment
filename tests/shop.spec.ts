import { test, expect } from '@playwright/test';
import { ShopPage } from '../pages/shopPage.js';

test.describe('E2E Shop Flow with Price Validation', () => {

  test('Login, add product, check cart, validate price', async ({ page }) => {
    const shopPage = new ShopPage(page);

    // Navigate to site and login
    await shopPage.navigate();
    await shopPage.login('standard_user', 'secret_sauce');

    // Add product to cart
    await shopPage.addFirstProductToCart();

    // Go to cart
    await shopPage.goToCart();

    // Verify item is in the cart
    const items = await shopPage.getCartItems();
    expect(items.length).toBeGreaterThan(0);
    console.log('Cart items:', items);

    // Verify price format
    const prices = await shopPage.getCartItemPrices();
    for (const price of prices) {
      expect(price).toMatch(/^\$\d+\.\d{2}$/);
      console.log('Price verified:', price);
    }
  });

});
