import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('about:blank');
  await page.goto('http://uitestingplayground.com/');
  //await page.getByText('Aristotle').click();
  await page.locator('text=Aristotle').click();
  //await page.getByRole('link', { name: 'Resources' }).click();
  await page.locator('a.nav-link:has-text("Resources")').click();
  /*await page.click(':is(button:has-text("Resources"))'); no funcionó*/
  // await page.getByRole('link', { name: 'Home' }).click();
  await page.locator('a.nav-link:has-text("Home")').click();
  //await page.getByRole('link', { name: 'Click' }).click();
  await page.locator('a:has-text("Click")').click();
  //await page.getByRole('button', { name: 'Button That Ignores DOM Click' }).click();
  await page.click(':is(button:has-text("Button That Ignores DOM Click"))');
});