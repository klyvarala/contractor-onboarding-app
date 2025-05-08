// src/AdminLoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate to redirect
import './AdminLoginPage.css';



function AdminLoginPage() {
    const navigate = useNavigate(); // For redirection
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Hardcoded credentials for now
    const correctUsername = "admin";
    const correctPassword = "password123";

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission reload
        if (username === correctUsername && password === correctPassword) {
            // Redirect to the dashboard if login is successful
            navigate('/AdminDashboardPage');
        } else {
            alert('Incorrect username or password!');
        }
    };

    return (
        <div className="AdminLoginPage">
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default AdminLoginPage;
