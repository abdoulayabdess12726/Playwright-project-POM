import { test } from "../src/fixtures";
import { USERS } from "../src/data/users";

test.describe("Feature: Authentification sur SauceDemo", () => {

  test("Scenario: Connexion réussie avec standard_user", async ({
    loginPage,
    inventoryPage,
  }) => {
    // Given : je suis sur la page de login
    await loginPage.goto();

    // When : je me connecte avec des identifiants valides
    await loginPage.login(USERS.standard.username, USERS.standard.password);

    // Then : je suis redirigé vers la page des produits
    await inventoryPage.assertOnInventoryPage();
  });

});
