import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../cartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
 
function NavBarComp() {
  return (
    <Navbar expand="lg" className="fst-italic">
      <Container>
        <Navbar.Brand as={NavLink} to='/'>Wanted Studio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Inicio</Nav.Link>
            <Nav.Link href="#link">Cursos</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/category/cera'>Cera</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/shampoo'>Shampoo </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/tintas'>Tintas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/category/ofertas'>Ofertas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget counter={10}/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComp;