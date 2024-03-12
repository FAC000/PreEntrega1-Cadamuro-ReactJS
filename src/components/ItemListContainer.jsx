import { useState, useEffect } from "react"
import { ItemList } from "./ItemList"
import { useParams } from 'react-router-dom'
import { getProducts } from "../firebase/firebase.js"
export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const {cid} = useParams()
    useEffect(() => {
        getProducts()
            .then(prods => {
                const productos = prods.filter(prod => prod.stock > 0)
                if (cid){
                    const productosFil = prods.filter(prod => prod.category == cid)
                    setProducts(productosFil)
                } else{
                    setProducts(productos)
                }
            })
            .catch((error) => console.log(error))
    }, [cid])
    return (
        <div className="d-flex flex-wrap gap-4 justify-center justify-content-center">
            <ItemList products={products} plantilla="item" />
        </div>
    )
}