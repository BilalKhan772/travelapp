// src/utils/auth.js

// Check if user is logged in
export const isLoggedIn = () => {
  const token = localStorage.getItem('token');
  return !!token;
};

// Extract user info from JWT token
export const getUserFromToken = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;

  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const payload = JSON.parse(atob(base64));

    // Example payload might contain:
    // { sub: "user@email.com", role: "ADMIN", isApproved: true, ... }
    console.log("🧠 Decoded Token Payload:", payload);

    return payload;
  } catch (error) {
    console.error("❌ Invalid token or decode failed:", error);
    return null;
  }
};
