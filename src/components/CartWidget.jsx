import React from 'react';
import { useCarritoContext } from "../context/CartContext"
import { Link } from 'react-router-dom';
export const Cartwidget = () => {
    const { getItemQuantity } = useCarritoContext()
return (
    <>
    <Link className='text-dark text-decoration-none' to= {'/Cart'}>
        <button className=' widget-carrito text-black px-4 py-2 rounded  '>
      
            <i className="bi bi-cart"></i>
            <span>{getItemQuantity()}</span>
            
        </button>
        </Link>
    </>

);
}