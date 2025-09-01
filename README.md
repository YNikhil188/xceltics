Xceltics Platform
Last Updated: September 1, 2025

A full-stack, AI-driven data analytics platform for processing Excel/CSV files, generating interactive 3D visualizations, and extracting intelligent insights through advanced machine learning.

🚀 Project Overview
Xceltics is an end-to-end analytics platform designed to make working with Excel/CSV files more powerful, interactive, and insightful. By combining modern web technologies with AI integration, Xceltics allows users to securely upload, analyze, and visualize large datasets in real time.

With features like role-based authentication, AI-powered insights, and 3D visualizations, Xceltics redefines how businesses and researchers interact with data.

🛠️ Tech Stack
Frontend
⚡ React.js with Vite – Fast, modern frontend development

🗂 Redux Toolkit – Predictable state management

🛣 React Router v7 – Seamless client-side navigation

🎨 Tailwind CSS – Utility-first styling framework

🌐 Axios – Simplified HTTP requests

🖼 React Icons – Rich icon library

🎞 GSAP – Professional-grade animations

📊 Plotly.js – Interactive 3D visualizations

Backend
🖥 Node.js & Express.js – Scalable backend runtime

🗄 MongoDB with Mongoose – Flexible NoSQL database

🔑 JWT – Secure authentication with tokens

🔒 Bcrypt – Strong password hashing

🌍 CORS – Safe cross-origin support

📧 SendGrid – Email service for password recovery

🗂 GridFS – Large file storage system

🤖 Google Gemini AI – Advanced AI-powered data insights

Additional Tools
📥 Multer – File upload handling

📑 XLSX – Excel parsing & processing

🔐 Crypto – Token & key generation utilities

✨ Key Features
🔐 Authentication & Security
User registration, login & logout

JWT-based secure sessions

Role-based access (Admin / User)

Email-based password reset with SendGrid

Protected frontend & backend routes

Strong encryption with bcrypt

📁 File Management
Drag-and-drop Excel/CSV upload

GridFS support for >16MB files

Real-time upload progress

Multi-format support: .xlsx, .xls, .csv

File preview & metadata extraction

Session persistence for uploaded files

📊 Data Visualization
Six types of 3D interactive charts using Plotly.js:

3D Bar

3D Scatter

3D Surface

3D Line

3D Area

3D Pie

Responsive & mobile-friendly dashboards

Tooltips and zoom/rotate controls

Optimized performance for large datasets

🤖 AI-Powered Analytics
Integration with Google Gemini AI

Natural language queries on uploaded data

Automated insights & recommendations

Smart pattern detection

Statistical summaries & anomaly detection

🎨 User Experience
Clean, responsive dashboard design

GSAP-powered animations

Real-time notifications

Intuitive navigation & UI components

Mobile-first experience

📈 Development Roadmap
Week 1: Foundation
✅ Project structure setup

✅ MongoDB connectivity

✅ JWT authentication basics

✅ Initial dashboard layout

Week 2: Authentication & File Handling
✅ Full authentication flow

✅ Password reset via email (SendGrid)

✅ Role-based access control

✅ File uploads with progress & GridFS

✅ Custom forms with validation

Week 3: Data Analysis & Visualization
✅ Unified Excel & CSV handling

✅ File preview & metadata display

✅ Six 3D chart types with Plotly.js

✅ Intelligent type detection for visualization

✅ Performance optimizations for large datasets

Week 4: AI & UX Enhancements
✅ Gemini AI integration for smart insights

✅ Natural language data queries

✅ Polished responsive design

✅ Improved interactive dashboard experience

🚀 Getting Started
Prerequisites
Node.js v16+

MongoDB (local or Atlas)

npm or yarn

Git

Installation
Clone repository:

git clone https://github.com/<your-username>/Xceltics.git
cd Xceltics
Install backend dependencies:

cd backend
npm install
Install frontend dependencies:

cd ../frontend
npm install
🔧 Environment Configuration
Create .env in backend/:

# MongoDB
MONGO_URI=mongodb://localhost:27017/xceltics

# JWT
JWT_SECRET=super_secure_random_key

# SendGrid
SENDGRID_API_KEY=your_sendgrid_key
SENDGRID_FROM_EMAIL=your_verified_email@example.com

# Gemini AI
GEMINI_API_KEY=your_gemini_api_key

# App Config
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
PORT=5000
## 📁 Project Structure

```
Excel_Analytics_Platform/
├── 📁 backend/                    # Backend API server
│   ├── 📁 controllers/            # Request handlers
│   ├── 📁 middleware/             # Authentication & validation
│   ├── 📁 models/                 # Database schemas
│   │   ├── 📄 User.js            # User authentication model
│   │   ├── 📄 ExcelFile.js       # File metadata model
│   │   └── 📄 Activity.js        # User activity tracking
│   ├── 📁 routes/                 # API route definitions
│   │   ├── 📄 authRoutes.js      # Authentication endpoints
│   │   ├── 📄 excelRoutes.js     # File handling endpoints
│   │   └── 📄 userRoutes.js      # User management endpoints
│   ├── 📁 services/               # External service integrations
│   │   └── 📄 geminiService.js   # AI analysis service
│   ├── 📁 utils/                  # Utility functions
│   ├── 📁 uploads/                # File storage directory
│   ├── 📄 index.js               # Express server entry point
│   ├── 📄 package.json           # Backend dependencies
│   └── 📄 .env                   # Environment variables
├── 📁 frontend/                   # React frontend application
│   ├── 📁 public/                 # Static assets
│   ├── 📁 src/                    # Source code
│   │   ├── 📁 components/         # React components
│   │   │   ├── 📄 Dashboard.js   # Main dashboard
│   │   │   ├── 📄 FileUpload.js  # File upload interface
│   │   │   ├── 📄 AIInsights.js  # AI analysis display
│   │   │   ├── 📄 ThreeDChart.js # 3D visualization
│   │   │   ├── 📄 Login.js       # Authentication forms
│   │   │   └── 📄 Signup.js      # User registration
│   │   ├── 📁 redux/              # State management
│   │   │   ├── 📄 store.js       # Redux store configuration
│   │   │   └── 📄 authSlice.js   # Authentication state
│   │   ├── 📁 css/                # Stylesheets
│   │   │   ├── 📄 index.css      # Global styles
│   │   │   ├── 📄 dashboard.css  # Dashboard styles
│   │   │   └── 📄 responsive.css # Responsive design
│   │   ├── 📄 App.js             # Main application component
│   │   └── 📄 index.js           # React entry point
│   ├── 📄 package.json           # Frontend dependencies
│   └── 📄 vite.config.js         # Vite configuration
├── 📄 README.md                   # Project documentation
└── 📄 .gitignore                 # Git ignore rules
```

🔌 API Endpoints
Authentication
POST /api/auth/signup
POST /api/auth/login
POST /api/auth/forgot-password
POST /api/auth/reset-password
GET  /api/auth/verify-token
File Management
POST /api/excel/upload
GET  /api/excel/files
GET  /api/excel/download/:id
DELETE /api/excel/delete/:id
POST /api/excel/analyze
User
GET  /api/user/profile
PUT  /api/user/profile
GET  /api/user/activity
🛠 Available Scripts
Backend
npm start        # Start server
npm run dev      # Development mode
Frontend
npm run dev      # Start Vite dev server
npm run build    # Production build
npm run preview  # Preview build
npm run lint     # Lint code
🔍 Troubleshooting
MongoDB connection error
Ensure MongoDB service is running.

Port conflict
Kill process using port 5000 or 3000.

File upload issues
Check uploads/ directory and GridFS setup.

AI insights not working
Validate Gemini API key and quota.

🤝 Contributing
Fork repo

Create feature branch

Commit changes with clear message

Push to branch

Open Pull Request with description & screenshots

📝 License
Licensed under the MIT License – see LICENSE.

🙏 Acknowledgments
React for frontend framework

MongoDB for NoSQL database

Google Gemini AI for intelligent insights

Plotly for 3D visualizations

SendGrid for email integration

Open Source Community ❤️

Built with ❤️ by the Xceltics Team
Simplifying data analytics through intelligence and visualization.

