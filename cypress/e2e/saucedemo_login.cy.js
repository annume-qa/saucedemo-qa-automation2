/// <reference types="cypress" />

describe('SauceDemo Login Tests', () => {
  
  it('Login', function() {
      cy.visit('https://www.saucedemo.com/')
      cy.get('input[data-test="username"]').type('standard_user');
     cy.get('input[data-test="password"]').type('secret_sauce')
     cy.get('input#login-button').click()
      cy.contains('Products').should('be.visible')
  })
})

