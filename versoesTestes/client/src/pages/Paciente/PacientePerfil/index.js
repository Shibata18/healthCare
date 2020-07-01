import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap'
import DataTable from './Table';
import Navbar from '../Navbar/index';
import api from '../../../services/api'

export default function App(props) {
    const [items, setItems] = useState([])
    const  cpfPaciente = localStorage.getItem('paciente_cpf') ;
    useEffect(() => {
      async function loadDevs() {
        const response = await api.get('/perfilPaciente',{headers:{perfil:cpfPaciente}})
        setItems(response.data)
      }
      loadDevs();
    },);

        return (
            <>
                <Navbar />

                      <Container className="App">
                        <Row>
                          <Col>
                            <h1 style={{margin: "20px 0"}}>Perfil {items.namePaciente}</h1>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <DataTable items={items} />
                          </Col>
                        </Row>
                      </Container>
            </>
        )
}
