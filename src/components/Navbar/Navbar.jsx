
import {Cartwidget} from "../Cartwidget/Cartwidget";
export const Navbar = ({navegacion}) => {
  return (
    <div>
       <nav>
        <ul>
          <h2 className="izquierda"> <span>o</span>ne player</h2>
            <li><a href="#">Home</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Sobre nosotros</a></li>
            <li className="derecha"><a href="#"> <Cartwidget/> </a></li>
        </ul>
    </nav>
    </div>
  );
}


