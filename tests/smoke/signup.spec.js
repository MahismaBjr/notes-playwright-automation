import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../pages/RegisterPage';

test('Smoke - Signup', async ({ page }) => {
  const register = new RegisterPage(page);
  await register.goto();
  await register.register(`user${Date.now()}@test.com`,'Test User','Password123');
  await expect(page).toHaveURL(/register/);
});