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

                <CSVLink
                    filename={"db_agenda.csv"}
                    color="primary"
                    style={{ float: "left", marginRight: "10px" }}
                    className="btn btn-primary"
                    data={items}>
                    <GetAppIcon />
                </CSVLink>
                <ModalForm addItemToState={addItemToState} />
                <DataTable items={items} updateState={updateState} />
            </Container>
        </>
    )
}

export default App;