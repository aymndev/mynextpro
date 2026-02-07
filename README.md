
# Description

The Next.js E-Commerce Project is a full-featured online shopping platform that allows users to browse products, manage a shopping cart, and interact with a dynamic interface.

It demonstrates modern React patterns such as:

Component-based architecture

React Context API for global state management

Custom hooks for reusable logic

The project is designed with a user-centric experience, featuring responsive layouts, smooth animations, and accessible UI components. Products are fetched from an external API (DummyJSON), simulating a real-world e-commerce environment.
# Features
| Feature                              | Description                                                        |
|--------------------------------------|--------------------------------------------------------------------|
| Product Catalog                       | Display products with images, titles, and prices.                  |
| Shopping Cart                         | Add/remove items with real-time updates.                            |
| Responsive Design                     | Works smoothly on desktop and mobile devices.                      |
| Sidebar Navigation                    | Collapsible menu for easy navigation.                              |
| Product Search & Category Filtering   | Search products and filter by categories.                          |
| Cart Drawer                            | Drawer showing cart items with add/remove functionality.           |
| Product Cards                          | Product cards with hover animations for better UX.                 |
| Smooth Animations & Transitions       | Nice transitions throughout the app for smooth interactions.       |
# Technologies Used
Next.js 16.1.6 – React framework with App Router

React 19.2.3 – UI library

TypeScript – Type safety

TailwindCSS 4 – Utility-first CSS framework

Radix UI – Accessible UI components (Dialog, Drawer)

React Icons – Icon library

Vaul – Drawer component library

Context API – State management for cart and menu

# Installation
```
git clone <your-repo-url>
cd nextjs-project
npm install
#or
yarn install
#or
pnpm install
```
# Project Structure
```
nextjs-project/
├── app/
│   ├── components/      
│   │   ├── Header.tsx
│   │   ├── MainLayout.tsx
│   │   ├── ProductCard.tsx
│   │   ├── Dropdown.tsx
│   │   └── DrawerBaskit.tsx
│   ├── lib/            
│   │   └── api.js
│   └── pages/          
├── context/             
│   ├── MenuContext.tsx
│   └── CartContext.tsx
├── public/              
│   ├── images/
│   └── favicon.ico
├── styles/             
│   ├── globals.css
│   └── tailwind.config.js
├── node_modules/       
├── .gitignore          
├── package.json         
├── next.config.js      
├── README.md           
└── ...                  
```







