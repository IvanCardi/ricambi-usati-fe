"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  PropsWithChildren,
} from "react";
import { CarPart } from "../shop/page";

export interface CartItem extends CarPart {
  quantity: number;
}

type CartContextType = {
  items: CartItem[];
  addToCart: (carPart: CarPart) => void;
  removeFromCart: (id: string) => void;
  decrementItem: (id: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType>({
  items: [],
  addToCart: () => {},
  removeFromCart: () => {},
  decrementItem: () => {},
  clearCart: () => {},
});

const CART_KEY = "my_cart";

export const CartProvider = (props: PropsWithChildren) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    console.log("Running expensive calculation...");
    const savedCart = localStorage.getItem(CART_KEY);
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Load cart from localStorage on first render

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (carPart: CarPart) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === carPart.id);

      if (existing) {
        return prev.map((item) =>
          item.id === carPart.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...carPart, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const decrementItem = (id: string) => {
    setCart((prev) => {
      return prev.map((item) => {
        if (item.id === id && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        items: cart,
        addToCart,
        removeFromCart,
        decrementItem,
        clearCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
