# Doctor Appointment & Healthcare Management System

A full-stack Doctor Appointment and Healthcare Management System built to manage doctors, patients, medical services, specialties, and appointments through three separate platforms:

* Admin Dashboard
* Doctor Dashboard
* User Platform

The system provides role-based access, authentication, doctor management, medical services, specialties, appointments, and user management.

---

## Project Overview

The project is designed as a complete healthcare appointment platform where:

* **Admins** manage doctors, services, specialties, users, and appointments.
* **Doctors** have their own accounts and can manage their information and appointments.
* **Users** can create accounts, browse doctors and specialties, view services, and book appointments.

The application follows a full-stack architecture with a separate frontend and backend.

---

## System Architecture

```text
                    Doctor Appointment System
                              │
              ┌───────────────┼───────────────┐
              │               │               │
           Admin            Doctor           User
              │               │               │
              └───────────────┼───────────────┘
                              │
                         REST API
                              │
                         Node.js
                         Express.js
                              │
                    ┌─────────┴─────────┐
                    │                   │
                 MongoDB             ImageKit
```

---

# Main Features

## Authentication & Authorization

* User registration
* User login
* Admin authentication
* Doctor authentication
* JWT authentication
* Role-based authorization
* Protected routes
* Logout functionality

---

# Admin Features

The Admin Dashboard allows administrators to manage the entire healthcare platform.

### Doctor Management

Admin can:

* Add doctors
* View doctors
* Edit doctor information
* Delete doctors
* Upload doctor profile images
* Assign specialties
* Add experience
* Add degree/college
* Add address
* Manage doctor credentials

### Services Management

Admin can:

* Add medical services
* View services
* Edit services
* Delete services

### Specialties Management

Admin can manage medical specialties such as:

* Dentistry
* Internal Medicine
* ENT
* Cardiology
* Pediatrics
* Dermatology
* And other medical specialties

Admin can:

* Add specialties
* View specialties
* Edit specialties
* Delete specialties

### User Management

Admin can:

* View registered users
* Manage user accounts
* Review users associated with appointments

### Appointment Management

Admin can:

* View appointments
* Review appointment information
* Manage appointment records

---

# Doctor Features

Doctors have their own dashboard and authentication system.

Doctors can:

* Login to their account
* View their profile
* View other doctors
* View medical specialties
* View available services
* View appointments
* View daily appointments
* Manage available information according to their permissions
* Logout

---

# User Features

Users can create their own accounts and use the healthcare platform.

Users can:

* Create an account
* Login
* Logout
* View doctors
* View doctor information
* View medical specialties
* View medical services
* Book appointments
* View appointments
* Manage available appointment actions
* Access the Contact page

---

# CRUD Operations

The system implements complete CRUD operations.

```text
Create
Read
Update
Delete
```

CRUD operations are used for:

* Doctors
* Services
* Specialties
* Users
* Appointments

---

# Appointment System

Users can select a doctor and book an appointment.

The appointment system allows users to:

1. Browse doctors
2. View doctor information
3. Select a doctor
4. Book an appointment
5. View their appointments

Doctors can:

* View their appointments
* Check daily appointments
* Follow their booking records

Admins can:

* View and manage appointment records

---

# Technology Stack

## Frontend

* React.js
* Next.js
* Tailwind CSS
* React Bootstrap
* SweetAlert
* Font Awesome

## Backend

* Node.js
* Express.js
* REST APIs
* JWT

## Database

* MongoDB
* Mongoose

## External Services

* ImageKit

---

# Authentication

Authentication is implemented using JSON Web Tokens (JWT).

The authentication flow is:

```text
User Login
    ↓
Backend validates credentials
    ↓
JWT Token Generated
    ↓
Token sent to client
    ↓
Client uses token for protected requests
    ↓
Backend verifies token
    ↓
Access Granted / Denied
```

---

# Database

MongoDB is used as the main database.

Mongoose is used to define schemas and communicate with MongoDB.

Main entities include:

```text
Users
Doctors
Services
Specialties
Appointments
```

---

# Image Management

Doctor profile images are uploaded and managed using ImageKit.

The image flow is:

```text
Frontend
   ↓
Image Upload
   ↓
Backend
   ↓
ImageKit
   ↓
Image URL
   ↓
MongoDB
```

---

# Project Structure

```text
Doctor-Appointment/
│
├── Backend/
│   ├── controller/
│   ├── model/
│   ├── routes/
│   ├── middleware/
│   ├── uploads/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── Admin/
│   ├── app/
│   ├── components/
│   ├── public/
│   ├── package.json
│   └── README.md
│
├── Doctor/
│   ├── app/
│   ├── components/
│   ├── public/
│   ├── package.json
│   └── README.md
│
├── User/
│   ├── app/
│   ├── components/
│   ├── public/
│   ├── package.json
│   └── README.md
│
└── README.md
```

---

# Installation

## Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd Doctor-Appointment
```

---

# Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file:

```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url
```

Start the backend:

```bash
npm run server
```

---

# Admin Setup

```bash
cd Admin
npm install
npm run dev
```

---

# Doctor Setup

```bash
cd Doctor
npm install
npm run dev
```

---

# User Setup

```bash
cd User
npm install
npm run dev
```

---

# Environment Variables

Never upload your `.env` file to GitHub.

Add it to `.gitignore`:

```text
.env
node_modules
.next
```

---

# API Communication

The frontend applications communicate with the backend through REST APIs.

Example:

```text
Frontend
   ↓
HTTP Request
   ↓
Express Route
   ↓
Controller
   ↓
Mongoose
   ↓
MongoDB
   ↓
Response
   ↓
Frontend
```

---

# Error Handling

The application handles common errors such as:

* Invalid login credentials
* Missing required fields
* Invalid JWT token
* Unauthorized requests
* Invalid appointment data
* Database errors
* API errors
* Image upload errors

SweetAlert is used on the frontend to provide user-friendly notifications.

---

# Responsive Design

The interfaces are designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile

Technologies used for responsive UI include:

* Tailwind CSS
* React Bootstrap
* Responsive layouts

---

# Security

The project uses:

* JWT Authentication
* Protected API routes
* Password authentication
* Role-based access
* Environment variables for sensitive configuration

---

# Future Improvements

Possible future improvements include:

* Online payment integration
* Email notifications
* Appointment reminders
* Doctor availability scheduling
* Advanced search and filtering
* Patient medical records
* Reviews and ratings
* Admin analytics dashboard
* Real-time notifications
* Cloud deployment optimization

---

# Author

**Omar Rehan**

Frontend / MERN Stack Developer

GitHub: `https://github.com/omar-rehann`

Portfolio: `https://omar-rehann.github.io/Omar-Rehan/`