import { Given } from '@badeball/cypress-cucumber-preprocessor';

Given('I am in the home page', () => {
    cy.contains('Swag Labs');
});
