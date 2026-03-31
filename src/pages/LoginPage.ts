import { Page, expect } from "@playwright/test";

/**
 * Page Object — Page de connexion (/index.html)
 *
 * Encapsule tous les sélecteurs et actions liés à la page de login.
 * Les tests n'ont pas à connaître les sélecteurs : ils appellent
 * uniquement les méthodes exposées ici.
 */
export class LoginPage {
  // ── Sélecteurs (privés : seule la page les connaît) ─────────────
  private readonly usernameInput = this.page.getByPlaceholder("Username");
  private readonly passwordInput = this.page.getByPlaceholder("Password");
  private readonly loginButton = this.page.getByRole("button", { name: "Login" });
  private readonly errorMessage = this.page.locator("[data-test='error']");

  constructor(private readonly page: Page) { }

  // ── Actions ─────────────────────────────────────────────────────
  /** Naviguer vers la page de login */
  async goto() {
    await this.page.goto("/");
  }

  /** Remplir et soumettre le formulaire de connexion */
  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  // ── Assertions ──────────────────────────────────────────────────
  /** Vérifier que le message d'erreur contient le texte attendu */
  /* async assertErrorMessage(text: string) {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toContainText(text);
  } */

  /** Vérifier que la page de login est bien affichée */
  async assertOnLoginPage() {
    await expect(this.loginButton).toBeVisible();
    await expect(this.page).toHaveURL("/");
  }
}
