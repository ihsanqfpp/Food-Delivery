import React from 'react';
import { motion } from 'framer-motion';
import RestaurantCard from '../ui/RestaurantCard';
import restaurantsData from '../../data/restaurants.json';

export default function FeaturedRestaurants() {
  // Show only top 4
  const restaurants = restaurantsData.slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="offer_section layout_padding-bottom mt-5">
      <div className="offer_container">
        <div className="container">
          <div className="heading_container heading_center mb-5">
            <motion.h2 
              className="font-weight-bold display-4" 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ color: 'var(--color-slate-900)' }}
            >
              Our <span style={{ color: 'var(--color-primary)' }}>Featured</span> Destinations
            </motion.h2>
            <p className="text-muted">Handpicked top-rated culinary spots just for you</p>
          </div>
          
          <motion.div 
            className="row g-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {restaurants.map(restaurant => (
              <motion.div className="col-sm-6 col-lg-3 mb-4" key={restaurant.id} variants={itemVariants}>
                <RestaurantCard restaurant={restaurant} />
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
