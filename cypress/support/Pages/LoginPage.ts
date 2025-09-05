import { BasePage } from "./BasePage";
import { LoginSelectors } from "../Selectors/LoginSelectors";

export class LoginPage extends BasePage {
  visit() {
    cy.visit('/login');
  }

  login(username: string, password: string) {
    this.type(LoginSelectors.usernameInput, username);
    this.type(LoginSelectors.passwordInput, password);
    this.click(LoginSelectors.submitButton);
  }
}