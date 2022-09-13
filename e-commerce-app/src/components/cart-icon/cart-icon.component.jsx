import { useContext } from 'react'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import { CartContext } from '../../contexts/cart.context'

import './cart-icon.styles.scss'

const CartIcon = () => {
  //bring our global states from context and use them 
  const { isCartOpen, setIsCartOpen } = useContext(CartContext)

  //changes to true/false each time with
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon