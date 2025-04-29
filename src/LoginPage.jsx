import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const handleLogin = async () => {
    setMessage('');
    try {
      const response = await axios.post('http://localhost:3000/login', {
        gmail: identifier.includes('@') ? identifier : null, // Check if it's an email
        name: !identifier.includes('@') ? identifier : null, // Otherwise, it's a name
        password,
      });
      const { token } = response.data; // Get the token from the response

      if (token) {
        localStorage.setItem('token', token); // Store token in localStorage
        setMessage('Login successful!');
        console.log('Token saved:', token);
      } else {
        setMessage('No token received');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setMessage(error.response.data.error); 
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    }
  };
  return (
    <div>
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Enter Gmail or Username"
        value={identifier}
        onChange={(e) => setIdentifier(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>
        Login
      </button>

      {message && <p>{message}</p>}
    </div>
  );
};

export default LoginPage;
