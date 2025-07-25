import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import GroupFare from './pages/GroupFare';
import Advertisements from './pages/Advertisements';
import Subscription from './pages/Subscription';
import About from './pages/About';
import Support from './pages/Support';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminPanel from './pages/admin/AdminPanel';
import PrivateRoute from './components/PrivateRoute';
import { isLoggedIn } from './utils/auth';

// Admin Pages
import Dashboard from './pages/admin/Dashboard';
import GroupUpload from './pages/admin/GroupUpload';
import GroupDelete from './pages/admin/GroupDelete';
import AdUpload from './pages/admin/AdUpload';
import AdDelete from './pages/admin/AdDelete';
import UserRequests from './pages/admin/UserRequests';

function App() {
  const location = useLocation();

  // Hide header on login, signup, root, AND admin-panel pages
  const hideHeader =
    ['/login', '/signup', '/'].includes(location.pathname) ||
    location.pathname.startsWith('/admin-panel');

  return (
    <>
      {!hideHeader && <Header />}

      <Routes>
        {/* Redirect root to group fare or login */}
        <Route
          path="/"
          element={
            isLoggedIn() ? (
              <Navigate to="/group-fare" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />

        {/* Protected User Routes */}
        <Route
          path="/group-fare"
          element={
            <PrivateRoute>
              <GroupFare />
            </PrivateRoute>
          }
        />
        <Route
          path="/advertisements"
          element={
            <PrivateRoute>
              <Advertisements />
            </PrivateRoute>
          }
        />
        <Route
          path="/subscription"
          element={
            <PrivateRoute>
              <Subscription />
            </PrivateRoute>
          }
        />

        {/* 🔐 Admin Panel Nested Routes */}
        <Route
          path="/admin-panel"
          element={
            <PrivateRoute adminOnly={true}>
              <AdminPanel />
            </PrivateRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="group-upload" element={<GroupUpload />} />
          <Route path="group-delete" element={<GroupDelete />} />
          <Route path="ad-upload" element={<AdUpload />} />
          <Route path="ad-delete" element={<AdDelete />} />
          <Route path="user-requests" element={<UserRequests />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
