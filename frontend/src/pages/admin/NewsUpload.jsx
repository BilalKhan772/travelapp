// src/pages/admin/NewsUpload.jsx
import React, { useState } from 'react';
import axios from '../../services/api';
import './NewsUpload.css';

export default function NewsUpload() {
  const [title, setTitle] = useState('');
  const [sourceUrl, setSourceUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    if (!title.trim() || !sourceUrl.trim()) {
      setMessage('Please fill in both Title and Source URL.');
      return;
    }

    try {
      setLoading(true);
      const token = localStorage.getItem('token');

      const response = await axios.post(
        '/news/add',
        { title, sourceUrl },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        setMessage('✅ News uploaded successfully!');
        setTitle('');
        setSourceUrl('');
      } else {
        setMessage('⚠️ Upload failed. Please try again.');
      }
    } catch (error) {
      console.error('Error uploading news:', error);
      if (error.response?.status === 401) {
        setMessage('❌ Unauthorized. Please log in again.');
      } else {
        setMessage('❌ Something went wrong. Please check the console.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="news-upload-wrapper">
      <h2>Upload News</h2>
      <form onSubmit={handleSubmit} className="upload-form">
        <input
          type="text"
          placeholder="News Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="News Source URL (e.g. https://example.com/article)"
          value={sourceUrl}
          onChange={(e) => setSourceUrl(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Uploading...' : 'Submit'}
        </button>
        {message && <p className="upload-message">{message}</p>}
      </form>
    </div>
  );
}
