import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Form, Row, Col, Button, Nav, Navbar } from 'react-bootstrap'
import logo from '../../assets/logo.svg'
import api from '../../services/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const data = { email, senha, name, cpf, telefone };

    try {
      const response = api.post('', data);
      history.push('/login');

    } catch (error) {
      alert('Falha no login, tente novamente');
    }
  }
  return (
    <>
      <Container>
        <Navbar collapseOnSelect expand="lg" bg="" variant="light">
          <Navbar.Brand> <Link to='/'><img src={logo} alt="Logo" width="90" height="90" className="d-inline-block align-top" /></Link> </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {/*<Nav.Link> <Link to="/chat">Chat</Link>  </Nav.Link>
           <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
            </Nav>
            <Nav>
              <Nav.Item>
                <Nav.Link><Link to='/registerPaciente'>Registrar Paciente</Link></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link><Link to='/registerDoctor'>Atualizar Dados do Paciente</Link></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link><Link to='/registerPaciente'>Inativar Paciente</Link></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link><Link to='/registerPaciente'>Listar Pacientes</Link></Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Email
    </Form.Label>
            <Col sm={10}>
              <Form.Control type="email" name="email" id="email" placeholder='Digite o seu email' value={email} onChange={e => setEmail(e.target.value)} required />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Nome
    </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" name="name" id="name" placeholder='Digite o seu Nome' value={name} onChange={e => setName(e.target.value)} required />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              CPF
    </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" name="cpf" placeholder='Digite o seu CPF' id="cpf" value={cpf} onChange={e => setCpf(e.target.value)} required />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Senha
    </Form.Label>
            <Col sm={10}>
              <Form.Control type="password" name="password" id="password" placeholder='Digite a sua Senha' value={senha} onChange={e => setSenha(e.target.value)} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Telefone
    </Form.Label>
            <Col sm={10}>
              <Form.Control type="number" name="telefone" placeholder='Digite o seu Telefone' id="telefone" value={telefone} onChange={e => setTelefone(e.target.value)} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit" variant='success'>Cadastrar</Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    </>
  )
}
