import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Page2() {
    const navigate = useNavigate();

    const [dob, setDob] = useState('');
    const [experience, setExperience] = useState('');

    // Load data from localStorage
    const surname = localStorage.getItem('surname');
    const firstName = localStorage.getItem('firstName');
    const email = localStorage.getItem('email');

    // Use effect to validate if all previous data exists
    useEffect(() => {
        if (!surname || !firstName || !email) {
            alert("Missing data, please go back and fill in the form!");
            navigate('/'); // Redirect back to home page if data is missing
        }
    }, [navigate, surname, firstName, email]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Logic to close application if 'Less than 5' is selected for experience
        if (experience === 'Less than 5') {
            alert('Thank you for your interest. Your application will not be processed.');
            return; // End submission
        }

        // Save the data from this page to localStorage for the next page
        localStorage.setItem('dob', dob);
        localStorage.setItem('experience', experience);

        // Redirect to the next page (Page 3)
        navigate('/page3');
    };

    return (
        <div>
            <h2>Experience</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Date of Birth:</label>
                    <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />
                </div>
                <div>
                    <label>Years of Experience:</label>
                    <select value={experience} onChange={(e) => setExperience(e.target.value)} required>
                        <option value="">Select Experience Level</option>
                        <option value="Less than 5">Less than 5 years</option>
                        <option value="5-10">5-10 years</option>
                        <option value="10+">10+ years</option>
                    </select>
                </div>

                <button type="submit">Next</button>
            </form>
        </div>
    );
}

export default Page2;