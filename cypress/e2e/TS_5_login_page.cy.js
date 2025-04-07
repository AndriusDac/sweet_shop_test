describe('TS_5 Login Page', () => {

    const validEmail = 'test@example.com';
    const validPassword = 'password123';
    const invalidEmail = 'invalid-email';

    beforeEach(() => {
        cy.visitLoginPage();
    });

    it('TC_5.1 Verify the page title is "Login"', () => {
        cy.get('h1').should('contain', 'Login');
    });

    it('TC_5.2 Verify the page has a login description', () => {
        cy.get('.login-description, .description, p')
            .should('exist')
            .and('be.visible')
            .and('not.be.empty');
    });

    it('TC_5.3 Verify the page contains email and password input fields', () => {
        cy.get('input[type="email"]')
            .should('exist')
            .and('be.visible')
            .and('have.attr', 'placeholder', 'you@example.com');

        cy.get('input[type="password"]')
            .should('exist')
            .and('be.visible')
            .and('have.attr', 'placeholder', 'Password');
    });

    it('TC_5.4 Verify the page contains a Login button', () => {
        cy.get('button[type="submit"]')
            .should('contain', 'Login')
            .and('be.visible')
            .and('not.be.disabled');
    });

    it('TC_5.5 Verify links to Twitter, Facebook, LinkedIn', () => {
        const socialLinks = {
            'Twitter': 'twitter.com',
            'Facebook': 'facebook.com',
            'LinkedIn': 'linkedin.com'
        };

        Object.entries(socialLinks).forEach(([platform, domain]) => {
            cy.contains('a', platform)
                .should('have.attr', 'href')
                .and('include', domain);
        });
    });

    it('TC_5.6 Positive with valid data', () => {
        cy.get('input[type="email"]').type(validEmail);
        cy.get('input[type="password"]').type(validPassword);
        cy.get('button[type="submit"]').click();

        cy.url().should('include', '/00efc23d-b605-4f31-b97b-6bb276de447e.html');
        cy.contains('h1', 'Your Account').should('be.visible');
    });

    it('TC_5.7 Negative with wrong email format', () => {
        cy.get('input[type="email"]').type(invalidEmail);
        cy.get('input[type="password"]').type(validPassword);
        cy.get('button[type="submit"]').click();

        cy.get('.invalid-feedback.invalid-email')
            .should('be.visible')
            .and('contain', 'Please enter a valid email address');
    });

    it('TC_5.8 Negative with empty email', () => {
        cy.get('input[type="password"]').type(validPassword);
        cy.get('button[type="submit"]').click();

        cy.get('.invalid-feedback.invalid-email')
            .should('be.visible')
            .and('contain', 'Please enter a valid email address');
    });

    it('TC_5.9 Negative with empty password', () => {
        cy.get('input[type="email"]').type(validEmail);
        cy.get('button[type="submit"]').click();

        cy.get('.invalid-feedback.invalid-password')
            .should('be.visible')
            .and('contain', 'Please enter a valid password');
    });

    it('TC_5.10 Negative with empty email and empty password', () => {
        cy.get('button[type="submit"]').click();

        cy.get('.invalid-feedback.invalid-email, .invalid-feedback.invalid-password')
            .should('have.length.at.least', 2)
            .and('contain', 'Please enter a valid email address')
            .and('contain', 'Please enter a valid password');
    });
});