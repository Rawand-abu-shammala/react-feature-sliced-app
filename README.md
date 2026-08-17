React Feature-Sliced E-Commerce App

A production-oriented e-commerce frontend built with React 19, TypeScript, Vite, Redux Toolkit, React Router, RTK Query, React Hook Form, i18next, SCSS Modules, Storybook, Vitest, Playwright, and MSW.

The project follows the Feature-Sliced Design (FSD) methodology to keep business logic, UI, API communication, and reusable components separated into clear architectural layers.

✨ Overview

This application is designed as a modern grocery/e-commerce frontend with:

Product catalog and product cards

Product search and filtering

Brand and country facets

Price range filtering

Product sorting

Category navigation

Best-selling products

Trending products

Promotional banners

First-order discount section

Authentication flows

Google authentication flow

Multi-step registration with verification

User session restoration

Address management

Location/map selection with Leaflet

English and Arabic localization

Language-aware product content

Currency switching based on language

Light/dark theme support

Responsive and virtualized product catalog

Loading, empty, error, and skeleton states

Storybook component documentation

Component/unit testing

Browser testing with Playwright

API mocking with MSW

Production deployment with Vercel

🛠️ Tech Stack

Core

Technology

Purpose

React 19

UI

TypeScript

Type safety

Vite

Development server and production bundling

React Router 7

Client-side routing

Redux Toolkit

Global state management

React Redux

React bindings for Redux

RTK Query

API state and caching

Axios

HTTP client

React Hook Form

Form state

i18next / react-i18next

Internationalization

Sass / SCSS Modules

Styling

UI & UX

Responsive layouts

Reusable UI components

Skeleton loaders

Empty and error states

Light/dark theme

Arabic RTL-ready content

Embla Carousel

Leaflet maps

Virtualized product grids

Testing & Development

Storybook

Vitest

Testing Library

Playwright

MSW

Chromatic

ESLint

Stylelint

TypeScript strict mode

Tooling

GitHub Actions

Vercel

Node.js

npm

🏗️ Architecture

The project uses Feature-Sliced Design (FSD).

src/
├── app/
│   ├── providers/
│   ├── store/
│   ├── styles/
│   └── App.tsx
│
├── entities/
│   ├── category/
│   ├── product/
│   ├── tag/
│   └── user/
│
├── features/
│   ├── authByGoogle/
│   ├── login/
│   ├── manageAddress/
│   ├── productFilters/
│   └── register/
│
├── widgets/
│   ├── BestSellingProducts/
│   ├── Catalog/
│   ├── CategoryNavigation/
│   ├── Footer/
│   ├── Header/
│   ├── PageError/
│   ├── PageLoader/
│   ├── PromoCarousel/
│   └── TrendingProducts/
│
├── pages/
│   ├── AuthCallbackPage/
│   ├── Category/
│   ├── Home/
│   ├── Login/
│   ├── NotFound/
│   └── Register/
│
├── shared/
│   ├── api/
│   ├── assets/
│   ├── config/
│   ├── lib/
│   └── ui/
│
└── mocks/

Layer responsibilities

App

Application initialization, providers, routing, global store configuration, theme, and global styles.

Entities

Business entities such as products, users, categories, and tags.

Features

User-facing business actions such as login, registration, Google authentication, address management, and product filtering.

Widgets

Large reusable page sections composed from entities and features, such as the catalog, header, category navigation, and promotional carousel.

Pages

Route-level compositions such as Home, Login, Register, and Category pages.

Shared

Reusable UI, utilities, API clients, configuration, hooks, testing helpers, and common infrastructure.

📂 Main Application Areas

Home

The home page combines multiple widgets including:

Category navigation

Promotional carousel

Best-selling products

Trending products

First-order discount section

Catalog

The catalog supports:

Product fetching

Filtering

Sorting

Pagination / loading more products

Responsive columns

Virtualized rendering

Loading skeletons

Empty states

Error states

The catalog uses virtualization to avoid rendering a large number of product cards at once.

Product Filters

The filtering feature supports:

Search

Category

Tags

Price range

Brands

Countries

Stock availability

URL query synchronization

Sorting

Filter state is managed through Redux and synchronized with URL parameters where appropriate.

Authentication

The application contains:

Login

Registration

Multi-step registration

Verification code

Password creation

Google authentication

Session refresh

Authentication failure handling

Local user-state restoration

Address Management

Users can manage delivery addresses with:

Address list

Add/edit address flow

Delete confirmation

Street and apartment information

ZIP/postal code

City

Map-based location selection

Leaflet integration

🌍 Internationalization

The application currently supports:

🇬🇧 English

🇸🇦 Arabic

i18next is used for translations and language detection.

Product entities also contain localized content:

name
nameAr

description
descriptionAr

shortDescription
shortDescriptionAr

The selected language also determines the application's currency configuration.

🎨 Theme

The application supports:

Light theme

Dark theme

Theme state is persisted through local storage and exposed through a shared theme configuration.

🔌 API & Mocking

The application is structured to work with a backend API through:

Axios

RTK Query

Shared API configuration

For the current frontend/demo setup, the project can run using mock data without requiring the backend server.

Mocking is implemented with:

MSW browser worker

Custom development mocking

Feature/widget test handlers

Mock product/category/tag/banner data

The mock service worker is located at:

public/mockServiceWorker.js

Client/mock mode

The current .env configuration uses:

VITE_API_URL=http://localhost:3000
VITE_PROJECT_ENV=client

When VITE_PROJECT_ENV=client, the application uses relative API requests and enables frontend mocking.

This makes the application suitable for frontend demonstrations and deployment without requiring the original backend to be running.

🚀 Getting Started

Requirements

Make sure you have installed:

Node.js 20+

npm

1. Clone the repository

git clone https://github.com/Rawand-abu-shammala/react-feature-sliced-app.git
cd react-feature-sliced-app

2. Install dependencies

npm install

3. Configure environment variables

Create a .env file in the project root:

VITE_API_URL=http://localhost:3000
VITE_PROJECT_ENV=client

4. Start the development server

npm run dev

The application will normally be available at:

http://localhost:5173

📜 Available Scripts

Command

Description

npm run dev

Start the Vite development server

npm run build

Type-check and create a production build

npm run preview

Preview the production build locally

npm run lint

Run ESLint

npm run lint:ts

Run TypeScript-related ESLint checks

npm run lint:scss

Run Stylelint for SCSS

npm run storybook

Start Storybook

npm run build-storybook

Build Storybook

npm run chromatic

Publish visual regression testing through Chromatic

Production build

Before deployment, verify the project locally with:

npm run build

This runs:

TypeScript → Vite production build

📖 Storybook

Storybook is used to develop and document reusable UI components in isolation.

Start Storybook:

npm run storybook

Then open:

http://localhost:6006

The project contains stories for reusable components, widgets, forms, filters, pages, and state variations.

🧪 Testing

The project uses multiple testing tools depending on the type of test:

Unit/component tests

Vitest

Testing Library

Browser tests

Playwright

Vitest Browser Mode

API mocking

MSW

Visual regression

Chromatic

Tests are colocated with the related feature/component where appropriate.

🔄 CI/CD

The repository includes a GitHub Actions workflow:

.github/workflows/ci.yml

The CI pipeline is designed to perform:

Checkout

Node.js setup

Dependency installation

TypeScript/ESLint checks

SCSS linting

Tests

Chromatic regression testing

Production build

This helps catch errors before changes are merged or deployed.

☁️ Deployment

The application is deployable as a static Vite frontend.

Vercel

The project is configured to build with:

npm run build

For the current mock/client deployment, use:

VITE_PROJECT_ENV=client
VITE_API_URL=http://localhost:3000

Because the client mode enables frontend mocking, the deployed frontend can demonstrate the application without a running backend.

For a real production backend, change the API configuration to the backend's public API URL and use the appropriate environment mode instead of relying on mock data.

🧩 Feature-Sliced Design Example

A typical product flow is separated by responsibility:

Product entity
      │
      ├── Product model/types
      ├── Product API
      └── Product UI
             │
             ▼
Product Filters feature
             │
             ▼
Catalog widget
             │
             ▼
Category/Home page

This keeps low-level reusable business entities separate from higher-level page composition.

📐 Type Safety

The project uses strict TypeScript configuration with:

strict: true

noUnusedLocals

noUnusedParameters

noFallthroughCasesInSwitch

Bundler module resolution

Path aliases using @/*

Example:

import { ProductCard } from "@/entities/product";

instead of long relative imports.

🧱 Reusable UI System

The shared/ui layer contains reusable components such as:

Button

Input

Checkbox

Select

Modal

Accordion

Tabs

Carousel

Range Slider

Price

Spinner

App Icon

Breadcrumbs

State views

These components are designed to be reused across features and widgets rather than duplicated.

📌 Routing

Current application routes include:

Route

Page

/

Home

/login

Login

/register

Register

/oauth

Authentication callback

/:lng/category/:slug

Category

*

Not Found

🔐 Environment Variables

Variable

Purpose

VITE_API_URL

Backend API base URL

VITE_PROJECT_ENV

Selects client/mock or other application environment

Example:

VITE_API_URL=http://localhost:3000
VITE_PROJECT_ENV=client

Do not commit private API keys or secrets to the repository.

🗺️ Roadmap

Potential future improvements include:

Connect the frontend to the production backend

Complete shopping cart functionality

Product details page

Checkout flow

Order history

Payment integration

More comprehensive end-to-end coverage

Automated deployment previews

Further accessibility improvements

Migration of deprecated Sass @import rules to @use / @forward

👩‍💻 Author

Rawand Abu Shammala

Software Engineering Graduate and frontend developer focused on React, TypeScript, scalable frontend architecture, and modern web development.

Repository

https://github.com/Rawand-abu-shammala/react-feature-sliced-app

📄 License

This project is currently a private/personal project. Add a license here if you decide to distribute the source code publicly.