import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for v7+

function HomePage() {
    const navigate = useNavigate();

    // Handler for the "Get Started" button to navigate to Page1 (applicant's start process)
    const handleGetStarted = () => {
        navigate('/page1');
    };

    // Handler for the admin login (navigates to admin login page)
    const handleAdminLogin = () => {
        navigate('/AdminLoginPage');
    };

    return (
        <div className="home-page">
            {/* Welcome message displayed only on the homepage */}
            <h1>Welcome to Beacon Safeguard Solutions</h1>
            <p>Your trusted partner in security and risk management solutions.</p>
            <p>New Applicants Click "Get Started" below:</p>
            <p>Thank you for your interest in joining Beacon Safeguard Solutions as a consultant.</p> 
            <p>Please complete the following questionnaire which will be followed by a request to submit your CV.</p>
                
            {/* Button to start the applicant process */}
            <button onClick={handleGetStarted}>Get Started</button>

            <p>Admin Account?</p>
            {/* Button to navigate to Admin Login Page */}
            <button onClick={handleAdminLogin}>Sign In Here</button>
        </div>
    );
}

export default HomePage;
