import { Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* 🔓 Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />

        {/* 🔐 Protected Routes */}
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

        {/* 🔁 Default Fallback */}
        <Route path="*" element={<GroupFare />} />
      </Routes>
    </>
  );
}

export default App;
