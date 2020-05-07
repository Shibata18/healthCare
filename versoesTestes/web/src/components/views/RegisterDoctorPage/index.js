import React, { useState, useEffect } from 'react';
import api from '../../../services/api';
import DevForm from './Forms/DoctorsForm'

export default function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/doctor')

      setDevs(response.data)
    }
    loadDevs();
  }, []);
  async function handleAddDev(data) {
    const response = await api.post('/doctor', data)

    setDevs([...devs, response.data])
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
          {devs.map(dev => (
            <li key={dev._id}>
           <header>
               <div>
                   <strong>{dev.nameDoctor}</strong>
                   <strong>{dev.cpfDoctor}</strong>
               </div>
           </header>
           <p>{dev.email}</p>
       </li>
          ))
          }
        </ul>
      </main>
    </div>
  );
}
