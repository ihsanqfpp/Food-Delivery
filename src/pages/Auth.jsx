import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth_section layout_padding text-white d-flex align-items-center justify-content-center" 
         style={{ minHeight: '100vh', background: 'var(--color-slate-900)', marginTop: '80px' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <motion.div 
              layout
              className="auth-card p-4 p-md-5 shadow-2xl rounded-2xl border border-secondary"
              style={{ background: 'rgba(30, 41, 59, 0.7)', backdropFilter: 'blur(12px)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="text-center mb-5">
                <Link className="navbar-brand d-inline-block mb-3" to="/">
                  <span className="logo dancing-script" style={{ fontSize: '2.5rem' }}>FoodFlow</span>
                </Link>
                <h3 className="font-weight-bold">{isLogin ? 'Welcome Back' : 'Create Account'}</h3>
                <p className="text-muted small">Join our community of artisanal food lovers</p>
              </div>

              <AnimatePresence mode="wait">
                <motion.form 
                  key={isLogin ? 'login' : 'signup'}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {!isLogin && (
                    <div className="form-group mb-4">
                      <label className="small font-weight-bold opacity-75">FULL NAME</label>
                      <input type="text" className="form-control bg-dark border-secondary text-white py-3 rounded-lg" placeholder="John Doe" style={{ fontSize: '0.9rem' }} />
                    </div>
                  )}
                  <div className="form-group mb-4">
                    <label className="small font-weight-bold opacity-75">EMAIL ADDRESS</label>
                    <input type="email" className="form-control bg-dark border-secondary text-white py-3 rounded-lg" placeholder="your@email.com" style={{ fontSize: '0.9rem' }} />
                  </div>
                  <div className="form-group mb-5">
                    <div className="d-flex justify-content-between">
                      <label className="small font-weight-bold opacity-75">PASSWORD</label>
                      {isLogin && <a href="#forgot" className="small text-primary font-weight-bold">Forgot?</a>}
                    </div>
                    <input type="password" className="form-control bg-dark border-secondary text-white py-3 rounded-lg" placeholder="••••••••" style={{ fontSize: '0.9rem' }} />
                  </div>

                  <button className="btn btn-primary w-100 py-3 font-weight-bold shadow-lg mb-4" style={{ borderRadius: '12px' }}>
                    {isLogin ? 'Sign In' : 'Get Started'}
                  </button>
                </motion.form>
              </AnimatePresence>

              <div className="text-center mb-4">
                <span className="small text-muted d-flex align-items-center justify-content-center">
                  <span className="border-top border-secondary flex-grow-1 mr-3"></span>
                  OR CONTINUE WITH
                  <span className="border-top border-secondary flex-grow-1 ml-3"></span>
                </span>
              </div>

              <div className="row g-3 mb-4">
                <div className="col-6">
                  <button className="btn btn-outline-secondary w-100 py-2 d-flex align-items-center justify-content-center" style={{ borderRadius: '12px' }}>
                    <i className="fa-brands fa-google mr-2"></i> <span className="small">Google</span>
                  </button>
                </div>
                <div className="col-6">
                  <button className="btn btn-outline-secondary w-100 py-2 d-flex align-items-center justify-content-center" style={{ borderRadius: '12px' }}>
                    <i className="fa-brands fa-apple mr-2"></i> <span className="small">Apple</span>
                  </button>
                </div>
              </div>

              <div className="text-center mt-5">
                <p className="small text-muted mb-0">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                  <button 
                    onClick={() => setIsLogin(!isLogin)}
                    className="btn btn-link p-0 text-primary font-weight-bold" 
                    style={{ textDecoration: 'none', verticalAlign: 'baseline' }}
                  >
                    {isLogin ? 'Sign Up' : 'Log In'}
                  </button>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
