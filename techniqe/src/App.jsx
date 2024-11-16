import React, { useState } from "react";
import UserFrom from "./components/UserFrom";
import UserList from "./components/userList";

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleAdd = () => {
    setSelectedUser(null);
    setShowForm(true);
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
  };

  return (
    <div className="container mx-auto p-4">
      {showForm ? (
        <UserFrom selectedUser={selectedUser} onClose={handleClose} />
      ) : (
        <UserList onAdd={handleAdd} onEdit={handleEdit} />
      )}
    </div>
  );
};

export default App;
