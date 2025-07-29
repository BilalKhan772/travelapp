// src/pages/GroupFare.jsx
import React, { useEffect, useState } from 'react';
import './GroupFare.css';
import { getUserFromToken } from '../utils/auth';
import { Link } from 'react-router-dom';
import axios from '../services/api';

function GroupFare() {
  const user = getUserFromToken();
  const isApproved = user?.isApproved;
  const [fares, setFares] = useState([]);
  const [filteredFares, setFilteredFares] = useState([]);
  const [loading, setLoading] = useState(true);
  const [routes, setRoutes] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState('');

  useEffect(() => {
    if (isApproved) {
      axios.get('/api/group-fare')
        .then((res) => {
          setFares(res.data);
          setFilteredFares(res.data);
          const uniqueRoutes = [...new Set(res.data.map((f) => f.route))];
          setRoutes(uniqueRoutes);
        })
        .catch((err) => {
          console.error('Error fetching fares:', err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [isApproved]);

  const handleRouteChange = (e) => {
    const route = e.target.value;
    setSelectedRoute(route);
    if (route === '') {
      setFilteredFares(fares);
    } else {
      setFilteredFares(fares.filter((fare) => fare.route === route));
    }
  };

  return (
    <div className="groupfare-page-wrapper">
      <div className="groupfare-container">
        {isApproved ? (
          <>
            <h2>Group Fares</h2>

            {/* Dropdown Filter */}
            {routes.length > 0 && (
              <select
                value={selectedRoute}
                onChange={handleRouteChange}
                className="groupfare-dropdown"
              >
                <option value="">All Routes</option>
                {routes.map((route, index) => (
                  <option key={index} value={route}>
                    {route}
                  </option>
                ))}
              </select>
            )}

            {/* Loading Spinner */}
            {loading ? (
              <div className="groupfare-spinner"></div>
            ) : filteredFares.length === 0 ? (
              <p>No group fares available for the selected route.</p>
            ) : (
              <div className="groupfare-card-grid">
                {filteredFares.map((fare) => (
                  <div key={fare._id} className="groupfare-card">
                    <img src={fare.imageUrl} alt="fare" className="groupfare-image" />
                    <h3>{fare.agencyName}</h3>
                    <p className="groupfare-route">{fare.route}</p>
                    <a
                      href={fare.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="groupfare-whatsapp-link"
                    >
                      Contact via WhatsApp
                    </a>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <>
            <h2>Group Fares are Locked</h2>
            <p className="groupfare-message">
              To explore group fares, please subscribe to one of our available plans.
            </p>
            <Link to="/subscription" className="groupfare-subscription-button">
              Subscribe Now
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default GroupFare;
