// Custom Cypress Commands

Cypress.Commands.add('login', (email, password) => {
  cy.get('input[name=email]').type(email);
  cy.get('input[name=password]').type(password);
  cy.get('button[type=submit]').click();
});

Cypress.Commands.add('logout', () => {
  cy.get('button#logout').click();
});

Cypress.Commands.add('addToCart', (productId) => {
  cy.get(`button[data-product-id=${productId}]`).click();
});
