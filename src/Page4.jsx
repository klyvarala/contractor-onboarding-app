import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Importing useNavigate for navigation

function Page4() {
    const navigate = useNavigate();  // Declare navigate
    const [cv, setCv] = useState(null);
    const [photo, setPhoto] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!cv || !photo) {
            alert('Please upload both your CV and a recent photo.');
            return;
        }

        // Logic to handle the uploaded files goes here
        console.log("CV file:", cv);
        console.log("Photo file:", photo);

        // Navigate to the final page (Page 5)
        navigate('/page5');  // Go to the final page
    };

    return (
        <div>
            <h2>Upload Your Documents</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Upload CV (PDF or DOCX):</label>
                    <input type="file" onChange={(e) => setCv(e.target.files[0])} required />
                </div>
                <div>
                    <label>Upload Recent Photo (JPG or PNG):</label>
                    <input type="file" onChange={(e) => setPhoto(e.target.files[0])} required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Page4;
