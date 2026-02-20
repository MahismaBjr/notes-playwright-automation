import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../pages/RegisterPage';

test('@smoke Signup works with valid data', async ({ page }) => {
  const register = new RegisterPage(page);

  const email = `user${Date.now()}@test.com`;

  await register.goto();
  await register.register(email, 'Test User', 'Password123');

  await expect(page).toHaveURL(/register/);
});