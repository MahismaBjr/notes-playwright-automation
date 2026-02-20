import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  globalSetup: './global-setup.js',

  use: {
    baseURL: 'https://practice.expandtesting.com',
    storageState: 'auth.json',
    headless: true,
  },

  reporter: [['html']],
});