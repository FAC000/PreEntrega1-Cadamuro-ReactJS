
import { initializeApp } from "firebase/app";
import {getFirestore, doc, addDoc,collection, getDocs, getDoc,updateDoc,deleteDoc } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAU-uOXgEvdJMgujHWbjV94ve8Z8-Pk38U",
  authDomain: "comision-60225-reactjs.firebaseapp.com",
  projectId: "comision-60225-reactjs",
  storageBucket: "comision-60225-reactjs.appspot.com",
  messagingSenderId: "101067023351",
  appId: "1:101067023351:web:7285d326d85902e35804f2"
};
 
const app = initializeApp(firebaseConfig);
const bdd = getFirestore()

const prods = [
{
    "nombre": "DRAGONBORN",
    "marca": "REDRAGON",
    "price": 20000,
    "stock": 10,
    "img": "https://firebasestorage.googleapis.com/v0/b/comision-60225-reactjs.appspot.com/o/1.webp?alt=media&token=e019fb99-48a3-414d-a352-80578ff590f1",
    "category": "teclado"
},
{
    "nombre": "ZEUS",
    "marca": "REDRAGON",
    "price": 20000,
    "stock": 5,
    "img": "https://firebasestorage.googleapis.com/v0/b/comision-60225-reactjs.appspot.com/o/2.webp?alt=media&token=53d94be7-164c-48aa-89d7-9787de5b3edc",
    "category": "auriculares"

},
{
    "nombre": " COBRA",
    "marca": "REDRAGON",
    "price": 15000,
    "stock": 2,
    "img": "https://firebasestorage.googleapis.com/v0/b/comision-60225-reactjs.appspot.com/o/3.jpg?alt=media&token=11a23fe3-00e1-4b6b-897e-de4829b36a44",
    "category": "mouses"

},
{
    "nombre": "FIZZ",
    "marca": "REDRAGON",
    "price": 25000,
    "stock": 6,
    "img": "https://firebasestorage.googleapis.com/v0/b/comision-60225-reactjs.appspot.com/o/4.webp?alt=media&token=4f453cba-c90b-47fc-8030-d7cb308fe051",
    "category": "teclado"
},

{
    "nombre": "DITI",
    "marca": "REDRAGON",
    "price": 22000,
    "stock": 6,
    "img": "https://firebasestorage.googleapis.com/v0/b/comision-60225-reactjs.appspot.com/o/5.webp?alt=media&token=2d511682-cf8f-4726-8552-7c18b39fd743",
    "category": "teclado"
},
{
    "nombre": "CENTROPHORUS2 M601-RGB",
    "marca": "REDRAGON",
    "price": 15000,
    "stock": 12,
    "img": "https://firebasestorage.googleapis.com/v0/b/comision-60225-reactjs.appspot.com/o/6.webp?alt=media&token=ef369d8e-ff8e-4a17-a74f-5a3dd57c26ef",
    "category": "mouses"
},
{
    "nombre": "M808W-KS STORM PRO ",
    "marca": "REDRAGON",
    "price": 32000,
    "stock": 1,
    "img": "https://firebasestorage.googleapis.com/v0/b/comision-60225-reactjs.appspot.com/o/7.jfif?alt=media&token=33c9743e-3304-41e3-bd0b-64496b20467d",
    "category": "mouses"
},

{
    "nombre": "LAMIA H320",
    "marca": "REDRAGON",
    "price": 24000,
    "stock": 7,
    "img": "https://firebasestorage.googleapis.com/v0/b/comision-60225-reactjs.appspot.com/o/8.jpg?alt=media&token=feb9d754-0342-40e7-a2e2-8933411264c0",
    "category": "auriculares"

},

{
    "nombre": "PANDORA 7.1",
    "marca": "REDRAGON",
    "price": 20000,
    "stock": 2,
    "img": "https://firebasestorage.googleapis.com/v0/b/comision-60225-reactjs.appspot.com/o/9.jpeg?alt=media&token=141d9597-b0ba-41f0-b0a6-7807f06ea52e",
    "category": "auriculares"
}

]

export const createProducts = async () => {
    prods.forEach(async (prod) => {
        await addDoc(collection(bdd, "productos"), {
            title: prod.title,
            size: prod.size,
            price: prod.price,
            stock: prod.stock,
            category: prod.category,
            img: prod.img
        })
    })

}

// Consultar productos
export const getProducts = async () => {
    const productos = await getDocs(collection(bdd, "productos"))
    const items = productos.docs.map(prod => { return { ...prod.data(), id: prod.id } })
    return items
}

//Consultar Producto
export const getProduct = async (id) => {
    const producto = await getDoc(doc(bdd, "productos", id))
    const item = { ...producto.data(), id: producto.id }
    return item
}

// Actualizar Producto

export const updateProduct = async (id, info) => {
    await updateDoc(doc(bdd, "productos", id), info)
}

// Eliminar producto

export const deleteProduct = async (id) => {
    await deleteDoc(doc(bdd, "productos", id))
}

//CREATE AND READ Ordenes de Compra

export const createOrdenCompra = async (cliente, precioTotal, carrito, fecha) => {
    const ordenCompra = await addDoc(collection(bdd, "ordenesCompra"), {
        cliente: cliente,
        items: carrito,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(bdd, "ordenesCompra", id))
    const item = { ...ordenCompra.data(), id: ordenCompra.id }
    return item
}