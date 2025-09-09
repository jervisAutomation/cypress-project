import { HomePageSelectors } from "../Selectors/HomePageSelectors";

export class BasePage {
  clickElement(element: () => Cypress.Chainable) {
    element().click();
  }

  type(element: () => Cypress.Chainable, text: string) {
    element().clear().type(text);
  }

  verifyText(element: () => Cypress.Chainable, expectedText: string) {
    element().should("contain.text", expectedText);
  }

  waitForElement(element: () => Cypress.Chainable, timeout = 5000) {
    element().should('be.visible', { timeout: 5000 });
  }

  validateElement(element: () => Cypress.Chainable, timeout = 5000) {
    element().should('be.visible', { timeout: 5000 }).should('be.enabled', {timeout: 5000});
  }

}