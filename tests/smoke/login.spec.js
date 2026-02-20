import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('Smoke - Login', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('test@test.com', 'Password123');
  await expect(page).toHaveURL(/notes/);
});