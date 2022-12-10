import { createContext, useState } from "react";

export const favContext = createContext([]);

export function FavContextProvider({ children }) {
  const [favList, setFavList] = useState(
    JSON.parse(localStorage.getItem("favList")) || []
  );

  //Agregar o quitar de favoritos un producto.
  function putInFav(product) {
    let auxFavList = [...favList];
    let isInFav = auxFavList.some((el) => el.id === product.id);
    if (!isInFav) {
      auxFavList.push(product);
    } else {
      let index = auxFavList.findIndex((el) => el.id === product.id);
      auxFavList.splice(index, 1);
    }
    setFavList(auxFavList);
    localStorageCart(auxFavList);
  }

  //función para almacenar en la memoria de la sesión los elementos agregados a favoritos
  function localStorageCart(list) {
    localStorage.setItem("favList", JSON.stringify(list));
  }

  return (
    <favContext.Provider value={{ favList, putInFav }}>
      {children}
    </favContext.Provider>
  );
}
