import { Page, expect } from "@playwright/test";

/**
 * Page Object — Page de détail d'un produit (/inventory-item.html)
 *
 * Encapsule les sélecteurs et assertions de la page de détail.
 * Appelée après qu'on a cliqué sur un produit depuis la liste.
 */
export class InventoryItemPage {
  // ── Sélecteurs (privés : seule la page les connaît) ─────────────
  private readonly itemName = this.page.locator("[data-test='inventory-item-name']");

  constructor(private readonly page: Page) { }

  // ── Assertions ──────────────────────────────────────────────────

  /** Vérifier que la page de détail d'un produit est affichée */
  async VerifPageDetail() {
    await expect(this.page).toHaveURL(/inventory-item\.html/);
    //await expect(this.itemName).toBeVisible();
  }
}
