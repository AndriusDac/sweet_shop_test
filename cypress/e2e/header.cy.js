// describe('SweetShop Navigation Tests', () => {
//   const baseUrl = 'https://sweetshop.netlify.app';

//   const testCases = [
//     { from: '/', to: '/sweets', link: 'Sweets' },
//     { from: '/', to: '/about', link: 'About' },
//     { from: '/', to: '/login', link: 'Login' },
//     { from: '/', to: '/basket', link: 'Basket' },
//     { from: '/sweets', to: '/', link: 'Sweet Shop' },
//     { from: '/sweets', to: '/about', link: 'About' },
//     { from: '/sweets', to: '/login', link: 'Login' },
//     { from: '/sweets', to: '/basket', link: 'Basket' },
//     { from: '/about', to: '/', link: 'Sweet Shop' },
//     { from: '/about', to: '/sweets', link: 'Sweets' },
//     { from: '/about', to: '/login', link: 'Login' },
//     { from: '/about', to: '/basket', link: 'Basket' },
//     { from: '/login', to: '/', link: 'Sweet Shop' },
//     { from: '/login', to: '/sweets', link: 'Sweets' },
//     { from: '/login', to: '/about', link: 'About' },
//     { from: '/login', to: '/basket', link: 'Basket' },
//     { from: '/basket', to: '/', link: 'Sweet Shop' },
//     { from: '/basket', to: '/sweets', link: 'Sweets' },
//     { from: '/basket', to: '/about', link: 'About' },
//     { from: '/basket', to: '/login', link: 'Login' }
//   ];

//   testCases.forEach(tc => {
//     it(`Verify that "${tc.link}" page loads correctly from "${tc.from}"`, () => {
//       cy.visit(`${baseUrl}${tc.from}`);
//       cy.contains('nav', tc.link).click();
//       cy.url().should('eq', `${baseUrl}${tc.to}`);
//     });
//   });
// });

describe('TS_2 Header (navigation bar)', () => {
  it('TC_2.1 Verify that "Sweets" page loads from main page correctly.', () => {
    // Step 1: Open the URL
    cy.visit('https://sweetshop.netlify.app/');

    // Step 2: Click on the "Sweets" navigation link
    cy.contains('nav a', 'Sweets').click();

    // Step 3: Verify that the corresponding page opens
    cy.url().should('include', '/sweets');
    cy.get('h1').should('contain', 'Browse sweets');
  });

  it('TC_2.2 Verify About Page Navigation', () => {
    // Step 1: Visit the main page
    cy.visit('https://sweetshop.netlify.app/');

    // Step 2: Click on the "About" navigation link
    cy.contains('nav a', 'About').click();

    // Step 3: Verify that the corresponding page opens
    cy.url().should('include', '/about');
    cy.get('.nav-link').should('contain', 'About');
  });

  it('TC_2.3 - Should navigate to the Login page correctly', () => {
    // Step 1: Visit the main page
    cy.visit('https://sweetshop.netlify.app/');

    // Step 2: Click on the "Login" navigation link
    cy.contains('nav a', 'Login').click();

    // Step 3: Verify that the corresponding page opens
    cy.url().should('include', '/login');
    cy.get('.nav-link').should('contain', 'Login');
  });

  it('TC_2.4 - Should navigate to the Basket page correctly', () => {
    cy.visit('https://sweetshop.netlify.app/');
    cy.contains('nav a', 'Basket').click();
    cy.url().should('include', '/basket');
    cy.get('.nav-link').should('contain', 'Basket');
  });

  it('TC_2.5 - Should navigate to the Main page from Sweets page correctly', () => {
    cy.visit('https://sweetshop.netlify.app/sweets');
    cy.contains('nav a', 'Sweet Shop').click();
    cy.url().should('eq', 'https://sweetshop.netlify.app/');
  });

  it('TC_2.6 - Should navigate to the About page from Sweets page correctly', () => {
    cy.visit('https://sweetshop.netlify.app/sweets');
    cy.contains('nav a', 'About').click();
    cy.url().should('include', '/about');
    cy.get('.nav-link').should('contain', 'About');
  });

  it('TC_2.7 - Should navigate to the Login page from Sweets page correctly', () => {
    cy.visit('https://sweetshop.netlify.app/sweets');
    cy.contains('nav a', 'Login').click();
    cy.url().should('include', '/login');
    cy.get('.nav-link').should('contain', 'Login');
  });

  it('TC_2.8 - Should navigate to the Basket page from Sweets page correctly', () => {
    cy.visit('https://sweetshop.netlify.app/sweets');
    cy.contains('nav a', 'Basket').click();
    cy.url().should('include', '/basket');
    cy.get('.nav-link').should('contain', 'Basket');
  });

  it('TC_2.9 - Should navigate to the Main page from About page correctly', () => {
    cy.visit('https://sweetshop.netlify.app/about');
    cy.contains('nav a', 'Sweet Shop').click();
    cy.url().should('eq', 'https://sweetshop.netlify.app/');
  });

  it('TC_2.10 - Should navigate to the Sweets page from About page correctly', () => {
    cy.visit('https://sweetshop.netlify.app/about');
    cy.contains('nav a', 'Sweets').click();
    cy.url().should('include', '/sweets');
    cy.get('.nav-link').should('contain', 'Sweets');
  });

  it('TC_2.11 - Should navigate to the Login page from About page correctly', () => {
    cy.visit('https://sweetshop.netlify.app/about');
    cy.contains('nav a', 'Login').click();
    cy.url().should('include', '/login');
    cy.get('.nav-link').should('contain', 'Login');
  });

  it('TC_2.12 - Should navigate to the Basket page from About page correctly', () => {
    cy.visit('https://sweetshop.netlify.app/about');
    cy.contains('nav a', 'Basket').click();
    cy.url().should('include', '/basket');
    cy.get('.nav-link').should('contain', 'Basket');
  });

  it('TC_2.13 - Should navigate to the Main page from Login page correctly', () => {
    cy.visit('https://sweetshop.netlify.app/login');
    cy.contains('nav a', 'Sweet Shop').click();
    cy.url().should('eq', 'https://sweetshop.netlify.app/');
  });

  it('TC_2.14 - Should navigate to the Sweets page from Login page correctly', () => {
    cy.visit('https://sweetshop.netlify.app/login');
    cy.contains('nav a', 'Sweets').click();
    cy.url().should('include', '/sweets');
    cy.get('.nav-link').should('contain', 'Sweets');
  });

  it('TC_2.15 - Should navigate to the About page from Login page correctly', () => {
    cy.visit('https://sweetshop.netlify.app/login');
    cy.contains('nav a', 'About').click();
    cy.url().should('include', '/about');
    cy.get('.nav-link').should('contain', 'About');
  });

  it('TC_2.16 - Should navigate to the Basket page from Login page correctly', () => {
    cy.visit('https://sweetshop.netlify.app/login');
    cy.contains('nav a', 'Basket').click();
    cy.url().should('include', '/basket');
    cy.get('.nav-link').should('contain', 'Basket');
  });

  it('TC_2.17 - Should navigate to the Main page from Basket page correctly', () => {
    cy.visit('https://sweetshop.netlify.app/basket');
    cy.contains('nav a', 'Sweet Shop').click();
    cy.url().should('eq', 'https://sweetshop.netlify.app/');
    cy.get('.navbar-brand').should('contain', 'Sweet Shop');
  });

  it('TC_2.18 - Should navigate to the Sweets page from Basket page correctly', () => {
    cy.visit('https://sweetshop.netlify.app/basket');
    cy.contains('nav a', 'Sweets').click();
    cy.url().should('include', '/sweets');
    cy.get('.nav-link').should('contain', 'Sweets');
  });

  it('TC_2.19 - Should navigate to the About page from Basket page correctly', () => {
    cy.visit('https://sweetshop.netlify.app/basket');
    cy.contains('nav a', 'About').click();
    cy.url().should('include', '/about');
    cy.get('.nav-link').should('contain', 'About');
  });

  it('TC_2.20 - Should navigate to the Login page from Basket page correctly', () => {
    cy.visit('https://sweetshop.netlify.app/basket');
    cy.contains('nav a', 'Login').click();
    cy.url().should('include', '/login');
    cy.get('.nav-link').should('contain', 'Login');
  });
});



