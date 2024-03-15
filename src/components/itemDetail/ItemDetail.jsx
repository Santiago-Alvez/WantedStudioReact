import React from 'react'
import ItemCount from '../itemCount/itemCount'

const ItemDetail = ({detalle}) => {
  return (
    <div>
        <h3>detalles de: {detalle.name}</h3>
        <img alt={detalle.name} src={detalle.image}/>
        <p>{detalle.description}</p>
        <p>${detalle.price},00</p>
        <ItemCount stock={detalle.stock}/>
    </div>
)
}

export default ItemDetail