# BemConecto

**BemConecto** is a web application built with **React**, **TypeScript**, and **Next.js**, designed to help psychologists manage their appointments, patients, and therapy sessions in one place.  
This repository contains the **frontend** of the application, focused on delivering a modern, intuitive, and responsive user experience.

---

## ✨ Overview

The system allows psychologists to manage patients, view and organize their schedules, record session notes, and analyze key metrics related to their clinical practice — all within a clean and easy-to-use interface.

This frontend consumes a **Node.js + Express** API that handles authentication, business logic, and data persistence.

---

## 🧱 Tech Stack

- **Next.js** – React framework for production-grade applications
- **React** – Component-based UI library
- **TypeScript** – Static typing for better scalability and reliability
- **React Query** – Asynchronous data fetching and caching
- **Tailwind CSS** – Utility-first CSS framework for fast and consistent styling
- **JWT Integration** – Authentication via JSON Web Tokens

---

## 🏠 Main Features

- Patient registration and management
- Psychologist profile management
- Appointment scheduling and calendar view
- Session records with notes and progress tracking
- Appointment status control (scheduled, completed, canceled, etc.)
- Dashboard with summary and performance metrics
- Secure authentication and session control
- Responsive design optimized for desktop and mobile use

---

## 🚀 Deployment

The application is deployed on **Vercel**:  
🔗 [Production Environment](https://bemconecto.vercel.app)

---

## ⚙️ Installation and Local Setup

Clone the repository  
git clone https://github.com/rodrigocnn/bemconecto.git

Enter the project directory  
cd bemconecto

Install dependencies  
npm install

Create an `.env` file with the required environment variables (example below):  
NEXT_PUBLIC_API_URL=https://api.bemconecto.com

Run the project in development mode  
npm run dev

---

## 🗂 Project Structure

src/  
├── assets/ → Static files or additional styles (e.g., images, SVGs, fonts)  
├── components/ → Reusable UI components (buttons, inputs, modals, etc.)  
├── hooks/ → Custom React hooks for shared logic  
├── interfaces/ → TypeScript interfaces and type definitions  
├── modules/ → Domain-based modules (auth, dashboard, etc.)  
├── pages/ → Main pages linked to routes  
├── services/ → API communication logic (Axios instances, endpoints)  
├── styles/ → Global styling configuration (Tailwind, CSS variables)  
└── utils/ → Helper and utility functions

---

## 🧾 Backend Integration

This frontend connects to a Node.js + Express API powered by Prisma + PostgreSQL, which manages entities such as:

- psychologists
- patients
- sessions
- appointments
- users

Authentication is handled via JWT tokens, ensuring secure access control and protected routes.

---

## 🧑‍💻 Contributing

This project is private and not currently open for external contributions.

---

## 📸 Screenshots

<p align="center">
  <img src="public/bemconecto.png" width="600" alt="Dashboard Screenshot" />
</p>

---

## 🧠 Author

Developed by **Rodrigo César**, a software developer experienced in React, Node.js, and modern web application architecture.

---

## 📄 License

This project is licensed under the **MIT License**.  
Feel free to use, modify, and share it.
