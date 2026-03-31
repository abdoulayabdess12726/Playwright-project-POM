# Projet POM — SauceDemo

Projet Playwright TypeScript illustrant le **pattern Page Object Model (POM)**
sur le site de démonstration [saucedemo.com](https://www.saucedemo.com).

---

## Arborescence

```
Projet-POM-Saucedemo/
├── src/
│   ├── pages/              ← Page Objects (un fichier par page)
│   │   ├── LoginPage.ts
│   │   ├── InventoryPage.ts
│   │   ├── CartPage.ts
│   │   └── CheckoutPage.ts
│   ├── fixtures/
│   │   └── index.ts        ← Injection automatique des POM dans les tests
│   └── data/
│       └── users.ts        ← Données de test centralisées
│
├── tests/                  ← Fichiers de test (style Gherkin)
│   ├── login.spec.ts
│   ├── inventory.spec.ts
│   └── checkout.spec.ts
│
├── playwright.config.ts
├── tsconfig.json
└── package.json
```

---

## Pattern POM — En bref

```
┌─────────────────────────────────────────────────────┐
│                     TEST                            │
│  Given / When / Then  (lisible, sans sélecteurs)    │
└───────────────────┬─────────────────────────────────┘
                    │ appelle
┌───────────────────▼─────────────────────────────────┐
│               PAGE OBJECT                           │
│  Sélecteurs + Actions + Assertions (1 classe/page)  │
└───────────────────┬─────────────────────────────────┘
                    │ utilise
┌───────────────────▼─────────────────────────────────┐
│              PLAYWRIGHT API                         │
│  getByRole / getByPlaceholder / locator / expect    │
└─────────────────────────────────────────────────────┘
```

**Avantages :**
- Les tests ne contiennent **aucun sélecteur** → lisibles comme des scénarios métier
- Si un sélecteur change → on le modifie **uniquement dans le POM** correspondant
- Les POM sont **réutilisables** entre plusieurs tests

---

## Style Gherkin

Les tests sont écrits en **Gherkin-style** (sans Cucumber) :

```typescript
test("Scenario: Commande complète", async ({ loginPage, cartPage, checkoutPage }) => {
  // Given : je suis connecté
  await loginPage.goto();
  await loginPage.login("standard_user", "secret_sauce");

  // When : je passe commande
  await cartPage.goToCheckout();
  await checkoutPage.fillShippingInfo("Jean", "Dupont", "75001");
  await checkoutPage.finish();

  // Then : la commande est confirmée
  await checkoutPage.assertOrderConfirmed();
});
```

---

## Installation & Lancement

```bash
# Installer les dépendances
npm install
npx playwright install chromium

# Lancer tous les tests
npm test

# Mode headed (navigateur visible)
npm run test:headed

# Mode debug (Inspector Playwright)
npm run test:debug

# Ouvrir le rapport HTML
npm run report
```

---

## Comptes de test SauceDemo

| Utilisateur | Mot de passe | Comportement |
|---|---|---|
| `standard_user` | `secret_sauce` | Utilisateur normal |
| `locked_out_user` | `secret_sauce` | Compte bloqué |
| `problem_user` | `secret_sauce` | UI avec bugs visuels |
| `performance_glitch_user` | `secret_sauce` | Chargement lent |
