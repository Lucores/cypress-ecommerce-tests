class LoginPage {
    visit() {
        cy.visit('/login');
    }

    fillEmail(email) {
        cy.get('input[name="email"]').type(email);
    }

    fillPassword(password) {
        cy.get('input[name="password"]').type(password);
    }

    submit() {
        cy.get('form').submit();
    }

    // Optionally, add more reusable methods, like validating error messages
    validateErrorMessage(expectedMessage) {
        cy.get('.error-message').should('contain', expectedMessage);
    }
}

export default new LoginPage();