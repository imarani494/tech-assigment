import React, { useState } from "react";
import "./UserEditModal.css"; 

const UserEditModal = ({ user, onClose, onSave }) => {
  const [firstName, setFirstName] = useState(user?.name.split(" ")[0] || "");
  const [lastName, setLastName] = useState(user?.name.split(" ")[1] || "");
  const [email, setEmail] = useState(user?.email || "");
  const [department, setDepartment] = useState(user?.department || "");

  const handleSave = () => {
    onSave({
      ...user,
      name: `${firstName} ${lastName}`,
      email,
      department,
    });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit User</h2>
        <div className="modal-form">
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Department</label>
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </div>
        <button onClick={handleSave} className="modal-save-btn">
          Save
        </button>
        <button onClick={onClose} className="modal-cancel-btn">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UserEditModal;
