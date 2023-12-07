import React, { createContext, useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalstorage';

export const BasketContext = createContext();

function BasketProvider({children}) {
  const [basket, setBasket] = useLocalStorage("basket",[]);

  

  function AddToBasket(item) {
    const itemIndex = basket.findIndex((x)=> x.id === item.id);

    if (itemIndex === -1) {
      setBasket([...basket, { ...item, count: 1 }]);
    } else {
      const updatedBasket = [...basket];
      updatedBasket[itemIndex].count++;
      setBasket(updatedBasket);
    }
}

function DeleteItem(item) {
  setBasket(basket.filter(x=>x.id !== item.id))
}



  const contextValue  = {
    basket , setBasket, AddToBasket, DeleteItem
  }
  

  return (
    <BasketContext.Provider value={contextValue}>
      {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider