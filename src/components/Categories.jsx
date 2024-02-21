import {Link} from "react-router-dom"
export const Categories = () => {
return (
<>
 <Link to={'/'}> 
    <a className="navbar-brand text-warning" href="#">ONE PLAYER</a>
    </Link>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
                <Link to={'/category/teclado'}> <a className="nav-link" href="#">TECLADOS</a>
                </Link>
            </li>

            <li className="nav-item">
                <Link to={'/category/mouses'}> <a className="nav-link" href="#">MOUSES</a>
                </Link>
            </li>

            <li className="nav-item">
                <Link to={'/category/auriculares'}> <a className="nav-link" href="#">AURICULARES</a>
                </Link>
            </li>
</ul>
</div>
</>
)
}