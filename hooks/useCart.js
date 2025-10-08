import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCart = create(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      // Open/Close cart
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

      // Add item to cart
      addItem: (product) => {
        const items = get().items;
        const existingItem = items.find((item) => item.id === product.id);

        if (existingItem) {
          set({
            items: items.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({ items: [...items, { ...product, quantity: 1 }] });
        }
      },

      // Remove item from cart
      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },

      // Update item quantity
      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        }));
      },

      // Increment quantity
      incrementQuantity: (id) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        }));
      },

      // Decrement quantity
      decrementQuantity: (id) => {
        const item = get().items.find((item) => item.id === id);
        if (item && item.quantity > 1) {
          set((state) => ({
            items: state.items.map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            ),
          }));
        } else {
          get().removeItem(id);
        }
      },

      // Clear cart
      clearCart: () => set({ items: [] }),

      // Get cart total
      getTotal: () => {
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },

      // Get cart count
      getItemCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0);
      },
    }),
    {
      name: 'jewelry-cart',
    }
  )
);

export default useCart;