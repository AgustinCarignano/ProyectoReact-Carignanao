import { createContext, useState } from "react";

export const searchContext = createContext([]);

export function SearchContextProvider({ children }) {
  const [searchWord, setSearchWord] = useState("");
  const [newSearch, setNewSearch] = useState("");

  function handleOnChange(e) {
    setSearchWord(e.target.value);
  }

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
