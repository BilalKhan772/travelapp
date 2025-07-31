// src/pages/admin/AdminPanel.jsx
import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import './AdminPanel.css';

export default function AdminPanel() {
  const location = useLocation();
  const navigate = useNavigate();

  const [showSidebar, setShowSidebar] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="admin-panel">
      {/* Hamburger for mobile */}
      <div className="hamburger" onClick={() => setShowSidebar(!showSidebar)}>
        &#9776;
      </div>

      {/* Sidebar Navigation */}
      <div className={`admin-sidebar ${showSidebar ? 'show' : ''}`}>
        <h2 className="admin-title">Admin Panel</h2>
        <nav className="admin-nav">
          <Link to="dashboard" className={location.pathname.includes('dashboard') ? 'active' : ''}>Dashboard</Link>
          <Link to="user-requests" className={location.pathname.includes('user-requests') ? 'active' : ''}>User Requests</Link>
          <Link to="group-upload" className={location.pathname.includes('group-upload') ? 'active' : ''}>Group Upload</Link>
          <Link to="group-delete" className={location.pathname.includes('group-delete') ? 'active' : ''}>Group Delete</Link>
          <Link to="ad-upload" className={location.pathname.includes('ad-upload') ? 'active' : ''}>Ad Upload</Link>
          <Link to="ad-delete" className={location.pathname.includes('ad-delete') ? 'active' : ''}>Ad Delete</Link>
          <Link to="news-upload" className={location.pathname.includes('news-upload') ? 'active' : ''}>News Upload</Link>
          <button className="logout-btn" onClick={() => setShowLogoutConfirm(true)}>Logout</button>
        </nav>
      </div>

      {/* Main content */}
      <div className="admin-content">
        <Outlet />
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="modal-overlay">
          <div className="modal-box">
            <p>Are you sure you want to logout?</p>
            <div className="modal-actions">
              <button className="confirm" onClick={handleLogout}>Yes</button>
              <button className="cancel" onClick={() => setShowLogoutConfirm(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
