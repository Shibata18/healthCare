import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { Accordion, Card, Container,Nav,Navbar } from 'react-bootstrap'
import logo from '../../assets/logo.svg';
import api from '../../services/api';


export default function agenda() {
    const email = localStorage.getItem('doctorEmail');
    return (
        <>
            <Container>
                <Container>
                    <Navbar collapseOnSelect expand="lg" bg="" variant="light">
                        <Navbar.Brand> <Link to='/'><img src={logo} alt="Logo" width="90" height="90" className="d-inline-block align-top" /></Link> </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                {/*<Nav.Link> <Link to="/chat">Chat</Link>  </Nav.Link>
           <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">{email}</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
                            </Nav>
                            <Nav>
                                <Nav.Item>
                                    <Nav.Link><Link to='/agenda'>Registrar</Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link><Link to='/agenda'>{email}</Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link><Link to='/agenda'>Registrar</Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link><Link to='/agenda'>Registrar</Link></Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </Container>
            <Container>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Seja bem vindo {email}
          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Click me!
          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Container>
        </>
    )
}
