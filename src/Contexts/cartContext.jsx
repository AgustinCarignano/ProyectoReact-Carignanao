import { createContext, useState } from "react";

export const cartContext = createContext([]);

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  //Agrega un item al carrito, agregandole la propiedad "cantidad". Si ya existe, solo modifica la cantidad del item en el carrito
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
    localStorageCart(auxCart);
  }

  //Obtiene la cantidad de productos (distintos o iguales) en el carrito
  function totalItemsInCart() {
    return cart.reduce((sum, el) => sum + el.cantidad, 0);
  }

  //Obtiene la cantidad del item en el carrito para iniciar el "itemCount" con este valor si es que ya está cargado en el carrito
  function itemQuantity(item) {
    let init = cart.find((el) => el.id === item.id);
    return init ? init.cantidad : 1;
  }

  //Obtiene el valor total de los items en el carrito
  function cartTotalPrice() {
    return cart.reduce((sum, el) => sum + el.precioActual * el.cantidad, 0);
  }

  //Elimina un item del carrito
  function deleteItem(id) {
    let auxCart = [...cart];
    let index = auxCart.findIndex((el) => el.id === id);
    auxCart.splice(index, 1);
    setCart(auxCart);
    localStorageCart(auxCart);
  }

  //Elimina todos los elementos del carrito
  function cleanCart() {
    setCart([]);
    localStorageCart([]);
  }

  //función para almacenar en la memoria de la sesión los elementos cargados al carrito
  function localStorageCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
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
