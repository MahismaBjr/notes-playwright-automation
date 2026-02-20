import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('@smoke Login works with valid credentials', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login('notes.ui@test.com', 'Password123');

  await expect(page).toHaveURL(/notes\/app/);
});