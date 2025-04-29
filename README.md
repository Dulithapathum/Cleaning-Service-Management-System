# 🧼 Cleaning Service Management System

![screencapture-cleaning-service-management-system-git-dev-dulithas-projects-vercel-app-2025-04-29-18_25_50](https://github.com/user-attachments/assets/a227b486-c0d3-4ca0-8b30-0731b81b0e9a)


A full-stack web application for managing cleaning service bookings. It includes user authentication, a customer dashboard to manage bookings (CRUD), and an admin panel (optional extension). Users can sign up, log in, and book services like deep cleaning, carpet cleaning, and more.


## 🚀 Features

### User Functionality
- 🔐 User Registration and Login (JWT Authentication)
- 📅 Book a Cleaning Service
- 📋 View Your Bookings
- ✏️ Edit or Cancel Bookings

### Admin Functionality (Planned)
- 🧑‍💼 View all bookings and users
- ✨ Manage service types
- 📊 Dashboard overview

## 🛠️ Tech Stack

| Layer     | Technology               |
|-----------|---------------------------|
| Frontend  | React.js, Tailwind CSS     |
| Backend   | Node.js, Express.js       |
| Database  | MongoDB    |
| Auth      | JSON Web Token (JWT)      |
| Hosting   | Vercel (Frontend)|

---

## 🚀 UI

![screencapture-cleaning-service-management-system-git-dev-dulithas-projects-vercel-app-signin-2025-04-29-18_26_03](https://github.com/user-attachments/assets/f8fa3198-e19e-4f7b-b1ef-ebeb6e8c8118)
![screencapture-cleaning-service-management-system-git-dev-dulithas-projects-vercel-app-signup-2025-04-29-18_26_15](https://github.com/user-attachments/assets/a6d1d058-b824-45fa-a2d5-c9f6afb2bbce)
![screencapture-localhost-5173-booking-2025-04-29-18_28_00](https://github.com/user-attachments/assets/26d90444-50cf-44b6-947a-341f9a581a58)
![screencapture-localhost-5173-dashboard-2025-04-29-18_28_12](https://github.com/user-attachments/assets/cf727c1d-871e-4609-b37a-414baf9e3ae5)


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
Deployed on Vercel 🔗 [https://cleaning-service-management-system-git-dev-dulithas-projects.vercel.app/](https://cleaning-service-management-system-git-dev-dulithas-projects.vercel.app/)
## 🧑‍💻 Author
* **Dulitha Pathum** – dulithapathum236@gmail.com
* **GitHub** - [github.com/Dulithapathum](https://github.com/Dulithapathum)

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
