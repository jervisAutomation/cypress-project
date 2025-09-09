export const HomePageSelectors = {
  addToCartSauceLabsBackpackbutton: () => cy.get('#add-to-cart-sauce-labs-backpack',{timeout:  5000}),
  removeToCartSauceLabskBackpackButton: () => cy.get('#remove-sauce-labs-backpack', {timeout: 5000}),
  addToCartButton: () => cy.get('[data-test="shopping-cart-link"]', {timeout: 5000}),
};