import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { NotesPage } from '../../pages/NotesPage';

test('@regression Delete note', async ({ page }) => {
  const login = new LoginPage(page);
  const notes = new NotesPage(page);

  await login.goto();
  await login.login('notes.ui@test.com', 'Password123');

  await notes.waitForNotesPage();
  await notes.deleteFirstNote();

  //await expect(page.locator('.note-item')).toHaveCount(0);
});

