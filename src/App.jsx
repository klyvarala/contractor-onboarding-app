import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importing components
import HomePage from './homePage'; // Import HomePage component
import Page1 from './Page1'; // Import other pages
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';

import AdminLoginPage from './AdminLoginPage'; // Admin Login page
import AdminDashboardPage from './AdminDashboardPage'; // Admin Dashboard page
import './App.css'; // Import global styles
import Logo from './assets/BeaconLogo.webp';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                {/* Logo at the top */}
                <img src={Logo} alt="Beacon Safeguard Solutions Logo" />

                {/* Defining routes for each page */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/page1" element={<Page1 />} />
                    <Route path="/page2" element={<Page2 />} />
                    <Route path="/page3" element={<Page3 />} />
                    <Route path="/page4" element={<Page4 />} />
                    <Route path="/page5" element={<Page5 />} />
                    <Route path="/adminloginpage" element={<AdminLoginPage />} />  {/* Admin Login */}
                    <Route path="/admindashboardpage" element={<AdminDashboardPage />} />  {/* Admin Dashboard */}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;





