# User Platform

User-facing application for the **Doctor Appointment & Healthcare Management System**.

The User Platform allows patients/users to create accounts, discover doctors and medical services, and book appointments.

---

## Overview

Users can interact with the healthcare platform without accessing the Admin or Doctor dashboards.

The main features include:

* Registration
* Login
* Doctor browsing
* Specialty browsing
* Services
* Doctor details
* Appointment booking
* Appointment management
* Contact page
* Logout

---

## Authentication

Users can:

* Create an account
* Login
* Logout

JWT is used for authentication and protected requests.

---

## User Registration

New users can create an account by providing the required information.

After successful registration, the user can login and access the platform.

---

## Doctors

Users can browse available doctors.

They can view information such as:

* Doctor name
* Specialty
* Experience
* Address
* Degree
* About
* Profile image

---

## Specialties

Users can browse medical specialties.

Examples:

* Dentistry
* ENT
* Internal Medicine
* Cardiology
* Pediatrics
* Dermatology

Users can use specialties to explore doctors in specific medical fields.

---

## Services

Users can view the available medical services.

The services section provides information about the healthcare services offered through the platform.

---

## Doctor Booking

One of the main features of the platform is appointment booking.

The booking process:

```text
User
 ↓
View Doctors
 ↓
Select Doctor
 ↓
View Doctor Information
 ↓
Choose Appointment
 ↓
Book Appointment
 ↓
Appointment Created
```

---

## Appointments

Users can view their appointments after booking.

The appointment section allows users to manage available appointment actions.

Depending on the implemented permissions, users can:

* View appointments
* Edit appointment information
* Delete/cancel appointments
* Review booking details

---

## Contact

The platform includes a Contact page where users can access the available contact information and communicate with the healthcare service.

---

## Logout

Users can securely logout from their account.

After logout, protected user functionality is no longer accessible until the user authenticates again.

---

## User Workflow

```text
Register / Login
       ↓
     Home
       ↓
 ┌─────┼──────────────┐
 │     │              │
Doctors Services  Specialties
 │
Doctor Details
 │
Book Appointment
 │
My Appointments
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
User/
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

Navigate to the User application:

```bash
cd User
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## API Communication

The User Platform communicates with the backend using REST APIs.

```text
User Interface
      ↓
HTTP Request
      ↓
Express API
      ↓
Controller
      ↓
Mongoose
      ↓
MongoDB
      ↓
API Response
      ↓
User Interface
```

---

## Authentication Flow

```text
Register
   ↓
Login
   ↓
Credentials Validation
   ↓
JWT Token
   ↓
Authenticated User
   ↓
Protected Actions
```

---

## Responsive Design

The application is responsive and designed for:

* Desktop
* Laptop
* Tablet
* Mobile

---

## User Experience

The interface focuses on:

* Simple navigation
* Clear doctor information
* Easy appointment booking
* Responsive layouts
* User-friendly notifications
* Clear feedback for successful and failed operations

SweetAlert is used for notifications and confirmations.

---

## Security

The platform uses JWT authentication to protect user-specific functionality.

Sensitive environment variables are stored outside the source code.

---

## Author

**Omar Rehan**

MERN Stack Developer

GitHub: `https://github.com/omar-rehann`