'use strict';

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement event listeners here
    },
    baseUrl: 'http://localhost:3000',
  },
});