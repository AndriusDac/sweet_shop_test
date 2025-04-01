describe('TS_3 Sweets Page', () => {
    beforeEach(() => {
        cy.visit('https://sweetshop.netlify.app/sweets');
    });

    it('TC_3.1 Verify the page title is "Browse sweets"', () => {
        // Verify main heading
        cy.get('h1').should('contain', 'Browse sweets');

        // Verify subtitle
        cy.contains('p', 'Browse our delicious choice of retro sweets.').should('be.visible');
    });

    it('TC_3.2 Verify the list of available products is displayed', () => {
        // Collect all product names from the page
        cy.get('.card-title').then(($productTitles) => {
            const productTitles = $productTitles.map((index, el) => Cypress.$(el).text()).get();

            // Verify that at least one product exists
            expect(productTitles).to.have.length.greaterThan(0);

            // Inspect a specific product if needed
            expect(productTitles).to.include('Chocolate Cups');
        });
    });

    it('TC_3.3 Verify each product has a name, price, image and "Add to Basket" button', () => {
        // Get all product cards and verify their structure
        cy.get('.col-lg-3.col-md-6.mb-4').each(($card) => {
            cy.wrap($card).within(() => {
                // Verify product name 
                cy.get('h4').should('exist').and('not.be.empty');

                // Verify price exists 
                cy.contains(/£\d+\.\d{2}/).should('exist');

                // Verify product image exists
                cy.get('img')
                    .should('exist')
                    .and('be.visible')
                    .and('have.attr', 'src')
                    .and('not.be.empty');

                // Verify "Add to Basket" button exists
                cy.contains('.btn.btn-success.btn-block.addItem', 'Add to Basket').should('exist').and('be.visible');
            });
        });
    });

});
