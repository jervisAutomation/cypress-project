export const LoginSelectors = {
  usernameInput: () => cy.get('#user-name',{timeout:  5000}),
  passwordInput: () => cy.get('#password',{timeout:  5000}),
  submitButton: () => cy.get('#login-button',{timeout:  5000}),
};