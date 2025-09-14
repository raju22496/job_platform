import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Signup() {
    const [formData, setFormData] = useState({
        email: '',
        fullname: '',
        username: '',
        password: '',
        confirmPassword: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData.password !== formData.confirmPassword)
        {
            alert("Passwords do not match!");
            return;
        }
        localStorage.setItem("user", JSON.stringify(formData));
        alert("Signup successful! Please log in.");
         navigate("/login");
        // Add your sign-in logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '8px' }} />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Full Name:</label>
                    <input
                        type="text"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '8px' }} />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '8px' }} />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '8px' }} />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '8px' }} />
                </div>
                <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
                    Sign Up
                </button>
            </form>
        </div>
    );
}

export default Signup;