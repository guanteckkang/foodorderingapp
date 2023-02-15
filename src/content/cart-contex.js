import { useContext, useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { item } from "./item";

export const cartcontext = createContext();

export function CartContextProvider({ children }) {
  const [menu, setMenu] = useState(item); //the main menu
  const [cart, setCart] = useState([]); //the cart list

  const [isValid, setIsValid] = useState(false);
  const showmodal = () => {
    setIsValid(true);
  };
  const hidemodal = () => {
    setIsValid(false);
  };

  function addItem({ name, price }) {
    const selectedItem = {
      name: name,
      price: price,
      quantity: 1,
      sum: price,
    };
    const findItem = cart.findIndex((e) => {
      return e.name == name;
    });
    if (findItem === -1) {
      setCart((prev) => [...prev, selectedItem]);
    } else {
      const updatedCart = cart.map((each, i) => {
        if (i === findItem) {
          return {
            ...each,
            quantity: each?.quantity + 1,
            sum: each?.sum + price,
          };
        } else return each;
      });
      setCart(updatedCart);
    }
    console.table(cart);
  }

  function removeItem({ name, price }) {
    const findItem = cart.findIndex((e) => {
      return e.name == name;
    });
    const updatedCart = cart.map((each, i) => {
      if (i === findItem) {
        return {
          ...each,
          quantity: each?.quantity - 1,
          sum: each?.sum - price,
        };
      } else return each;
    });
    if (updatedCart[findItem].quantity === 0) {
      updatedCart.splice(findItem, 1);
    }
    setCart(updatedCart);
  }

  let value = {
    menu,
    setMenu,
    isValid,
    setIsValid,
    showmodal,
    hidemodal,
    cart,
    setCart,
    addItem,
    removeItem,
  };
  return <cartcontext.Provider value={value}>{children}</cartcontext.Provider>;
}

export function CartUseContext() {
  return useContext(cartcontext);
}
