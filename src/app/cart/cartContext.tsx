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
import { getLoggedUser } from "@/lib/getLoggedUser";

type CartContextType = {
  items: CarPart[];
  addToCart: (carPart: CarPart) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  refreshUser: () => Promise<void>;
  isLoading: boolean;
  setOrderDraftId: (id: string | undefined) => void;
  getOrderDraftId: () => string | undefined;
};
interface LocalStorageCart {
  userId: string;
  orderDraftId: string | undefined;
  items: CarPart[];
}

const CartContext = createContext<CartContextType>({
  items: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  refreshUser: async () => {},
  isLoading: true,
  setOrderDraftId: () => {},
  getOrderDraftId: () => undefined,
});

const CART_KEY = "ricambi_usati_carts";

export function CartProvider(props: PropsWithChildren) {
  const [userId, setUserId] = useState<string | "GUEST">("GUEST");
  const [cart, setCart] = useState<CarPart[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    refreshUser();
    setIsLoading(false);
  }, []);

  // Load cart based on userId

  useEffect(() => {
    const savedCarts = localStorage.getItem(CART_KEY);
    const carts: LocalStorageCart[] = savedCarts ? JSON.parse(savedCarts) : [];

    const userCart = carts.find((c) => c.userId === userId);

    if (userCart) {
      setCart(userCart.items);
    } else {
      setCart([]);
    }
  }, [userId]);

  //Sync cart with localStorage

  useEffect(() => {
    const savedCarts = localStorage.getItem(CART_KEY);
    const carts: LocalStorageCart[] = savedCarts ? JSON.parse(savedCarts) : [];

    const existingUserCartIndex = carts.findIndex((c) => c.userId === userId);

    const updatedUserCart: LocalStorageCart = {
      userId,
      items: cart,
      orderDraftId: carts[existingUserCartIndex]?.orderDraftId ?? undefined,
    };

    if (existingUserCartIndex !== -1) {
      carts[existingUserCartIndex] = updatedUserCart;
    } else {
      carts.push(updatedUserCart);
    }

    localStorage.setItem(CART_KEY, JSON.stringify(carts));
  }, [cart]);

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

  const setOrderDraftId = (id: string | undefined) => {
    const savedCarts = localStorage.getItem(CART_KEY);
    const carts: LocalStorageCart[] = savedCarts ? JSON.parse(savedCarts) : [];

    const existingUserCartIndex = carts.findIndex((c) => c.userId === userId);

    if (existingUserCartIndex !== -1) {
      carts[existingUserCartIndex] = {
        userId,
        items: cart,
        orderDraftId: id,
      };

      localStorage.setItem(CART_KEY, JSON.stringify(carts));
    }
  };

  const getOrderDraftId = () => {
    const savedCarts = localStorage.getItem(CART_KEY);
    const carts: LocalStorageCart[] = savedCarts ? JSON.parse(savedCarts) : [];

    const existingUserCart = carts.find((c) => c.userId === userId);

    if (existingUserCart) {
      return existingUserCart.orderDraftId;
    }

    return undefined;
  };

  async function refreshUser() {
    try {
      const user = await getLoggedUser();
      setUserId(user?.userId ?? "GUEST");
    } catch (error) {
      console.error("Error fetching user:", error);
      setUserId("GUEST");
    }
  }

  return (
    <CartContext.Provider
      value={{
        items: cart,
        addToCart,
        removeFromCart,
        clearCart,
        refreshUser,
        isLoading,
        setOrderDraftId,
        getOrderDraftId,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
