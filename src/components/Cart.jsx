import { Link } from "react-router-dom"
import { useCarritoContext } from "../context/CartContext"
import { ItemList } from "./ItemList"

export const Cart = () => {
const{ carrito, totalPrice, emptyCart} = useCarritoContext()
return (
<>
    {
    carrito.length === 0 ?
    <div className="text-center m-5">
        <h2 className="text-warning m-5 text-uppercase">Carrito Vacio</h2>
        <Link to={'/'}> <button className=" m-3 bg-white text-dark px-3 py-2 rounded">
        INICIO
        </button>
        </Link>
    </div>
    :
    <>
    <div className="m-5">
        
        {<ItemList products={carrito} plantilla="ItemCart" />}
            <div className="text-center m-3">
                <p className="text-white text-uppercase m-5"> Resumen de la compra: $ {totalPrice()}</p>

                <button className="bg-secondary text-warning px-3 py-2 rounded text-uppercase m-3" onClick={emptyCart}>
                    Vaciar Carrito
                </button>

                <button className="bg-secondary text-warning px-3 py-2 rounded text-uppercase m-3">
                    <Link className="text-warning text-decoration-none" to={'/'}> 
                   Continuar Comprando
                    </Link> 
                </button> 

                <button className=" bg-secondary text-warning  px-3 py-2 rounded text-uppercase m-3">
                    <Link className="text-warning text-decoration-none" to={'/checkout'}> 
                    Finalizar compra
                    </Link>
                </button>
            </div> 
    </div> 
    </>
    }
    </>
    )
    }