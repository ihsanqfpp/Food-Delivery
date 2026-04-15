import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FoodCard from '../components/ui/FoodCard';
import menuData from '../data/menu.json';

export default function RestaurantDetail() {
  const [filter, setFilter] = useState('*');
  const menu = menuData;

  const categories = ['*', 'burger', 'pizza', 'pasta', 'fries'];

  const filteredMenu = menu.filter(item => filter === '*' || item.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ marginTop: '80px' }}
    >
      <section className="about_section layout_padding bg-dark text-white shadow-lg overflow-hidden position-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <motion.div 
                className="img-box overflow-hidden shadow-2xl"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                style={{ borderRadius: '32px' }}
              >
                <img src="/assets/images/restar-1.jpeg" className="img-fluid w-100" alt="Restaurant Info" style={{ objectFit: 'cover' }} />
              </motion.div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0 pl-md-5">
              <motion.div 
                className="detail-box"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <span className="badge px-3 py-2 rounded-pill mb-3" style={{ background: 'var(--color-primary)', color: '#fff', fontWeight: '800' }}>ULTIMATE CULINARY EXPERIENCE</span>
                <h2 className="font-weight-bold mb-4 display-4" style={{ color: '#fff' }}>Welcome To <span style={{ color: 'var(--color-primary)' }}>FoodFlow</span></h2>
                <p className="mb-5 text-light opacity-75 lead">
                  From hand-picked organic ingredients to our legendary chef-driven recipes, we bring a level of culinary craftsmanship that transforms simple ingredients into extraordinary experiences. Each dish is a story of passion and flavor.
                </p>
                <div className="row">
                  <div className="col-6">
                    <h5 className="font-weight-bold" style={{ color: 'var(--color-primary)' }}><i className="fa-regular fa-clock mr-2"></i> Open Hours</h5>
                    <p className="text-light m-0">4pm to 11pm</p>
                    <small className="text-muted">Monday - Sunday</small>
                  </div>
                  <div className="col-6 border-left border-secondary">
                    <h5 className="font-weight-bold" style={{ color: 'var(--color-primary)' }}><i className="fa-solid fa-location-dot mr-2"></i> Location</h5>
                    <p className="text-light m-0">Peshawar, PK</p>
                    <small className="text-muted">University Road</small>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="food_section layout_padding text-center">
        <div className="container">
          <div className="heading_container heading_center mb-5">
            <h2 className="font-weight-bold display-5">Explore Our <span style={{ color: 'var(--color-primary)' }}>Artisanal Menu</span></h2>
          </div>

          <div className="filters-container mb-5 overflow-auto pb-2">
            <ul className="filters_menu d-flex justify-content-center align-items-center mb-0 flex-nowrap" style={{ listStyle: 'none', padding: 0 }}>
              {categories.map(cat => (
                <motion.li 
                  key={cat} 
                  className={`mx-2 px-4 py-2 rounded-pill font-weight-bold`}
                  style={{ 
                    cursor: 'pointer', 
                    backgroundColor: filter === cat ? 'var(--color-primary)' : 'var(--color-slate-900)',
                    color: filter === cat ? '#fff' : '#fff',
                    boxShadow: filter === cat ? '0 10px 20px rgba(79, 70, 229, 0.4)' : 'none',
                    whiteSpace: 'nowrap'
                  }}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilter(cat)}
                >
                  {cat === '*' ? '🍽️ Full Menu' : <span>{cat.charAt(0).toUpperCase() + cat.slice(1)}</span>}
                </motion.li>
              ))}
            </ul>
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div 
              className="row g-4"
              layout
            >
              {filteredMenu.map(item => (
                <motion.div 
                  className="col-sm-6 col-lg-3 mb-4 text-start" 
                  key={item.id} 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <FoodCard food={item} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </motion.div>
  );
}

