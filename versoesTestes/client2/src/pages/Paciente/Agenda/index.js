import React, { useState, useEffect,useCallback } from 'react';
import { Container, Row, Col } from 'reactstrap'
//import ModalForm from './Modal';
import DataTable from './Table';
//import { CSVLink } from "react-csv";
import Navbar from '../Navbar/index';
import api from '../../../services/api'

function App(props) {
  const [items, setItems] = useState([])
  const getItems = useCallback(async() => {
    const cpfPaciente = localStorage.getItem('paciente_cpf');
    await api.get('/agendaPaciente', { headers: { cpfPaciente: cpfPaciente } })
      .then(response => response.data)
      .then(items => setItems(items))
      .catch(err => console.log(err))
  },[])

   const updateState = (item) => {
    const itemIndex = items.findIndex(data => data.id === item.id)
    const newArray = [...items.slice(0, itemIndex), item, ...items.slice(itemIndex + 1)]
    setItems(newArray)
  }

  useEffect(() => {
    getItems()
  }, [getItems]);

  return (
    <>
      <Navbar />

      <Container className="App">
        <Row>
          <Col>
            <h1 style={{ margin: "20px 0",color:"#564780" }}>Agenda</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <DataTable items={items}  updateState={updateState}  />
          </Col>
        </Row>
        <Row>
          <Col>
         {/*    <CSVLink
              filename={`db_agenda_${cpfMedico}.csv`}
              color="primary"
              style={{ float: "left", marginRight: "10px" }}
              className="btn btn-primary"
              data={items}>
              Download CSV
                            </CSVLink> */}
            {/* <ModalForm buttonLabel="Adicionar Agenda" addItemToState={addItemToState} />  */}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App