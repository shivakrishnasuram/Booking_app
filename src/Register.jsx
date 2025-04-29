import React, { useState } from 'react';
import axios from 'axios';
import GoogleIcon from '@mui/icons-material/Google';
import "./App.css"
import { Button } from '@mui/material';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gmail: '',
        password: '',
        sport: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/register', formData);
            console.log(formData)
            alert('Registration successful!');
            console.log(res.data);
        } catch (err) {
            console.error(err);
            alert('Registration failed!');
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto' }}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                />
                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                />
                <input
                    type="email"
                    name="gmail"
                    placeholder="Gmail"
                    value={formData.gmail}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                />
                <select
                    name="sport"
                    value={formData.sport}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                >
                    <option value="">Select Sport</option>
                    <option value="cricket">Cricket</option>
                    <option value="volleyball">Volleyball</option>
                    <option value="football">Football</option>
                    <option value="badminton">Badminton</option>
                    <option value="tennis">Tennis</option>
                </select>
               
                <Button
                type="submit"
                style={buttonStyle}  variant="contained">Register</Button>

            </form>
        </div>
    );
};

const inputStyle = {
    display: 'block', width: '100%', marginBottom: '10px', padding: '8px'
};

const buttonStyle = {
    width: '100%', padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none'
};

export default Register;
