/// <reference types="cypress" />

describe('Tab1Page.vue', () => {
  describe('ion-title is filled when', () => {
    it('is navigated to root, then', () => {
      // Arrange

      // Act
      cy.visit('/')

      // Assert
      cy.contains('ion-title', 'Tab 1') // better approach: use [data-e2e-*] selectors
    })
  })
})