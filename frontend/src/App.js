import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import GroupFare from './pages/GroupFare';
import Advertisements from './pages/Advertisements';
import Subscription from './pages/Subscription';
import About from './pages/About';
import Support from './pages/Support';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminPanel from './pages/AdminPanel';
import PrivateRoute from './components/PrivateRoute';
import { isLoggedIn } from './utils/auth';

function App() {
  const location = useLocation();

  // Hide header only on login and signup
  const hideHeader = ['/login', '/signup', '/'].includes(location.pathname);

  return (
    <>
      {!hideHeader && <Header />}
      <Routes>
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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
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
        <Route
          path="/admin-panel"
          element={
            <PrivateRoute>
              <AdminPanel />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
