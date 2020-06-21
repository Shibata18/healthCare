/*import React, { useState } from "react";
import TutorialDataService from "../Forms/DoctorsForm";

const AddTutorial = () => {
  const initialTutorialState = {
    id: null,
    cpfMedico: "",
    emailDoctor:"",
    nameDoctor:"",
    password:"",
    especialidade:"",
    conselho:"",
    registro:'',
    telefoneDoctor:"",
  };
  const [tutorial, setTutorial] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    var data = {
      cpfMedico: tutorial.cpfMedico,
      emailDoctor: tutorial.emailDoctor,
      nameDoctor: tutorial.nameDoctor,
      password: tutorial.password,
      especialidade: tutorial.especialidade,
      conselho: tutorial.conselho,
      registro: tutorial.registro,
      telefoneDoctor: tutorial.telefoneDoctor
    };

    TutorialDataService.create(data)
      .then(response => {
        setTutorial({
          id: response.data.id,
          cpfMedico: response.data.cpfMedico,
          emailDoctor: response.data.emailDoctor,
          nameDoctor: response.data.nameDoctor,
          password: response.data.password,
          especialidade: response.data.especialidade,
          conselho: response.data.conselho,
          registro: response.data.registro,
          telefoneDoctor: response.data.telefoneDoctor
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newTutorial = () => {
    setTutorial(initialTutorialState);
    setSubmitted(false);
  };

  <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newTutorial}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="cpfMedico">CPF</label>
            <input
              type="text"
              className="form-control"
              id="cpfMedico"
              required
              value={tutorial.cpfMedico}
              onChange={handleInputChange}
              name="cpfMedico"
            />
          </div>
          <div>
            <div className="form-group">
              <label htmlFor="nameDoctor">Nome</label>
              <input
                type="text"
                className="form-control"
                id="nameDoctor"
                required
                value={tutorial.nameDoctor}
                onChange={handleInputChange}
                name="nameDoctor"
              />
            </div>
            <div>
              <div className="form-group">
                <label htmlFor="emailDoctor">Title</label>
                <input
                  type="email"
                  className="form-control"
                  id="emailDoctor"
                  required
                  value={tutorial.emailDoctor}
                  onChange={handleInputChange}
                  name="emailDoctor"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">password</label>
                <input
                  type="text"
                  className="form-control"
                  id="password"
                  required
                  value={tutorial.password}
                  onChange={handleInputChange}
                  name="password"
                />
            </div>
              <div className="form-group">
                <label htmlFor="telefoneDoctor">telefoneDoctor</label>
                <input
                  type="number"
                  className="form-control"
                  id="telefoneDoctor"
                  required
                  value={tutorial.telefoneDoctor}
                  onChange={handleInputChange}
                  name="telefoneDoctor"
                />
            </div>
              <div className="form-group">
                <label htmlFor="conselho">conselho</label>
                <input
                  type="text"
                  className="form-control"
                  id="conselho"
                  required
                  value={tutorial.conselho}
                  onChange={handleInputChange}
                  name="conselho"
                />
            </div>
            <div className="form-group">
              <label htmlFor="registro">Registro</label>
              <input
                type="text"
                className="form-control"
                id="registro"
                required
                value={tutorial.registro}
                onChange={handleInputChange}
                name="Registro"
              />
            </div>
            <div className="form-group">
              <label htmlFor="especialidade">especialidade</label>
              <input
                type="text"
                className="form-control"
                id="especialidade"
                required
                value={tutorial.especialidade}
                onChange={handleInputChange}
                name="especialidade"
              />
            </div>
          <button onClick={saveTutorial} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddTutorial;

import React, { useState, useEffect } from 'react';
import api from '../../../services/api';
import DevForm from './Form/DoctorsForm'

export default function registerDoctors() {
  const [doctors, setDoctors] = useState('');

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/registerDoctor')

      setDoctors(response.data)
    }
    loadDevs();
  }, []);
  async function handleAddDev(data) {
    const response = await api.post('/dev', data)

    setDoctors([...doctors, response.data])
    console.log(response.data);
  }
  return (
    <div id='app'>
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {doctors.map(dev => (
            <li  key={dev._id} >
              <header>
                <div>
                    <strong>{dev.cpfMedico}</strong>
                    <strong>{dev.nameDoctor}</strong>
                    <strong>{dev.emailDoctor}</strong>
                    <strong>{dev.especialidade}</strong>
                    <strong>{dev.conselho}</strong>
                    <strong>{dev.registro}</strong>
                    <strong>{dev.telefoneDoctor}</strong>
                    <strong>{dev.password}</strong>
                    <strong>{dev.ativo_medico}</strong>
                </div>
            </header>
              <p>{dev.especialidade}</p>
          </li>
          ))
          }
        </ul>
      </main>
    </div>
  );
}
import React, { useState, useEffect } from 'react';

export default function DevForm({ onSubmit }) {

    const [cpfMedico, setCpfMedico] = useState('');
    const [nameDoctor, setName] = useState('');
    const [emailDoctor, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [especialidade, setEspecialidade] = useState('');
    const [registro, setRegistro] = useState('');
    const [conselho, setConselho] = useState('');
    const [telefoneDoctor, setTelefoneDoctor] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        await onSubmit({
            cpfMedico,
            emailDoctor,
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
                <label htmlFor='cpfMedico'>Usuário do github</label>
                <input type='text' name='cpfMedico' id='cpfMedico' required value={cpfMedico} onChange={e => setCpfMedico(e.target.value)} />
            </div>
            <div>
                <label htmlFor='nameDoctor'>Tecnologias</label>
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
*/
