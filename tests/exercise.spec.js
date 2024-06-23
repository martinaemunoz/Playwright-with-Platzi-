import { test, expect } from '@playwright/test';

test('automation exercise', async ({ page }) => {
  //Go to the page
  await page.goto('https://automationexercise.com/');
  //Hover and click the first product 
  await page.locator('.choose > .nav > li > a').first().click();
  // Add 3 products to the cart manually
  await page.locator('#quantity').fill('3');
  // Click Add to cart button
  await page.getByRole('button', { name: ' Add to cart' }).click();
  // Expect product to be successfully added with the message 'Added!'
  await expect(page.locator('#cartModal')).toBeVisible();
  await expect(page.locator('#cartModal')).toContainText('Added!');
  // Click Continue Shopping button
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  // Expect modal window to not be visible
  await expect(page.locator('.modalContent')).toBeHidden();
});