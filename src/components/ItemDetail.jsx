import { Link } from "react-router-dom"
import { useCounter } from "../hooks/useCounter"
import { useCarritoContext } from "../context/CartContext"
import { toast } from "react-toastify"
export const ItemDetail = ({ item }) => {
    const { addItem } = useCarritoContext()
    const { count, increment, decrement, reset } = useCounter(1, item.stock, 1)

    const handleAddToCart = () => {
        addItem(item, count)
        toast.success(`🛒 Producto agregado al carrito correctamente.`, {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        })
    }
    return (
        
        <div className=" p-8 rounded-lg text-center mx-auto mt-5 pb-5">
          <Link to={'/'}>
                <button className=" button-close position-absolute bg-transparent text-white p-1 border border-dark  "><i className=" close-icon p-4 bi bi-x bg-transparent "></i></button>
            </Link>
            <img className=" mt-5 img-thumbnail border-warning" src={`${item.img}`} alt={`Imagen de ${item.nombre}`} />
            <div className="text-center">
                <h2 className=" text-secondary mb-2 mt-4  ">{item.nombre}</h2>
                <p className=" text-warning  mb-2 text-uppercase ">Stock: {item.stock}</p>
                <p className=" text-warning mb-2 text-uppercase ">Precio: ${item.price}</p>
                <div className="container mx-auto mt-8">
                    <div className="flex items-center justify-center space-x-4 mt-4">
                        <button className="bg-white text-dark px-3 py-2 rounded" onClick={decrement}>
                            -
                        </button>
                        <span className="text-white p-3">{count}</span>
                        <button className="bg-white text-dark px-3 py-2 rounded" onClick={increment}>
                            +
                        </button>
                        <button className="bg-white text-dark  px-4 py-2 rounded m-2" onClick={reset}>
                            RESET
                        </button>
                        <button className="bg-white text-dark  px-4 py-2 rounded " onClick={handleAddToCart}>
                            AGREGAR AL CARRITO
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}