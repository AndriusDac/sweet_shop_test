// describe('TC_1.1 Verify that the homepage loads successfully', () => {
//   beforeEach(() => {
//     cy.visit('https://sweetshop.netlify.app/');
//   });

//   it('should load the homepage without errors and display all elements correctly', () => {
//     // Check if the logo is visible
//     cy.get('.navbar-brand').should('be.visible');

//     // Check if the navigation bar is visible
//     cy.get('.navbar').should('be.visible');

//     // Check if the footer is visible
//     cy.get('.text-center').should('be.visible');

//     // Check if the product list is visible
//     cy.get('.m-0').should('be.visible');
//   });
// });

describe('TS_1 Homepage', () => {
  beforeEach(() => {
    cy.visit('https://sweetshop.netlify.app/');
  });

  it('TC_1.1 Verify that the homepage loads successfully', () => {
    // Verify main heading
    cy.get('h1').should('contain', 'Welcome to the sweet shop!');
    cy.contains('p', 'The sweetest online shop out there.').should('be.visible');
    cy.contains('a', 'Browse Sweets').should('be.visible');
    cy.contains('p', 'Our most popular choice of retro sweets.').should('be.visible');

    // Verify number of product cards
    cy.get('.col-lg-3.col-md-6.mb-4.cards').should('have.length', 4);
  });

  it('TC_1.2 Verify the page structure and layout', () => {
    // Verify main sections exist
    cy.get('header').should('exist');
    cy.get('body').should('exist');
    cy.get('footer').should('exist');
  });
});