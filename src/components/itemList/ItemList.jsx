import React from "react"
import Item from "../item/Item"

//recorre el array con el map
const ItemList = ({productos}) => {
    return(
        <div style={{display:'flex',justifyContent:"space-around",alignItems:'center',flexWrap:'wrap'}}>
            {productos.map((productos)=> <Item key={productos.id} producto={productos}/>)}
        </div>
    )
}

export default ItemList