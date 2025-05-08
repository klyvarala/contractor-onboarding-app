import React from 'react';
import './AdminDashboardPage.css'; // Import the Admin Dashboard style

function AdminDashboardPage() {
    return (
        <div className="AdminDashboardPage">
            <h2>Welcome to the Admin Dashboard</h2>

            <div className="dashboard-content">
                <h3>Overview</h3>
                <p>Here you can manage user applications and view data.</p>

                {/* Sample Data */}
                <div>
                    <h3>Recent Applications</h3>
                    <ul>
                        <li>Application #1 - John Doe</li>
                        <li>Application #2 - Jane Smith</li>
                        <li>Application #3 - Mark Spencer</li>
                    </ul>
                </div>

                {/* Action Buttons */}
                <button>View All Applications</button>
                <button>Manage Users</button>
            </div>
        </div>
    );
}

export default AdminDashboardPage;
