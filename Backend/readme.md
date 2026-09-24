# Backend API

Backend REST API for the **Doctor Appointment & Healthcare Management System**.

The Backend serves the three frontend applications (Admin Dashboard, Doctor Dashboard, and User Platform) and handles authentication, authorization, data storage, and image uploads.

---

## Overview

The Backend is responsible for:

* Authentication and authorization using JWT
* Role-based access for Admin, Doctor, and User
* CRUD operations for doctors, services, specialties, users, and appointments
* Doctor profile image upload and management using ImageKit
* Data storage and schema management using MongoDB and Mongoose
* Error handling and request validation

---

## System Architecture

```text
Admin Dashboard    Doctor Dashboard    User Platform
       │                  │                  │
       └──────────────────┼──────────────────┘
                          │
                      REST API
                          │
                  Node.js / Express.js
                          │
                ┌─────────┴─────────┐
                │                   │
             MongoDB             ImageKit
```

---

## Features

### Authentication & Authorization

* User registration and login
* Admin login
* Doctor login
* JWT token generation and verification
* Role-based authorization
* Protected routes

### Data Management

CRUD operations are implemented for:

* Doctors
* Services
* Specialties
* Users
* Appointments

### Image Management

Doctor profile images are uploaded through the backend to ImageKit, and the returned image URL is stored in MongoDB.

---

## Technology Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Tokens (JWT)
* ImageKit
* REST APIs

---

## Project Structure

```text
Backend/
│
├── controller/
├── model/
├── routes/
├── middleware/
├── uploads/
├── server.js
├── package.json
└── .env
```

| Folder / File | Purpose |
| --- | --- |
| `controller/` | Business logic for each feature |
| `model/` | Mongoose schemas and models |
| `routes/` | Express route definitions |
| `middleware/` | Authentication, authorization, and upload middleware |
| `uploads/` | Temporary storage for uploaded files |
| `server.js` | Application entry point |
| `.env` | Environment variables (never commit this file) |

---

## Database Models

Main entities:

```text
Users
Doctors
Services
Specialties
Appointments
```

---

## Installation

Navigate to the Backend folder:

```bash
cd Backend
```

Install dependencies:

```bash
npm install
```

---

## Environment Variables

Create a `.env` file inside the `Backend` folder:

```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url
```

| Variable | Description |
| --- | --- |
| `PORT` | Port the server runs on |
| `MONGODB_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret key used to sign JWT tokens |
| `IMAGEKIT_PUBLIC_KEY` | ImageKit public key |
| `IMAGEKIT_PRIVATE_KEY` | ImageKit private key |
| `IMAGEKIT_URL_ENDPOINT` | ImageKit URL endpoint |

> **Important:** Never upload your `.env` file to GitHub. Add it to `.gitignore`:

```text
.env
node_modules
```

---

## Running the Server

```bash
npm run server
```

The API will be available at:

```text
http://localhost:4000
```

---

## Request Flow

```text
Frontend
   ↓
HTTP Request
   ↓
Express Route
   ↓
Middleware (Auth / Role Check)
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

## Authentication Flow

```text
User / Doctor / Admin Login
          ↓
Backend validates credentials
          ↓
JWT token generated
          ↓
Token sent to client
          ↓
Client sends token with protected requests
          ↓
Middleware verifies token
          ↓
Access granted / denied
```

---

## Image Upload Flow

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

## Error Handling

The API handles common errors such as:

* Invalid login credentials
* Missing required fields
* Invalid or expired JWT token
* Unauthorized requests
* Invalid appointment data
* Database errors
* Image upload errors

---

## Security

* JWT authentication
* Protected API routes
* Role-based access control
* Password authentication
* Sensitive configuration stored in environment variables

---

## Author

**Omar Rehan**

MERN Stack Developer

GitHub: `https://github.com/omar-rehann`