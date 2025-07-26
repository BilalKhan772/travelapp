import React from 'react';
import './Advertisements.css';
import { getUserFromToken } from '../utils/auth';
import { Link } from 'react-router-dom';

function Advertisements() {
  const user = getUserFromToken();
  const isApproved = user?.isApproved;

  return (
    <div className="advertisements-page-wrapper">
      <div className="advertisements-container">
        {isApproved ? (
          <>
            <h2>You are approved!</h2>
            <p>Advertisements will appear here soon. Stay tuned!</p>
          </>
        ) : (
          <>
            <h2>Advertisements Locked</h2>
            <p className="advertisements-message">
              To view exclusive advertisements, please subscribe to a plan.
            </p>
            <Link to="/subscription" className="advertisements-subscription-button">
              Subscribe Now
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Advertisements;
