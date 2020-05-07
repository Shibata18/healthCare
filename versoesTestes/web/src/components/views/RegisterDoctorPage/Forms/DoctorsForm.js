import React, { useState } from 'react';

export default function DevForm({ onSubmit }) {

    const [cpfDoctor, setCpfMedico] = useState('');
    const [nameDoctor, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [especialidade, setEspecialidade] = useState('');
    const [registro, setRegistro] = useState('');
    const [conselho, setConselho] = useState('');
    const [telefoneDoctor, setTelefoneDoctor] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

         await onSubmit({
            cpfDoctor,
            email,
            nameDoctor,
            password,
            especialidade,
            conselho,
            registro,
            telefoneDoctor
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='cpfDoctor'>cpfDoctor</label>
                <input type='text' name='cpfDoctor' id='cpfDoctor' required value={cpfDoctor} onChange={e => setCpfMedico(e.target.value)} />
            </div>
            <div>
                <label htmlFor='nameDoctor'>Nome</label>
                <input name='nameDoctor' id='nameDoctor' required value={nameDoctor} onChange={e => setName(e.target.value)} />
            </div>
              <div>
                  <label htmlFor='email'>Email</label>
                  <input type='email' name='email' id='email' required value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div>
                  <label htmlFor='password'>Senha</label>
                  <input type='password' name='password' id='password' required value={password} onChange={e => setPassword(e.target.value)} />
              </div>
              <div>
                  <label htmlFor='conselho'>Conselho</label>
                  <input type='text' name='conselho' id='conselho' required value={conselho} onChange={e => setConselho(e.target.value)} />
              </div>
              <div>
                  <label htmlFor='registro'>Registro</label>
                  <input type='number' name='registro' id='registro' required value={registro} onChange={e => setRegistro(e.target.value)} />
              </div>
              <div>
                  <label htmlFor='telefoneDoctor'>telefoneDoctor</label>
                  <input type='number' name='telefoneDoctor' id='telefoneDoctor' required value={telefoneDoctor} onChange={e => setTelefoneDoctor(e.target.value)} />
              </div>
              <div>
                  <label htmlFor='especialidade'>especialidade</label>
                  <input type='text' name='especialidade' id='especialidade' required value={especialidade} onChange={e => setEspecialidade(e.target.value)} />
              </div>
            <button type='submit'>Salvar</button>
        </form>
    )
}
