# 🍭 SweetShop

Welcome to **SweetShop** – a simple online candy store with end-to-end automated tests by Cypress.  
Functional testing suite for [SweetShop](https://sweetshop.netlify.app/) using [Cypress](https://www.cypress.io/).  

These features are thoroughly tested using:

- 6 Test Scenarios (TS)
- 46 Test Cases (TC)

All TSs and TCs are described in the [**TestCases.md**](/TestCases.md) file.

The project also incorporates a robust CI/CD pipeline using GitHub Actions.


## 🧠 Project Overview

This repository contains automated functional tests that validate:

- Page navigation
- Product visibility and availability
- Cart behavior
- Form validation and submission

---

## 📁 Project Structure

``` 
📁 sweetshop/ 
├── 📁 .github/
│ └── 📁 workflows/
│   └── 📄 node.js.yml 
├── 📁 cypress/ 
│ ├── 📁 downloads/ 
│ ├── 📁 e2e/ 
│ │ ├── 📄 TS_1_home.cy.js 
│ │ ├── 📄 TS_2_sweets.cy.js 
│ │ ├── 📄 TS_3_sweets.cy.js 
│ │ ├── 📄 TS_4_about.cy.js 
│ │ ├── 📄 TS_5_login_page.cy.js 
│ │ └── 📄 TS_6_basket_page.cy.js 
│ ├── 📁 fixtures/ 
│ │ └── 📄 example.json 
│ └── 📁 support/ 
│ ├── 📄 commands.js 
│ └── 📄 e2e.js 
├── 📁 node_modules/ 
├── 📄 cypress.config.js 
├── 📄 package-lock.json 
├── 📄 package.json 
├── 📄 README.md 
├── 📄 TestCases.md

```

## Clone the repository:

```bash
git clone https://github.com/AndriusDac/sweet_shop_test.git

```
## Install dependencies:

```bash
npm install
```
## Run Cypress tests:
### Run Cypress in UI Mode
```
npm run cy:open
```
### Run Cypress in CLI Mode
```
npm run cy:run
```

## 📝 License

ISC 

### 👩‍💻 Author

[Andrius Dačkauskis](https://github.com/AndriusDac)

