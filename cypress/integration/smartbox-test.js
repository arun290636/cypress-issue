
describe('Kitchen Sink', function () {
    it('.should() - assert that <title> is correct', function () {
      cy.visit('http://www.smartbox.com/es/')
      window.top.Cypress
   cy.get('button.button.primary.js-accept-cookies.cookie-consent__continue.gdpr-modal-button.gdpr-modal-button-continue')
   .click()
   
      cy.get('input.search-input').first()
           .type('hotels')
       cy.get('span.si.si-search').first()
           .click()
               cy.get('a.thematic__wrapper-link').first()
           .click()
       cy.get('span.add-to-cart__content').first()
           .click()
       cy.get('a.button.primary.no-margin-bottom')
           .click()
})
})