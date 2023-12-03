import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    axios.post('http://localhost:4000/signup', {name, email, password})
    try {
      await axios.post('/api/signup', formData);
      console.log('User created successfully');
      // Redirect or show a success message
    } catch (error) {
      console.error('Error creating user:', error.message);
      // Handle error (show error message, redirect, etc.)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username</label>
      <input type="text" name="username" onChange={handleChange} />

      <label>Email</label>
      <input type="email" name="email" onChange={handleChange} />

      <label>Password</label>
      <input type="password" name="password" onChange={handleChange} />

      <button type="Sign Up">sign Up</button>
    </form>
  );
};

export default Signup;
