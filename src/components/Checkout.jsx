import { useRef } from "react"
import { useCarritoContext } from "../context/CartContext.jsx"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { createOrdenCompra, getOrdenCompra, getProduct, updateProduct } from "../firebase/firebase.js"

export const Checkout = () => {
    const formRef = useRef()
    const navigate = useNavigate()
    const { carrito, totalPrice, emptyCart } = useCarritoContext()

    const handleSubmit = (e) => {
        e.preventDefault()
        const datForm = new FormData(formRef.current) 

        const aux = [...carrito]

        aux.forEach(prodCarrito => {
            getProduct(prodCarrito.id).then(prodBDD => {
                if (prodBDD.stock >= prodCarrito.quantity) { 
                    prodBDD.stock -= prodCarrito.quantity
                    updateProduct(prodBDD.id, prodBDD)
                } else {
                    toast.info(`El producto con el nombre ${prod.title} no puede continuar con la compra ya que no posee stock suficiente`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark"
                    })
                    aux.filter(prod => prod.id != prodBDD.id) 
                }

            })

        })
   
        const aux2 = aux.map(prod => ({ id: prod.id, quantity: prod.quantity, price: prod.price }))

        createOrdenCompra(cliente, totalPrice(), aux2, new Date().toLocaleDateString('es-AR', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }))
            .then(ordenCompra => {
                toast.success(`🛒 Muchas gracias por comprar con nosotros, su ID de compra es: ${ordenCompra.id} por un total de $${totalPrice()}. En breve nos contactaremos para realizar envio`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                })

                emptyCart()
                e.target.reset()
                navigate('/')
            })
            .catch(e => {
                toast.error(`Error al generar orden de compra: ${e}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                })
            })

    }
    return (
        <>
            {
                carrito.length === 0 ?
                    <div className="text-center">
                        <h4 className=" text-warning m-5 p-5 text-uppercase">Para finalizar compra debe tener productos en el carrito</h4>
                        <Link to={"/"}>
                            <button className="bg-dark text-warning px-4 py-2 rounded text-uppercase ">
                                Volver al inicio
                            </button>
                        </Link>

                    </div>
:


    <div className="checkout mx-auto  rounded border border-ligth p-5 m-5  w-25 text-uppercase">
        <h1 className=" completar-compra text-light text-center mb-5 ">completa tu compra</h1>
        <form action="" ref={formRef} onSubmit={handleSubmit}>
            <label className=" d-block mb-1 text-warning">Nombre: </label>
            <input type="text" className=" w-100 p-2 mb-3 text-light  bg-dark" name="nombre" />
            <label className="d-block mb-1 text-warning">Apellido: </label>
            <input type="text" className=" w-100 p-2 mb-3 text-light  bg-dark " name="apellido" />
            <label className="d-block mb-1  text-warning">Direccion: </label>
            <input type="text" className=" w-100 p-2 mb-3 text-light  bg-dark" name="direccion" />
            <label className="d-block mb-1 text-warning "> Email: </label>
            <input type="email" className=" w-100 p-2 mb-3 text-light  bg-dark " name="email" />
            <button type="submit" className=" d-block mx-auto p-2 mt-2 bg-dark text-white text-uppercase">finalizar compra</button>
        </form>
    </div>
}
</>
)
}