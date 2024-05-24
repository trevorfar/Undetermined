// add items
// remove items
// clear cart
// ?keep track of cart state 
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export type CartItem = {
    product: number
}

type CartState = {
    items: CartItem[]
    addItem: (product: number) => void
    removeItem: (productId: string) => void
    clearCart: () => void
}

export const useCart = create<CartState>()(
    persist(
      (set) => ({
        items: [],
        addItem: (product) =>
          set((state) => {
            return { items: [...state.items, { product }] }
          }),
        removeItem: (id) =>
          set((state) => ({
            items: state.items.filter(
              (item) => item.product.id !== id
            ),
          })),
        clearCart: () => set({ items: [] }),
      }),
      {
        name: 'cart-storage',
        storage: createJSONStorage(() => localStorage),
      }
    )
  )