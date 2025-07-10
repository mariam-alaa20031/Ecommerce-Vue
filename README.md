# saqaya-ecommerce

**Haelora** is a responsive, elegant e-commerce platform built with Vue 3 and TypeScript. It features a clean user interface, dynamic product browsing, and a seamless shopping cart experience — all structured with reusable components and efficient state management.

---

## Table of Contents

- [Features](#features)
- [Layout & Navigation](#layout--navigation)
- [Architecture](#architecture)
- [State Management](#state-management)
- [Setup & Installation](#setup--installation)
- [Technologies Used](#technologies-used)

---

## Features

-  **Home Page**  
  Welcomes users with brand identity and message.

-  **Products Page**  
  View all products, with sorting and category filtering.

-  **Product Detail Page**  
  Shows product info, price, rating, and description.

-  **Cart Drawer**  
  Responsive side cart for quick add/remove operations.

-  **Contact Us Page**  
  Basic contact page for user interaction simulation.

-  **Mobile Friendly**  
  Fully responsive design for mobile and tablet screens.

---

##  Layout & Navigation

The app uses a consistent layout that includes:

- **Header** (visible on all pages):  
  - Contains navigation links:
    - `Home`
    - `Products`
    - `Contact Us`
  - Logo and cart icon with product count badge.

- **Footer**:  
  - Optional static branding or copyright.

- **Router View**:  
  - Dynamically renders route components based on user interaction.


---

## 🧩 Architecture

### Root Component (`App.vue`)

- Contains the **Header**, **Footer**, and `<router-view />` to render current route’s component.

### Routes

- `/` → `homePage.vue`
- `/products` → `productsPage.vue` (includes product listings & filters)
- `/product/:id` → `productPage.vue` (product detail)
- `/contactUs` → `contactPage.vue`

Each page is composed of modular, reusable components.

---


---

##  State Management (Pinia)

### `productStore.ts`

- **States**:
  - `products`: All products from API
  - `product`: Current selected product
  - `fetched`: Boolean flag for fetch status

- **Getters**:
  - Get product by ID
  - Sort products by price/rating
  - Filter products by category

---

### `cartStore.ts`

- **State**:
  - `cart`: Array of selected products

- **Getters**:
  - Count per product
  - Total cart length

- **Actions**:
  - Add item to cart
  - Remove item from cart
  - Clear cart

---

##  Setup & Installation

```bash
# Clone the repository
git clone https://github.com/your-username/haelora.git
cd haelora

# Install dependencies
npm install

# Start the development server
npm run dev

##  Technologies Used

- [Vue.js 3](https://vuejs.org/) — Progressive JavaScript framework using the Composition API
- [Vue CLI](https://cli.vuejs.org/) — Standard tooling for Vue.js projects (used for scaffolding and configuration)
- [TypeScript](https://www.typescriptlang.org/) — Adds static typing to JavaScript for more robust development
- [Pinia](https://pinia.vuejs.org/) — Intuitive state management for Vue 3
- [Vue Router](https://router.vuejs.org/) — Declarative client-side routing
- [SCSS (Sass)](https://sass-lang.com/) — CSS preprocessor for cleaner and more maintainable styles
- [ESLint](https://eslint.org/) — Linter for identifying and fixing code issues
- [Prettier](https://prettier.io/) — Code formatter for consistent style
- [Node.js](https://nodejs.org/) — JavaScript runtime used for development
