import React, { useState } from "react";
import {Form,Col,Row,Button, Container} from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';
import api from '../../../services/api';
//import { loginUser,loginDoctor } from "../../../_actions/user_actions";
export default function LoginPage(){
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const history = useHistory();
  async function handleLogin(e) {
      e.preventDefault();
      try {
          const response = await api.post('/login',{email,password});
          localStorage.setItem('id',response.data._id);
          localStorage.setItem('Dnome',response.data.name);
          localStorage.setItem('Demail',response.data.email);
          localStorage.setItem('Despecialidade',response.data.especialidade);
          localStorage.setItem('Dcpf',response.data.cpf);
          history.push('/')
      } catch (error) {
          alert('Falha no login, tente novamente')
      }
  }

    return (
<Container>
<Form onSubmit={handleLogin}>
  <Form.Group as={Row}>
    <Form.Label column sm={4}>
      Email
    </Form.Label>
    <Col sm={4}>
      <Form.Control type="email" id='email' placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
    <Form.Label column sm={4}>
      Senha
    </Form.Label>
    <Col sm={4}>
      <Form.Control type="password" id='password' placeholder="senha" value={password} onChange={e=>setPassword(e.target.value)} />
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
      <Button style={{margin:10}} variant='outline-info' ><Link to='/register'>Registre-se</Link> </Button>
    </Col>
  </Form.Group>
</Form>
</Container>

    )
}