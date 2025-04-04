describe('TS_6 Basket Page (Cart)', () => {
    const testProducts = [
        { name: 'Chocolate Cups', price: 1.00, id: '1' },
        { name: 'Sherbert Straws', price: 0.75, id: '2' }
    ];

    beforeEach(() => {
        // Clear basket and add test products
        cy.window().then((win) => {
            win.localStorage.removeItem('basket');
        });

        cy.visit('https://sweetshop.netlify.app/sweets');

        // Add test products to basket
        testProducts.forEach(product => {
            cy.contains('.card', product.name)
                .parent()
                .within(() => {
                    cy.contains('.btn.btn-success.btn-block.addItem', 'Add to Basket').click();
                });
        });

        cy.visit('https://sweetshop.netlify.app/basket');
    });


    it('TC_6.1 Add products to basket and verify basket count updates', () => {
        cy.visit('https://sweetshop.netlify.app/sweets');

        // Wait for products to load
        cy.get('.card', { timeout: 10000 }).should('have.length.gt', 0);

        // Verify basket count updates
        cy.get('.badge.badge-success')
            .should('be.visible')
            .and('contain', testProducts.length);
    });


    it('TC_6.2 Verify products with Collect(FREE) delivery option', () => {

        // Select free delivery option using the correct selector
        cy.get('.custom-control.custom-radio').first().within(() => {
            cy.get('label.custom-control-label[for="exampleRadios1"]')
                .should('exist')

            cy.get('.custom-control-label')
                .should('contain', 'Collect (FREE)');
        });

        // Verify products in basket
        testProducts.forEach(product => {
            cy.contains('.my-0', product.name)
                .should('be.visible');
        });

        // Verify total is correct (subtotal + 0 delivery)
        const subtotal = testProducts.reduce((sum, product) => sum + product.price, 0);
        cy.contains('strong', `£${subtotal.toFixed(2)}`)
            .should('be.visible');
    });


    it('TC_6.3 Verify products with Standard shipping (1.99) delivery option', () => {
        // Go to basket
        cy.visit('https://sweetshop.netlify.app/basket');

        // Select standard delivery
        cy.get('label.custom-control-label').should('be.visible')
        cy.contains('Standard Shipping (£1.99)', { timeout: 10000 }).click();

        // Calculate and verify total
        const subtotal = testProducts.reduce((sum, product) => sum + product.price, 0);
        const total = subtotal + 1.99;
        cy.contains('.total-amount', total.toFixed(2)).should('be.visible');
    });


    it('TC_6.4 Remove item from basket and verify count updates', () => {

        cy.visit('https://sweetshop.netlify.app/basket');

        // Remove first item
        cy.contains('.list-group.mb-3', testProducts[0].name)
            .find('.small')
            .first()
            .click();

        // Verify count updates
        cy.get('.badge.badge-success', { timeout: 10000 })
            .should('have.text', testProducts.length - 1);

        // Verify item is removed
        cy.contains('.basket-item', testProducts[0].name).should('not.exist');
    });

    it('TC_6.5 Empty basket and verify empty state', () => {

        // Go to basket
        cy.visit('https://sweetshop.netlify.app/basket');

        testProducts.forEach(product => {
            cy.contains('.list-group.mb-3', product.name)
                .find('.small')
                .first()
                .click();
        });

        // Verify empty basket
        cy.get('.align-items-center > .text-muted').contains('Your Basket').should('be.visible');
        cy.get('.badge.badge-secondary.badge-pill').should('contain', '0');
    });

});