import React from 'react'
import ItemCount from '../itemCount/itemCount'

const ItemDetail = ({detalle}) => {
  return (
    <div className='d flex flex-column align item-center justify-conten-around'>
        <h3>detalles de: {detalle.name}</h3>
        <img src={detalle.image} alt={detalle.name}/>
        <p>{detalle.description}</p>
        <p>${detalle.price},00</p>
        <ItemCount stock={detalle.stock} onAdd={ItemCount.onAdd}/>
    </div>
)
}

export default ItemDetail