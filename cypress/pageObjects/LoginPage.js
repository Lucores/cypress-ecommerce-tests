class LoginPage {
  // Elements
  getEmailInput() {
    return cy.get('[data-testid="email"]');
  }

  getPasswordInput() {
    return cy.get('[data-testid="password"]');
  }

  getLoginButton() {
    return cy.get('[data-testid="login-button"]');
  }

  getErrorMessage() {
    return cy.get('[data-testid="error-message"]');
  }

  getRegisterLink() {
    return cy.get('[data-testid="register-link"]');
  }

  getForgotPasswordLink() {
    return cy.get('[data-testid="forgot-password-link"]');
  }

  // Actions
  visit() {
    cy.visit('/login');
  }

  enterEmail(email) {
    this.getEmailInput().type(email);
  }

  enterPassword(password) {
    this.getPasswordInput().type(password);
  }

  clickLoginButton() {
    this.getLoginButton().click();
  }

  login(email, password) {
    this.visit();
    this.enterEmail(email);
    this.enterPassword(password);
    this.clickLoginButton();
  }

  // Assertions
  verifyLoginSuccess() {
    cy.url().should('include', '/dashboard');
    cy.get('[data-testid="welcome-message"]').should('be.visible');
  }

  verifyLoginError() {
    this.getErrorMessage().should('be.visible');
    cy.url().should('include', '/login');
  }

  verifyEmailRequired() {
    this.getErrorMessage().should('contain', 'Email é obrigatório');
  }

  verifyPasswordRequired() {
    this.getErrorMessage().should('contain', 'Senha é obrigatória');
  }
}

export default new LoginPage();