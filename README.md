# Next.js E-Commerce Store 🛍️

A modern, full-featured e-commerce platform built with Next.js 16, featuring a beautiful orange and black theme, shopping cart functionality, and a professional store layout.

## 🎯 Description

The Next.js E-Commerce Project is a full-featured online shopping platform that allows users to browse products, manage a shopping cart, and interact with a dynamic interface.

It demonstrates modern React patterns such as:

- **Component-based architecture** - Modular and reusable components
- **React Context API** - Global state management for cart and menu
- **Custom hooks** - Reusable logic for data fetching and state
- **Server & Client Components** - Optimized rendering with Next.js App Router

The project is designed with a user-centric experience, featuring responsive layouts, smooth animations, and accessible UI components. Products are fetched from an external API (DummyJSON), simulating a real-world e-commerce environment.

## ✨ Features

| Feature                              | Description                                                        |
|--------------------------------------|--------------------------------------------------------------------|
| 🏠 **Home Page**                     | Hero section with search and featured products                    |
| 🛒 **Shopping Cart**                 | Add/remove items with real-time updates and animations            |
| 🏪 **Shop Page**                     | Dedicated page to browse all products                             |
| 📂 **Categories Page**               | Browse products by category with interactive cards                |
| 🔥 **Deals Page**                    | Hot deals showing products with 10%+ discounts                    |
| ℹ️ **About Us Page**                 | Professional company information with feature highlights          |
| 📞 **Contact Page**                  | Working contact form with contact information                     |
| 🔍 **Product Search**                | Real-time search filtering across all products                    |
| 🏷️ **Category Filtering**            | Filter products by category dynamically                           |
| 📱 **Responsive Design**             | Fully responsive on mobile, tablet, and desktop                   |
| 🎨 **Orange & Black Theme**          | Consistent modern color scheme throughout                         |
| 🎭 **Smooth Animations**             | Hover effects, transitions, and slide animations                  |
| 🗂️ **Sidebar Navigation**            | Collapsible menu with store-specific pages                        |
| 💳 **Cart Drawer**                   | Slide-out drawer showing cart items with remove animation         |
| 🖼️ **Product Cards**                 | Beautiful cards with images, prices, and discount badges          |
| ⚡ **Loading States**                | Loading indicators for better UX                                  |
| ❌ **Error Handling**                | Graceful error messages and fallbacks                             |

## 🛠️ Technologies Used

- **Next.js 16.1.6** – React framework with App Router
- **React 19.2.3** – UI library with hooks
- **TypeScript** – Type safety and better developer experience
- **TailwindCSS 4** – Utility-first CSS framework
- **Radix UI** – Accessible UI components (Dialog, Drawer)
- **Vaul** – Drawer component library
- **React Icons** – Comprehensive icon library
- **Context API** – State management for cart and menu
- **DummyJSON API** – External API for product data

## 🚀 Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd nextjs-project

# Install dependencies
npm install
# or
yarn install
# or
pnpm install        
```

# Development mode
npm run dev
# or
yarn dev
# or
pnpm dev

# Production build
npm run build
npm start
# Project Structure
```
nextjs-project/
├── app/
│   ├── components/           # Reusable React components
│   │   ├── Header.tsx        # Header with logo and menu toggle
│   │   ├── MainLayout.tsx    # Layout wrapper with sidebar
│   │   ├── ProductCard.tsx   # Product display component
│   │   ├── Dropdown.tsx      # Shopping cart drawer
│   │   ├── CategoryDropDd.tsx # Category dropdown filter
│   │   └── DrawerBaskit.tsx  # (Legacy) Drawer component
│   ├── lib/                  # Utility functions
│   │   └── api.js            # API calls to DummyJSON
│   ├── shop/                 # Shop page
│   │   └── page.tsx
│   ├── categories/           # Categories page
│   │   └── page.tsx
│   ├── deals/                # Deals page
│   │   └── page.tsx
│   ├── about-us/             # About Us page
│   │   └── page.tsx
│   ├── contact/              # Contact page
│   │   └── page.tsx
│   ├── page.tsx              # Home page
│   └── layout.tsx            # Root layout
├── context/                  # React Context providers
│   ├── MenuContext.tsx       # Sidebar menu state
│   └── CardContext.tsx       # Shopping cart state
├── public/                   # Static assets
│   └── images/
├── styles/                   # Global styles
│   └── globals.css
├── .gitignore
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```






