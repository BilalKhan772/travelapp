// components/Header.jsx
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';
import { getUserFromToken } from '../utils/auth';

const Header = () => {
  const navigate = useNavigate();
  const user = getUserFromToken();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleLogoutConfirm = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <>
      <header className="header">
        <div className="header-left">The Mighty Groups</div>

        <div className={`header-right ${menuOpen ? 'show' : ''}`}>
          <NavLink to="/group-fare" className={({ isActive }) => isActive ? 'active-link' : ''}>Group Fare</NavLink>
          <NavLink to="/advertisements" className={({ isActive }) => isActive ? 'active-link' : ''}>Advertisements</NavLink>
          <NavLink to="/subscription" className={({ isActive }) => isActive ? 'active-link' : ''}>Subscription</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''}>About</NavLink>
          <NavLink to="/support" className={({ isActive }) => isActive ? 'active-link' : ''}>Help</NavLink>
          {user && (
            <button className="logout-btn" onClick={() => setShowLogoutConfirm(true)}>
              Logout
            </button>
          )}
        </div>

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          &#x22EE;
        </div>
      </header>

      {showLogoutConfirm && (
        <div className="modal-overlay">
          <div className="modal">
            <p>Are you sure you want to log out?</p>
            <div className="modal-buttons">
              <button className="yes-btn" onClick={handleLogoutConfirm}>Yes</button>
              <button className="no-btn" onClick={() => setShowLogoutConfirm(false)}>No</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
