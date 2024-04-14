import React from 'react'
import { useState, useEffect } from 'react'
import { getProducts } from '../../mock/fakeApi'
import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'

function ItemLisContainer({greeting}) {

    const [productos, setProductos]= useState([])
    const {categoryId} = useParams()
    const [loading, setLoading] = useState(false)
    
  
    useEffect(()=>{
        setLoading(true)
        getProducts(true)
         .then((res)=> {
            if(categoryId){
                setProductos(res.filter((prod)=> prod.category === categoryId))
            }else{
                setProductos(res)
            }
        })
        .catch((error)=> console.log(error,'todo mal'))
        .finally(()=> setLoading(false))
    },[categoryId])

    if(loading)
        return<h2>cargando...</h2>
    return (
        <div>
            {
                categoryId
            ?<h1 className='fw-bold text-danger'>{greeting}<span style={{color:'black'}}>{categoryId}</span></h1>
            : <h1 className='fst-itslic text-danger-emphasis'>{greeting}</h1>
            }
                <ItemList productos={productos}/>
            
        </div>
    )
}
export default ItemLisContainer