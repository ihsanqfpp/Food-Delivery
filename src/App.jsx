import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Loader from './components/common/Loader';
import ErrorBoundary from './components/common/ErrorBoundary';
import ScrollToTop from './components/common/ScrollToTop';
import { Toaster } from 'react-hot-toast';

// Lazy loading pages
const Home = lazy(() => import('./pages/Home'));
const RestaurantList = lazy(() => import('./pages/RestaurantList'));
const RestaurantDetail = lazy(() => import('./pages/RestaurantDetail'));
const Profile = lazy(() => import('./pages/Profile'));
const Auth = lazy(() => import('./pages/Auth'));
const OrderSuccess = lazy(() => import('./pages/OrderSuccess'));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <div style={{ minHeight: '80vh' }}>
        <ErrorBoundary>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/restaurants" element={<RestaurantList />} />
              <Route path="/detail" element={<RestaurantDetail />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/success" element={<OrderSuccess />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </div>
      <Footer />
      <Toaster position="bottom-right" />
    </BrowserRouter>
  );
}

export default App;
