import React, { useState, useEffect } from 'react'
import { Container, Grid } from '@material-ui/core'
import DataCard from './card';
import Navbar from '../Navbar/index';
import api from '../../../services/api';

function App(props) {

  const [items, setItems] = useState([])

  const getItems = async () => {
    try {
      const response = await api.get('/doctor');
      setItems(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getItems()
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1 style={{ margin: "20px 0", color: "#589303" }}>Profisionais</h1>
            <h6 style={{ margin: "20px 0", color: "#000" }}>Encontre o profissional certo para você</h6>
          </Grid>
          <Grid item xs={3}>
            <DataCard items={items} />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default App
