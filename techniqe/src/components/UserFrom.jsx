import React, { useState, useEffect } from "react";
import './UseFrom.css';
import { addUser, updateUser } from "../services/api";

const UserForm = ({ selectedUser, onClose }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: ""
  });
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (selectedUser) {
      setUser({
        firstName: selectedUser.firstName || "",
        lastName: selectedUser.lastName || "",
        email: selectedUser.email || "",
        department: selectedUser.department || ""
      });
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      if (selectedUser) {
        await updateUser(selectedUser.id, user);
        alert("User updated successfully!");
      } else {
        await addUser(user);
        alert("User added successfully!");
      }
      onClose();
    } catch (err) {
      alert("Failed to save user.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="user-form-container">
      <h2 className="user-form-title">
        {selectedUser ? "Edit User" : "Add User"}
      </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName" className="user-form-label">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            className="user-form-input"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="user-form-label">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            className="user-form-input"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="user-form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="user-form-input"
            required
          />
        </div>
        <div>
          <label htmlFor="department" className="user-form-label">
            Department
          </label>
          <input
            type="text"
            id="department"
            name="department"
            value={user.department}
            onChange={handleChange}
            className="user-form-input"
          />
        </div>
        <div className="user-form-buttons">
          <button
            type="submit"
            className="user-form-button user-form-save"
            disabled={isSaving}
          >
            {isSaving ? "Saving..." : "Save"}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="user-form-button user-form-cancel"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
