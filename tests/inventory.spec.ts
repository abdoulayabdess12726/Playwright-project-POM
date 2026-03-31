import { test } from "../src/fixtures";
import { USERS } from "../src/data/users";

test("Scenario: Connexion, consultation de la liste, détail d'un produit", async ({
  loginPage,
  inventoryPage,
  inventoryItemPage,
}) => {
  // Given : je suis sur la page de login
  await loginPage.goto();

  // When : je me connecte avec des identifiants valides
  await loginPage.login(USERS.standard.username, USERS.standard.password);

  // Then : je suis sur la page des produits
  await inventoryPage.assertOnInventoryPage();

  // When : je clique sur le premier produit
  await inventoryPage.clickFirstItem();

  // Then : je vois le détail du produit
  await inventoryItemPage.VerifPageDetail();
});
