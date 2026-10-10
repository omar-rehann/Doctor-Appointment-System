<!-- Animated Header -->
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0F766E,50:0891B2,100:38BDF8&height=220&section=header&text=Doctor%20Appointment%20System&fontSize=42&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Admin%20%7C%20Doctor%20%7C%20User%20Platforms&descAlignY=58&descSize=18" width="100%" />
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&pause=1000&color=0891B2&center=true&vCenter=true&width=550&lines=Full-Stack+Healthcare+Management;Three+Platforms%2C+One+Backend;JWT+Auth+%7C+Role-Based+Access;Book+Appointments+Online" alt="Typing animation" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
</p>

<p align="center">
  <a href="https://doctor-appointment-system-p1zy.vercel.app/"><img src="https://img.shields.io/badge/Live_Demo-Visit_Project-0891B2?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" /></a>
  <a href="https://github.com/omar-rehann/Doctor-Appointment-System"><img src="https://img.shields.io/badge/Source_Code-GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="Source Code" /></a>
</p>

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-screenshots">Screenshots</a> •
  <a href="#%EF%B8%8F-tech-stack">Tech Stack</a> •
  <a href="#%EF%B8%8F-architecture">Architecture</a> •
  <a href="#%EF%B8%8F-installation">Installation</a>
</p>

---

## 📖 Overview

A full-stack **Doctor Appointment and Healthcare Management System** for managing doctors, patients, medical services, specialties, and appointments through three separate platforms.

| 👨‍💼 Admin | 🩺 Doctor | 👤 User |
| --- | --- | --- |
| Manages doctors, services, specialties, users, and appointments | Has their own account to manage their information and appointments | Creates an account, browses doctors, and books appointments |

The app has a separate frontend (one app per role) and a shared REST backend.

---

## 🚀 Features

### 🔐 Authentication & Authorization

- User registration and login
- Separate Admin and Doctor authentication
- JWT authentication
- Role-based authorization
- Protected routes
- Logout

### 👥 Features by Role

| 👨‍💼 Admin | 🩺 Doctor | 👤 User |
| --- | --- | --- |
| Add, view, edit, delete **doctors** | Log in to own dashboard | Register, log in, log out |
| Upload doctor images, assign specialty | View own profile | Browse doctors and their info |
| Add experience, degree/college, address | View other doctors | View specialties and services |
| Manage doctor credentials | View specialties and services | **Book appointments** |
| Add, view, edit, delete **services** | View appointments | View own appointments |
| Add, view, edit, delete **specialties** | View daily appointments | Manage available appointment actions |
| View and manage **users** | Manage info within permissions | Contact page |
| View and manage **appointments** | Log out | |

### 🏥 Specialties

> Dentistry • Internal Medicine • ENT • Cardiology • Pediatrics • Dermatology • and more

### 📅 Appointment Flow

```mermaid
flowchart LR
  A[Browse Doctors] --> B[View Doctor Info] --> C[Select Doctor] --> D[Book Appointment] --> E[View My Appointments]
```

- **Doctors** can check their appointments and daily bookings.
- **Admins** can view and manage all appointment records.

### 🔁 CRUD Operations

Full Create / Read / Update / Delete for **Doctors, Services, Specialties, Users, and Appointments**.

---

## 📸 Screenshots

> Put your images inside a `screenshots/` folder with these names (or change the paths below).

### 👤 User Platform

| Home | Doctors | Booking |
| :---: | :---: | :---: |
| <img src="./screenshots/user-home.png" width="280" /> | <img src="./screenshots/user-doctors.png" width="280" /> | <img src="./screenshots/user-booking.png" width="280" /> |

### 👨‍💼 Admin Dashboard

| Dashboard | Doctors | Appointments |
| :---: | :---: | :---: |
| <img src="./screenshots/admin-dashboard.png" width="280" /> | <img src="./screenshots/admin-doctors.png" width="280" /> | <img src="./screenshots/admin-appointments.png" width="280" /> |

### 🩺 Doctor Dashboard

| Dashboard | Appointments |
| :---: | :---: |
| <img src="./screenshots/doctor-dashboard.png" width="400" /> | <img src="./screenshots/doctor-appointments.png" width="400" /> |

---

## 🛠️ Tech Stack

| Layer | Technologies |
| --- | --- |
| **Frontend** | <img src="https://skillicons.dev/icons?i=react,nextjs,tailwind,bootstrap" alt="Frontend" /><br/><sub>React Bootstrap • SweetAlert • Font Awesome</sub> |
| **Backend** | <img src="https://skillicons.dev/icons?i=nodejs,express" alt="Backend" /><br/><sub>REST APIs • JWT</sub> |
| **Database** | <img src="https://skillicons.dev/icons?i=mongodb" alt="Database" /><br/><sub>Mongoose</sub> |
| **Services** | <img src="https://img.shields.io/badge/ImageKit-7B3FE4?style=for-the-badge&logoColor=white" alt="ImageKit" /> |

---

## 🏗️ Architecture

```mermaid
flowchart TB
  A[Admin App] --> API
  B[Doctor App] --> API
  C[User App] --> API
  API[REST API: Node.js + Express] --> DB[(MongoDB)]
  API --> IK[ImageKit]
```

### 🔑 Authentication Flow

```mermaid
sequenceDiagram
  participant C as Client
  participant S as Backend
  C->>S: Login (credentials)
  S->>S: Validate credentials
  S-->>C: JWT token
  C->>S: Protected request + token
  S->>S: Verify token
  S-->>C: Access granted / denied
```

### 🖼️ Image Upload Flow

```mermaid
flowchart LR
  A[Frontend] --> B[Image Upload] --> C[Backend] --> D[ImageKit] --> E[Image URL] --> F[(MongoDB)]
```

### 🗄️ Main Entities

`Users` • `Doctors` • `Services` • `Specialties` • `Appointments`

---

## 📁 Project Structure

<details>
<summary><b>Show structure</b></summary>

```text
Doctor-Appointment-System/
├── Backend/
│   ├── controller/
│   ├── model/
│   ├── routes/
│   ├── middleware/
│   ├── uploads/
│   ├── server.js
│   └── package.json
├── Admin/
│   ├── app/
│   ├── components/
│   └── public/
├── Doctor/
│   ├── app/
│   ├── components/
│   └── public/
├── User/
│   ├── app/
│   ├── components/
│   └── public/
└── README.md
```

</details>

---

## ⚙️ Installation

**1. Clone the repository**

```bash
git clone https://github.com/omar-rehann/Doctor-Appointment-System.git
cd Doctor-Appointment-System
```

**2. Backend**

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

```bash
npm run server
```

**3. Frontend apps** (each in its own terminal)

| App | Commands |
| --- | --- |
| Admin | `cd Admin && npm install && npm run dev` |
| Doctor | `cd Doctor && npm install && npm run dev` |
| User | `cd User && npm install && npm run dev` |

> ⚠️ **Never upload your `.env` file to GitHub.** Add this to `.gitignore`:
>
> ```text
> .env
> node_modules
> .next
> ```

---

## ⚠️ Error Handling

Handled cases: invalid login credentials, missing required fields, invalid JWT, unauthorized requests, invalid appointment data, database errors, API errors, and image upload errors.

**SweetAlert** is used on the frontend for user-friendly notifications.

---

## 📱 Responsive Design

Works across desktop, laptop, tablet, and mobile using **Tailwind CSS**, **React Bootstrap**, and responsive layouts.

---

## 🔒 Security

- JWT authentication
- Protected API routes
- Role-based access
- Environment variables for sensitive configuration

---

## 🚧 Future Improvements

- [ ] 💳 Online payment integration
- [ ] 📧 Email notifications
- [ ] ⏰ Appointment reminders
- [ ] 🗓️ Doctor availability scheduling
- [ ] 🔎 Advanced search and filtering
- [ ] 📋 Patient medical records
- [ ] ⭐ Reviews and ratings
- [ ] 📊 Admin analytics dashboard
- [ ] 🔔 Real-time notifications
- [ ] ☁️ Cloud deployment optimization

---

## 👨‍💻 Author

<p align="center">
  <b>Omar Rehan</b><br/>
  Full-Stack Developer
</p>

<p align="center">
  <a href="https://github.com/omar-rehann"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
  <a href="https://www.linkedin.com/in/omar-rehann"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="https://omar-rehann.github.io/Omar-Rehann/"><img src="https://img.shields.io/badge/Portfolio-0891B2?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Portfolio" /></a>
</p>

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0F766E,50:0891B2,100:38BDF8&height=100&section=footer" width="100%" />
</p>