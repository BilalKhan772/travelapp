// src/utils/auth.js

export const isLoggedIn = () => {
  const token = localStorage.getItem('token');
  return !!token;
};

export const getUserFromToken = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    console.log("🧠 Decoded Token Payload:", payload); // ✅ Debug line
    return payload; // includes email, role, isApproved, etc.
  } catch (e) {
    console.error("❌ Token decode failed:", e);
    return null;
  }
};
