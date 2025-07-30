import React, { useEffect, useState } from 'react';
import './Advertisements.css';
import { getUserFromToken } from '../utils/auth';
import { Link } from 'react-router-dom';
import axios from '../services/api';

function Advertisement() {
  const user = getUserFromToken();
  const isApproved = user?.isApproved;
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (isApproved) {
      axios.get('/advertisements')
        .then((res) => {
          setAds(res.data);
        })
        .catch((err) => {
          console.error('Error fetching advertisements:', err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [isApproved]);

  const openImageModal = (imageUrl) => {
    setModalImage(imageUrl);
  };

  const closeImageModal = () => {
    setModalImage(null);
  };

  return (
    <div className="advertisement-page-wrapper">
      <div className="advertisement-container">
        {isApproved ? (
          <>
            <h2 className="advertisement-heading">Advertisements</h2>

            {loading ? (
              <div className="advertisement-spinner"></div>
            ) : ads.length === 0 ? (
              <p className="advertisement-empty-msg">No advertisements available.</p>
            ) : (
              <div className="advertisement-card-grid">
                {ads.map((ad) => (
                  <div key={ad._id} className="advertisement-card">
                    <img
                      src={ad.imageUrl}
                      alt="advertisement"
                      className="advertisement-image"
                      onClick={() => openImageModal(ad.imageUrl)}
                    />
                    <div className="advertisement-card-content">
                      <h3 className="advertisement-agency">{ad.agencyName}</h3>
                      <p className="advertisement-caption">{ad.caption}</p>
                      <a
                        href={ad.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="advertisement-whatsapp-button"
                      >
                        Contact via WhatsApp
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Modal for full-size image */}
            {modalImage && (
              <div className="advertisement-modal" onClick={closeImageModal}>
                <span className="advertisement-modal-close" onClick={closeImageModal}>&times;</span>
                <img src={modalImage} alt="Full View" className="advertisement-modal-image" />
              </div>
            )}
          </>
        ) : (
          <>
            <h2 className="advertisement-locked-title">Advertisements are Locked</h2>
            <p className="advertisement-message">
              To view exclusive advertisements, please subscribe to one of our plans.
            </p>
            <Link to="/subscription" className="advertisement-subscription-button">
              Subscribe Now
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Advertisement;
