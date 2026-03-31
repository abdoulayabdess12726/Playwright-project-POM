import { defineConfig, devices } from "@playwright/test";

/**
 * Configuration Playwright pour le projet POM Saucedemo.
 * Doc : https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  // Dossier contenant les fichiers de test
  testDir: "./tests",

  // Exécution parallèle des tests
  fullyParallel: true,

  // En CI, ne pas relancer les tests qui passent
  forbidOnly: !!process.env.CI,

  // 1 retry en CI pour les tests flaky
  retries: process.env.CI ? 1 : 0,

  // Rapport HTML généré après chaque run
  reporter: [["html", { open: "never" }], ["list"]],

  use: {
    // URL de base commune à tous les tests
    baseURL: "https://www.saucedemo.com",

    // Ralentissement pour visualiser les actions (1 sec entre chaque action)
    launchOptions: { slowMo: 1000 },

    // Capture une trace en cas d'échec (visible dans le rapport HTML)
    trace: "on-first-retry",

    // Screenshot en cas d'échec
    screenshot: "only-on-failure",

    // Mode headed désactivé en CI
    headless: !!process.env.CI,
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
