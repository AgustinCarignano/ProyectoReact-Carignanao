import { createContext, useState } from "react";

export const cartContext = createContext([]);

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(item, cant) {
    let auxCart = [...cart];
    let alreadyExist = auxCart.some((el) => el.id === item.id);
    if (alreadyExist) {
      auxCart.find((el) => el.id === item.id).cantidad = cant;
    } else {
      item.precioActual = item.price * (item.discount ? 1 - item.discount : 1);
      item.cantidad = cant;
      auxCart.push(item);
    }
    setCart(auxCart);
  }

  function totalItemsInCart() {
    return cart.reduce((sum, el) => sum + el.cantidad, 0);
  }

  function itemQuantity(item) {
    let init = cart.find((el) => el.id === item.id);
    return init ? init.cantidad : 1;
  }

  function cartTotalPrice() {
    return cart.reduce((sum, el) => sum + el.precioActual * el.cantidad, 0);
  }

  function deleteItem(id) {
    let auxCart = [...cart];
    let index = auxCart.findIndex((el) => el.id === id);
    auxCart.splice(index, 1);
    setCart(auxCart);
  }

  function cleanCart() {
    setCart([]);
  }

  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        totalItemsInCart,
        cartTotalPrice,
        deleteItem,
        cleanCart,
        itemQuantity,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
