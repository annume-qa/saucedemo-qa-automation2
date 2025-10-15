# SauceDemo QA Automation

This repository contains **Cypress end-to-end tests** for [SauceDemo](https://www.saucedemo.com/), demonstrating automated login functionality and a professional QA test setup.

## 🔹 Highlights

- E2E test for SauceDemo login
- Cypress best practices: reusable commands, fixtures, clean folder structure
- Ready to expand with additional test cases

## ⚡ Quick Start

```bash
git clone https://github.com/annume-qa/saucedemo-qa-automation2.git
cd saucedemo-qa-automation2
npm install
npx cypress open   # Launch the Cypress Test Runner
npx cypress run    # Run tests headlessly
📂 Project Structure
bash
Copy code
cypress/
  ├─ e2e/          # Test files
  ├─ fixtures/     # Test data
  └─ support/      # Commands & reusable code
cypress.config.js
package.json
.gitignore
README.md

Example Test
javascript
Copy code
describe('Login Test', () => {
  it('logs in successfully', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include', '/inventory.html')
  })
})
