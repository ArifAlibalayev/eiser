import React, { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalstorage";

export const WishlistContext = createContext();

function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useLocalStorage("wishlist", []);

  function AddToWishlist(item) {
    const itemIndex = wishlist.findIndex((x) => x.id === item.id);
    if (itemIndex === -1) {
      setWishlist([...wishlist, { ...item}]);
    } else {
        setWishlist(wishlist.filter((x) => x.id !== item.id))
    }
  }

  

  const WishlistValue = { wishlist, setWishlist, AddToWishlist };
  return (
    <WishlistContext.Provider value={WishlistValue}>
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistProvider;
