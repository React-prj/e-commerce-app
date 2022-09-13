import { createContext, useState, useEffect } from 'react'
import PRODUCTS from '../shop_data/shop-data.json'

//1: create the context and export it
export const ProductsContext = createContext({
  products: [],
})

//2: create the Provider for the context
//3: return the Product context
//4: we pass the children
//5: we render the children between the context provider
//6: we pass the value
export const ProductProvider = ({ children }) => {
  const [products, setProduct] = useState(PRODUCTS)
  const value = {products}
  return (
    <ProductsContext.Provider value = {value}>{children}</ProductsContext.Provider>
  )
}