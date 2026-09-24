# Admin Dashboard

Admin Dashboard for the **Doctor Appointment & Healthcare Management System**.

The Admin Dashboard is responsible for managing the main entities and operations of the healthcare platform.

---

## Overview

The Admin Panel provides administrators with a centralized dashboard to manage:

* Doctors
* Services
* Specialties
* Users
* Appointments

---

## Admin Features

### Authentication

Admin can:

* Login
* Access protected dashboard pages
* Logout

Authentication is implemented using JWT.

---

### Doctor Management

Admin can manage doctors through complete CRUD operations.

#### Add Doctor

Admin can add a new doctor with information such as:

* Name
* Email
* Password
* Profile Image
* Address
* About
* Specialty
* Experience
* Degree / College
* Other doctor information

#### View Doctors

Admin can view all registered doctors.

#### Edit Doctor

Admin can update doctor information.

#### Delete Doctor

Admin can remove doctors from the system.

---

### Services Management

Admin can manage medical services.

Available operations:

```text
Add Service
View Services
Edit Service
Delete Service
```

Examples of services may include:

* Medical Consultation
* Dental Services
* General Checkup
* Laboratory Services

---

### Specialties Management

Admin can manage medical specialties.

Examples:

* Dentistry
* ENT
* Internal Medicine
* Cardiology
* Pediatrics
* Dermatology

Operations:

```text
Add Specialty
View Specialties
Edit Specialty
Delete Specialty
```

---

### User Management

Admin can view registered users and their information.

Users are able to create accounts through the main platform.

Admin can review users and their related booking information.

---

### Appointment Management

Admin can view and manage appointment records.

Appointment information can include:

* User
* Doctor
* Date
* Time
* Appointment information
* Booking status

---

## CRUD Architecture

```text
Admin
  ↓
React / Next.js
  ↓
REST API
  ↓
Express.js
  ↓
Controller
  ↓
Mongoose
  ↓
MongoDB
```

---

## Technology Stack

* Next.js
* React.js
* Tailwind CSS
* React Bootstrap
* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* ImageKit
* SweetAlert
* Font Awesome

---

## Project Structure

```text
Admin/
│
├── app/
├── components/
├── public/
├── package.json
├── package-lock.json
└── README.md
```

---

## Installation

Clone the project:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate to Admin:

```bash
cd Admin
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

---

## API Integration

The Admin Dashboard communicates with the backend using REST APIs.

Example operations:

```text
POST   → Add Doctor
GET    → Get Doctors
PUT    → Update Doctor
DELETE → Delete Doctor
```

The same architecture is used for:

* Services
* Specialties
* Users
* Appointments

---

## UI

The Admin Dashboard uses:

* Tailwind CSS
* React Bootstrap
* Responsive components
* SweetAlert notifications

The interface is designed to be responsive on:

* Desktop
* Tablet
* Mobile

---

## Admin Workflow

```text
Admin Login
     ↓
Dashboard
     ↓
 ┌───────────────┐
 │               │
Doctors       Services
 │               │
Specialties    Users
 │               │
 └───────┬───────┘
         ↓
    Appointments
```

---

## Security

Admin routes are protected using JWT authentication and authorization.

Sensitive configuration is stored in environment variables.

---

## Author

**Omar Rehan**

MERN Stack Developer

GitHub: `https://github.com/omar-rehann`