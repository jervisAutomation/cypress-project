import { Before } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "cypress/support/pageInstances";

Before({ tags: "@requiresLogin" }, () => {
  cy.visit("/");
  cy.fixture("loginData").then((data) => {
    const credentials = data.validUser;
    loginPage.login(credentials.username, credentials.password);
  });
});