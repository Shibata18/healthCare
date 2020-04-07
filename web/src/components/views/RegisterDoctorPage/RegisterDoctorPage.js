import React, { useState } from "react";
import { registerDoctor, deleteDoctor, updateDoctor, getDoctorByCpf } from "../../../_actions/user_actions";
import { useHistory } from "react-router-dom";
import {Form,Button,Col,Row, Container} from 'react-bootstrap';
import './styles.css';

export default function RegisterDoctorPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [telefone, setTelefone] = useState('');
  const [conselho, setConselho] = useState('');
  const [registro, setRegistro] = useState('');
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();
    const data = { email, name, password, cpf, especialidade, conselho, registro, telefone };
    try {
      await registerDoctor(data);
      console.log(data);
      history.push("/login")
    } catch (error) {
      alert("Erro ao cadastrar")
    }
  }
  async function handleUpdate(e) {
    e.preventDefault();
    const data = { email, name, password, cpf, especialidade, conselho, registro, telefone };
    try {
      await updateDoctor(data);
      console.log(await getDoctorByCpf(cpf));
      history.push("/register");
    } catch (error) {
      alert("Erro ao atualizar")
    }
  }
  async function handleDelete(e) {
    e.preventDefault();
    const data = { cpf};
    try {
      await deleteDoctor(data);
      let respostaUsuario = document.getElementById('resposta');
      respostaUsuario.style.color = 'red';
      respostaUsuario.style.fontSize = '15px';
      respostaUsuario.innerText = 'Usuário Deletado Com sucesso';
      setTimeout(() => { history.push("/register"); }, 3000);
    } catch (error) {
      alert("Erro ao deletar");
    }
  }
  async function handleListar(data) {
    data = {cpf}
    try {
      await getDoctorByCpf(data);
      let respostaUsuario = document.getElementById('resposta');
      respostaUsuario.innerText = getDoctorByCpf(data);
    } catch (error) {
      alert('Erro ao Listar')
    }
  }
  return (
    <Container>
      <Form>
  <Form.Group as={Row} controlId="email">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" name="email" id="email" placeholder='Digite o seu email' value={email} onChange={e => setEmail(e.target.value)} required />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="name">
    <Form.Label column sm={2}>
      Nome
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" name="name" id="name" placeholder='Digite o seu Nome' value={name} onChange={e => setName(e.target.value)} required />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="cpf">
    <Form.Label column sm={2}>
      CPF
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" name="cpf" placeholder='Digite o seu CPF' id="cpf" value={cpf}  onChange={e => setCpf(e.target.value)} required />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Senha
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" name="password" id="password" placeholder='Digite a sua Senha' value={password} onChange={e => setPassword(e.target.value)}  required />
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="telefone">
    <Form.Label column sm={2}>
      Telefone
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="number" name="telefone" placeholder='Digite o seu Telefone' id="telefone" value={telefone} onChange={e => setTelefone(e.target.value)} required />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="registro">
    <Form.Label column sm={2}>
      Registro
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" name="registro" id="registro" placeholder='Digite o seu Registro' value={registro} onChange={e => setRegistro(e.target.value)}  required />
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="conselho">
    <Form.Label column sm={2}>
      Conselho
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" name="conselho" id="conselho" placeholder='Digite o seu conselho' value={conselho} onChange={e => setConselho(e.target.value)} required />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="especialidade">
    <Form.Label column sm={2}>
      Especialidade
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" name="especialidade" id="especialidade" placeholder='Digite o seu especialidade' value={especialidade} onChange={e => setEspecialidade(e.target.value)} required />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit" variant='success' onSubmit={handleSubmit}>Cadastrar</Button>
      <Button type="submit" variant='info' onSubmit={handleUpdate}>Atualizar</Button>
      <Button type="submit" variant='danger' onSubmit={handleDelete}>Remover</Button>
      <Button type="submit" variant='primary' onClick={()=>{handleListar(cpf)}}>Listar</Button>
    </Col>
  </Form.Group>
</Form>
</Container>
  )
}
