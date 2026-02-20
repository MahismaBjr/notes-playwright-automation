import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { NotesPage } from '../../pages/NotesPage';

test('@regression Update note', async ({ page }) => {
  const login = new LoginPage(page);
  const notes = new NotesPage(page);

  await login.goto();
  await login.login('notes.ui@test.com', 'Password123');

  await notes.waitForNotesPage();
  await notes.updateFirstNote('Updated Title');

  const card = page.locator('xpath=//*[@id="core"]/div/div//*[@data-testid="note-card"]').first(); 
  await expect(card.locator('[data-testid="note-card-title"]')).toHaveText('Updated Title');
});