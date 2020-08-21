import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core'
import DataProfile from './DataProfile';
import Navbar from '../Navbar';
import api from '../../services/api'
import DataProfessional from './UCardProf';

function Profile(props) {
    const [items, setItems] = useState([])
    useEffect(() => {
        const cpf = localStorage.getItem('cpfUser')
        const getItems = async () => {
            try {
                const response = await api.get('/perfil', { headers: { cpfUser: cpf } });
                setItems(response.data)
            } catch (error) {
                console.log(error);
                alert("Erro em carregar os dados")
            }
        }
        getItems()
    }, []);

    const updateState = (item) => {
        const itemIndex = items.findIndex(data => data.id === item.id)
        const newArray = [...items.slice(0, itemIndex), item, ...items.slice(itemIndex + 1)]
        setItems(newArray)
    }
    function setFunc(event) {
        if (event.target.value === 'paciente') {
            document.getElementById('usuarioPaciente').style.display = 'block';
            document.getElementById('usuarioProfissional').style.display = 'none';
        } else if (event.target.value === 'profissional') {
            document.getElementById('usuarioPaciente').style.display = 'none';
            document.getElementById('usuarioProfissional').style.display = 'block';
        }
    }
    localStorage.setItem('nome', items.nome);
    localStorage.setItem('ehMedico', items.ehMedico);

    return (
        <>
            <Navbar />
            <Container>
                <div onChange={setFunc}>
                    <input type='radio' value='paciente' name="func" defaultChecked /> Paciente
                     <input type="radio" value='profissional' name="func" /> Sou Profissional de Saúde
                 </div>
                <h2 style={{ margin: 20, color: '#00BCD4' }}>Olá, {items.nome}</h2>
                <div id="usuarioPaciente">
                    <DataProfile items={items} updateState={updateState} />
                </div>
                <div id='usuarioProfissional' style={{ display: 'none' }}>
                    <DataProfessional items={items} updateState={updateState} />
                </div>
            </Container>
        </>
    )
}

export default Profile;