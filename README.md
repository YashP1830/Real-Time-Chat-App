
# 💬 Real-Time Chat Application

A **full-stack real-time chat application** built with the **MERN stack**, featuring **real-time messaging**, **secure authentication**, **email notifications**, **bot protection**, and a **modern UI**.

This project focuses on **production-ready architecture**, scalability, and security — not just basic chatting.

---

## 🚀 Key Features

* 🔐 **JWT Authentication** (HTTP-only cookies)
* 💬 **Real-time messaging** using **Socket.IO**
* 🟢 **Online / Offline user status**
* 📡 **Instant message delivery**
* 🧠 **Global state management with Zustand**
* ✉️ **Email notifications using Resend**
* 🛡️ **Bot & abuse protection with Arcjet**
* 🎨 **Modern UI using Tailwind CSS + DaisyUI**
* 🧾 **Persistent chat history (MongoDB)**
* 🔄 **Protected routes & middleware**
* 📱 **Fully responsive design**

---

## 🛠️ Tech Stack

### Frontend

* ⚛️ **React.js**
* 🎨 **Tailwind CSS**
* 🌼 **DaisyUI**
* 🧠 **Zustand** (state management)
* 🔄 **Axios**

### Backend

* 🟢 **Node.js**
* 🚂 **Express.js**
* 🔌 **Socket.IO**
* 🔐 **JWT Authentication**
* 🛡️ **Arcjet** (bot & abuse protection)
* ✉️ **Resend** (transactional emails)

### Database

* 🍃 **MongoDB**
* 🧩 **Mongoose**

---

## 🧩 High-Level Architecture

```text
Frontend (React + Zustand + DaisyUI)
        |
        | REST APIs + WebSockets
        |
Backend (Node + Express + Socket.IO)
        |
        | Mongoose ODM
        |
Database (MongoDB)
```

* **REST APIs** → authentication, users, chats
* **WebSockets** → real-time messaging
* **Zustand** → global UI & auth state
* **Arcjet** → protects APIs from bots & abuse
* **Resend** → email verification / notifications

---

## 🔐 Authentication & Security

* JWT stored in **HTTP-only cookies**
* Auth middleware for protected routes
* Socket connections verified using JWT
* **Arcjet** prevents:

  * Bot traffic
  * Abuse & spam
  * Suspicious request patterns

---

## ✉️ Email Handling (Resend)

Emails are sent using **Resend** for:

* Account-related notifications
* Future support for:

  * Email verification
  * Password reset
  * Alerts

```js
import { Resend } from "resend";
```

---

## 🧠 State Management (Zustand)

* Centralized global store
* Handles:

  * Auth state
  * User data
  * Chat selection
  * UI preferences

Benefits:

* Minimal boilerplate
* Faster than Redux
* Clean and scalable

---

## 🎨 UI & Styling

* **Tailwind CSS** for utility-first styling
* **DaisyUI** for:

  * Prebuilt components
  * Consistent themes
  * Rapid UI development

Supports:

* Responsive layouts
* Clean chat UI
* Modern design system

---

## 📂 Project Structure

```text
Real-Time-Chat-App/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── sockets/
│   ├── utils/
│   └── server.js
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── store/        // Zustand stores
│   ├── services/
│   └── main.jsx
│
└── README.md
```

---


## 🔄 Real-Time Messaging Flow

1. User logs in → JWT issued
2. Client establishes Socket.IO connection
3. JWT is verified on socket handshake
4. Messages are emitted & broadcasted
5. UI updates instantly without refresh

---

## 🧪 Future Enhancements

* 📎 File & image sharing
* 👥 Group chats
* ✍️ Read receipts
* 🔔 Push notifications
* 🔍 Message search
* 🌙 Dark / Light mode toggle
* 🔐 End-to-end encryption

---

## 🧠 Why This Project Matters

This project demonstrates:

* Real-time system design
* Secure authentication practices
* Modern state management
* API protection strategies
* Clean, scalable full-stack architecture

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Yash Pratap Singh**
GitHub: [YashP1830](https://github.com/YashP1830)

---

