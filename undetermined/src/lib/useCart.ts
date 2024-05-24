import { Product } from "@/lib/utils"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import { v4 as uuidv4 } from 'uuid';

export type CartItem = {
    product: Product
}

type CartState = {
    items: CartItem[]
    addItem: (product: Product) => void
    removeItem: (productId: string) => void
    clearCart: () => void
}

export const useCart = create<CartState>()(
    persist(
      (set) => ({
        items: [],
        addItem: (product) =>
          set((state) => ({
            items: [...state.items, { product: { ...product, id: uuidv4() } }],
          })),
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