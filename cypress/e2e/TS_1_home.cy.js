describe('TS_1 Homepage', () => {

  beforeEach(() => {
    cy.visitHomePage();
  });

  const cardsList = '.col-lg-3.col-md-6.mb-4.cards'

  it('TC_1.1 Verify that the homepage loads successfully', () => {

    cy.get('h1.display-3').should('contain', 'Welcome to the sweet shop!');
    cy.contains('p', 'The sweetest online shop out there.').should('be.visible');
    cy.contains('a', 'Browse Sweets').should('be.visible');
    cy.contains('p', 'Our most popular choice of retro sweets.').should('be.visible');

    cy.get(cardsList).should('have.length', 4);
  });

  it('TC_1.2 Verify the page structure and layout', () => {
    cy.get('header').should('exist');
    cy.get('body').should('exist');
    cy.get('footer').should('exist');
  });
});

