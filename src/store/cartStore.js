import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: [],
      
      addToCart: (item) => {
        set((state) => {
          const existingItem = state.cartItems.find(i => i.id === item.id);
          if (existingItem) {
            return {
              cartItems: state.cartItems.map(i => 
                i.id === item.id ? { ...i, qty: i.qty + 1 } : i
              )
            };
          }
          return { cartItems: [...state.cartItems, { ...item, qty: 1 }] };
        });
      },

      removeFromCart: (id) => {
        set((state) => ({
          cartItems: state.cartItems.filter(item => item.id !== id)
        }));
      },

      updateQuantity: (id, amount) => {
        set((state) => ({
          cartItems: state.cartItems.map(item => {
            if (item.id === id) {
              const newQty = item.qty + amount;
              return newQty > 0 ? { ...item, qty: newQty } : item;
            }
            return item;
          })
        }));
      },

      clearCart: () => set({ cartItems: [] }),

      getCartTotal: () => {
        return get().cartItems.reduce((total, item) => total + (item.price * item.qty), 0);
      },
      
      getCartCount: () => {
        return get().cartItems.reduce((total, item) => total + item.qty, 0);
      }
    }),
    {
      name: 'food-delivery-cart',
      version: 1,
    }
  )
);
