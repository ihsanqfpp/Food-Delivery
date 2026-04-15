import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';
import { motion, AnimatePresence } from 'framer-motion';
import CartDrawer from './CartDrawer';

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const profileRef = useRef(null);
  
  const cartCount = useCartStore((state) => state.getCartCount());
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close profile dropdown on outside click or Escape
  useEffect(() => {
    if (!isProfileOpen) return;

    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setIsProfileOpen(false);
      }
    };
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsProfileOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isProfileOpen]);

  const handleNavToggle = () => setIsNavOpen(!isNavOpen);
  const closeNav = () => setIsNavOpen(false);

  return (
    <header className={`header_section ${scrolled ? 'header-active' : ''}`} style={{ transition: 'all 0.3s ease' }}>
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <Link className="navbar-brand" to="/" onClick={closeNav}>
            <span className="logo dancing-script">FoodFlow</span>
          </Link>

          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={handleNavToggle}
            aria-expanded={isNavOpen} 
            aria-label="Toggle navigation"
          >
            <span></span>
          </button>

          <div className={`collapse navbar-collapse justify-content-end ${isNavOpen ? 'show' : ''}`}>
            <ul className="navbar-nav align-items-center">
              <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                <Link className="nav-link" to="/" onClick={closeNav}>
                  Home
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/restaurants' ? 'active' : ''}`}>
                <Link className="nav-link" to="/restaurants" onClick={closeNav}>Restaurants</Link>
              </li>
              <li className={`nav-item ${location.pathname === '/detail' ? 'active' : ''}`}>
                <Link className="nav-link" to="/detail" onClick={closeNav}>Daily Deals</Link>
              </li>
              <li className="nav-item">
                <motion.button 
                  className="shopping-cart btn btn-link" 
                  style={{ textDecoration: 'none', position: 'relative' }}
                  onClick={() => setIsCartOpen(true)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Shopping cart${cartCount > 0 ? `, ${cartCount} items` : ''}`}
                >
                  <i className="fa fa-cart-arrow-down text-white" style={{ fontSize: '1.4rem' }}></i>
                  <AnimatePresence>
                    {cartCount > 0 && (
                      <motion.span 
                        key="cart-badge"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="badge" 
                        style={{ 
                          position: 'absolute', 
                          top: '-8px', 
                          right: '-10px', 
                          background: 'var(--color-primary)', 
                          color: '#fff',
                          fontWeight: '800',
                          borderRadius: '50%', 
                          minWidth: '20px',
                          height: '20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '11px',
                          boxShadow: '0 2px 5px rgba(79, 70, 229, 0.3)'
                        }}
                      >
                        {cartCount}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </li>
              
              <div className="action ml-3 position-relative" ref={profileRef}>
                <motion.div 
                  className="profile" 
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setIsProfileOpen(!isProfileOpen); } }}
                  style={{ cursor: 'pointer', border: '2px solid var(--color-primary)', padding: '2px' }}
                  whileHover={{ scale: 1.05 }}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isProfileOpen}
                  aria-label="User profile menu"
                >
                  <img src="/assets/images/client1.jpg" alt="Profile" style={{ width: '34px', height: '34px', borderRadius: '50%', objectFit: 'cover' }} />
                </motion.div>

                <AnimatePresence>
                  {isProfileOpen && (
                    <motion.div 
                      key="profile-menu"
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="menu position-absolute bg-white shadow-lg rounded-lg p-3" 
                      style={{ top: '60px', right: '0', zIndex: 1000, minWidth: '200px', border: '1px solid #e2e8f0' }}
                    >
                      <div className="text-center mb-3">
                        <h3 className="m-0" style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--color-slate-900)' }}>
                          Harsh Patel
                        </h3>
                        <span className="text-muted" style={{ fontSize: '0.8rem' }}>Gold Member</span>
                      </div>
                      <hr className="my-2" />
                      <ul className="p-0 m-0" style={{ listStyle: 'none' }}>
                        <li className="py-2">
                          <Link to="/profile" className="text-dark d-flex align-items-center" onClick={() => setIsProfileOpen(false)}>
                            <i className="fa-solid fa-user-gear mr-2" style={{ color: 'var(--color-primary)' }}></i> Settings
                          </Link>
                        </li>
                        <li className="py-2">
                          <Link to="/orders" className="text-dark d-flex align-items-center" onClick={() => setIsProfileOpen(false)}>
                            <i className="fa-solid fa-clock-rotate-left mr-2" style={{ color: 'var(--color-primary)' }}></i> Order History
                          </Link>
                        </li>
                        <li className="py-2">
                          <button className="btn btn-link p-0 text-danger d-flex align-items-center font-weight-bold" style={{ textDecoration: 'none' }} onClick={() => setIsProfileOpen(false)}>
                            <i className="fa-solid fa-power-off mr-2"></i> Logout
                          </button>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ul>
          </div>
        </nav>
      </div>
      
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );

}
