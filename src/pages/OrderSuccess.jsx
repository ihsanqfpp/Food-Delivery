
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function OrderSuccess() {
  return (
    <div className="success_section layout_padding d-flex align-items-center justify-content-center text-white" 
         style={{ minHeight: '100vh', background: 'var(--color-slate-950)', marginTop: '80px' }}>
      <div className="container text-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          className="p-5 rounded-2xl border border-secondary"
          style={{ background: 'var(--color-slate-900)', maxWidth: '600px', margin: '0 auto' }}
        >
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4 d-inline-block"
          >
            <div className="success-icon p-4 rounded-circle mb-4" 
                 style={{ background: 'rgba(34, 197, 94, 0.1)', border: '2px solid rgba(34, 197, 94, 0.5)' }}>
              <i className="fa-solid fa-check fa-4x text-success"></i>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-weight-bold mb-3"
          >
            Order <span style={{ color: 'var(--color-primary)' }}>Confirmed!</span>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-muted mb-5"
          >
            Your delicious meal is being prepared by our elite chefs. <br />
            Estimated delivery: <strong>25-35 minutes</strong>.
          </motion.p>

          <motion.div 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="order-summary p-4 rounded-xl mb-5 text-start"
            style={{ background: 'rgba(255,255,255,0.03)' }}
          >
            <div className="d-flex justify-content-between mb-2">
              <span className="small text-muted">Order ID:</span>
              <span className="small font-weight-bold text-white">#VFC-8829</span>
            </div>
            <div className="d-flex justify-content-between">
              <span className="small text-muted">Estimated Prep:</span>
              <span className="small font-weight-bold text-white">12 minutes</span>
            </div>
          </motion.div>

          <div className="row g-3">
            <div className="col-6">
              <Link to="/profile" className="btn btn-outline-secondary w-100 py-3 font-weight-bold rounded-pill">
                Track Order
              </Link>
            </div>
            <div className="col-6">
              <Link to="/" className="btn btn-primary w-100 py-3 font-weight-bold shadow-lg rounded-pill" style={{ border: 'none' }}>
                Back Home
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
