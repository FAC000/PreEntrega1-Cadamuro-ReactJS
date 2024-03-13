import {Link} from "react-router-dom"
export const Categories = () => {
return (
<>

<ul className="navbar-nav">    

<li className="m-2">
           <Link className="text-decoration-none m-3 text-dark" to={'/'}> 
            INICIO
           </Link>
        </li>


       <li className="m-2">
           <Link className="text-decoration-none m-2 text-dark" to={'/category/teclado'}> 
            TECLADOS
           </Link>
        </li>

        <li className=" m-2">
                <Link className="text-decoration-none m-2 text-dark" to={'/category/mouses'}> 
                MOUSES
                </Link>
        </li>
            
        <li className="m-2">
                <Link className="text-decoration-none text-dark m-2" to={'/category/auriculares'}> 
                 AURICULARES
                </Link>
            </li>

            <li className="m-2">
                <Link className="text-decoration-none m-3 text-dark" to={'/Contacto'}> 
                CONTACTANOS
                </Link>
            </li>

</ul>

</>
)
}