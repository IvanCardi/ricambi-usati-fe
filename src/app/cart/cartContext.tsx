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

type CartContextType = {
  items: CarPart[];
  addToCart: (carPart: CarPart) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  isLoading: boolean;
};

const CartContext = createContext<CartContextType>({
  items: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  isLoading: true,
});

const CART_KEY = "my_cart";

export function CartProvider(props: PropsWithChildren) {
  const [cart, setCart] = useState<CarPart[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem(CART_KEY);
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

    setIsHydrated(true);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart, isHydrated]);

  const addToCart = (carPart: CarPart) => {
    const cartItem = cart.find((item) => item.id === carPart.id);

    if (!cartItem) {
      setCart((prev) => [...prev, carPart]);

      toast("L'articolo è stato aggiunto al carrello");
    }
  };

  const removeFromCart = (id: string) => {
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      setCart((prev) => prev.filter((item) => item.id !== id));

      toast("L'articolo è stato rimosso dal carrello", {
        action: {
          label: "Undo",
          onClick: () => addToCart(cartItem),
        },
      });
    }
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
        clearCart,
        isLoading,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
