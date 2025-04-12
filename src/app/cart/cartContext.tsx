"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  PropsWithChildren,
} from "react";
import { CarPart } from "../shop/page";
import { toast } from "sonner";

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
    if (typeof window !== "undefined") {
      // We are in the browser
      const savedCart = localStorage.getItem(CART_KEY);
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

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

    toast("L'articolo è stato aggiunto al carrello", {
      action: {
        label: "Undo",
        onClick: () => removeFromCart(carPart.id),
      },
    });
  };

  const removeFromCart = (id: string) => {
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      setCart((prev) =>
        cartItem.quantity > 1
          ? prev.map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
          : prev.filter((item) => item.id !== id)
      );

      toast("L'articolo è stato rimosso dal carrello", {
        action: {
          label: "Undo",
          onClick: () => addToCart(cartItem),
        },
      });
    }
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
