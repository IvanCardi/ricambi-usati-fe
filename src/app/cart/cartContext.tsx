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

const dddd: CartItem[] = [
  {
    id: "1",
    name: "Serbatoio di espansione NISSAN QASHQAI II SUV (J11, J11_) 1.5 dCi sem ref visivel",
    imageUrl: "/cambio.png",
    price: 46.12,
    quantity: 1,
  },
  {
    id: "2",
    name: "Fanale anteriore dx Audi A3 8V",
    imageUrl: "/fanaleria_anteriore.png",
    price: 130,
    quantity: 1,
  },
  {
    id: "3",
    name: "Specchietto retrovisore esterno",
    imageUrl: "/specchietti_retrovisori.png",
    price: 35,
    quantity: 1,
  },
];

export const CartProvider = (props: PropsWithChildren) => {
  const [cart, setCart] = useState<CartItem[]>(dddd);

  // Load cart from localStorage on first render
  useEffect(() => {
    const storedCart = localStorage.getItem(CART_KEY);
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);
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
