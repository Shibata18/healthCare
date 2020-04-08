import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.svg'

export default function NavBarPage() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="" variant="light">
      <Navbar.Brand> <Link to='/'><img src={logo} alt="Logo" width="90" height="90" className="d-inline-block align-top" /></Link> </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link> <Link to="/">Chat</Link>  </Nav.Link>
          {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <Nav>
          {/* <Nav.Link> <Link to="/login">Login</Link>  </Nav.Link>
          <Nav.Link> <Link to="/register">Registrar Médico</Link>  </Nav.Link>
          <Nav.Link> <Link to="/registerUser">Registrar Paciente</Link>  </Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
