import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { logout } from "../../../services/auth";
import logo from '../../../assets/logo.svg'
import { Link } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
const Example = (props) => {
    const handleLogout = e => {
        logout();
        window.location.href='/';
      };
    function renderActions() {
        return (
            <Button color="#222" onClick={handleLogout}>
              Sair <i className="fa fa-times" />
            </Button>
        );
      }
    return (
        <div>
          <Navbar collapseOnSelect expand="lg"  variant="light">
            <Link to='/'><Navbar.Brand><img src={logo} alt='logo' height='80' /></Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href='/agenda'>Agenda</Nav.Link>
                <Nav.Link href='/doctors'>Medico</Nav.Link>
                <Nav.Link href='/paciente'>Paciente</Nav.Link>
              </Nav>
              <Nav className="mr-auto">
                <NavDropdown title={<PersonIcon/>}>
                  <Link to='/perfilDoctor'><NavDropdown.Item>Meu Perfil</NavDropdown.Item></Link>
                  <Link to='/perfilDoctor'><NavDropdown.Item>Minha Agenda</NavDropdown.Item></Link>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>{renderActions()}</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
    );
}

export default Example;
