describe('TS_6 Basket Page (Cart)', () => {
    const testProducts = [
        { name: 'Chocolate Cups', price: 1.00, id: '1' },
        { name: 'Sherbert Straws', price: 0.75, id: '2' }
    ];

    const addToBasketButton = '.btn.btn-success.btn-block.addItem';
    const itemsInBasket = '.badge.badge-success';
    const basketCount = '.badge.badge-secondary.badge-pill';
    const shippingFree = 'label.custom-control-label[for="exampleRadios1"]';
    const standardShipping = 'label.custom-control-label[for="exampleRadios2"]';
    const basketList = '.list-group.mb-3';
    const deleteItem = '.small';

    beforeEach(() => {

        cy.window().then((win) => {
            win.localStorage.removeItem('basket');
        });

        cy.visitSweetsPage();

        testProducts.forEach(product => {
            cy.contains('.card', product.name)
                .parent()
                .within(() => {
                    cy.contains(addToBasketButton, 'Add to Basket').click();
                });
        });

        cy.visitBasketPage();
    });

    it('TC_6.1 Add products to basket and verify basket count updates', () => {

        cy.visitSweetsPage();

        cy.get('.card', { timeout: 10000 }).should('have.length.gt', 0);

        cy.get(itemsInBasket)
            .should('be.visible')
            .and('contain', testProducts.length);
    });

    it('TC_6.2 Verify products with Collect(FREE) delivery option', () => {

        cy.get(shippingFree)
            .should('exist')
            .and('contain', 'Collect (FREE)');

        testProducts.forEach(product => {
            cy.contains('.my-0', product.name)
                .should('be.visible');
        });

        const subtotal = testProducts.reduce((sum, product) => sum + product.price, 0);
        cy.contains('strong', `£${subtotal.toFixed(2)}`)
            .should('be.visible');
    });

    it('TC_6.3 Verify products with Standard shipping (1.99) delivery option', () => {

        cy.visitBasketPage();

        cy.get(standardShipping).should('be.visible')
        cy.contains('Standard Shipping (£1.99)', { timeout: 10000 }).click();

        const subtotal = testProducts.reduce((sum, product) => sum + product.price, 0);
        const total = subtotal + 1.99;
        cy.contains('.total-amount', total.toFixed(2)).should('be.visible');
    });

    it('TC_6.4 Remove item from basket and verify count updates', () => {

        cy.visitBasketPage();

        cy.contains(basketList, testProducts[0].name)
            .find(deleteItem)
            .first()
            .click();

        cy.get(itemsInBasket, { timeout: 10000 })
            .should('have.text', testProducts.length - 1);

        cy.contains('.basket-item', testProducts[0].name).should('not.exist');
    });

    it('TC_6.5 Empty basket and verify empty state', () => {

        cy.visitBasketPage();

        testProducts.forEach(product => {
            cy.contains(basketList, product.name)
                .find(deleteItem)
                .first()
                .click();
        });

        cy.get('.align-items-center > .text-muted').contains('Your Basket').should('be.visible');
        cy.get(basketCount).should('contain', '0');
    });
});