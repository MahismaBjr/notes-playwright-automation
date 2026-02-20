import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { NotesPage } from '../../pages/NotesPage';

test('Regression - Delete Note', async ({ page }) => {
  const notes = new NotesPage(page);

  await notes.waitForNotesPage();

  const title = 'Note To Delete';
  await notes.createNote(title, 'Delete me', 'Home');

  await expect(page.getByText(title)).toBeVisible();

  await notes.deleteFirstNote();

  await expect(page.getByText(title)).not.toBeVisible();
});