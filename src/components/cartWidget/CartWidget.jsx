import { FaCartArrowDown } from "react-icons/fa6";
import Badge from 'react-bootstrap/Badge';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { BsCartFill } from "react-icons/bs";


const CartWidget = ({counter}) =>{
    const { cartQuantity} = useContext(CartContext)
    return(
        <div style={{display:'flex', }}>
        <FaCartArrowDown color='Black' fontSize={'4rem'}/>
        { cartQuantity() > 0 &&
        <Badge bg="danger">{cartQuantity()}</Badge>
        }
        <BsCartFill color='blue' fontSize={'2rem'}/>
        </div>
    )
}
export default CartWidget;