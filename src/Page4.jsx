import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Page4() {
    const navigate = useNavigate();  // Hook for navigation
    const [cv, setCv] = useState(null);  // State to hold the CV file
    const [photo, setPhoto] = useState(null);  // State to hold the photo file

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!cv || !photo) {
            alert('Please upload both your CV and a recent photo.');
            return;
        }

        // Get all data from localStorage
        const surname = localStorage.getItem('surname');
        const firstName = localStorage.getItem('firstName');
        const email = localStorage.getItem('email');
        const gender = localStorage.getItem('gender');
        const education = localStorage.getItem('education');
        const dob = localStorage.getItem('dob');
        const experience = localStorage.getItem('experience');

        // Prepare the data object to be sent with FormData
        const formData = new FormData();
        formData.append('surname', surname);
        formData.append('firstName', firstName);
        formData.append('email', email);
        formData.append('gender', gender);
        formData.append('education', education);
        formData.append('dob', dob);
        formData.append('experience', experience);
        formData.append('cv', cv);
        formData.append('photo', photo);

        try {
            // Send the data to the API Gateway with FormData
            const response = await fetch('https://avauuo11td.execute-api.eu-west-2.amazonaws.com/prod', {
                method: 'POST',
                body: formData,  // Send formData directly
            });

            const data = await response.json();

            if (data.message === 'Application submitted successfully!') {
                alert('Your application has been submitted successfully!');
                navigate('/page5');  // Redirect to the final page
            }
        } catch (error) {
            console.error('Error submitting application:', error);
        }
    };

    return (
        <div>
            <h2>Upload Your Documents</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Upload CV (PDF or DOCX):</label>
                    <input
                        type="file"
                        accept=".pdf,.docx"
                        onChange={(e) => setCv(e.target.files[0])}
                        required
                    />
                </div>
                <div>
                    <label>Upload Recent Photo (JPG or PNG):</label>
                    <input
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        onChange={(e) => setPhoto(e.target.files[0])}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Page4;
