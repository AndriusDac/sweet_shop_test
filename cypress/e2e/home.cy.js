describe('TC_1.1 Verify that the homepage loads successfully', () => {
  beforeEach(() => {
    cy.visit('https://sweetshop.netlify.app/');
  });

  it('should load the homepage without errors and display all elements correctly', () => {
    // Check if the logo is visible
    cy.get('.navbar-brand').should('be.visible');

    // Check if the navigation bar is visible
    cy.get('.navbar').should('be.visible');

    // Check if the banner is visible
    cy.get('.text-center').should('be.visible');

    // Check if the product list is visible
    cy.get('.m-0').should('be.visible');
  });
});
