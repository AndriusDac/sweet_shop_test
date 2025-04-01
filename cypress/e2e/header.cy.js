
describe('TS02 Header', () => {
  describe('TS02 Navigation menu from Home page', () => {
    beforeEach(() => {
      cy.visit("https://sweetshop.netlify.app/");
    });

    it('TC_02.01 Test open Sweets page', () => {
      cy.contains('nav a', 'Sweets').click();
      cy.url().should('include', '/sweets');
      cy.get('h1').should('contain', 'Browse sweets');
    });

    it('TC_02.02 Test open About page', () => {
      cy.contains('nav a', 'About').click();
      cy.url().should('include', '/about');
      cy.get('.nav-link').should('contain', 'About');
    });

    it('TC_02.03 Test open Login page', () => {
      cy.contains('nav a', 'Login').click();
      cy.url().should('include', '/login');
      cy.get('.nav-link').should('contain', 'Login');
    });

    it('TC_02.04 Test open Basket page', () => {
      cy.contains('nav a', 'Basket').click();
      cy.url().should('include', '/basket');
      cy.get('.nav-link').should('contain', 'Basket');
    });
  });

  describe('TS02 Navigation menu from Sweets page', () => {
    beforeEach(() => {
      cy.visit("https://sweetshop.netlify.app/sweets");
    });

    it('TC_02.05 Test open Home page', () => {
      cy.contains('nav a', 'Sweet Shop').click();
      cy.url().should('eq', 'https://sweetshop.netlify.app/');
    });

    it('TC_02.06 Test open About page', () => {
      cy.contains('nav a', 'About').click();
      cy.url().should('include', '/about');
      cy.get('.nav-link').should('contain', 'About');
    });

    it('TC_02.07 Test open Login page', () => {
      cy.contains('nav a', 'Login').click();
      cy.url().should('include', '/login');
      cy.get('.nav-link').should('contain', 'Login');
    });

    it('TC_02.08 Test open Basket page', () => {
      cy.contains('nav a', 'Basket').click();
      cy.url().should('include', '/basket');
      cy.get('.nav-link').should('contain', 'Basket');
    });
  });

  describe('TS02 Navigation menu from About page', () => {
    beforeEach(() => {
      cy.visit("https://sweetshop.netlify.app/about");
    });

    it('TC_02.09 Test open Home page', () => {
      cy.contains('nav a', 'Sweet Shop').click();
      cy.url().should('eq', 'https://sweetshop.netlify.app/');
    });

    it('TC_02.10 Test open Sweets page', () => {
      cy.contains('nav a', 'Sweets').click();
      cy.url().should('include', '/sweets');
      cy.get('.nav-link').should('contain', 'Sweets');
    });

    it('TC_02.11 Test open Login page', () => {
      cy.contains('nav a', 'Login').click();
      cy.url().should('include', '/login');
      cy.get('.nav-link').should('contain', 'Login');
    });

    it('TC_02.12 Test open Basket page', () => {
      cy.contains('nav a', 'Basket').click();
      cy.url().should('include', '/basket');
      cy.get('.nav-link').should('contain', 'Basket');
    });
  });

  describe('TS02 Navigation menu from Login page', () => {
    beforeEach(() => {
      cy.visit("https://sweetshop.netlify.app/login");
    });

    it('TC_02.13 Test open Home page', () => {
      cy.contains('nav a', 'Sweet Shop').click();
      cy.url().should('eq', 'https://sweetshop.netlify.app/');
    });

    it('TC_02.14 Test open Sweets page', () => {
      cy.contains('nav a', 'Sweets').click();
      cy.url().should('include', '/sweets');
      cy.get('.nav-link').should('contain', 'Sweets');
    });

    it('TC_02.15 Test open About page', () => {
      cy.contains('nav a', 'About').click();
      cy.url().should('include', '/about');
      cy.get('.nav-link').should('contain', 'About');
    });

    it('TC_02.16 Test open Basket page', () => {
      cy.contains('nav a', 'Basket').click();
      cy.url().should('include', '/basket');
      cy.get('.nav-link').should('contain', 'Basket');
    });
  });

  describe('TS02 Navigation menu from Basket page', () => {
    beforeEach(() => {
      cy.visit("https://sweetshop.netlify.app/basket");
    });

    it('TC_02.17 Test open Home page', () => {
      cy.contains('nav a', 'Sweet Shop').click();
      cy.url().should('eq', 'https://sweetshop.netlify.app/');
      cy.get('.navbar-brand').should('contain', 'Sweet Shop');
    });

    it('TC_02.18 Test open Sweets page', () => {
      cy.contains('nav a', 'Sweets').click();
      cy.url().should('include', '/sweets');
      cy.get('.nav-link').should('contain', 'Sweets');
    });

    it('TC_02.19 Test open About page', () => {
      cy.contains('nav a', 'About').click();
      cy.url().should('include', '/about');
      cy.get('.nav-link').should('contain', 'About');
    });

    it('TC_02.20 Test open Login page', () => {
      cy.contains('nav a', 'Login').click();
      cy.url().should('include', '/login');
      cy.get('.nav-link').should('contain', 'Login');
    });
  });
});