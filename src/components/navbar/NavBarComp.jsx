import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../cartWidget/CartWidget';

function NavBarComp() {
  return (
    <Navbar expand="lg" className="fst-italic">
      <Container>
        <Navbar.Brand href="#home">Wanted Studio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Cursos</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cera</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Shampoo </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Tintas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Ofertas
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget counter={10}/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComp;