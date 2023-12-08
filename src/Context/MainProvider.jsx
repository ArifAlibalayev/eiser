import React, { createContext } from 'react'

export const Maincontext = createContext();

function MainProvider({ children }) {
  const [wishlist, setWishlist] = useLocalStorage("wishlist", []);

  


  const MainValue = {};
  return (
    <Maincontext.Provider value={MainValue}>
      {children}
    </Maincontext.Provider>
  );
}



export default MainProvider