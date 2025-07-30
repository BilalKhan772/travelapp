// src/pages/admin/AdUpload.jsx
import React, { useState } from 'react';
import axios from '../../services/api';
import './AdUpload.css';

export default function AdUpload() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [agencyName, setAgencyName] = useState('');
  const [caption, setCaption] = useState('');
  const [whatsappLink, setWhatsappLink] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    if (!image || !agencyName || !caption || !whatsappLink) {
      setMessage('Please fill all fields and upload an image.');
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append('file', image);
      formData.append('agencyName', agencyName);
      formData.append('caption', caption);
      formData.append('whatsappLink', whatsappLink);

      const response = await axios.post('/advertisements/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setMessage('Advertisement uploaded successfully!');
      setAgencyName('');
      setCaption('');
      setWhatsappLink('');
      setImage(null);
      setPreview(null);
    } catch (error) {
      console.error('Upload failed:', error);
      if (error.response?.status === 401) {
        setMessage('Unauthorized. Please log in again.');
      } else {
        setMessage('Something went wrong during upload.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ad-upload-wrapper">
      <h2>Upload Advertisement</h2>
      <form onSubmit={handleSubmit} className="upload-form">
        {preview && <img src={preview} alt="Preview" className="image-preview" />}
        <input type="file" accept="image/*" onChange={handleImageChange} />

        <input
          type="text"
          placeholder="Agency Name"
          value={agencyName}
          onChange={(e) => setAgencyName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Caption (e.g., Summer Deal 2025)"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
        <input
          type="text"
          placeholder="WhatsApp Link (https://wa.me/...)"
          value={whatsappLink}
          onChange={(e) => setWhatsappLink(e.target.value)}
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Uploading...' : 'Submit'}
        </button>

        {message && <p className="upload-message">{message}</p>}
      </form>
    </div>
  );
}
