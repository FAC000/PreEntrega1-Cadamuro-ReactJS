import {Link} from "react-router-dom"
export const Categories = () => {
return (
<>
 <Link className="text-decoration-none" to={'/'}> 
    <h2 className="text-warning text-uppercase m-3 "> player one</h2>
    </Link>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li>
                <Link className="text-decoration-none m-3 text-dark" to={'/category/teclado'}> 
                TECLADOS
                </Link>
            </li>       

            <li>
                <Link className="text-decoration-none m-3 text-dark" to={'/category/mouses'}> 
                MOUSES
                </Link>
            </li>

            <li>
                <Link className="text-decoration-none text-dark m-3" to={'/category/auriculares'}> 
                 AURICULARES
                </Link>
            </li>

            <li>
                <Link className="text-decoration-none m-3 text-dark" to={'/Contacto'}> 
                CONTACTANOS
                </Link>
            </li>
</ul>
</div>
</>
)
}