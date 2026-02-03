
# 💬 Real-Time Chat Application

A full-stack **real-time chat application** built using **MERN stack** and **WebSockets**, enabling instant messaging with authentication, real-time updates, and a modern UI.

---

## 🚀 Features

* 🔐 **User Authentication** (JWT-based)
* 💬 **Real-time messaging** using WebSockets
* 🟢 **Online / Offline status**
* 📡 **Instant message delivery**
* 👤 **User profiles**
* 🔔 **Live updates without page refresh**
* 🧾 **Persistent chat history**
* 🎨 **Responsive UI**

---

## 🛠️ Tech Stack

### Frontend

* ⚛️ **React.js**
* 🎨 **Tailwind CSS**
* 🔄 **Axios**
* 🧠 **State Management (Context / Store)**

### Backend

* 🟢 **Node.js**
* 🚂 **Express.js**
* 🔌 **Socket.IO**
* 🔐 **JWT Authentication**

### Database

* 🍃 **MongoDB**
* 🧩 **Mongoose ODM**

---

## 🧩 Architecture Overview

```text
Client (React)
   |
   |  REST APIs (HTTP)
   |  WebSockets (Socket.IO)
   ↓
Server (Node + Express)
   |
   ↓
Database (MongoDB)
```

* REST APIs handle **authentication & user data**
* WebSockets handle **real-time messaging**
* JWT secures both **HTTP & Socket connections**

---



## 🔄 Real-Time Flow (Socket.IO)

1. User connects after authentication
2. Socket connection is validated using JWT
3. Messages are emitted via WebSocket events
4. Server broadcasts messages to active users
5. UI updates instantly without refresh

---

## 🔐 Authentication Flow

* User logs in / registers
* JWT token is generated
* Token is stored securely (HTTP-only cookie)
* Token is verified for:

  * API requests
  * Socket connections

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
│   └── server.js
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── store/
│   └── main.jsx
│
└── README.md
```

---

## 🧪 Future Enhancements

* ✅ Group chats
* 📎 File & image sharing
* 🔔 Push notifications
* ✍️ Message read receipts
* 🔍 Search messages
* 🛡️ End-to-end encryption

---

## 📸 Screenshots

> *(Add screenshots here once available)*

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork the repository and submit a pull request.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Yash Pratap Singh**

* GitHub: [@YashP1830](https://github.com/YashP1830)

---

## ⭐ Show Your Support

If you like this project, don’t forget to **star ⭐ the repository**!

---

### 🔥 Pro tip (resume line you can use)

> *Built a full-stack real-time chat application using MERN stack and Socket.IO with JWT-secured authentication and live messaging.*

---

If you want, I can:

* customize this README **exactly to your code**
* add **badges (build, license, tech stack)**
* make it **ATS / recruiter optimized**
* write a **project description for resume**

Just tell me 😄
