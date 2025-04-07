describe('TS_3 Sweets Page', () => {

    const cards = '.col-lg-3.col-md-6.mb-4';

    beforeEach(() => {
        cy.visitSweetsPage();
    });

    it('TC_3.1 Verify the page title is "Browse sweets"', () => {

        cy.get('h1').should('contain', 'Browse sweets');

        cy.contains('p', 'Browse our delicious choice of retro sweets.').should('be.visible');
    });

    it('TC_3.2 Verify the list of available products is displayed', () => {
        cy.get('.card-title').then(($productTitles) => {
            const productTitles = $productTitles.map((index, el) => Cypress.$(el).text()).get();

            expect(productTitles).to.have.length.greaterThan(0);

            expect(productTitles).to.include('Chocolate Cups');
        });
    });

    it('TC_3.3 Verify each product has a name, price, image and "Add to Basket" button', () => {

        cy.get(cards).each(($card) => {
            cy.wrap($card).within(() => {

                cy.get('h4').should('exist').and('not.be.empty');

                cy.contains(/£\d+\.\d{2}/).should('exist');

                cy.get('img')
                    .should('exist')
                    .and('be.visible')
                    .and('have.attr', 'src')
                    .and('not.be.empty');

                cy.contains('.btn.btn-success.btn-block.addItem', 'Add to Basket').should('exist').and('be.visible');
            });
        });
    });

});

