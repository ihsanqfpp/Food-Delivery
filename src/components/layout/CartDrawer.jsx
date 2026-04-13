import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '../../store/cartStore';

export default function CartDrawer({ isOpen, onClose }) {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCartStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className="cart-overlay position-fixed top-0 start-0 w-100 h-100"
            style={{ 
              backgroundColor: 'rgba(15, 23, 42, 0.4)', 
              backdropFilter: 'blur(8px)',
              zIndex: 1040 
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div 
            className="cart-drawer-panel position-fixed top-0 h-100 shadow-2xl p-4 d-flex flex-column"
            style={{ 
              width: '400px', 
              right: 0, 
              zIndex: 1050, 
              overflowY: 'auto', 
              background: 'var(--color-slate-900)', 
              color: '#fff',
              borderLeft: '1px solid var(--glass-border)' 
            }}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="cart-header d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom border-secondary">
              <h3 className="m-0 font-weight-bold" style={{ fontSize: '1.5rem' }}>
                 Your <span style={{ color: 'var(--color-primary)' }}>Selection</span>
              </h3>
              <motion.button 
                onClick={onClose} 
                className="btn btn-sm btn-link text-white p-0"
                whileHover={{ rotate: 90, scale: 1.2 }}
                style={{ textDecoration: 'none', fontSize: '1.5rem' }}
              >
                <i className="fa-solid fa-xmark"></i>
              </motion.button>
            </div>
            
            <div className="cart-items flex-grow-1 overflow-auto pe-2">
              {cartItems.length === 0 ? (
                <div className="text-center mt-5 py-5">
                   <div style={{ opacity: 0.2 }}>
                      <i className="fa-solid fa-cart-flatbed fa-5x mb-4"></i>
                   </div>
                  <h5 className="text-muted">Empty Cart</h5>
                  <p className="small text-muted px-4">Hungry? Discover our artisanal collection to get started!</p>
                </div>
              ) : (
                cartItems.map(item => (
                  <motion.div 
                    key={item.id} 
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="cart-item d-flex align-items-center mb-4 p-3 rounded-xl"
                    style={{ background: 'var(--color-slate-800)', border: '1px solid rgba(255,255,255,0.05)' }}
                  >
                    <img src={`/${item.image}`} alt={item.name} className="shadow-lg" style={{ width: '60px', height: '60px', objectFit: 'contain', background: '#fff', borderRadius: '12px', padding: '5px' }} />
                    <div className="item-details flex-grow-1 mx-3">
                      <h6 className="m-0 mb-1 font-weight-bold" style={{ fontSize: '1rem' }}>{item.name}</h6>
                      <p className="m-0 fw-bold" style={{ color: 'var(--color-indigo-400)' }}>${item.price.toFixed(2)}</p>
                      <div className="qty-controls d-flex align-items-center mt-2 bg-dark rounded-pill p-1 w-fit" style={{ width: 'fit-content' }}>
                        <button onClick={() => updateQuantity(item.id, -1)} className="btn btn-sm text-white px-2 py-0" style={{ boxShadow: 'none' }}>-</button>
                        <span className="mx-2 small font-weight-bold">{item.qty}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="btn btn-sm text-white px-2 py-0" style={{ boxShadow: 'none' }}>+</button>
                      </div>
                    </div>
                    <motion.button 
                      onClick={() => removeFromCart(item.id)} 
                      className="btn btn-sm btn-outline-danger border-0 rounded-circle"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(220, 38, 38, 0.1)' }}
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </motion.button>
                  </motion.div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="cart-footer mt-4 pt-4 border-top border-secondary">
                <div className="total d-flex justify-content-between align-items-center mb-4">
                  <span className="text-muted font-weight-bold">SUBTOTAL</span>
                  <span className="text-white font-weight-bold" style={{ fontSize: '1.5rem' }}>${getCartTotal().toFixed(2)}</span>
                </div>
                <motion.button 
                  className="btn w-100 fw-bold py-3 shadow-lg text-white" 
                  style={{ 
                    backgroundColor: 'var(--color-primary)', 
                    borderRadius: '12px', 
                    fontSize: '1.1rem',
                    border: 'none'
                  }}
                  whileHover={{ scale: 1.02, backgroundColor: 'var(--color-primary-light)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  Complete Checkout
                </motion.button>
                <p className="text-center small mt-3 text-muted">Secured payment processing</p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
