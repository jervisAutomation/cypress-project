import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "cypress/support/pageInstances";

Before({ tags: "@requiresLogin" }, () => {
  cy.visit("/");

  cy.fixture("loginData").then((data) => {
    const credentials = data.validUser;
    loginPage.login(credentials.username,credentials.password);
  });
});

Given("I am in the home page", () => {
  cy.contains('Swag Labs');
});

Then("I should be on the {string} page", (pageName: string) =>{
cy.contains(pageName);
})