🩺 Prescripto

A MERN stack prescription management web app built with React, Node.js, Express.js, MongoDB, Tailwind CSS, JWT, Axios, and React-Toastify.
This project helps manage prescriptions, users, and appointments efficiently with a responsive UI and secure authentication.


---

🌐 Live Demo

👉 Live URL: https://prescripto-fphf.vercel.app/


---

🚀 Tech Stack

Frontend: React, Tailwind CSS, Axios, React-Toastify
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JSON Web Token (JWT)
Hosting: Vercel


---

📂 Folder Structure

prescripto/
├── admin/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── DashboardCards.jsx
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Doctors.jsx
│   │   │   ├── Patients.jsx
│   │   │   └── Login.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   └── tailwind.config.js
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── doctorController.js
│   │   ├── patientController.js
│   │   └── prescriptionController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Doctor.js
│   │   ├── Patient.js
│   │   └── Prescription.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── doctorRoutes.js
│   │   ├── patientRoutes.js
│   │   └── prescriptionRoutes.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── Prescription.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   └── tailwind.config.js
│
├── .gitignore
└── README.md


---

⚙️ Setup Instructions

1️⃣ Clone the repository

git clone https://github.com/Amit-0011/prescripto.git
cd prescripto

2️⃣ Install backend dependencies

cd backend
npm install

3️⃣ Install frontend dependencies

cd ../frontend
npm install

4️⃣ Install admin panel dependencies

cd ../admin
npm install


---

🧩 Environment Variables

Create a .env file inside the backend folder and add the following:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


---

▶️ Run the Project

Backend:

cd backend
npm run dev

Frontend:

cd frontend
npm start

Admin Panel:

cd admin
npm start

Then open your browser at:

Frontend: http://localhost:3000

Admin Panel: http://localhost:3001 (or configured port)



---

💡 Features

✅ JWT-based authentication (secure login & signup)
✅ Separate dashboards for doctors, patients, and admins
✅ Manage prescriptions, users, and appointments
✅ Real-time notifications using React-Toastify
✅ Fully responsive UI built with Tailwind CSS
✅ RESTful API using Express.js
✅ Hosted completely on Vercel


---

🌐 Deployment

Frontend: Hosted on Vercel

Backend: Hosted on Vercel

Admin Panel: Hosted on Vercel

Database: MongoDB Atlas

Live App: https://prescripto-fphf.vercel.app/


