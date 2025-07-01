# 🖼️ Imagify

Imagify is a modern SaaS (Software as a Service) application built with the MERN stack (MongoDB, Express.js, React, Node.js) that enables users to generate high-quality images from text prompts using advanced AI models.

---

## 🧠 Features

- **AI Image Generation:** Generate images using advanced AI models.
- **User Authentication:** Secure login, registration, and verification.
- **Credit System:** Users can buy credits to generate images.
- **Payment Integration:** Supports payments via Razorpay and Stripe.
- **Modern UI:** Built with React, Tailwind CSS, and Vite.
- **RESTful API:** Node.js, Express, and MongoDB backend.

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, React Router, Axios
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, Razorpay
- **Other:** dotenv, bcrypt, CORS

---

## 🗂️ Project Structure

```
imagify/
  client/           # React frontend
    public/         # Static public files (favicon, images, etc.)
    src/
      assets/       # Image and SVG assets
      components/   # Reusable React components (Navbar, Footer, etc.)
      context/      # React context for global state
      pages/        # Application pages (Home, Result, BuyCredit, Verify)
      App.jsx       # Main App component
      main.jsx      # Entry point
      index.css     # Global styles
    package.json    # Frontend dependencies and scripts
    vite.config.js  # Vite configuration
    ...
  server/           # Node.js backend
    config/         # Database configuration (mongodb.js)
    controllers/    # Route controllers (image, user)
    middlewares/    # Express middlewares (auth)
    models/         # Mongoose models (user, transaction)
    routes/         # API route definitions
    server.js       # Backend entry point
    package.json    # Backend dependencies and scripts
    ...
  README.md         # Project documentation
  package.json      # (Optional) Root-level config
  ...
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js & npm
- MongoDB

### Setup

#### 1. Clone the repository

```sh
git clone https://github.com/anushka-1205/imagify.git
cd imagify
```

#### 2. Setup the Backend

```sh
cd server
cp .env.example .env
# Edit .env with your MongoDB URL and other secrets
npm install
npm start
```

#### 3. Setup the Frontend

```sh
cd ../client
cp .env.example .env  # If applicable
npm install
npm run dev
```

#### 4. Open in Browser

Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

---

## 🔐 Environment Variables

- Backend: See `server/.env.example` for required variables.
- Frontend: See `client/.env.example` for frontend environment variables.

---
Author: Anushka Srivastava


