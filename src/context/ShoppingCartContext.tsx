import { createContext, ReactNode, useReducer, useState } from "react";
import {
  addNewCoffeeAction,
  addNewCuisineAction,
  insertMoreCoffeeAction,
  removeCoffeeAction,
} from "../rudecers/cart/action";
import cartReducer from "../rudecers/cart/reducer";

interface ShoppingCartProviderProps {
  children: ReactNode;
}

export interface ICoffeeCart {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
  quantity: number;
}

export interface ICuisineCart {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
  quantity: number;
}

interface ShoppingCartContextData {
  cart: ICoffeeCart[];
  addCoffeeToCart: (coffee: ICoffeeCart) => void;
  addCuisineToCart: (coffee: ICuisineCart) => void;
  removeCoffee: (id: string) => void;
  insertMoreCoffee: (id: string, count: number, numberCount: number) => void;
}

export const ShoppingCartContext = createContext<ShoppingCartContextData>(
  {} as ShoppingCartContextData
);

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  function addCoffeeToCart(coffee: ICoffeeCart) {
    dispatch(addNewCoffeeAction(coffee));
  }

  function addCuisineToCart(cuisine: ICuisineCart) {
    dispatch(addNewCuisineAction(cuisine));
  }

  function removeCoffee(id: string) {
    dispatch(removeCoffeeAction(id));
  }

  function insertMoreCoffee(id: string, count: number, numberCount: number) {
    dispatch(insertMoreCoffeeAction(id, count, numberCount));
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        addCoffeeToCart,
        addCuisineToCart,
        removeCoffee,
        insertMoreCoffee,
        // updateCounOfProduct,
        // clearCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
