import React from 'react';
import { Link,useHistory } from "react-router-dom";
import {Container,Nav,Navbar,Button } from 'react-bootstrap'
import logo from '../../assets/logo.svg';
import api from '../../services/api';

export default function Agenda() {

    const email = localStorage.getItem('doctorEmail');
    const history = useHistory();

    async function handleAgenda(){
      try {
        const response = await api.get('pacientes');
        console.log(response.data);
      } catch (e) {
        console.error(e);
      } finally {
        const response = await api.get('pacientes');
        alert(response.data[0].email)
      }
    }
    function handleLogout(){
       localStorage.clear();
       history.push('/')
   }
    return (
        <>
            <Container>
                <Container>
                    <Navbar collapseOnSelect expand="lg" bg="" variant="light">
                        <Navbar.Brand> <Link to='/'><img src={logo} alt="Logo" width="90" height="90" className="d-inline-block align-top" /></Link> </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                          <Nav className="mr-auto">
                            <p>Seja Bem vindo {email}</p>
                          </Nav>
                            <Nav>
                              <Nav.Item>
                                  <Nav.Link>  <Button type='button' variant='outline-info' onClick={handleLogout}>logout </Button></Nav.Link>
                              </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </Container>
            <Container>
               <Button type='button' variant='outline-info' onClick={handleAgenda}>logout </Button>
            </Container>
        </>
    )
}
