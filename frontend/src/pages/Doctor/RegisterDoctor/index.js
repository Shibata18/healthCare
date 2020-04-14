import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Form, Row, Col, Button,Nav,Navbar } from 'react-bootstrap'
import logo from '../../../assets/logo.svg'
import api from '../../../services/api';

export default function RegisterDoctor() {
  const [email, setEmail] = useState('');
  const [name_medico, setName_medico] = useState('');
  const [cpf_medico, setcpf_medico] = useState('');
  const [senha, setSenha] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [telefone_medico, setTelefone_medico] = useState('');
  const [conselho, setConselho] = useState('');
  const [registro, setRegistro] = useState('');
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const data = {cpf_medico, name_medico, email, senha, telefone_medico, conselho, registro, especialidade };

    try {
      const response = api.post('doctors', data);
      console.log(response);

      history.push('/');

    } catch (error) {
      alert('Falha no Cadastro, tente novamente');
    }
  }
  return (

    <Container>
       {/*   <Nav fill variant="pills">
          <Nav.Item>
          <Nav.Link><Link to='/registerPaciente'>Registrar Médico</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link><Link to='/registerDoctor'>Atualizar Dados do Médico</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link><Link to='/registerPaciente'>Inativar Médico</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link><Link to='/registerPaciente'>Listar Médicos</Link></Nav.Link>
          </Nav.Item>
        </Nav> */}
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
        <Nav.Link><Link to='/registerDoctor'>Registrar Médico</Link></Nav.Link>
        <Nav.Link><Link to='/updateDoctor'>Atualizar Dados do Médico</Link></Nav.Link>
        <Nav.Link><Link to='/deleteDoctor'>Inativar Médico</Link></Nav.Link>
        <Nav.Link><Link to='/listDoctor'>Listar Médicos</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

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
            <Form.Control type="text" name="name_medico" id="name_medico" placeholder='Digite o seu Nome' value={name_medico} onChange={e => setName_medico(e.target.value)} required />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            CPF
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" name="cpf_medico" placeholder='Digite o seu CPF' id="cpf_medico" value={cpf_medico} onChange={e => setcpf_medico(e.target.value)} required />
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
            <Form.Control type="number" name="telefone_medico" placeholder='Digite o seu Telefone' id="telefone_medico" value={telefone_medico} onChange={e => setTelefone_medico(e.target.value)} required />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Registro
    </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" name="registro" id="registro" placeholder='Digite o seu Registro' value={registro} onChange={e => setRegistro(e.target.value)} required />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Conselho
    </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" name="conselho" id="conselho" placeholder='Digite o seu conselho' value={conselho} onChange={e => setConselho(e.target.value)} required />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Especialidade
    </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" name="especialidade" id="especialidade" placeholder='Digite o seu especialidade' value={especialidade} onChange={e => setEspecialidade(e.target.value)} required />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit" variant='success'>Cadastrar</Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>

  )
}
