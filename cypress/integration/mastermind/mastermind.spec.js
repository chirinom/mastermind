context('Mastermind Game Test', () => {
  it('Should select color, type winner answer, enable "check answer" button and display running and win labels', () => {
    cy.visit('http://localhost:8080/')
    cy.get('.start-game').click()

    cy.intercept('/api/games/', {
      fixture: 'running_game.json'
    }).as('Games')

    cy.get('.check-answer').should('be.disabled', 'disabled')
    cy.get('.control-wrapper > .label').should('be.visible').contains('running')

    cy.get('.bar-container > .color-btn__red').click()
    cy.get('.board-wrapper > :nth-child(3) > :nth-child(1)').click()
    cy.get('.board-wrapper > :nth-child(3) > :nth-child(2)').click()
    cy.get('.board-wrapper > :nth-child(3) > :nth-child(3)').click()
    cy.get('.board-wrapper > :nth-child(3) > :nth-child(4)').click()

    cy.intercept('/api/games/141/guesses', {
      fixture: 'win.json'
    }).as('Games')

    cy.get('.check-answer').should('not.be.disabled', 'disabled')
    cy.get('.check-answer').click()
    cy.get('.control-wrapper > .label').should('be.visible').contains('won')
  })
})
