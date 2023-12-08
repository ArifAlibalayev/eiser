import React, { createContext, useState } from "react";

export const SearchContext = createContext();

function SearchProvider({ children }) {
  const [search, setSearch] = useState([]);

    function Search(item) {
        item 
    }


  return (
    <SearchContext.Provider value={WishlistValue}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchProvider;
