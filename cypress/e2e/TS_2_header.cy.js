
describe('TS_2 Header', () => {
  describe('TS_2.1 Navigation menu from Home page', () => {
    beforeEach(() => {
      cy.visitHomePage();
    });

    it('TC_2.1.1 Test open Sweets page', () => {
      cy.contains('nav a', 'Sweets').click();
      cy.url().should('include', '/sweets');
      cy.get('h1').should('contain', 'Browse sweets');
    });

    it('TC_2.1.2 Test open About page', () => {
      cy.contains('nav a', 'About').click();
      cy.url().should('include', '/about');
      cy.get('.nav-link').should('contain', 'About');
    });

    it('TC_2.1.3 Test open Login page', () => {
      cy.contains('nav a', 'Login').click();
      cy.url().should('include', '/login');
      cy.get('.nav-link').should('contain', 'Login');
    });

    it('TC_2.1.4 Test open Basket page', () => {
      cy.contains('nav a', 'Basket').click();
      cy.url().should('include', '/basket');
      cy.get('.nav-link').should('contain', 'Basket');
    });
  });

  describe('TS_2.2 Navigation menu from Sweets page', () => {
    beforeEach(() => {
      cy.visit("https://sweetshop.netlify.app/sweets");
    });

    it('TC_2.2.1 Test open Home page', () => {
      cy.contains('nav a', 'Sweet Shop').click();
      cy.url().should('eq', 'https://sweetshop.netlify.app/');
    });

    it('TC_2.2.2 Test open About page', () => {
      cy.contains('nav a', 'About').click();
      cy.url().should('include', '/about');
      cy.get('.nav-link').should('contain', 'About');
    });

    it('TC_2.2.3 Test open Login page', () => {
      cy.contains('nav a', 'Login').click();
      cy.url().should('include', '/login');
      cy.get('.nav-link').should('contain', 'Login');
    });

    it('TC_2.2.4 Test open Basket page', () => {
      cy.contains('nav a', 'Basket').click();
      cy.url().should('include', '/basket');
      cy.get('.nav-link').should('contain', 'Basket');
    });
  });

  describe('TS_2.3 Navigation menu from About page', () => {
    beforeEach(() => {
      cy.visit("https://sweetshop.netlify.app/about");
    });

    it('TC_2.3.1 Test open Home page', () => {
      cy.contains('nav a', 'Sweet Shop').click();
      cy.url().should('eq', 'https://sweetshop.netlify.app/');
    });

    it('TC_2.3.2 Test open Sweets page', () => {
      cy.contains('nav a', 'Sweets').click();
      cy.url().should('include', '/sweets');
      cy.get('.nav-link').should('contain', 'Sweets');
    });

    it('TC_2.3.3 Test open Login page', () => {
      cy.contains('nav a', 'Login').click();
      cy.url().should('include', '/login');
      cy.get('.nav-link').should('contain', 'Login');
    });

    it('TC_2.3.4 Test open Basket page', () => {
      cy.contains('nav a', 'Basket').click();
      cy.url().should('include', '/basket');
      cy.get('.nav-link').should('contain', 'Basket');
    });
  });

  describe('TS_2.4 Navigation menu from Login page', () => {
    beforeEach(() => {
      cy.visit("https://sweetshop.netlify.app/login");
    });

    it('TC_2.4.1 Test open Home page', () => {
      cy.contains('nav a', 'Sweet Shop').click();
      cy.url().should('eq', 'https://sweetshop.netlify.app/');
    });

    it('TC_2.4.2 Test open Sweets page', () => {
      cy.contains('nav a', 'Sweets').click();
      cy.url().should('include', '/sweets');
      cy.get('.nav-link').should('contain', 'Sweets');
    });

    it('TC_2.4.3 Test open About page', () => {
      cy.contains('nav a', 'About').click();
      cy.url().should('include', '/about');
      cy.get('.nav-link').should('contain', 'About');
    });

    it('TC_2.4.4 Test open Basket page', () => {
      cy.contains('nav a', 'Basket').click();
      cy.url().should('include', '/basket');
      cy.get('.nav-link').should('contain', 'Basket');
    });
  });

  describe('TS_2.5 Navigation menu from Basket page', () => {
    beforeEach(() => {
      cy.visit("https://sweetshop.netlify.app/basket");
    });

    it('TC_2.5.1 Test open Home page', () => {
      cy.contains('nav a', 'Sweet Shop').click();
      cy.url().should('eq', 'https://sweetshop.netlify.app/');
      cy.get('.navbar-brand').should('contain', 'Sweet Shop');
    });

    it('TC_2.5.2 Test open Sweets page', () => {
      cy.contains('nav a', 'Sweets').click();
      cy.url().should('include', '/sweets');
      cy.get('.nav-link').should('contain', 'Sweets');
    });

    it('TC_2.5.3 Test open About page', () => {
      cy.contains('nav a', 'About').click();
      cy.url().should('include', '/about');
      cy.get('.nav-link').should('contain', 'About');
    });

    it('TC_2.5.4 Test open Login page', () => {
      cy.contains('nav a', 'Login').click();
      cy.url().should('include', '/login');
      cy.get('.nav-link').should('contain', 'Login');
    });
  });
});

