# Credential Manager

A full-stack web application designed to securely store, manage, and protect your login credentials and passwords across different platforms.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [License](#license)

---

## Features

- **User Authentication:** Secure registration and login using JWT (JSON Web Tokens) and bcrypt for password hashing.
- **Secure Storage:** Store and manage passwords and account credentials.
- **CRUD Operations:** Easily add, view, and delete credentials.
- **Responsive UI:** Modern, user-friendly frontend built with React and Tailwind CSS.
- **Protected Routes:** Ensure only authenticated users can access their private vaults.

---

## Tech Stack

**Frontend:**
- React (v19)
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- React Toastify
- Heroicons

**Backend:**
- Node.js
- Express.js
- MongoDB & Mongoose
- JSON Web Token (JWT)
- bcrypt
- CORS
- dotenv

---

## Project Structure

The repository is divided into two main directories:

- `/Frontend`: Contains the Vite-React application, UI components, pages, and styling.
- `/backend`: Contains the Express server, MongoDB models, API routes, and authentication middleware.

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MongoDB](https://www.mongodb.com/) (Local instance or MongoDB Atlas cluster)
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Credential_Manager
   ```

2. **Install Backend Dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies:**
   ```bash
   cd ../Frontend
   npm install
   ```

### Environment Variables

You will need to create `.env` files for both the frontend and backend.

**Backend (`backend/.env`):**
Create a `.env` file in the `backend` directory with the following variables:
```env
PORT=4000
MONGODB_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-very-secure-jwt-secret>
```

**Frontend (`Frontend/.env`):**
Create a `.env` file in the `Frontend` directory. Typical variables might include your API base URL if they differ from the default:
```env
VITE_API_URL=http://localhost:4000
```
*(Check `Frontend/.env` for specific local requirements if any)*

---

## Running the Application

To run the application locally, you need to start both the backend server and the frontend development server.

1. **Start the Backend Server:**
   ```bash
   cd backend
   npm run server
   ```
   *The server will start on `http://localhost:4000`.*

2. **Start the Frontend Application:**
   Open a new terminal window:
   ```bash
   cd Frontend
   npm run dev
   ```
   *The frontend will be accessible at `http://localhost:5173`.*

---

## API Endpoints

### Authentication (`/api/user`)
- **POST** `/api/user/register` - Create a new user account
- **POST** `/api/user/login` - Authenticate user and get JWT
- **GET** `/api/user/get-profile` - Get authenticated user profile (Protected)

### Credentials (`/api/credentials`)
- **GET** `/api/credentials/` - Fetch all credentials for the logged-in user (Protected)
- **POST** `/api/credentials/` - Add a new credential (Protected)
- **DELETE** `/api/credentials/:id` - Delete a specific credential by ID (Protected)

---
