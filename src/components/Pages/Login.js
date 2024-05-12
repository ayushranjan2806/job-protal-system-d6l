import React, { useState } from 'react';
import './Login.css';
import Routing from '../Routing';
import UserLoginForm from './Loginform'; // Import UserLoginForm component
import AdminLoginForm from './Adminlogin'; // Import AdminLoginForm component
import Jobpost from '../PostJob/index'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const usersDatabase = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" }
  ];

  const adminsDatabase = [
    { username: "admin1", password: "adminpass1" },
    { username: "admin2", password: "adminpass2" }
  ];

  const handleLogin = () => {
    const database = isAdmin ? adminsDatabase : usersDatabase;
    const userFound = database.some(user => user.username === username && user.password === password);

    if (userFound) {
      setIsAuthenticated(true);
    } else {
      alert('Invalid username or password.');
    }
  };

  const handleAdminLogin = () => setIsAdmin(true);
  const handleUserLogin = () => setIsAdmin(false);

  return (
    <>
    <div className="container">
 
  {/* Rest of your login form content */}
</div>

      {!isAuthenticated ? (
        <>
          {isAdmin ? (
            <AdminLoginForm
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
            />
          ) : (
            <UserLoginForm
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
            />
          )}
          <div>
            <button onClick={handleUserLogin}>User Login</button>
            <button onClick={handleAdminLogin}>Admin Login</button>
            <button onClick={handleLogin}>Login</button>
          </div>
        </>
      ) : (
        <>
          {isAdmin ? <Jobpost /> : <Routing />}
        </>
      )}
    </>
  );
};

export default Login;
