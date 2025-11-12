# Shopping Cart with User Authentication

A React shopping cart application with secure authentication, user-specific carts, and session management.

## Setup Instructions

### Prerequisites

- Node.js
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Krishnanand2517/shopping-cart-assessment.git
cd shopping-cart-assessment

# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:5173` in your browser.

## Features

- User registration & login with validation
- SHA-256 password hashing
- "Remember me" functionality
- 60-minute session expiry with activity tracking
- User-specific shopping carts
- Dynamic pricing and discounts
- Add/remove items, adjust quantities
- Real-time price calculation
- Responsive design with Tailwind CSS

## Technical Approach

### Architecture

**State Management:**

- Context API for authentication state and cart state
- Custom `useLocalStorage` hook for persistence
- localStorage for user data and carts

**Authentication Flow:**

```
Register → Hash Password (SHA-256) → Store
Login → Verify Hash → Create Session (60min)
Shop → User-Specific Cart (cart_{userId})
Logout/Expire → Clear Session & Cart
```

**Key Implementations:**

1. **Password Security:** SHA-256 hashing via Web Crypto API

2. **User-Specific Carts:** Each user gets isolated cart storage with key `cart_{userId}`

3. **Session Management:**

   - 60-minute auto-logout
   - "Remember me" stores the user in localStorage
   - Otherwise, the user is stored in sessionStorage

4. **Custom Hook:** `useLocalStorage(key, initialValue)` syncs React state with localStorage

5. **Protected Routes:** Home and Cart screens can only be accessed by authorized users, and others will be redirected to Auth screen

### Tech Stack

- React 18+ with Hooks (useState, useEffect, useContext) and react-router-dom
- Context API for state management
- Web Crypto API for hashing
- localStorage for persistence
- Tailwind CSS for styling
- Lucide React for icons

## localStorage Schema

```javascript
users: [{ username, password: "hash...", id }]
currentUser: { username, id }
sessionExpiry: 1699125256789
cart_{userId}: [{ id, name, price, offer, quantity }]
```
