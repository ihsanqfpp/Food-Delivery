import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function RestaurantCard({ restaurant }) {
  return (
    <motion.div 
      className="box h-100 d-flex flex-column"
      style={{ 
        borderRadius: '16px', 
        overflow: 'hidden', 
        background: 'var(--color-slate-900)',
        boxShadow: 'var(--shadow-diffuse)'
      }}
      whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0,0,0,0.12)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="img-box position-relative" style={{ height: '140px' }}>
        <img 
          src={`/${restaurant.image}`} 
          alt={restaurant.name} 
          className="w-100 h-100 object-fit-cover"
          loading="lazy"
        />
        <div className="position-absolute top-0 right-0 p-2">
          <span className="badge px-3 py-1 rounded-pill shadow-lg" style={{ background: 'var(--color-primary)', color: '#fff', fontWeight: '800', fontSize: '9px' }}>
            {restaurant.category.toUpperCase()}
          </span>
        </div>
      </div>
      <div className="detail-box p-2 d-flex flex-column flex-grow-1">
        <h6 className="mb-1 text-white font-weight-bold" style={{ fontSize: '1.1rem' }}>{restaurant.name}</h6>
        <p className="small flex-grow-1 text-muted mb-2 overflow-hidden" style={{ opacity: 0.7, lineHeight: '1.4', fontSize: '0.8rem', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical' }}>{restaurant.description}</p>
        <div className="options mt-auto d-flex justify-content-between align-items-center border-top border-secondary pt-2">
          <div className="rating">
             <span style={{ color: 'var(--color-indigo-400)', fontSize: '0.7rem' }}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
              <i className="fa-regular fa-star"></i>
            </span>
          </div>
          <h6 className="m-0 text-white font-weight-bold" style={{ fontSize: '0.8rem' }}>{restaurant.priceRange} avg.</h6>
        </div>
        <Link to={`/detail`} className="mt-2 text-decoration-none">
          <motion.button 
            className="btn w-100 py-1 font-weight-bold text-white shadow-lg" 
            style={{ 
              borderRadius: '8px', 
              border: 'none', 
              backgroundColor: 'var(--color-primary)',
              fontSize: '0.8rem'
            }}
            whileHover={{ backgroundColor: 'var(--color-primary-dark)', y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Menu
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );

}
