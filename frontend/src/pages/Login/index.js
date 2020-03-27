import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import logo from '../../assets/logo.svg'
import api from '../../services/api';
export default function Login() {
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const history = useHistory();
    function handleSubmit(e) {
        e.preventDefault();
        const data = {email,senha};
        try {
            const response = api.post('sessions',data);
            localStorage.setItem('doctorEmail',email);
            localStorage.setItem('doctorSenha',senha);
            localStorage.setItem('doctorName',response.data.name);
            history.push('/agenda');
        } catch (error) {
            alert('Falha no login, tente novamente');
        }
    }
    return (
        <div className="login-container">
            <img src={logo} alt="logo"/>
            <div className="login-content">
                <p>SLogan</p>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder='Digite o seu Email' value={email} onChange={e=>setEmail(e.target.value)} />
                    <input type='password' placeholder='Digite a sua senha' value={senha} onChange={e=>setSenha(e.target.value)} />
                    <button type="submit">Logar</button>
                    <Link  to='/register'>Clique aqui para se cadastrar</Link>
                </form>
            </div>
        </div>
    )
}