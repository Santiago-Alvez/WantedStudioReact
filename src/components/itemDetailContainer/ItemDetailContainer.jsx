import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../../mock/fakeApi'
import ItemDetail from '../itemDetail/ItemDetail'
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({}) 
    const [loading, setLoading] = useState(false)
    const {itemId} = useParams()
    

    useEffect(()=>{
      setLoading(true)
        getOneProduct(itemId)
        .then((res)=> setDetalle(res))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[itemId])

    if(loading)
        return<h2>cargando...</h2>
  return (
    <div>
        <ItemDetail detalle={detalle}/>
    </div>
  )
}

export default ItemDetailContainer
