export class RegisterPage {
  constructor(page) {
    this.page = page;
    this.email = page.locator('#email');
    this.name = page.locator('#name');
    this.password = page.locator('#password');
    this.confirmPassword = page.locator('#confirmPassword');
    this.registerBtn = page.locator('button[type="submit"]');
  }

  async goto() {
    await this.page.goto('https://practice.expandtesting.com/notes/app/register');
  }

  async register(email, name, password) {
    await this.email.fill(email);
    await this.name.fill(name);
    await this.password.fill(password);
    await this.confirmPassword.fill(password);
    await this.registerBtn.click();
  }
}