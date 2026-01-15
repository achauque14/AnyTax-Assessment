import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [['html', { open: 'never' }]],
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 }
  },
  webServer: {
    command: 'npx serve html -l 3000',
    port: 3000,
    reuseExistingServer: true
  }
});
