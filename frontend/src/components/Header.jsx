// components/Header.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'; // new css file for styling
import { getUserFromToken } from '../utils/auth';

const Header = () => {
  const navigate = useNavigate();
  const user = getUserFromToken();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="header-left">The Mighty Groups</div>

      <div className={`header-right ${menuOpen ? 'show' : ''}`}>
        <Link to="/group-fare">Group Fare</Link>
        <Link to="/advertisements">Advertisements</Link>
        <Link to="/subscription">Subscription</Link>
        <Link to="/about">About</Link>
        <Link to="/support">Help</Link>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        &#x22EE;
      </div>
    </header>
  );
};

export default Header;
