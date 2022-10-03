/// <reference types="cypress"/>

it('quering elements', () => {
  cy.visit('http://localhost:8080/commands/actions');

  cy.get('#email1')
    .type('qweqwe')
    .should('have.value', 'qweqwe');

  cy.get('#email1')
    .clear()
    .type('S{leftArrow}E{leftArrow}T{rightArrow}{rightArrow}T', {delay: 300})
    .type('{selectAll}{backspace}');

  cy.get('textarea[disabled="disabled"]')
    .type('blabla', {force: true})
  
  cy.get('#password1')
    .focus()
    .prev()
    .should('have.attr', 'style')
    .and('eq', 'color: orange;')
  
})