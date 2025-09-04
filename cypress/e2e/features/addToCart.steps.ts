import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage, homePage } from "cypress/support/pageInstances";

Before({ tags: "@requiresLogin" }, () => {
  cy.visit("/");

  cy.fixture("loginData").then((data) => {
    const credentials = data.validUser;
    loginPage.enterUsername(credentials.username);
    loginPage.enterPassword(credentials.password);
    loginPage.submit();
  });
});

Given("I am in the home page", () => {
  cy.contains('Swag Labs');
});

When("I add to cart the {string}", (productToAddToCart: string) => {
homePage.addToCart(productToAddToCart);
})

Then("the {string} should be displayed and enabled", (buttonName: string) =>{
homePage.validateProductButton(buttonName);
})