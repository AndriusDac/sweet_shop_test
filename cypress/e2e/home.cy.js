
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