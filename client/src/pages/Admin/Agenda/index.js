import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core'
import ModalForm from './Modal';
import DataTable from './Table';
import Navbar from '../Navbar';
import api from '../../../services/api'

function App(props) {
    const [items, setItems] = useState([])

    const getItems = async () => {
        await api.get('/agenda')
            .then(response => response.data)
            .then(items => setItems(items))
            .catch(err => console.log(err))
    }
    const addItemToState = (item) => {
        setItems([...items, item])
    }

    const updateState = (item) => {
        const itemIndex = items.findIndex(data => data.id === item.id)
        const newArray = [...items.slice(0, itemIndex), item, ...items.slice(itemIndex + 1)]
        setItems(newArray)
    }

    const deleteItemFromState = (id) => {
        const updatedItems = items.filter(item => item.id !== id)
        setItems(updatedItems)
    }

    useEffect(() => {
        getItems()
    }, []);

    return (
        <>
            <Navbar />

            <Container>
                <h1 style={{ margin: 20 }}>Agenda</h1>
                <ModalForm addItemToState={addItemToState} />
                <DataTable items={items} updateState={updateState} deleteItemFromState={deleteItemFromState} />
            </Container>
        </>
    )
}

export default App;
/* import React, { useState, useEffect } from 'react';
import api from '../../../services/api';
import NavBar from '../Navbar';
import AgendaTable from './table';
import AddAgenda from './addAgenda';
import { Container } from '@material-ui/core';
function Agenda() {
    const [agenda, setagenda] = useState([]);
    useEffect(() => {
        async function getData() {
            const response = await api.get('/agenda');
            setagenda(response.data)
            console.log(response.data);
        }
        getData();
    }, [])
    const addAgenda = consulta => {
        consulta.id = agenda.length + 1;
        setagenda([...agenda, consulta])
    }
    return (
        <>
            <NavBar />
            <Container style={{ marginTop: 10 }}>
                <AddAgenda addAgenda={addAgenda} />
                <AgendaTable agenda={agenda} />
            </Container>
        </>
    )
}

export default Agenda; */