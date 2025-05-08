// src/Page2.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Page2() {
    const navigate = useNavigate();

    const [dob, setDob] = useState('');
    const [experience, setExperience] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        if (experience === 'Less than 5') {
            alert('Thank you for your interest. Your application will not be processed.');
            return;
        }

        navigate('/page3'); // Go to the document upload page
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
