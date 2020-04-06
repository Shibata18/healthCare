import React, { useState } from "react";
import { registerDoctor, deleteDoctor, updateDoctor, getDoctorByCpf, getDoctor } from "../../../_actions/user_actions";
import { useHistory } from "react-router-dom";
import './styles.css'

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
      history.push("/register");
      console.log(getDoctorByCpf(cpf));
    } catch (error) {
      alert("Erro ao atualizar")
    }
  }
  async function handleDelete(e) {
    e.preventDefault();
    const data = { email, name, password, cpf, especialidade, conselho, registro, telefone };
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
  async function handleListar(e) {
    e.preventDefault();
    try {
      await getDoctor();
      let respostaUsuario = document.getElementById('resposta');
      respostaUsuario.innerText = getDoctor();
    } catch (error) {
      alert('Erro ao Listar')
    }
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <label className='col-25' htmlFor="email">E-mail</label>
        <input className='col-75' type="email" name="email" id="email" placeholder='Digite o seu email' value={email} onChange={e => setEmail(e.target.value)} />
        <label className='col-25' htmlFor="name">Nome</label>
        <input className='col-75' type="text" name="name" id="name" placeholder='Digite o seu Nome' value={name} onChange={e => setName(e.target.value)} />
        <label className='col-25' htmlFor="password">Senha</label>
        <input className='col-75' type="password" name="password" id="password" placeholder='Digite a sua Senha' value={password} onChange={e => setPassword(e.target.value)} />
        <label className='col-25' htmlFor="cpf">cpf</label>
        <input className='col-75' type="number" name="cpf" placeholder='Digite o seu CPF' id="cpf" value={cpf} minLength='11' maxLength='11' onChange={e => setCpf(e.target.value)} />
        <label className='col-25' htmlFor="telefone">telefone</label>
        <input className='col-75' type="number" name="telefone" placeholder='Digite o seu Telefone' id="telefone" value={telefone} onChange={e => setTelefone(e.target.value)} />
        <label className='col-25' htmlFor="registro">Registro</label>
        <input className='col-75' type="text" name="registro" id="registro" placeholder='Digite o seu Registro' value={registro} onChange={e => setRegistro(e.target.value)} />
        <label className='col-25' htmlFor="conselho">conselho</label>
        <input className='col-75' type="text" name="conselho" id="conselho" placeholder='Digite o seu conselho' value={conselho} onChange={e => setConselho(e.target.value)} />
        <label className='col-25' htmlFor="especialidade">especialidade</label>
        <input className='col-75' type="text" name="especialidade" id="especialidade" placeholder='Digite o seu especialidade' value={especialidade} onChange={e => setEspecialidade(e.target.value)} />
        <button type="submit" onSubmit={handleSubmit}>Cadastrar</button>
        <button type="submit" onSubmit={handleUpdate}>Atualizar</button>
        <button type="submit" onSubmit={handleDelete}>Inativar</button>
        <button type="submit" onSubmit={handleListar}>Listar</button>
      </form>
      <p className="resposta"></p>
    </div>
  )
}