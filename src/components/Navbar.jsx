import { Categories } from "./Categories";
import {Cartwidget} from "./CartWidget";
export const Navbar = ({}) => {
  return (
  <nav className="navbar navbar-expand-lg bg-body-tertiary position-fixed  w-100 top-0 ">
  <div className="container-fluid p-4">
  < Categories />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      <div className="d-flex">
      < Cartwidget />
      </div>
    </div>
</nav>
  )
}


     