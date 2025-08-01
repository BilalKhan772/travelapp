// src/pages/Subscription.jsx
import React, { useEffect, useState } from 'react';
import './Subscription.css';
import { getUserFromToken } from '../utils/auth';
import ProtectedPageWrapper from '../components/ProtectedPageWrapper';

function Subscription() {
  const [user, setUser] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    const fetchedUser = getUserFromToken();
    setUser(fetchedUser);
  }, []);

  const plans = [
    { label: '1 Month', price: 100 },
    { label: '6 Months', price: 299 },
    { label: '1 Year', price: 499 },
  ];

  const handleCloseModal = () => setSelectedPlan(null);

  return (
    <ProtectedPageWrapper>
      <div className="subscription-page-wrapper">
        <div className="subscription-container">
          <h2 className="sub-heading">Subscription Plans</h2>
          {user ? (
            user.isApproved ? (
              <div className="approved-message">
                <p>✅ You are already approved!</p>
                <p>You now have access to Group Fares and Advertisements.</p>
              </div>
            ) : (
              <>
                <div className="plan-options">
                  {plans.map((plan) => (
                    <div
                      key={plan.label}
                      className="plan-card"
                      onClick={() => setSelectedPlan(plan)}
                    >
                      <h4>{plan.label}</h4>
                      <p className="plan-price">PKR {plan.price}</p>
                    </div>
                  ))}
                </div>

                {selectedPlan && (
                  <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                      <button className="close-button" onClick={handleCloseModal}>✖</button>
                      <h3>{selectedPlan.label} Plan</h3>
                      <p>💸 Please send <strong>PKR {selectedPlan.price}</strong> via:</p>
                      <ul>
                        <li>📲 <strong>JazzCash:</strong> 0335-9292540</li>
                        <li>📲 <strong>EasyPaisa:</strong> 0335-9292540</li>
                      </ul>
                      <p>
                        🖼️ After payment, send screenshot and your <strong>email</strong> & <strong>username</strong> on WhatsApp:
                      </p>
                      <a
                        href="https://wa.me/923359292540"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-button"
                      >
                        📤 Send on WhatsApp
                      </a>
                    </div>
                  </div>
                )}
              </>
            )
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </ProtectedPageWrapper>
  );
}

export default Subscription;
