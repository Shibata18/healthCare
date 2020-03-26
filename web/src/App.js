import React, { useState, useEffect } from 'react';
import './App.css';
import api from './services/api';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await api.post('/doctors', { email, name, password });

  }
  return (
    <div className="container">
      <img src="" alt="logo" />
      <div className="content">
        <p>Cadastre-se</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nome</label>
          <input type="text" id='name' placeholder='Digite o seu nome' value={name} onChange={e => setName(e.target.value)} />
          <label htmlFor="email">Email</label>
          <input type="email" id='email' placeholder='Digite o seu email' value={email} onChange={e => setEmail(e.target.value)} />
          <label htmlFor="password">Senha</label>
          <input type="password" id='password' placeholder='Digite a sua senha' value={password} onChange={e => setPassword(e.target.value)} />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
