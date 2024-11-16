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


Installation
Clone the repository:
bash
Copy code
git clone https://github.com/your-username/user-management-app.git
Navigate to the project directory:
bash
Copy code
cd user-management-app
Install dependencies:
bash
Copy code
npm install
Start the development server:
bash
Copy code
npm start


Project Structure 
user-management-app/
│
├── public/
│   ├── index.html               # Main HTML file
│   ├── favicon.ico              # Favicon for the app
│   └── ...                      # Other public files
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── user-list-screenshot.png
│   │   │   ├── add-edit-user-screenshot.png
│   │   │   └── ...              # Other images
│   │   └── styles/
│   │       └── global.css       # Global CSS (optional)
│   │
│   ├── components/
│   │   ├── UserList/
│   │   │   ├── UserList.jsx     # Component to display user list
│   │   │   └── UserList.css     # Styles for the UserList component
│   │   │
│   │   ├── UserForm/
│   │   │   ├── UserForm.jsx     # Form component for adding/editing users
│   │   │   └── UserForm.css     # Styles for the UserForm component
│   │   │
│   │   ├── Modal/
│   │   │   ├── UserEditModal.jsx # Modal component for editing users
│   │   │   └── UserEditModal.css # Styles for the modal
│   │   │
│   │   └── ...                  # Other reusable components
│   │
│   ├── services/
│   │   ├── api.js               # API utility for Axios requests
│   │
│   ├── App.jsx                  # Main app component
│   ├── index.js                 # Entry point of the app
│   ├── index.css                # Base/global styles
│   └── ...                      # Other configurations
│
├── .gitignore                   # Files and directories to ignore in Git
├── package.json                 # npm package configuration
├── README.md                    # Project README file
├── LICENSE                      # License file (if applicable)
└── ...                          # Other config files (e.g., .env, webpack.config.js)









 Usage
View Users:
The application displays a list of users fetched from the mock API.
Add User:
Click the "Add User" button to open the user creation form.
Edit User:
Click the "Edit" button next to a user to modify their details.
Delete User:
Click the "Delete" button next to a user to remove them from the list.



API Endpoints
The application interacts with the following API endpoints:

Fetch Users:
Endpoint: GET https://jsonplaceholder.typicode.com/users
Returns a list of users.
Add User:
Endpoint: POST https://jsonplaceholder.typicode.com/users
Adds a new user to the database.
Update User:
Endpoint: PUT https://jsonplaceholder.typicode.com/users/:id
Updates an existing user.
Delete User:
Endpoint: DELETE https://jsonplaceholder.typicode.com/users/:id
Deletes a user by ID.

