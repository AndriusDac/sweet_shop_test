# 🍭 SweetShop

Welcome to **SweetShop** – a simple online candy store with end-to-end tests powered by Cypress.  
Functional testing suite for [SweetShop](https://sweetshop.netlify.app/) using [Cypress](https://www.cypress.io/).  
This project ensures that core functionality and user flows of the Sweet Shop website work as expected.


## 🧠 Project Overview

his repository contains automated functional tests that validate:

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
## Install dependencies:

```powershell
npm install
```