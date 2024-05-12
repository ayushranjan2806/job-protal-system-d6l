import React from 'react';

const AdminLoginForm = ({ username, password, setUsername, setPassword }) => {
  return (
    <div>
      <label>Admin Username:</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <br />
      <label>Admin Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    </div>
  );
};

export default AdminLoginForm;
