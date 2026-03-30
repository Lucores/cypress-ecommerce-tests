// Cypress end-to-end test configuration

// This file sets up the basics for Cypress testing.

module.exports = {
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: 'cypress/support/e2e.js',
  },
}
