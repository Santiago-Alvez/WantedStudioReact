import React from 'react'
import { useState, useEffect } from 'react'
import { getProducts } from '../../mock/fakeApi'
import ItemList from '../itemList/ItemList'


function ItemLisContainer({greeting}) {

    const [productos, setProductos]= useState([])
    
  
    useEffect(()=>{
        getProducts()
        .then((res)=> setProductos(res))
        .catch((error)=> console.log(error,'todo mal'))
    },[])
    
    return (
        <div>
            <h1 className='fw-bold text-danger'>{greeting}</h1>
            {
                productos.map((producto)=> <p key={producto.id}>{producto.name}</p>)
            }
            
            <ItemList productos={productos}/>
            
        </div>
    )
}
export default ItemLisContainer