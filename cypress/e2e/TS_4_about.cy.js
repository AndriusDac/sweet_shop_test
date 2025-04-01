describe('TS_4 About Page', () => {
    beforeEach(() => {
        cy.visit('https://sweetshop.netlify.app/about');
    });

    it('TC_4.1 Verify the page has the title "Sweet Shop Project"', () => {
        cy.get('h1').should('contain', 'Sweet Shop Project');

    });

    it('TC_4.2 Verify the page has a description', () => {
        cy.get('.about-description, .description, p')
            .should('exist')
            .and('be.visible')
            .and('not.be.empty');
    });

    it('TC_4.3 Verify the page has a footer with year 2018', () => {
        cy.get('footer')
            .should('exist')
            .and('be.visible')
            .within(() => {
                cy.contains(/2018|© 2018|Sweet Shop Project 2018/)
                    .should('be.visible');
            });
    });

});