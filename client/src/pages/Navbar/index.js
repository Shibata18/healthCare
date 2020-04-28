import React, { useState } from 'react';
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button
} from 'reactstrap';
import { logout } from "../../services/auth";
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const handleLogout = e => {
        logout();
        window.location.href='/';
      };
    function renderActions() {
        return (
            <Button color="#222" onClick={handleLogout}>
              <i className="fa fa-times" />
            </Button>
        );
      }
    return (
        <div>
            <Navbar light expand="md">
                <NavbarBrand href="/main"><img alt='logo' src={logo} width='50%' height='80px' /></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/agenda">Agenda</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/chat">Chat</NavLink>
                        </NavItem>
                    </Nav>
                    <UncontrolledDropdown>
                        <DropdownToggle nav caret>Options</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>
                                <Link to='/doctors'>Ver Perfil</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to='/paciente'>Ver Perfil</Link>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>         {renderActions()}</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Example;