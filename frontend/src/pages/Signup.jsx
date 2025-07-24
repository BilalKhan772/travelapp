import React, { useState } from 'react';
import axios from '../services/api';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css';

export default function Signup() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/register', form);
      const { token } = res.data;

      if (token) {
        localStorage.setItem('token', token);

        const payload = JSON.parse(atob(token.split('.')[1]));
        const { role, isApproved } = payload;

        alert('Signup successful! You are now logged in.');

        // 🔁 Redirect logic
        if (role === 'ADMIN') {
          navigate('/admin-panel');
        } else if (isApproved === true) {
          navigate('/group-fare');
        } else {
          navigate('/subscription');
        }

      } else {
        alert('Signup successful! Please login.');
        navigate('/login');
      }
    } catch (err) {
      console.error('❌ Signup failed:', err);
      alert('Signup failed');
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="welcome-box">
          <h1 className="welcome-title">Step Into Something Mighty</h1>
        </div>

        <h2>Sign Up</h2>
        <input
          name="username"
          type="text"
          placeholder="Username"
          required
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <div className="password-field">
          <input
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            required
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <i className="fas fa-eye-slash"></i>
            ) : (
              <i className="fas fa-eye"></i>
            )}
          </span>
        </div>
        <button type="submit">Sign Up</button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
