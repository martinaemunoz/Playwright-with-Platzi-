import { test, expect } from '@playwright/test';

test('playing with assertions', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/textinput');
  // verifying if input is visible
  await expect(page.locator('#newButtonName')).toBeVisible();
  // select input and fill the input box with text
  await page.locator("#newButtonName").fill('hey');
  //await page.pause();
  // click button
  await page.locator('#updatingButton').click();
  // verify button text is updated
  await expect(page.locator('#updatingButton')).toContainText('hey');
});