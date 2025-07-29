import React, { useState } from 'react';
import axios from '../../services/api';
import './GroupUpload.css';

export default function GroupUpload() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [agencyName, setAgencyName] = useState('');
  const [route, setRoute] = useState('');
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

    if (!image || !agencyName || !route || !whatsappLink) {
      setMessage('Please fill all fields and upload an image.');
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append('file', image); // ⬅️ Must match backend key
      formData.append('agencyName', agencyName);
      formData.append('route', route);
      formData.append('whatsappLink', whatsappLink);

      const response = await axios.post('/group-fare/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setMessage('Upload successful!');
      setAgencyName('');
      setRoute('');
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
    <div className="group-upload-wrapper">
      <h2>Upload Group Fare</h2>
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
          placeholder="Route (e.g., KHI-DXB)"
          value={route}
          onChange={(e) => setRoute(e.target.value)}
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
