import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import GroupFare from './pages/GroupFare';
import Advertisements from './pages/Advertisements';
import Subscription from './pages/Subscription';
import About from './pages/About';
import Support from './pages/Support';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/group-fare" element={<GroupFare />} />
        <Route path="/advertisements" element={<Advertisements />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<GroupFare />} />
      </Routes>
    </>
  );
}

export default App;
