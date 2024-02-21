import { useState, useEffect } from "react"
import { ItemList } from "./ItemList"
import { useParams } from 'react-router-dom'
export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const {cid} = useParams()
    useEffect(() => {
        fetch('../data/productos.json')
            .then(response => response.json())
            .then(prods => {
                if (cid){
                    const productosFil = prods.filter(prod => prod.category == cid)
                    setProducts(productosFil)
                } else{
                    setProducts(prods)
                }
            })
            .catch((error) => console.log(error))
    }, [cid])
    return (
        <div className="d-flex flex-wrap gap-4 justify-center justify-content-center">
            <ItemList products={products} />
        </div>
    )
}