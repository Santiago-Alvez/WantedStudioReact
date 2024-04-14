import React, { useEffect, useState } from 'react'
import ItemDetail from '../itemDetail/ItemDetail'
import { useParams } from "react-router-dom"
import { collection, getDoc, doc } from 'firebase/firestore'
import { db } from '../../service/firebase'


const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({}) 
    const [loading, setLoading] = useState(false)
    const {itemId} = useParams()
    const [validateItem, setValidateItem]= useState(false)
    console.log(itemId)

    useEffect(()=>{
      setLoading(true)
      const collectionProd = collection(db, "productos")
      const referenciaAlDoc = doc(collectionProd, itemId)
      getDoc(referenciaAlDoc)
      .then((res)=> {
        if(res.data()){
          setDetalle({id: res.id, ...res.data()})
        }else{
          setValidateItem(true)
        }
      })
      .catch((error)=> console.log(error))
      .finally(()=> setLoading(false))
    },[])
   

    if(loading){
        return<h2>cargando...</h2>
       } 
  return (
    <div>
        {validateItem ? <p>Producto Inexsistente</p> : <ItemDetail detalle={detalle}/>}
  </div>
  )
}
export default ItemDetailContainer
