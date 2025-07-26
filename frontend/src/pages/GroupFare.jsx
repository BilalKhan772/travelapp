import React from 'react';
import './GroupFare.css';
import { getUserFromToken } from '../utils/auth';
import { Link } from 'react-router-dom';

function GroupFare() {
  const user = getUserFromToken();
  const isApproved = user?.isApproved;

  return (
    <div className="groupfare-page-wrapper">
      <div className="groupfare-container">
        {isApproved ? (
          <>
            <h2>You are approved!</h2>
            <p>Group fares will be posted here soon. Stay tuned!</p>
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
