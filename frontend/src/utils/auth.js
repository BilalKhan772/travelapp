// src/utils/auth.js

// Token se payload (user data) decode kar ke return karta hai
export function getUserFromToken() {
  const token = localStorage.getItem("token");

  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split(".")[1])); // Base64 decode
    return payload;
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
}

// Agar future mein use karna ho:
export function isLoggedIn() {
  return !!localStorage.getItem("token");
}
