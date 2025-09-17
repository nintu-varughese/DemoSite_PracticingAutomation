# Playwright E2E Automation Project
This repository contains an end-to-end (E2E) automation framework built with **Playwright** and **TypeScript**, following the **Page Object Model (POM)** design pattern.
The project automates an eCommerce workflow:
- User Registration
- User Login
- Shopping (filtering and adding books to basket)
- Basket Verification
- Checkout with billing details
- Order Confirmation.
## 📂 Project Structure
├── tests/
│ ├── example.spec.ts # Main test specs
│ └── pages/
│ ├── common.page.ts # Common utilities (homepage, header logo, etc.)
│ ├── myAccount.page.ts # My Account (login & registration)
│ ├── shop.page.ts # Shop (filter, add to basket)
│ ├── basket.page.ts # Basket (view cart, checkout button)
│ └── checkout.page.ts # Checkout (billing form, place order)
├── playwright.config.ts # Playwright configuration
├── package.json
└── README.md

Test Scenarios
1. Register New User
•	Open homepage
•	Navigate to My Account
•	Register with new credentials
3. Login Existing User
•	Open homepage
•	Navigate to My Account
•	Login with valid credentials
•	Verify dashboard link is visible
4. Shopping & Checkout
•	Login as an existing user
•	Navigate to Shop
•	Adjust price filter via slider
•	Add book to basket
•	View basket and proceed to checkout
•	Fill billing details
•	Place order
•	Verify order confirmation message
⚙️ Configuration
•	Playwright Config: playwright.config.ts
•	Test Timeout: Default 30s (can be overridden in config).

