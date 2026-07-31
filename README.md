# ☕ FUTURE_FS_03 — Espresso Voilá Cafe Website

> A modern, full-stack web application for an artisanal coffee shop featuring dynamic menu management, table reservations, and newsletter subscriptions.

---

## ✨ Features

- ☕ **Interactive Menu Display**: Filterable product showcase featuring handcrafted beverages, pastries, and breakfast items.
- 📱 **Responsive UI & Modals**: Fully dynamic layout with detailed item popups and fluid navigation across all screen sizes.
- 📅 **Table Reservation System**: Integrated contact form allowing customers to request table bookings directly.
- 💌 **Newsletter Subscription**: Direct subscription functionality keeping customers updated on special drops and seasonal menus.
- 🌐 **CORS-Protected API**: Express backend explicitly configured for secure cross-origin requests between Vercel and Render.

---

## 🛠️ Tech Stack

### Frontend
- ⚛️ React.js (Scaffolded via Vite)
- 🎨 Tailwind CSS
- 🧩 Lucide React

### Backend
- 🟢 Node.js
- ⚡ Express.js
- 🛡️ CORS Middleware

### Database & Tools
- 🍃 MongoDB Atlas
- 📦 Mongoose ODM

---

## 🚀 Live Demo & Deployment

- 🔺 **Frontend Live App (Vercel)**: [https://future-fs-03-one-ruby.vercel.app](https://future-fs-03-one-ruby.vercel.app)
- 🟣 **Backend Live Service (Render)**: [https://future-fs-03-backend-1zli.onrender.com](https://future-fs-03-backend-1zli.onrender.com)

---

## 📁 Project Structure

```text
FUTURE_FS_03/
├── backend/
│   ├── routes/
│   │   ├── contactRoutes.js
│   │   ├── menuRoutes.js
│   │   └── subscribeRoutes.js
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Contact.jsx
│   │   │   ├── Menu.jsx
│   │   │   └── Modal.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
└── README.md
```

---

## 💻 Local Installation & Setup

### 📋 Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB Atlas Connection String

### 1. Clone the repository
```bash
git clone https://github.com/gloriasemyol/FUTURE_FS_03.git
cd FUTURE_FS_03
```

### 2. Setup Backend
```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the backend server:
```bash
npm run dev
```

### 3. Setup Frontend
```bash
cd ../frontend
npm install
```

Create a `.env` file inside the `frontend` directory:
```env
VITE_API_URL=http://localhost:5000
```

Start the Vite development server:
```bash
npm run dev
```

Open `http://localhost:5173` in your browser! 🚀

---

## 🌐 Production Deployment Steps

### 🟣 Backend Deployment (Render)
1. Create a new Web Service on Render and connect your repository.
2. Root Directory: `backend`
3. Build Command: `npm install`
4. Start Command: `node server.js`
5. Set Environment Variables:
   - `MONGO_URI` = `your_mongodb_connection_string`

### 🔺 Frontend Deployment (Vercel)
1. Create a new Project on Vercel and import your repository.
2. Framework Preset: `Vite`
3. Root Directory: `frontend`
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Set Environment Variable:
   - `VITE_API_URL` = `[https://future-fs-03-backend-1zli.onrender.com](https://future-fs-03-backend-1zli.onrender.com)`

---

## ⚙️ Environment Variables

| Variable | Location | Description |
| :--- | :--- | :--- |
| `PORT` | backend/.env / Render | Port number for the Express server |
| `MONGO_URI` | backend/.env / Render | MongoDB database connection string |
| `VITE_API_URL` | frontend/.env / Vercel | Production backend API endpoint URL |

---

## 📝 License

Distributed under the MIT License.
```
