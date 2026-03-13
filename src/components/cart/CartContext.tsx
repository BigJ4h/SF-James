"use client";

import { createContext, useContext, useMemo, useReducer } from "react";

export type Category = "cap" | "shirt" | "jean" | "singlet";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  images?: string[];
  isCustomName?: boolean;
};

export type CartItem = {
  product: Product;
  quantity: number;
  customName?: string;
};

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: "ADD"; item: CartItem }
  | { type: "REMOVE"; productId: string; customName?: string }
  | { type: "CLEAR" }
  | { type: "UPDATE_QTY"; productId: string; customName?: string; quantity: number };

const CartContext = createContext<{
  state: CartState;
  addToCart: (product: Product, quantity?: number, customName?: string) => void;
  removeFromCart: (productId: string, customName?: string) => void;
  updateQuantity: (productId: string, quantity: number, customName?: string) => void;
  clearCart: () => void;
  total: number;
}>({
  state: { items: [] },
  addToCart: () => undefined,
  removeFromCart: () => undefined,
  updateQuantity: () => undefined,
  clearCart: () => undefined,
  total: 0
});

function matchKey(item: CartItem, productId: string, customName?: string) {
  return (
    item.product.id === productId &&
    (item.product.isCustomName ? item.customName === customName : true)
  );
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD": {
      const existingIndex = state.items.findIndex((item) =>
        matchKey(item, action.item.product.id, action.item.customName)
      );
      if (existingIndex >= 0) {
        const updated = [...state.items];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + action.item.quantity
        };
        return { items: updated };
      }
      return { items: [...state.items, action.item] };
    }
    case "REMOVE": {
      return {
        items: state.items.filter((item) => !matchKey(item, action.productId, action.customName))
      };
    }
    case "UPDATE_QTY": {
      return {
        items: state.items.map((item) =>
          matchKey(item, action.productId, action.customName)
            ? { ...item, quantity: action.quantity }
            : item
        )
      };
    }
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const total = useMemo(
    () => state.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    [state.items]
  );

  const value = useMemo(
    () => ({
      state,
      addToCart: (product: Product, quantity = 1, customName?: string) =>
        dispatch({ type: "ADD", item: { product, quantity, customName } }),
      removeFromCart: (productId: string, customName?: string) =>
        dispatch({ type: "REMOVE", productId, customName }),
      updateQuantity: (productId: string, quantity: number, customName?: string) =>
        dispatch({ type: "UPDATE_QTY", productId, customName, quantity }),
      clearCart: () => dispatch({ type: "CLEAR" }),
      total
    }),
    [state, total]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}

