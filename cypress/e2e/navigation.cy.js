/// <reference types="Cypress"/>

describe('template spec', () => {
  it('should be able to navigate between pages', { browser: "firefox"} ,() => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="header-about-link"]').click()
    cy.location("pathname").should("eq", "/about") //Returns the path should be /about
    cy.go("back")
    cy.location("pathname").should("eq", "/") //should be back to the homepage
    cy.get('[data-cy="header-about-link"]').click()
    cy.location("pathname").should("eq", "/about") //Returns the path should be /about
    cy.get('[data-cy="header-home-link"]').click() //should be on home
    cy.location("pathname").should("eq", "/")
  })
})