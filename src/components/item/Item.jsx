import { Link } from "react-router-dom"


const Item = ({producto}) =>{
    return(

        <div className="card" style={{width: '20rem'}}>
        <img src={producto.image} className="card-img-top" alt={producto.name}/>
        <div className="card-body">
            <h5 className="card-title">{producto.name}</h5>
            <p> ${producto.price}</p>
            <Link className="btn btn-primary" to={`/item/${producto.id}`} >Ver mas...</Link>
        </div>
    </div>
    )
}
export default Item