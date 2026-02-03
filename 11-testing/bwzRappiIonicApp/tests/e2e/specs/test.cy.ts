/// <reference types="cypress" />

describe('Tab1Page.vue', () => {
  describe('ion-title is filled when', () => {
    it('is navigated to root, then', () => {
      // Arrange
      cy.viewport('iphone-6') // Set viewport to 375px x 667px

      // Act
      cy.visit('/')

      // Assert
      cy.contains('ion-title', 'Tic-Tac-Toe') // better approach: use [data-e2e-*] selectors
    })
  })
})