
import { motion } from 'framer-motion';
import { useCartStore } from '../../store/cartStore';
import { toast } from 'react-hot-toast';

export default function FoodCard({ food }) {
  const addToCart = useCartStore(state => state.addToCart);

  const handleAdd = () => {
    addToCart({ ...food, qty: 1 });
    toast.success(`${food.name} added to cart!`);
  };

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
      <div className="img-box position-relative" style={{ height: '130px', backgroundColor: '#f1f5f9' }}>
        <img 
          src={`/${food.image}`} 
          className="img-fluid w-100 h-100 object-fit-contain p-2" 
          alt={food.name} 
          loading="lazy" 
        />
        <div className="position-absolute top-0 right-0 p-1">
           <span className="badge px-2 rounded-pill shadow-sm" style={{ backgroundColor: 'var(--color-primary)', color: '#fff', fontSize: '8px', fontWeight: '800' }}>
              {food.category.toUpperCase()}
           </span>
        </div>
      </div>
      <div className="detail-box p-2 d-flex flex-column flex-grow-1 text-center">
        <h6 className="mb-1 text-white font-weight-bold" style={{ fontSize: '1rem' }}>{food.name}</h6>
        <p className="small mb-2 text-muted flex-grow-1" style={{ opacity: 0.8, fontSize: '0.75rem', lineHeight: '1.3' }}>{food.description}</p>
        <div className="d-flex justify-content-between align-items-center mt-auto border-top border-secondary pt-2">
          <h6 className="m-0 font-weight-bold" style={{ fontSize: '1.1rem', color: 'var(--color-indigo-400)' }}>${food.price.toFixed(2)}</h6>
          <motion.button 
            className="btn rounded-circle d-flex align-items-center justify-content-center shadow-lg" 
            style={{ width: '32px', height: '32px', backgroundColor: 'var(--color-primary)', border: 'none' }}
            onClick={handleAdd}
            whileHover={{ scale: 1.1, backgroundColor: 'var(--color-primary-light)' }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fa-solid fa-plus text-white font-weight-bold" style={{ fontSize: '0.8rem' }}></i>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );

}
