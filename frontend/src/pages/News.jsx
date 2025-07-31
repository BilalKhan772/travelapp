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
              <div key={item._id} className="news-card">
                <h3 className="news-title">{item.title}</h3>
                <a
                  href={item.sourceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="news-source-button"
                >
                  Visit Source
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
