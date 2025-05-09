import React, { useState, useEffect } from 'react';
import './AdminDashboardPage.css'; // Import the Admin Dashboard style

const AdminDashboardPage = () => {
    const [applicantData, setApplicantData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchApplicantData = async () => {
            try {
                // Replace with the correct API Gateway URL
                const response = await fetch('https://your-api-id.execute-api.eu-west-2.amazonaws.com/prod/fetchApplicants');
                const data = await response.json();
                setApplicantData(data.applicants); // Assuming the response has an 'applicants' array
                setLoading(false);
            } catch (error) {
                console.error("Error fetching applicant data", error);
                setLoading(false);
            }
        };

        fetchApplicantData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="admin-dashboard">
            <h2>Admin Dashboard</h2>
            <h3>Applicant Information</h3>
            <table>
                <thead>
                <tr>
                    <th>Surname</th>
                    <th>First Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Education</th>
                    <th>Experience</th>
                    <th>CV Link</th>
                    <th>Photo</th>
                </tr>
                </thead>
                <tbody>
                {applicantData.map((applicant, index) => (
                    <tr key={index}>
                        <td>{applicant.surname}</td>
                        <td>{applicant.firstName}</td>
                        <td>{applicant.email}</td>
                        <td>{applicant.gender}</td>
                        <td>{applicant.education}</td>
                        <td>{applicant.experience}</td>
                        <td><a href={applicant.cvLink} target="_blank" rel="noopener noreferrer">View CV</a></td>
                        <td><a href={applicant.photoLink} target="_blank" rel="noopener noreferrer">View Photo</a></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboardPage;
