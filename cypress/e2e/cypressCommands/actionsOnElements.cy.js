/// <reference types="cypress"/>

it('quering elements', () => {
  cy.visit('http://localhost:8080/commands/actions');

  cy.get('#email1')
    .type('qweqwe')
    .should('have.value', 'qweqwe');

  cy.get('#email1')
    .clear()
    .type('S{leftArrow}E{leftArrow}T{rightArrow}{rightArrow}T', {delay: 100})
    .type('{selectAll}{backspace}');

  cy.get('textarea[disabled="disabled"]')
    .type('blabla', {force: true});
  
  cy.get('#password1')
    .focus()
    .prev()
    .should('have.attr', 'style')
    .and('eq', 'color: orange;');
  
  cy.get('#fullName1')
    .click()
    .blur()
    .prev()
    .should('have.attr', 'style')
    .and('eq', 'color: red;');

  // cy.get('#couponCode1')
  //   .type('some text')
  //   .closest('form')
  //   .submit();

  // cy.get('.action-form')
  //   .find('#couponCode1')
  //   .type('some text')
  //   .closest('form')
  //   .submit()
  //   .siblings()
  //   .should('contain', 'Your form has been submitted!');

  // cy.get('div.well')
  //   .eq(4)
  //   .should('not.contain', 'Your form has been submitted!')
  //   .find('#couponCode1')
  //   .type('some text')
  //   .closest('form')
  //   .submit()
  //   .siblings()
  //   .should('contain', 'Your form has been submitted!');

  cy.get('#action-canvas').click(125, 125);
  cy.get('#action-canvas').click(15, 15);

  cy.get('.label.label-primary').click({multiple: true})

  cy.get('.btn.btn-lg.btn-primary').click({force: true})

  cy.get('input[type="checkbox"]')
  .eq(0)
  .should('not.be.checked')
  .check()
  .should('be.checked');

  cy.get('input[type="checkbox"]')
  .eq(1)
  .should('not.be.checked')
  .should('be.disabled')
  .check({force: true})
  .should('be.checked')
  .should('be.disabled');


})