# Doctor Dashboard

Doctor Dashboard for the **Doctor Appointment & Healthcare Management System**.

The Doctor Dashboard provides doctors with a dedicated platform to manage their account and monitor their appointments.

---

## Overview

Each doctor has an individual account with their own:

* Email
* Password
* Name
* Address
* Specialty
* Experience
* Degree / College
* Profile Image
* About

Doctors can access the dashboard using their own authentication credentials.

---

## Doctor Features

### Authentication

Doctor can:

* Login
* Access the Doctor Dashboard
* Logout

Authentication is implemented using JWT.

---

### Doctor Profile

Doctors can view their professional information including:

* Name
* Email
* Address
* Specialty
* Experience
* Degree
* Profile Image
* About

---

### Doctors

Doctors can view other doctors registered on the platform.

They can access information such as:

* Doctor name
* Specialty
* Experience
* Address
* Degree
* About
* Profile image

---

### Services

Doctors can view the medical services available on the platform.

Examples:

* Consultation
* Medical Examination
* Dental Services
* General Checkup

---

### Specialties

Doctors can view available medical specialties.

Examples:

```text
Dentistry
ENT
Internal Medicine
Cardiology
Pediatrics
Dermatology
```

---

### Appointments

The Doctor Dashboard provides access to the doctor's appointments.

Doctors can:

* View appointments
* View daily appointments
* Review booking information
* Follow their appointment records

---

## Doctor Workflow

```text
Doctor Login
     ↓
Doctor Dashboard
     ↓
 ┌───────────────┐
 │               │
Profile       Doctors
 │               │
Services     Specialties
 │               │
 └───────┬───────┘
         ↓
   Daily Appointments
```

---

## Technology Stack

* React.js
* Next.js
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
Doctor/
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

Navigate to the Doctor application:

```bash
cd Doctor
```

Install dependencies:

```bash
npm install
```

Run the application:

```bash
npm run dev
```

---

## API Communication

The Doctor Dashboard communicates with the backend through REST APIs.

The main API flow is:

```text
Doctor Dashboard
       ↓
REST API
       ↓
Express.js
       ↓
Controller
       ↓
MongoDB
       ↓
Response
```

---

## Authentication Flow

```text
Doctor
  ↓
Login
  ↓
Backend Validation
  ↓
JWT Token
  ↓
Protected Requests
  ↓
Doctor Dashboard
```

---

## Responsive Design

The Doctor Dashboard is designed to work on:

* Desktop
* Laptop
* Tablet
* Mobile

---

## Security

The system uses JWT authentication to protect doctor-specific functionality.

Doctors can only access functionality allowed for their role.

---

## Author

**Omar Rehan**

MERN Stack Developer

GitHub: `https://github.com/omar-rehann`