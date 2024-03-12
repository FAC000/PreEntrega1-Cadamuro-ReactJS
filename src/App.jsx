import './styles/App.css'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { ItemListContainer } from './components/Itemlistcontainer'
import { Footer } from './components/Footer'
import { Cart } from './components/Cart'
import { Checkout } from './components/Checkout'
import {ItemDetailsContainer} from './components/ItemDetailsContainer'
import { NotFound } from './components/NotFound'
import Titulo from './components/Titulo'
import  {Slide} from './components/Slide'
import { CarritoProvider } from './context/CartContext.jsx'
import { ToastContainer } from 'react-toastify'
import {Contacto} from './components/Contacto.jsx';
export const App = () => {
return (
<BrowserRouter>
<CarritoProvider>
  <Navbar />
  <ToastContainer/>
  <Slide/>
  <Titulo />
  <Routes>
  <Route path='/contacto' element={<Contacto />} />
    <Route path='/' element={<ItemListContainer />} />
    <Route path='/category/:cid' element={<ItemListContainer />} />
    <Route path='/product/:pid' element={<ItemDetailsContainer />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/checkout' element={<Checkout />} />
    <Route path='*' element={<NotFound />} />
  </Routes>
  <Footer />
  </CarritoProvider>
</BrowserRouter>
)
}