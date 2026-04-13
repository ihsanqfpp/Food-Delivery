import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RestaurantCard from '../components/ui/RestaurantCard';
import useDebounce from '../hooks/useDebounce';
import restaurantsData from '../data/restaurants.json';

export default function RestaurantList() {
  const [filter, setFilter] = useState('*');
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 300);

  const restaurants = restaurantsData;

  const categories = ['*', 'italian', 'chinese', 'indian', 'pakistani'];

  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesFilter = filter === '*' || restaurant.category === filter;
    const matchesSearch = restaurant.name.toLowerCase().includes(debouncedSearch.toLowerCase()) || 
                          restaurant.category.toLowerCase().includes(debouncedSearch.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <motion.section 
      className="food_section layout_padding text-center min-vh-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ marginTop: '80px' }}
    >
      <div className="container">
        <div className="heading_container heading_center mb-5">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-weight-bold display-4"
          >
            Explore <span style={{ color: 'var(--color-primary)' }}>Elite Dining</span>
          </motion.h2>
          <p className="text-muted">Curated collection of the finest culinary destinations</p>
        </div>

        <div className="row justify-content-center mb-5">
          <div className="col-md-7">
            <div className="search-wrapper position-relative">
              <input 
                type="text" 
                className="form-control rounded-pill px-5 py-3" 
                placeholder="Search flavors, vibes, or specific gems..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ 
                  border: '1px solid #e2e8f0', 
                  boxShadow: 'var(--shadow-diffuse)',
                  fontSize: '1.1rem'
                }}
              />
              <i className="fa-solid fa-magnifying-glass position-absolute" style={{ left: '20px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-primary)' }}></i>
            </div>
          </div>
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
                {cat === '*' ? '🌍 All Cuisines' : <span>{cat.charAt(0).toUpperCase() + cat.slice(1)}</span>}
              </motion.li>
            ))}
          </ul>
        </div>

        <AnimatePresence mode="popLayout">
          {filteredRestaurants.length === 0 ? (
            <motion.div 
              key="no-results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="py-5 text-center"
            >
              <div style={{ opacity: 0.2 }}>
                <i className="fa-solid fa-cloud-moon fa-5x mb-4"></i>
              </div>
              <h4 className="text-muted">No matches found for your cravings.</h4>
              <p className="small text-muted">Try searching for something else or clearing filters!</p>
            </motion.div>
          ) : (
            <motion.div 
              className="row g-4"
              layout
            >
              {filteredRestaurants.map(restaurant => (
                <motion.div 
                  className="col-sm-6 col-md-4 col-lg-3 mb-4 text-start" 
                  key={restaurant.id} 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <RestaurantCard restaurant={restaurant} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

