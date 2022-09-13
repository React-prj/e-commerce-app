import { createContext, useState } from 'react'

export const CartContext = createContext({
  //the context we want to pass through
  isCatOpen: false,
  //pass in a function that will keep track of the useState val  change 
  setIsOpen: () => {},
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};