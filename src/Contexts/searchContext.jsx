import { createContext, useState } from "react";

export const searchContext = createContext([]);

export function SearchContextProvider({ children }) {
  const [searchWord, setSearchWord] = useState("");
  const [newSearch, setNewSearch] = useState("");

  //Guarda los valores del input en un estado
  function handleOnChange(e) {
    setSearchWord(e.target.value);
  }

  //Guarda el valor final del input en un estado. La búsqueda se realiza al realizar el submit y no en cada cambio del valor del input
  function handleOnSubmit() {
    setNewSearch(searchWord);
  }

  return (
    <searchContext.Provider
      value={{ searchWord, newSearch, handleOnSubmit, handleOnChange }}
    >
      {children}
    </searchContext.Provider>
  );
}
