# Functional Test Cases for Sweet Shop

## About Page:
### 1.1. General Checks
- **1.1.1** Check the page has title 'Sweet Shop Project'.
- **1.1.2** Check the page has the description.
- **1.1.3** Check the page has the banner and it matches 2018.

## Login Page:
### 2.1. Page Load
- **2.1.1** Check 'Login' title and description.
- **2.1.2** Check the page has 'username' and 'password' textboxes.

### 2.2. Login Functionality
- **2.2.1** Successful scenario: Enter valid username and password, and verify login success.
- **2.2.2** Unsuccessful scenario: Enter incorrect credentials and verify the error message is displayed.

## Home Page:
### 3.1. General Checks
- **3.1.1** Check the page loads correctly with no errors.
- **3.1.2** Check the navigation bar has links to Home, Products, Cart, and Login/Logout.

## Product Browsing:
### 4.1. Product List
- **4.1.1** Check products are displayed correctly with name, image, and price.
- **4.1.2** Check the user can filter or sort products if applicable.

### 4.2. Product Details
- **4.2.1** Check clicking on a product opens its detailed page.
- **4.2.2** Check the product details page shows name, price, description, and an 'Add to Cart' button.

## Shopping Cart:
### 5.1. Adding to Cart
- **5.1.1** Check user can add a product to the cart.
- **5.1.2** Check cart updates correctly when adding multiple products.

### 5.2. Cart Functionality
- **5.2.1** Check user can remove products from the cart.
- **5.2.2** Check cart total updates correctly.

## Checkout Process:
### 6.1. Checkout Flow
- **6.1.1** Check user can proceed to checkout from the cart.
- **6.1.2** Check checkout page displays order summary and payment options.
- **6.1.3** Check order completes successfully after entering valid payment details.
- **6.1.4** Check error messages for invalid payment details.

## Order Management:
### 7.1. Order History
- **7.1.1** Check user can view past orders.
- **7.1.2** Check order details page shows correct order information.

## Logout:
### 8.1. General Checks
- **8.1.1** Check user can log out successfully.
- **8.1.2** Check user is redirected to the login page after logging out.

---







<!-- 
# Test Cases for Sweet Shop Application

## 1. Functional Test Cases   

###  Home Page  

✅ TC-001: When the homepage loads, products should be displayed with their name, price, and image.  
✅ TC-002: Clicking on a product should open the product details page with the correct information.  
✅ TC-003: Clicking the "Add to Cart" button should add the selected product to the cart.  
✅ TC-004: After adding a product to the cart, the cart icon should update with the correct item count.  
✅ TC-005: Clicking the "View Cart" button should navigate to the cart page displaying all added products.  

### Shopping Cart

✅ TC-006: The cart page should display the correct list of products with their respective prices.  
✅ TC-007: Clicking the "Remove" button should remove the item from the cart, and the total price should be updated accordingly.  
✅ TC-008: Clicking the "Proceed to Checkout" button should navigate to the checkout page.  

### Checkout & Payment  

✅ TC-009: Entering valid shipping details should allow proceeding to the payment step.  
✅ TC-010: Entering incorrect card details should display an error message and prevent payment.  
✅ TC-011: Successful payment should redirect to the order confirmation page displaying the order number.  

## 2. UI/UX Test Cases

✅ TC-012: The website should be fully responsive on mobile and tablet devices.  
✅ TC-013: All buttons and links should be clickable and provide visual feedback (e.g., hover effects).  
✅ TC-014: If the cart is empty, a message "Your cart is empty" should be displayed.  

## 3. Performance Test Cases  

✅ TC-015: The homepage should load within 3 seconds.  
✅ TC-016: The cart page should update instantly when items are added or removed.  

## 4. Security Test Cases  

✅ TC-017: SQL injection attempts in checkout forms should be prevented.  
✅ TC-018: Sensitive user data (e.g., credit card details) should not be accessible via browser developer tools.  
✅ TC-019: Payments should be processed over HTTPS with proper encryption.   -->