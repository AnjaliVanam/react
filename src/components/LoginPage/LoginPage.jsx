import React, { useState } from 'react';
import {
  Link
} from "react-router-dom";
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const details=[
        {
             "username":username,
              "password":password
         }
     ]
    console.log(details)

    // Perform further actions such as validation, API calls, or storing the credentials


    // Reset the input fields
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <Link to="/Header" className="btn btn-primary">Login</Link>
      </form>
    </div>
  );
};

export default LoginPage;
