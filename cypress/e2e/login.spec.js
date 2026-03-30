describe('Login Test', () => {
    it('should login with valid credentials', () => {
        cy.visit('/login');
        cy.get('input[name="username"]').type('validUsername');
        cy.get('input[name="password"]').type('validPassword');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/dashboard');
        cy.contains('Welcome back!');
    });

    it('should show an error for invalid credentials', () => {
        cy.visit('/login');
        cy.get('input[name="username"]').type('invalidUsername');
        cy.get('input[name="password"]').type('invalidPassword');
        cy.get('button[type="submit"]').click();
        cy.contains('Invalid credentials');
    });
});