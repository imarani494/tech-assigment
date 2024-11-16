User Management Application
A web application to manage users with features like adding, editing, and viewing user details. This project uses React, CSS, and integrates services for user managemen

Features
Add Users: Add new users with first name, last name, email, and department details.
Edit Users: Update user details in a user-friendly form.
View Users: Display a list of all users with clean UI.
Responsive Design: Ensures compatibility across various devices.
Reusable Components: Modular and reusable React components.


 Tech Stack
Frontend
React: A JavaScript library for building user interfaces.
Vite: A fast and efficient build tool for modern web development.
Tailwind CSS: A utility-first CSS framework for rapid UI development.
Backend
JSONPlaceholder: A mock REST API for demonstration purposes.


Project Structure 
user-management-app/
│
├── public/
│   ├── index.html
│   └── favicon.ico
│
├── src/
│   ├── components/
│   │   ├── NavBar.jsx         # The navigation bar component
│   │   ├── UserForm.jsx       # Form for adding/editing users
│   │   └── UserList.jsx       # Component to display the user list
│   │
│   ├── services/
│   │   └── api.js             # API calls for add/update users
│   │
│   ├── App.jsx                # Root application component
│   └── index.js               # Entry point for React
│
├── package.json
└── README.md

