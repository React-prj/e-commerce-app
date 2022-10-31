import { createContext, useState, useEffect } from "react";

export const addCartItem = (cartItems, productToAdd) => {
  // track if the cartItems contains the productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // if the item avaliablein cart, add 1 to the quantity 
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // if new cart , then the quantity of the item is 1 
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount:   0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const[cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((tottal, cartitem) => tottal + cartitem.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems])

  const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product));

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart , cartCount};

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
