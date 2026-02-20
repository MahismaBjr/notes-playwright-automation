export class LoginPage {
  constructor(page) {
    this.page = page;
    this.email = page.locator('#email');
    this.password = page.locator('#password');
    this.loginBtn = page.getByRole('button', { name: /login/i });
  }

  async goto() {
    await this.page.goto('/notes/app/login');
  }

  async login(email, password) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginBtn.click();
    await this.page.waitForURL('**/notes/app');
  }
}