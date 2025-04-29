# 🧼 Cleaning Service Management System

A full-stack web application for managing cleaning service bookings. It includes user authentication, a customer dashboard to manage bookings (CRUD), and an admin panel (optional extension). Users can sign up, log in, and book services like deep cleaning, carpet cleaning, and more.

## 🚀 Features

### User Functionality
- 🔐 User Registration and Login (JWT Authentication)
- 📅 Book a Cleaning Service
- 📋 View Your Bookings
- ✏️ Edit or Cancel Bookings

### Admin Functionality (Optional)
- 🧑‍💼 View all bookings and users
- ✨ Manage service types

## 🛠️ Tech Stack

| Layer     | Technology               |
|-----------|---------------------------|
| Frontend  | React.js, Tailwind CSS     |
| Backend   | Node.js, Express.js       |
| Database  | MongoDB    |
| Auth      | JSON Web Token (JWT)      |
| Hosting   | Vercel (Frontend)|

---


## ⚙️ Getting Started

### Prerequisites

- Node.js
- MongoDB (local or cloud)
- npm or yarn

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Run the server:

```bash
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

## 📬 API Endpoints

### Auth
* `POST /api/users/signup` – Register a new user
* `POST /api/users/login` – Log in user and receive JWT

### Bookings (Protected)
* `GET /api/bookings` – Get all bookings of the logged-in user
* `GET /api/bookings/:id` – Get booking by ID
* `POST /api/bookings` – Add a new booking
* `PUT /api/bookings/:id` – Update booking
* `DELETE /api/bookings/:id` – Delete booking

## 🧪 Validation & Security
* Backend validation for required fields
* Passwords are hashed using bcrypt
* Protected routes using JWT middleware

## 🖥️ Deployment

### Frontend
Deployed on Vercel 🔗 [https://your-frontend.vercel.app](https://cleaning-service-management-system.vercel.app/)

### Backend
Deployed on Render/Heroku 🔗 https://your-backend.onrender.com

## 🧑‍💻 Author
**Dulitha Pathum** – dulithapathum236@gmail.com
GitHub: [github.com/yourusername](https://github.com/Dulithapathum)

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
