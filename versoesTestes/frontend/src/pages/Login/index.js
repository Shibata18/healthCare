import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Col, Row, Button, Container } from 'react-bootstrap';
import logo from '../../assets/logo.svg'
import api from '../../services/api';

export default function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const data = { email, senha };

    try {
      const response = api.get('session', data);
      localStorage.setItem('doctorEmail', email);
      localStorage.setItem('doctorSenha', senha);
      console.log(response);
      history.push('/agenda');

    } catch (error) {
      console.log(error);
      console.error(error);
      alert('Falha no login, tente novamente');
    }
  }
  return (
    <Container>
      <img src={logo} alt="logo" />
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={4}>
            Email
    </Form.Label>
          <Col sm={4}>
            <Form.Control id='email' type="email" placeholder='Digite o seu Email' value={email} onChange={e => setEmail(e.target.value)} />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={4}>
            Senha
    </Form.Label>
          <Col sm={4}>
            <Form.Control id='password' type='password' placeholder='Digite a sua senha' value={senha} onChange={e => setSenha(e.target.value)} />
          </Col>
        </Form.Group>
        {/*
  <Form.Group as={Row} controlId="formHorizontalCheck">
    <Col sm={{ span: 4, offset: 4 }}>
      <Form.Check label="Remember me" />
    </Col>
  </Form.Group>
 */}
        <Form.Group as={Row}>
          <Col sm={{ span: 4, offset: 4 }}>
            <Button type="submit">Entrar</Button>
          </Col>
          <Col sm={{ span: 4, offset: 4 }}>
            <Button style={{ marginTop: 3 }} variant='outline-info' ><Link to='/registerDoctor'>Registrar Médico</Link> </Button>
            <Button style={{ margin: 10 }} variant='light' ><Link to='/registerPaciente'>Registrar Paciente</Link> </Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>

  )
}
