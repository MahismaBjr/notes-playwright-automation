import { chromium } from '@playwright/test';

async function globalSetup() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://practice.expandtesting.com/notes/app/login');

  await page.fill('#email', 'playwright.notes@test.com');
  await page.fill('#password', 'Password123');
  await page.click('button:has-text("Login")');

  await page.waitForURL('**/notes/app');

  await context.storageState({ path: 'auth.json' });

  await browser.close();
}

export default globalSetup;