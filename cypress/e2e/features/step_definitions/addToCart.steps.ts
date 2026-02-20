import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage, homePage } from "cypress/support/pageInstances";
import { HomePageSelectors } from "cypress/support/Selectors/HomePageSelectors";

When("I add to cart the {string}", (productToAddToCart: string) => {
homePage.addToCart(productToAddToCart);
});

Then("the {string} should be displayed and enabled", (buttonName: string) =>{
homePage.validateProductButton(buttonName);
});

When("I click {string}", (elementKey: string) => {
  const selector = homePage.getSelector(elementKey);
  homePage.clickElement(selector);
});

Then("{string} product should be on the add to cart page", (productToCheck: string) => {
  cy.contains(productToCheck);
});