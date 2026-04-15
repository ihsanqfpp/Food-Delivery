import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <div className="hero_area">
      <div className="bg-box overflow-hidden">
        <motion.img 
          src="/assets/images/hero-bg.jpg" 
          alt="Hero Background" 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          style={{ filter: 'brightness(0.5)' }}
        />
      </div>
      <section className="slider_section">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-7">
              <div className="detail-box pt-5 mt-5">
                <motion.h1 
                  className="text-white mb-4 display-3 font-weight-bold"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  style={{ lineHeight: 1.1 }}
                >
                  Gourmet Meals <br />
                  <span style={{ color: 'var(--color-primary)' }}>Delivered</span> Faster.
                </motion.h1>
                <motion.p 
                  className="text-white mb-5 lead opacity-90"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  style={{ maxWidth: '500px' }}
                >
                   Experience the premium taste of local favorites delivered directly to your doorstep with speed and care. Your favorite food, just a click away.
                </motion.p>
                <motion.div 
                  className="btn-box"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Link to="/restaurants" style={{ textDecoration: 'none' }}>
                    <motion.span 
                      className="btn btn-lg rounded-pill px-5 py-3 text-white font-weight-bold shadow-2xl d-inline-block" 
                      style={{ 
                        backgroundColor: 'var(--color-primary)', 
                        border: 'none',
                        fontSize: '1.1rem'
                      }}
                      whileHover={{ scale: 1.05, backgroundColor: 'var(--color-primary-light)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Start Order
                    </motion.span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}
