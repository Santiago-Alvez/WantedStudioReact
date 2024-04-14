import React,{useContext} from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cartview = () =>{
    const {cart, removeItem, cartTotal, clear}= useContext(CartContext)
    return (
        <div>
            <div>
            {
                cart.map((item)=>{
                    return(
                           <div key={item.id} style={{display: 'Flex', justifyContent:'space-around',alignItems:'center',width:'100%'}}>
                            <img src={item.image} alt={item.name}/>
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <p>{item.quantity}</p>
                            <p>${item.price * item.quantity}</p>
                            <button className='btn btn-danger' onClick={()=> removeItem(item.id)}>X</button>
                           </div>
                    )
                })
            }
        </div>
        <p>Total a pagar: ${cartTotal}</p>
        <button className='btn btn-danger' onClick={clear}>Vaciar carrito</button>
        <Link to='/checkout' className='btn btn-success'>Finalizar compra</Link>
            </div>
        )
    }

export default Cartview