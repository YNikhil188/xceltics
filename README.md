
# 📊 Xcelitics – Smarter Data, Smarter Decisions

> **Last Updated:** July 25, 2025

**Xcelitics** is an advanced full-stack web application designed to transform raw Excel and CSV files into actionable insights. By combining **AI-powered analytics**, **secure authentication**, and **immersive 3D visualizations**, Xcelitics makes data exploration seamless and intuitive for everyone.

---

## 🌟 Why Xcelitics?

* Upload any Excel/CSV file with ease (drag-and-drop support)
* Explore data through interactive **3D Plotly charts**
* Get instant, AI-driven insights using **Google Gemini AI**
* Control access with **role-based security**
* Built with **modern, high-performance technologies**

---

## 🛠 Technology Overview

### 🔹 Frontend

* React.js (Vite) – lightning-fast build system
* Redux Toolkit – centralized state management
* React Router v7 – smooth navigation
* Tailwind CSS – responsive styling framework
* Axios – robust API client
* React Icons – icon set
* GSAP – advanced UI animations
* Plotly.js – 3D data visualization

### 🔹 Backend

* Node.js + Express.js – API backbone
* MongoDB + Mongoose – scalable NoSQL database
* JWT + Bcrypt – authentication & encryption
* CORS – cross-domain communication
* SendGrid – email/password reset integration
* GridFS – large file handling
* Google Gemini AI – intelligent data analytics

### 🔹 Supporting Tools

* Multer – file uploads
* XLSX – Excel file parsing
* Crypto – secure token generation

---

## 🔑 Core Features

### Security & Authentication

✔ User registration & login
✔ JWT-based auth with refresh tokens
✔ Role-based access (Admin/User)
✔ Email-based password reset (SendGrid)
✔ Hashed passwords for maximum security

### File Management

✔ Drag & drop uploads
✔ Support: `.xlsx`, `.xls`, `.csv`
✔ GridFS for files >16MB
✔ Upload progress tracking
✔ Session-persistent file selection
✔ Auto file preview

### Visualization

✔ Interactive 3D charts (Bar, Scatter, Surface, Line, Area, Pie)
✔ Optimized WebGL performance
✔ Tooltips, zoom, and rotation
✔ Adaptive data sampling for large files
✔ Mobile-friendly responsiveness

### AI-Powered Insights

✔ Natural language queries
✔ Statistical analysis & recommendations
✔ Pattern/trend recognition
✔ Context-aware insights via Gemini AI

### User Experience

✔ Responsive dashboard design
✔ GSAP animations for polished UI
✔ Notifications & error handling
✔ Smooth file-to-analysis workflow

---

## 📅 Development Roadmap

**Week 1 – Foundation**

* Project setup, MongoDB connection, JWT basics, initial dashboard

**Week 2 – Auth & File Handling**

* Signup/login/logout
* Password reset (SendGrid)
* Role-based dashboards
* File uploads with GridFS & drag-drop

**Week 3 – Data Visualization**

* Unified Excel/CSV handling
* 6 interactive 3D charts
* Bug fixes: ObjectId constructor, WebGL compatibility
* File persistence + metadata display

**Week 4 – AI & UX Enhancements**

* Gemini AI integration
* Natural language querying
* CSS architecture refinements
* Resolved button conflicts & improved styles

---

## 🚦 Quick Start

### Requirements

* Node.js ≥ 16
* MongoDB (local or Atlas)
* npm / yarn
* Git

### Installation

```bash
# Clone repository
git clone https://github.com/YNikhil/xcelitics.git
cd Xcelitics

# Backend setup
cd backend
npm install

# Frontend setup
cd ../frontend
npm install
```

### Environment Setup

Create a `.env` file in `backend/` with:

```env
MONGO_URI=mongodb://localhost:27017/xcelitics
JWT_SECRET=<your_secret_here>
SENDGRID_API_KEY=<your_api_key_here>
SENDGRID_FROM_EMAIL=<verified_email>
GEMINI_API_KEY=<your_gemini_api_key>
FRONTEND_URL=http://localhost:3000
PORT=5000
NODE_ENV=development
```

---

## ▶ Running the App

```bash
# Start backend
cd backend
npm run dev

# Start frontend
cd frontend
npm run dev
```

* Backend: [http://localhost:5000](http://localhost:5000)
* Frontend: [http://localhost:3000](http://localhost:3000)

---

## 📂 Project Layout

```
Xcelitics/
├── backend/
│   ├── controllers/      # API logic
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API endpoints
│   ├── services/         # AI & email integrations
│   └── index.js          # Express entry
├── frontend/
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── redux/        # Redux store & slices
│   │   └── css/          # Styles
│   └── vite.config.js    # Build config
└── README.md
```

---

## 🔌 API Reference

### Authentication

* `POST /api/auth/signup` – Create account
* `POST /api/auth/login` – Login
* `POST /api/auth/forgot-password` – Request reset
* `POST /api/auth/reset-password` – Reset password
* `GET  /api/auth/verify-token` – Verify JWT

### File Handling

* `POST /api/excel/upload` – Upload file
* `GET  /api/excel/files` – List files
* `GET  /api/excel/download/:id` – Download file
* `DELETE /api/excel/delete/:id` – Delete file
* `POST /api/excel/analyze` – AI-driven analysis

### User

* `GET /api/user/profile` – Get profile
* `PUT /api/user/profile` – Update profile
* `GET /api/user/activity` – User activity log

---

## ⚡ Common Issues

* **MongoDB connection fails** → Ensure MongoDB service is running
* **Port already in use** → Kill process with `lsof -ti:5000 | xargs kill -9`
* **AI not working** → Check Gemini API key + quota

---

## 🤝 Contribution Guide

1. Fork repo
2. Create feature branch `git checkout -b feature/new-feature`
3. Make changes, add tests, update docs
4. Commit & push
5. Open a PR

---

## 📜 License

Licensed under MIT – see [LICENSE](LICENSE).

---

## 🙏 Credits

* **React.js** – frontend framework
* **MongoDB** – database
* **Google Gemini AI** – analytics
* **Plotly.js** – 3D visualization
* **SendGrid** – email integration

---

## 📞 Support

* Open an issue: [Xcelitics Issues](https://github.com/YNikhil188/xcelitics/issues)
* Include error logs + reproduction steps

---

🚀 **Built with ❤️ by the Xcelitics Team**
Smarter Data, Smarter Decisions
---

