import React, {useContext} from 'react'
import CartView  from '../cartView/CartView'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
  const {cart}= useContext(CartContext)
  return (
      <div>
        {cart.length > 0 ? <CartView/> : 
        <div><h1>Tu carrito esta vacio!</h1>
        <h4>Te invitamos a ver nuestros productos</h4>
        <Link className='btn btn-success' to='/'> Ir a comprar </Link></div>}
          </div>
    
  )
}

export default Cart
