import { Page, expect } from "@playwright/test";

/**
 * Page Object — Page des produits (/inventory.html)
 *
 * Encapsule les interactions avec la liste de produits.
 * Les tests n'ont pas à connaître les sélecteurs : ils appellent
 * uniquement les méthodes exposées ici.
 */
export class InventoryPage {
  // ── Sélecteurs (privés : seule la page les connaît) ─────────────
  private readonly productNames = this.page.locator("[data-test='inventory-item-name']");

  constructor(private readonly page: Page) { }

  // ── Actions ─────────────────────────────────────────────────────
  /** Cliquer sur le premier produit pour accéder à son détail */
  async clickFirstItem() {
    await this.productNames.first().click();
  }

  // ── Assertions ──────────────────────────────────────────────────
  /** Vérifier que la page produits est affichée */
  async assertOnInventoryPage() {
    await expect(this.page).toHaveURL(/inventory\.html/);
  }
}
