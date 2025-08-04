# 🖋️ QuickQuill – Secure Notes App

**QuickQuill** is a full-stack web application built with the **MERN stack** (MongoDB, Express, React, Node.js) that allows users to **securely manage personal notes**. The app supports **authentication**, **CRUD operations**, **search**, and **note timestamping** – all in a clean and responsive UI.

---

## 🚀 Features

- 🔐 **Authentication with JWT**
- 🗒️ **Create, Edit, Delete, View Notes**
- 📂 **Tagging Support**
- 🔍 **Search Notes in Real-Time**
- ⏰ **View Note Creation Time**
- 🔒 **Route Protection for Authenticated Users**
- 📱 **Mobile-Responsive with Bootstrap**
- 📁 **Structured with React Context API**
- 🧠 **Clean and Understandable Codebase**

TechStack
| Frontend | Backend | Database | Other                    |
| -------- | ------- | -------- | ------------------------ |
| React.js | Node.js | MongoDB  | JWT, bcryptjs, Bootstrap |

**Project Structure**
QuickQuill/
├── backend/
│   ├── routes/         # API Routes (Auth & Notes)
│   ├── models/         # Mongoose Schemas
│   ├── middleware/     # JWT Token Auth
│   └── index.js        # Main server file
│
├── frontend/
│   ├── src/
│   │   ├── components/  # React Components
│   │   ├── context/     # React Context API
│   │   ├── App.js       # App routing and layout
│   │   └── index.js     # React entry point
│
└── README.md

## 🛠️ Setup Instructions
**📦 Backend Setup**
Navigate to backend folder:

bash
Copy
Edit
cd backend
Install dependencies:

bash
Copy
Edit
npm install
Create .env file in /backend and add:

env
Copy
Edit
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
Start server:

bash
Copy
Edit
nodemon index.js
💻 Frontend Setup

**Navigate to frontend folder:**

bash
Copy
Edit
cd frontend
Install dependencies:

bash
Copy
Edit
npm install
Create .env.local in /frontend and add:

env
Copy
Edit
REACT_APP_API_URL=http://localhost:5000
Start React app:

bash
Copy
Edit
npm start
🔐 Environment Variables
Variable	Description
MONGO_URI	MongoDB connection string
JWT_SECRET	Secret key for JWT generation
REACT_APP_API_URL	Frontend base URL for API calls

🔄 How It Works
Login/Signup: User credentials are verified and JWT is stored in localStorage.

Token Verification: Each request to notes is validated via the JWT token.

CRUD Functionality: Users can add, edit, or delete notes — changes sync with MongoDB.

Search: Notes can be filtered by title or description using a dynamic search bar.

Timestamps: Each note displays its creation time fetched from MongoDB.

**🧠 Future Improvements**
 Rich text editor (Quill.js / Draft.js)

 Category/Folder support

 Dark Mode toggle

 Google OAuth integration

 Archiving & pinning notes

 PWA (Progressive Web App) support

👨‍💻 Author
Shubham 
👨‍🎓 BTech CSE, Delhi Technological University





