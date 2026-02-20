import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "cypress/support/pageInstances";

Then("I should be on the {string} page", (pageName: string) =>{
cy.contains(pageName);
})