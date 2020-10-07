import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core'
import ModalForm from './Modal';
import DataTable from './Table';
import Navbar from '../Navbar';
import { CSVLink } from "react-csv";
import GetAppIcon from '@material-ui/icons/GetApp';
import api from '../../services/api'

function App(props) {
    const [items, setItems] = useState([])
    const ehMedico = localStorage.getItem('ehMedico');
    useEffect(() => {
        const cpf = localStorage.getItem('cpfUser')
        const getItems = async () => {
            try {
                const response = await api.get('/agenda', { headers: { cpfPaciente: cpf, cpfDoctor: cpf } });
                setItems(response.data)
            } catch (error) {
                console.log(error);
                alert("Erro em carregar os dados")
            }
        }
        getItems()
    }, []);
    const addItemToState = (item) => {
        setItems([...items, item])
    }

    const updateState = (item) => {
        const itemIndex = items.findIndex(data => data.id === item.id)
        const newArray = [...items.slice(0, itemIndex), item, ...items.slice(itemIndex + 1)]
        setItems(newArray)
    }

    return (
        <>
            <Navbar />
            <Container>
                <h1 style={{ margin: 20 }}>Agenda</h1>
                {ehMedico === 'true'?
                <>
                <ModalForm addItemToState={addItemToState} />
                <CSVLink
                    filename={`db_agenda_${items.doctor_cpf}.csv`}
                    style={{ float: "left", marginRight: "10px"}}
                    className="btn btn-secondary"
                    data={items}>
                    <GetAppIcon/>
                </CSVLink>
                <DataTable items={items} updateState={updateState} /> 
                </>:  <DataTable items={items}/>  }
            </Container>
        </>
    )
}

export default App;