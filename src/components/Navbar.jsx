import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Categories } from "./Categories";
import {Cartwidget} from "./CartWidget";

export function BasicExample() {
  return (
    <Navbar expand="lg" className="navbar bg-body-tertiary p-5 position-fixed w-100 top-0">
      <Container>
        <Navbar.Brand className='text-warning text-uppercase 'href="/"> <h2>Player One</h2> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Categories/>
          </Nav>
        </Navbar.Collapse> 
        <div className="d-flex sm-p4 flex-wrap">
          < Cartwidget />
           </div>
      </Container>
    </Navbar>
  );
}

export default BasicExample;







     