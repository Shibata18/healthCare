import React, { useState } from "react";
//import { registerDoctor, deleteDoctor, updateDoctor, getDoctorByCpf } from "../../../_actions/user_actions";
import { useHistory } from "react-router-dom";
import { Form, Button, Col, Row, Container } from 'react-bootstrap';
import './styles.css';
import api from '../../../services/api';


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
      const response = await api.post('/register', data);
      console.log(response);
      history.push("/login")
    } catch (error) {
      alert("Erro ao cadastrar")
    }
  }
  async function handleUpdate(e) {
    e.preventDefault();
    const data = { email, name, password, especialidade, conselho, registro, telefone };
    try {
      const response = await api.put('/register', { cpf, data })
      console.log(response);
      history.push("/register");
    } catch (error) {
      alert("Erro ao atualizar")
    }
  }
  async function handleDelete(e) {
    e.preventDefault();
    const data = { cpf };
    try {
      const response = await api.delete("/register", data);
      let respostaUsuario = document.getElementById('resposta');
      respostaUsuario.style.color = 'red';
      respostaUsuario.style.fontSize = '15px';
      respostaUsuario.innerText = 'Usuário Deletado Com sucesso';
      console.log(response);
      //setTimeout(() => { history.push("/register"); }, 3000);
    } catch (error) {
      alert("Erro ao deletar");
    }
  }
  async function handleListar(e) {
    e.preventDefault();
    let data = { cpf }
    try {
      const response = await api.get("/findByCpf",data);
      console.log(response.data);
      for (let i in response.data) {
        document.getElementById('resposta').innerHTML = `Email: ${response.data[i].email}`;
        document.getElementById('resposta1').innerHTML = `Nome: ${response.data[i].name}`;
        document.getElementById('resposta2').innerHTML = `especialidade: ${response.data[i].especialidade}`;
      }

    } catch (error) {
      alert('Erro ao Listar')
    }
  }
  function hideCadastrar() {
    document.getElementById('cadastrar').style.display = 'block'
    document.getElementById('atualizar').style.display = 'none'
    document.getElementById('deletar').style.display = 'none'
    document.getElementById('listar').style.display = 'none'
  }
  function hideUpdate() {
    document.getElementById('cadastrar').style.display = 'none'
    document.getElementById('atualizar').style.display = 'block'
    document.getElementById('deletar').style.display = 'none'
    document.getElementById('listar').style.display = 'none'
  }
  function hideDelete() {
    document.getElementById('cadastrar').style.display = 'none'
    document.getElementById('atualizar').style.display = 'none'
    document.getElementById('deletar').style.display = 'block'
    document.getElementById('listar').style.display = 'none'
  }
  function hideGet() {
    document.getElementById('cadastrar').style.display = 'none'
    document.getElementById('atualizar').style.display = 'none'
    document.getElementById('deletar').style.display = 'none'
    document.getElementById('listar').style.display = 'block'
  }
  return (
    <>
      <Container>
        <Button onClick={hideCadastrar} >Cadastrar</Button>
        <Button onClick={hideUpdate} >Atualizar</Button>
        <Button onClick={hideDelete} >Deletar</Button>
        <Button onClick={hideGet} >Listar</Button>
      </Container>
      <Container id='cadastrar' >
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
              <Form.Control type="password" name="password" id="password" placeholder='Digite a sua Senha' value={password} onChange={e => setPassword(e.target.value)} required />
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
      <Container id='atualizar' >
      <Form onSubmit={handleUpdate}>
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
            <Form.Control type="password" name="password" id="password" placeholder='Digite a sua Senha' value={password} onChange={e => setPassword(e.target.value)} required />
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
            <Button type="submit" variant='info'>Atualizar</Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
    <Container id='deletar'>
      <Form onSubmit={handleDelete}>
        
        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            CPF
    </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" name="cpf" placeholder='Digite o seu CPF' id="cpf" value={cpf} onChange={e => setCpf(e.target.value)} required />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>     
            <Button type="submit" variant='danger'>Remover</Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
    <Container id='listar' >
      <Form onSubmit={handleListar}>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            CPF
    </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" name="cpf" placeholder='Digite o seu CPF' id="cpf" value={cpf} onChange={e => setCpf(e.target.value)} required />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit" variant='primary'>Listar</Button>
          </Col>
        </Form.Group>
      </Form>
      <p id="resposta"></p>
      <p id="resposta1"></p>
      <p id="resposta2"></p>
    </Container>
    </>
  )
}
