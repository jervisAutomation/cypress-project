import { Given, When } from '@badeball/cypress-cucumber-preprocessor';
import { homePage } from 'cypress/support/pageInstances';
import { BasePage } from 'cypress/support/Pages/BasePage';

Given('I am in the home page', () => {
    cy.contains('Swag Labs');
});