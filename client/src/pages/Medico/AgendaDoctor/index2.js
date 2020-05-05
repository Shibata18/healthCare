import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap'
import ModalForm from './Modal';
import DataTable from './Table';
import { CSVLink } from "react-csv";
import Navbar from '../Navbar/index';
import api from '../../services/api'

function App(props) {
    const [items, setItems] = useState([])

    const getItems = async ()=>{
      await api.get('/paciente')
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

                      <Container className="App">
                        <Row>
                          <Col>
                            <h1 style={{margin: "20px 0"}}>CRUD Paciente</h1>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <DataTable items={items} updateState={updateState} deleteItemFromState={deleteItemFromState} />
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <CSVLink
                              filename={"db_paciente.csv"}
                              color="primary"
                              style={{float: "left", marginRight: "10px"}}
                              className="btn btn-primary"
                              data={items}>
                              Download CSV
                            </CSVLink>
                            <ModalForm buttonLabel="Adicionar Paciente" addItemToState={addItemToState}/>
                          </Col>
                        </Row>
                      </Container>
            </>
        )
}

export default App
