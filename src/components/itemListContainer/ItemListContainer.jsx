import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs } from '@firebase/firestore'
import { db } from '../../service/firebase'
import { query } from 'firebase/database'
import { where } from 'firebase/firestore/lite'

function ItemLisContainer({greeting}) {
    const [productos, setProductos] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const {categoryId} = useParams()

    useEffect(()=>{
        setLoading(true)
        // Se trae la coleccion
        const productCollection = categoryId ? query(collection(db, "productos"), where("category","==", categoryId)) : collection(db,"productos")
        // Se trae la data de FB
        getDocs(productCollection)
        .then((res)=>{
            const data = res.docs.map((doc)=>{
            return{
                id:doc.id,
                ...doc.data()
            }
        })
        setProductos(data)
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[categoryId])
  
    if(loading)
        return<h2>cargando...</h2>
    return (
        <div>
            {categoryId
            ?<h1 className='fw-bold text-danger'>{greeting}<span style={{color:'black'}}>{categoryId}</span></h1>
            :<h1 className='fst-itslic text-danger-emphasis'>{greeting}</h1>
            }
                <ItemList productos={productos}/>
            
        </div>
    )
}
export default ItemLisContainer