import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../../mock/fakeApi'
import ItemDetail from '../itemDetail/ItemDetail'


const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({}) 

    useEffect(()=>{
        getOneProduct()
        .then((res)=> setDetalle(res.find((item)=> item.id === '1')))
        .catch((error)=> console.log(error))
    },[])
  return (
    <div>
        <ItemDetail detalle={detalle}/>
    </div>
  )
}

export default ItemDetailContainer