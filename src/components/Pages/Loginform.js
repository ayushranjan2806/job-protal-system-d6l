import React from 'react';
import './Loginform.css'
const UserLoginForm = ({ username, password, setUsername, setPassword }) => {
  return (
    <div>
      <label style={{ marginBottom: '5px', display: 'block' }}>Username:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '3px',
          marginBottom: '10px',
          width: '100%'
        }}
      />
      <br />
      <label style={{ marginBottom: '5px', display: 'block' }}>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '3px',
          marginBottom: '10px',
          width: '100%'
        }}
      />
    </div>
  );
};

export default UserLoginForm;
