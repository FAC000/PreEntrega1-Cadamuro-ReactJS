import { Link } from "react-router-dom"
export const Item = ({ product }) => {
return (
    <Link to={`/product/${product.id}`}>
    <div className=" img-fluid max-w-xs mx-auto py-3 p-3 mt-5 ">
        <div>
            <img className="img-fluid img-thumbnail border-warning" src={`../img/${product.img}`} alt={`Imagen de ${product.nombre}`} />
                <h5 className="text-warning mt-3">{product.nombre}</h5>
                <p className="text-white">{product.marca}</p>
                <div>
                    <span className="text-warning">${product.precio}</span>
                    <button className="text-uppercase py-1 m-2 ">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
        </Link>
)

}