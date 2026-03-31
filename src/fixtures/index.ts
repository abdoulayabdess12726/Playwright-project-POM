import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { InventoryItemPage } from "../pages/InventoryItemPage";


/**
 * Fixtures personnalisées — injection des Page Objects
 *
 * Au lieu d'instancier manuellement chaque POM dans chaque test,
 * on les déclare ici comme fixtures.
 * Playwright les injecte automatiquement dans chaque test.
 *
 * Usage dans un test :
 *   import { test } from "../src/fixtures";
 *   test("mon test", async ({ loginPage, inventoryPage, inventoryItemPage }) => { ... })
 */

type Pages = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  inventoryItemPage: InventoryItemPage;
};

export const test = base.extend<Pages>({
  loginPage: async ({ page }, use) => use(new LoginPage(page)),
  inventoryPage: async ({ page }, use) => use(new InventoryPage(page)),
  inventoryItemPage: async ({ page }, use) => use(new InventoryItemPage(page)),
});

export { expect } from "@playwright/test";
