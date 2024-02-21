import { Link } from "react-router-dom"
import { useCounter } from "../../hooks/useCounter"
export const ItemDetail = ({ item }) => {
    const { count, increment, decrement, reset } = useCounter(1, item.stock, 1)

    const handleAddToCart = () => {
        console.log("Producto agregado al carrito")
    }
    return (
        
        <div className=" p-8 rounded-lg text-center mx-auto mt-5 pb-5">
          
            <img className=" mt-5 img-thumbnail border-warning" src={`../img/${item.img}`} alt={`Imagen de ${item.title}`} />
            <div className="text-center">
                <h2 className=" text-secondary mb-2 mt-4">{item.nombre}</h2>
                <p className=" text-warning  mb-2 text-uppercase ">Stock: {item.stock}</p>
                <p className=" text-warning mb-2 text-uppercase">Precio: ${item.precio}</p>
                <div className="container mx-auto mt-8">
                    <div className="flex items-center justify-center space-x-4 mt-4">
                        <button className="bg-white text-dark px-4 py-2 rounded" onClick={decrement}>
                            -
                        </button>
                        <span className="text-white p-3">{count}</span>
                        <button className="bg-white text-dark px-2 py-2 rounded" onClick={increment}>
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