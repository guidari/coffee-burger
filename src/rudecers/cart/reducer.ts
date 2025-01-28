import { ICoffeeCart } from "../../context/ShoppingCartContext";
import { ActionTypes } from "./action";

interface ShoppingCartContextData {
  cart: ICoffeeCart[];
  addCoffeeToCart: (coffee: ICoffeeCart) => void;
}

export default function cartReducer(state: ICoffeeCart[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE:
      return [...state, action.payload.coffee];

    case ActionTypes.ADD_NEW_CUISINE:
      return [...state, action.payload.cuisine];

    case ActionTypes.REMOVE_COFFEE:
      const newState = state.filter((c) => c.id !== action.payload.id);
      return newState;

    case ActionTypes.INSERT_MORE_COFFEE:
      // State without the action.payload.id
      // const oldState = state.filter((item) => item.id !== action.payload.id);

      // const coffeeItem = state.filter((item) => item.id === action.payload.id);

      // const newCoffee = Object.assign(coffeeItem, {
      //   quantity: (coffeeItem[0].quantity = action.payload.count + 1),
      // });

      // const moreCoffee = [...oldState, newCoffee[0]];

      // return moreCoffee;

      const elementIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );

      const newArray = [...state];
      newArray[elementIndex] = {
        ...newArray[elementIndex],
        quantity: action.payload.count + action.payload.numberCount,
      };
      return newArray;
    default:
      return state;
  }
}
