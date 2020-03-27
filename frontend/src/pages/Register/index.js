import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import './style.css';
import logosvg from '../../assets/logo.svg';
import api from '../../services/api';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [conselho, setConselho] = useState('');
    const [registro, setRegistro] = useState('');
    const [especialidade, setEspecialidade] = useState('');
    const [imagem, setImagem] = useState('');
    const history = useHistory();
    async function handleRegister(e) {
        e.preventDefault();
        const data = { cpf, name, email, senha, telefone, conselho, registro, especialidade, imagem };

        try {
            await api.post('doctors', data);
            history.push('/')
        } catch (error) {
            alert("Erro no cadastro, tente novamente");

        }
    }
    async function handleUpdate(e) {
        e.preventDefault();
        const data = { cpf, name, email, senha, telefone, conselho, registro, especialidade, imagem };

        try {
            await api.put('doctors', data);
            history.push('/')
        } catch (error) {
            alert("Erro ao atualizar, tente novamente");

        }
    }
    async function handleDelete(e) {
        e.preventDefault();
        const data = { cpf, name, email, senha, telefone, conselho, registro, especialidade, imagem };

        try {
            await api.delete('doctors', data);
            history.push('/')
        } catch (error) {
            alert("Erro ao inativar, tente novamente");

        }
    }
    return (
        <>
            <div className="container-lateral">
                <img src={logosvg} alt='Logo' />
                <Link to='/'>Pacientes</Link>
                <Link to='/'>Profissionais</Link>
                <Link to='/agenda'>Agenda</Link>
                <Link to='/'>Consultas</Link>
                <Link to='/'>Prontuário</Link>
                <Link to='/'>Sobre</Link>
                <Link to='/'>Ajuda</Link>
            </div>
            <div className='register-container'>
                <div className='content'>
                    <h1>Cadastro</h1>
                    <form onSubmit={handleRegister}>
                        <input placeholder='Nome' type='text' value={name} onChange={e => setName(e.target.value)} />
                        <input placeholder='CPF' minLength='11' maxLength='11' value={cpf} onChange={e => setCpf(e.target.value)} />
                        <input type='email' placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)} />
                        <input type='password' placeholder='Senha' value={senha} onChange={e => setSenha(e.target.value)} />
                        <input placeholder='telefone' value={telefone} onChange={e => setTelefone(e.target.value)} />
                        <input placeholder='Conselho' value={conselho} onChange={e => setConselho(e.target.value)} />
                        <input placeholder='Registro' value={registro} onChange={e => setRegistro(e.target.value)} />
                        <input placeholder='Especialidade' value={especialidade} onChange={e => setEspecialidade(e.target.value)} />
                        <input placeholder='imagem' value={imagem} onChange={e => setImagem(e.target.value)} />
                        <button type='submit' onSubmit={handleRegister} >Cadastrar</button>
                        <button type='submit' onSubmit={handleUpdate} >Atualizar</button>
                        <button type='submit' onSubmit={handleDelete}>Inativar</button>
                    </form>
                </div>
            </div>
        </>
    )
}
