import { Link } from "react-router-dom"
export const Item = ({ product }) => {
return (
    <Link className="text-decoration-none" to={`/product/${product.id}`}>
    <div className=" img-fluid max-w-xs mx-auto py-3 p-3 mt-5 ">
        <div>
            <img className="img-fluid img-thumbnail border-warning" src={`${product.img}`} alt={`Imagen de ${product.nombre}`} />
                <h4  className="text-warning mt-3 ">{product.nombre}</h4>
                <p className="text-white">{product.marca}</p>
                <div>
                    <span className="text-warning ">${product.price}</span>
                </div>
            </div>
        </div>
        </Link>
        
        
        
)
}