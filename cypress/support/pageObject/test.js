export function searchText() {
    cy.get('input.search-input').first()
      .type('hotels')
      cy.get('span.si.si-search').first()
      .click()
  }
  
  export function switchToQueryingPage() {
    cy.get(navbarElement).find('#navbar ul > li:first').click();
    cy.get(navbarElement).find('#navbar ul > li:first > .dropdown-menu li:first').click();
  }