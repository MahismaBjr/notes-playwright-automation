import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { NotesPage } from '../../pages/NotesPage';

test('Regression - Update Note', async ({ page }) => {
  const notes = new NotesPage(page);

  await notes.waitForNotesPage();

  await notes.createNote('Old Title', 'To be updated', 'Home');

  await notes.openFirstNoteForEdit();
  await notes.updateNote('Updated Title');

  await expect(page.getByText('Updated Title')).toBeVisible();
});