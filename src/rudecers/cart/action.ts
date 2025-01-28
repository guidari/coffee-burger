import { ICoffeeCart, ICuisineCart } from "../../context/ShoppingCartContext";

export enum ActionTypes {
  ADD_NEW_COFFEE = "ADD_NEW_COFFEE",
  ADD_NEW_CUISINE = "ADD_NEW_CUISINE",
  REMOVE_COFFEE = "REMOVE_COFFEE",
  INSERT_MORE_COFFEE = "INSERT_MORE_COFFEE",
}

export function addNewCoffeeAction(coffee: ICoffeeCart) {
  return {
    type: "ADD_NEW_COFFEE",
    payload: {
      coffee,
    },
  };
}

export function addNewCuisineAction(cuisine: ICuisineCart) {
  return {
    type: "ADD_NEW_CUISINE",
    payload: {
      cuisine,
    },
  };
}

export function removeCoffeeAction(id: string) {
  return {
    type: "REMOVE_COFFEE",
    payload: {
      id,
    },
  };
}

export function insertMoreCoffeeAction(
  id: string,
  count: number,
  numberCount: number
) {
  return {
    type: "INSERT_MORE_COFFEE",
    payload: {
      id,
      count,
      numberCount,
    },
  };
}
