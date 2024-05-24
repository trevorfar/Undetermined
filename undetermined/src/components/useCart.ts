import { CartItem, Product } from "@/lib/utils";
import { useState } from "react";


export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addItemToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.product.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { product, quantity: 1 }];
    });
  };

  return {
    cartItems,
    addItemToCart,
  };
};
