import { useCarritoContext } from "../context/CartContext"
import { useCounter } from '../hooks/useCounter.js'

export const ItemCart = ({ product }) => {
    const { removeItem, updateItem } = useCarritoContext()
    const { count, increment, decrement } = useCounter(product.quantity, product.stock, 1)
    return (
        <div className=" flex-wrap justify-content-center d-flex align-items-center p-4  ">
            <div className=" mr-4 text-center">
                <img src={`${product.img}`} alt={`Imagen de ${product.nombre}`} className=" img-itemcart img-thumbnail"  />
            </div>
            
            <div className="p-5 text-center">
                <h5 className="text-warning text-center">{product.nombre} {product.marca}</h5>
            </div>
            
            <div className="d-flex p-5 ">

                <button className="  bg-warning text-dark px-4 py-2 rounded " onClick={async () => {
                    updateItem (product.id, count - 1)
                    decrement()
                }}>
                    -
                </button>
                <span className="text-white m-4">{count}</span>
                <button className="bg-warning text-dark px-4 py-2 rounded" onClick={() => {
                    updateItem(product.id, count + 1)
                    increment()
                }}>
                    +
                </button>
            </div>

            <div className="ml-4 ">
                <p className="text-white m-3 text-uppercase text-center">Subtotal: ${product.price * count}</p>
            </div>
            <div className="ml-4">
                <button className="text-danger px-4 py-2 rounded text-uppercase bg-warning" onClick={() => removeItem(product.id)}>
                    Eliminar
                </button>
            </div>
        </div>
        
    )
}