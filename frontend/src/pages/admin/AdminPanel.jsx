// src/pages/admin/AdminPanel.jsx
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './AdminPanel.css';

export default function AdminPanel() {
  const location = useLocation();

  return (
    <div className="admin-panel">
      <div className="admin-sidebar">
        <h2 className="admin-title">Admin Panel</h2>
        <nav className="admin-nav">
          <Link to="dashboard" className={location.pathname.includes('dashboard') ? 'active' : ''}>Dashboard</Link>
          <Link to="user-requests" className={location.pathname.includes('user-requests') ? 'active' : ''}>User Requests</Link>
          <Link to="group-upload" className={location.pathname.includes('group-upload') ? 'active' : ''}>Group Upload</Link>
          <Link to="group-delete" className={location.pathname.includes('group-delete') ? 'active' : ''}>Group Delete</Link>
          <Link to="ad-upload" className={location.pathname.includes('ad-upload') ? 'active' : ''}>Ad Upload</Link>
          <Link to="ad-delete" className={location.pathname.includes('ad-delete') ? 'active' : ''}>Ad Delete</Link>
        </nav>
      </div>

      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
}
