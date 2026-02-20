import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { NotesPage } from '../../pages/NotesPage';

test('Regression - Create Note', async ({ page }) => {
  const notes = new NotesPage(page);

  await notes.waitForNotesPage();

  const title = 'Automation Create Note';
  await notes.createNote(title, 'Created via Playwright', 'Home');

  await expect(page.getByText(title)).toBeVisible();
});