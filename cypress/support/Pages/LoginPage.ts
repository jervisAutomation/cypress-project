import { LoginSelectors } from "../Selectors/LoginSelectors";

export class LoginPage {
  visit() {
    cy.visit('/login');
  }

  enterUsername(username: string) {
    LoginSelectors.usernameInput().type(username);
  }

  enterPassword(password: string) {
    LoginSelectors.passwordInput().type(password);
  }

  submit() {
    LoginSelectors.submitButton().click();
  }
}