import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Loader from './components/common/Loader';
import { Toaster } from 'react-hot-toast';

// Lazy loading pages
const Home = lazy(() => import('./pages/Home'));
const RestaurantList = lazy(() => import('./pages/RestaurantList'));
const RestaurantDetail = lazy(() => import('./pages/RestaurantDetail'));
const Profile = lazy(() => import('./pages/Profile'));
const Auth = lazy(() => import('./pages/Auth'));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: '80vh' }}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurants" element={<RestaurantList />} />
            <Route path="/detail" element={<RestaurantDetail />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
      <Toaster position="bottom-right" />
    </BrowserRouter>
  );
}

export default App;
