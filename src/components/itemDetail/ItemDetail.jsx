import React, { useContext, useState } from 'react'
import ItemCount from '../itemCount/itemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({detalle}) => {
  const [buy, SetBuy]= useState(false)
  const {addItem, itemQuantity} = useContext(CartContext)
  
  const onAdd = (cantidad) =>{
    addItem(detalle, cantidad)
    SetBuy(true)
  }
  const stockInCart = itemQuantity(detalle.id)
  return (
    <div className='d flex flex-column align item-center justify-conten-around'>
        <h3>detalles de: {detalle.name}</h3>
        <img src={detalle.image} alt={detalle.name}/>
        <p>{detalle.description}</p>
        <p>${detalle.price},00</p>
        {buy 
        ? <Link className='btn btn-success' to='/cart'>Ir al carrito... </Link>
        : <ItemCount stock={detalle.stock - stockInCart} onAdd={onAdd}/>}
    </div>
)
}

export default ItemDetail