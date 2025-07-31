// src/pages/News.jsx
import React, { useEffect, useState } from 'react';
import './News.css';
import axios from '../services/api';

export default function News() {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/news')
      .then((res) => {
        setNewsItems(res.data);
      })
      .catch((err) => {
        console.error('Error fetching news:', err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleCardClick = (url) => {
    // Validate the URL
    if (typeof url === 'string' && (url.startsWith('http://') || url.startsWith('https://'))) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      alert('Invalid URL');
    }
  };

  return (
    <div className="news-page-wrapper">
      <div className="news-container">
        <h2 className="news-heading">Latest Travel News</h2>

        {loading ? (
          <div className="news-spinner"></div>
        ) : newsItems.length === 0 ? (
          <p className="news-empty-msg">No news available at the moment.</p>
        ) : (
          <div className="news-list">
            {newsItems.map((item) => (
              <div
                key={item._id}
                className="news-card"
                onClick={() => handleCardClick(item.sourceUrl)}
                style={{ cursor: 'pointer' }}
              >
                <h3 className="news-title">{item.title}</h3>
                <p className="news-link-text">Click to visit source</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
