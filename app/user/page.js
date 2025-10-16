"use client";

import React, { useState } from "react";

function User() {
  const [users, setUsers] = useState([]);
  
  const getUsers = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "#27ae60" }}>User List</h1>
      <button
        onClick={getUsers}
        style={{
          padding: "10px 20px",
          marginTop: "20px",
          cursor: "pointer",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#1dcbe9ff",
          fontWeight: "bold"
        }}
      >
        Get Users
      </button>

      <div style={{ marginTop: "20px" }}>
        {users.length > 0 ? (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {users.map((user) => (
              <li key={user.id} style={{ marginBottom: "10px", fontWeight: "bold" }}>
                {user.name}
              </li>
            ))}
          </ul>
        ) : (
          <p>No users fetched yet.</p>
        )}
      </div>
    </div>
  );
}

export default User;
