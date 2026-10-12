# 🏋️ Shape Up — Full-Stack Fitness & Wellness Platform

**Shape Up** is a comprehensive web application designed to help users manage their workout routines, track daily meal plans, calculate fitness metrics (like BMR and calorie intake), and stay on top of their health goals. Built with the **MERN stack** (MongoDB, Express, React, Node.js) and styled using **Material UI**, it provides an intuitive, modern, and responsive user experience.

---

## ✨ Features

* **🔑 User Authentication & Security:** Secure registration and login using JWT (JSON Web Tokens) with HTTP-only cookies and bcrypt password hashing.
* **📊 Personal Fitness Dashboard:** Track daily water intake, calorie goals, and meal plan logs.
* **🏋️ Workout Database & Planner:** Browse workout routines, exercise guides, and create custom exercise plans.
* **🥗 Nutrition & Meal Tracker:** Search food items, monitor calorie counts, and log daily nutrition metrics.
* **📐 Fitness Calculators:** Built-in BMR (Basal Metabolic Rate) and daily calorie intake estimators.
* **🎨 Responsive Modern Design:** Styled with Material UI (MUI) components, clean typography, and mobile-friendly layouts.

---

## 🛠️ Tech Stack

### **Frontend**
* **React.js** (v18+)
* **React Router DOM** (Client-side routing)
* **Redux Toolkit** (Global state management)
* **Material UI (MUI)** & **Bootstrap** (UI components & icons)
* **Axios / Fetch API** (HTTP requests)

### **Backend**
* **Node.js** & **Express.js** (REST API architecture)
* **MongoDB** & **Mongoose** (Database modeling & storage)
* **JSON Web Tokens (JWT)** & **Cookie-Parser** (User authentication)
* **Custom Error Handling Middleware** (Structured JSON API responses)

---

## 📁 Project Structure

```text
fit/
├── backend/
│   ├── config/          # Database connections (MongoDB)
│   ├── controllers/     # API request handlers (user, workout, meal controllers)
│   ├── middleware/      # Error handler & authentication middleware
│   ├── models/          # Mongoose database schemas
│   ├── routes/          # API endpoints (/api/users, /api/userMealPlanRoutes, etc.)
│   ├── app.js           # Express app setup and middleware configuration
│   └── package.json
│
├── frontend/
│   ├── public/          # Public HTML templates & assets
│   ├── src/
│   │   ├── assets/      # Hero banners, logos, and images
│   │   ├── components/  # Reusable UI components (Navbar, Footer, HeroBanner, WaterIntake)
│   │   ├── pages/       # Application views (Home, Login, Register, BMRCalculator, Workouts)
│   │   ├── slices/      # Redux Toolkit state slices
│   │   ├── App.js       # Main React component & routes
│   │   └── index.js     # React application entry point
│   └── package.json
│
└── README.md
