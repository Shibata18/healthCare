import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ModalForm from './Modal';
import DataTable from './Table';
import Navbar from '../Navbar/index';
import api from '../../../services/api';
import { CSVLink } from "react-csv";
import GetAppIcon from '@material-ui/icons/GetApp';


function App(props) {

  const [items, setItems] = useState([])

  const getItems= async () => {
    try {
      const response = await api.get('/doctor');
      setItems(response.data);
    } catch (error) {
     console.error(error); 
     alert("Erro em carregar os dados")   

    }
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
    <Navbar/>
      <Container className="App">
        <Row>
          <Col>
            <h1 style={{margin: "20px 0",color:"#617019"}}>Médicos</h1>
          </Col>
        </Row>
        <Row>
          <Col>
          <CSVLink
              filename={"db_medico.csv"}
              color="primary"
              style={{float: "left", marginRight: "10px"}}
              className="btn btn-primary"
              data={items}>
              <GetAppIcon/>
            </CSVLink>
            <ModalForm buttonLabel="Adicionar Médico" addItemToState={addItemToState}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <DataTable items={items} updateState={updateState} deleteItemFromState={deleteItemFromState} />
          </Col>
        </Row>
      </Container>
      </>
  )
}

export default App