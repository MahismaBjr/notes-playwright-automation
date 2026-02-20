export class NotesPage {
  constructor(page) {
    this.page = page;
    this.addNoteBtn = page.getByTestId('add-new-note');
    this.title = page.locator('#title');
    this.description = page.locator('#description');
    this.category = page.locator('#category');
    this.saveBtn = page.getByRole('button', { name: /save/i });
    this.editBtn = page.getByRole('button', { name: 'Edit' }).first();
    this.deleteBtn = page.getByRole('button', { name: 'Delete' }).first();
  }

  async waitForNotesPage() {
    await this.page.goto('/notes/app');
    await this.addNoteBtn.waitFor({ state: 'visible' });
  }

  async createNote(title, description, category) {
    await this.addNoteBtn.click();
    await this.title.fill(title);
    await this.description.fill(description);
    await this.category.selectOption(category);
    await this.saveBtn.click();
  }

  async updateFirstNote(newTitle) {
    await this.editBtn.click();
    await this.title.fill(newTitle);
    await this.saveBtn.click();
  }

  async deleteFirstNote() {
    await this.deleteBtn.click();
  }
}