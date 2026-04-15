
import { motion } from 'framer-motion';

export default function Profile() {
  const recentOrders = [
    { id: 'ORD-1293', date: 'Oct 12, 2026', total: 42.50, status: 'Delivered', items: '2x Truffle Burger, 1x Fries' },
    { id: 'ORD-1288', date: 'Oct 08, 2026', total: 18.25, status: 'Processing', items: '1x Margherita Pizza' },
  ];

  return (
    <div className="profile_section layout_padding text-white min-vh-100" style={{ background: 'var(--color-slate-950)', marginTop: '80px' }}>
      <div className="container">
        <div className="row g-4">
          {/* Header */}
          <div className="col-12 mb-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="d-flex align-items-center"
            >
              <div className="profile-img mr-4" style={{ position: 'relative' }}>
                <img src="/assets/images/client1.jpg" alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%', border: '4px solid var(--color-primary)' }} />
                <button className="btn btn-primary rounded-circle position-absolute" style={{ bottom: '0', right: '0', padding: '5px 8px' }}>
                  <i className="fa-solid fa-camera" style={{ fontSize: '12px' }}></i>
                </button>
              </div>
              <div>
                <h2 className="font-weight-bold mb-1">Harsh Patel</h2>
                <span className="badge px-3 py-1 rounded-pill mb-2" style={{ background: 'linear-gradient(45deg, #FFD700, #FFA500)', color: '#000', fontWeight: '800' }}>GOLD MEMBER</span>
                <p className="text-muted small m-0">Member since January 2024</p>
              </div>
            </motion.div>
          </div>

          {/* Sidebar Info */}
          <div className="col-lg-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-2xl h-100 border border-secondary"
              style={{ background: 'var(--color-slate-900)' }}
            >
              <h5 className="font-weight-bold mb-4">Account Settings</h5>
              <div className="setting-item d-flex align-items-center mb-4 p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <i className="fa-solid fa-user-gear mr-3 text-primary"></i>
                <div className="flex-grow-1">
                  <p className="m-0 font-weight-bold small">Personal Information</p>
                  <p className="m-0 text-muted extra-small">Update your name and phone</p>
                </div>
                <i className="fa-solid fa-chevron-right text-muted small"></i>
              </div>
              <div className="setting-item d-flex align-items-center mb-4 p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <i className="fa-solid fa-location-dot mr-3 text-primary"></i>
                <div className="flex-grow-1">
                  <p className="m-0 font-weight-bold small">My Addresses</p>
                  <p className="m-0 text-muted extra-small">3 Saved locations</p>
                </div>
                <i className="fa-solid fa-chevron-right text-muted small"></i>
              </div>
              <div className="setting-item d-flex align-items-center mb-4 p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <i className="fa-solid fa-credit-card mr-3 text-primary"></i>
                <div className="flex-grow-1">
                  <p className="m-0 font-weight-bold small">Payment Methods</p>
                  <p className="m-0 text-muted extra-small">Mastercard ending in 4242</p>
                </div>
                <i className="fa-solid fa-chevron-right text-muted small"></i>
              </div>
            </motion.div>
          </div>

          {/* Main Content: Orders */}
          <div className="col-lg-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-4 rounded-2xl h-100 border border-secondary"
              style={{ background: 'var(--color-slate-900)' }}
            >
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="font-weight-bold m-0">Recent Orders</h5>
                <button className="btn btn-link p-0 text-primary font-weight-bold">View All</button>
              </div>

              {recentOrders.map((order, idx) => (
                <div key={order.id} className="order-card p-4 rounded-xl mb-4 border border-secondary" style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                      <p className="m-0 font-weight-bold text-primary">{order.id}</p>
                      <p className="m-0 text-muted extra-small">{order.date}</p>
                    </div>
                    <span className={`badge px-3 py-1 rounded-pill ${order.status === 'Delivered' ? 'bg-success text-white' : 'bg-primary text-white'}`} style={{ fontSize: '10px' }}>
                      {order.status}
                    </span>
                  </div>
                  <p className="small mb-3">{order.items}</p>
                  <div className="d-flex justify-content-between align-items-baseline pt-3 border-top border-secondary">
                    <p className="m-0 text-muted small">Total: <span className="text-white font-weight-bold">${order.total.toFixed(2)}</span></p>
                    <button className="btn btn-sm btn-outline-primary rounded-pill px-4">Reorder</button>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        .extra-small { font-size: 0.75rem }
        .rounded-2xl { border-radius: 1.5rem }
        .rounded-xl { border-radius: 1rem }
      `}</style>
    </div>
  );
}
