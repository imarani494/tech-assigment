import React, { useEffect, useState } from "react";
import { fetchUsers, deleteUser } from "../services/api";
import UserEditModal from "./model/UserEditModal";
import './UserList.css';

const UserList = ({ onAdd }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        setError("Failed to load users.");
      } finally {
        setLoading(false);
      }
    };
    loadUsers();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUser(id);
        setUsers(users.filter((user) => user.id !== id));
      } catch (err) {
        alert("Failed to delete user.");
      }
    }
  };

  const handleSave = (updatedUser) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  if (loading) return <p className="user-list-loading">Loading...</p>;
  if (error) return <p className="user-list-error">{error}</p>;

  return (
    <>
    <div 
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      color: 'white',
      padding: '15px 20px',
      width: '100%',
      position: 'fixed',
      top: '0',
      zIndex: '1000',
      // boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    }}
  >
    <h1 className="user-list-title" style={{ margin: '0', fontSize: '1.5rem', fontWeight: 'bold', color:'white' }}>
      User List
    </h1>
  </div>
  
    <div className="user-list-container">
   
     
      <button onClick={onAdd} className="user-list-add-btn">
        Add User
      </button>
      <table className="user-list-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name.split(" ")[0]}</td>
              <td>{user.name.split(" ")[1] || ""}</td>
              <td>{user.email}</td>
              <td>{user.department || "N/A"}</td>
              <td>
                <button
                  onClick={() => setSelectedUser(user)}
                  className="user-list-action-btn user-list-edit-btn"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="user-list-action-btn user-list-delete-btn"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedUser && (
        <UserEditModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
          onSave={handleSave}
        />
      )}
    </div>
    </>
  );
};

export default UserList;
