import { FaCartArrowDown } from "react-icons/fa6";
import Badge from 'react-bootstrap/Badge';

const CartWidget = ({counter}) =>{
    return(
        <>
        <FaCartArrowDown color='Black' fontSize={'4rem'}/>
        <Badge bg="danger">{counter}</Badge>
        </>
    )
}
export default CartWidget;