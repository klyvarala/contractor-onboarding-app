// src/Page1.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Page3() {
    const navigate = useNavigate();

    const [surname, setSurname] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [education, setEducation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Logic to close application if 'None' is selected for education
        if (education === 'None') {
            alert('Thank you for your interest. Your application will not be processed.');
            return; // End submission
        }

        // Redirect to the next page (Page 2)
        navigate('/page2');
    };

    return (
        <div>
            <h2>Personal Information</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Surname/Family Name:</label>
                    <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} required />
                </div>
                <div>
                    <label>First Name:</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </div>
                <div>
                    <label>Email Address:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Gender:</label>
                    <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                        <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                </div>
                <div>
                    <label>Highest Level of Education:</label>
                    <select value={education} onChange={(e) => setEducation(e.target.value)} required>
                        <option value="">Select Education Level</option>
                        <option value="None">None</option>
                        <option value="High School">High School</option>
                        <option value="College">College</option>
                        <option value="Bachelor's">Bachelor's</option>
                        <option value="Masters">Masters</option>
                        <option value="PhD">PhD</option>
                    </select>
                </div>
                <button type="submit">Next</button>
            </form>
        </div>
    );
}

export default Page3;

