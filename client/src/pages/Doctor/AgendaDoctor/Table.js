import React from 'react'
import { Table, TableContainer, Paper, TableHead, TableRow, TableCell, TableBody, Button } from '@material-ui/core';
//import ModalForm from './Modal'
import DuoIcon from '@material-ui/icons/Duo';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
function DataTable(props) {
  const items = props.items.map(item => {
    const date = new Date(item.horario)
    const dataAtual = new Date();
    const horario = date.getTime();
    localStorage.setItem('idAgenda', item.id)
    return (
      <TableRow key={item.id}>
        {/* <th scope="row">{item.id}</th> */}
        {/* <TableCell>{item.nameDoctor}</TableCell> */}
        <TableCell>{item.cpfPaciente}</TableCell>
        <TableCell>{item.namePaciente}</TableCell>
        <TableCell>{date.toString()}</TableCell>
        <TableCell>{horario > dataAtual ? <Button href='/chatDoctor' color='primary'><DuoIcon /></Button> : <Button disabled color='inherit'><DuoIcon /></Button>}</TableCell>
        <TableCell>
          {/*    <div style={{ width: "10%" }}>
            <ModalForm buttonLabel="Editar" item={item} updateState={props.updateState} />
            {/* <Button color="danger" onClick={() => deleteItem(item.id)}>Del</Button> }
          </div> */}
        </TableCell>
      </TableRow>
    )
  })
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>CPF Paciente</TableCell>
            <TableCell>Paciente</TableCell>
            <TableCell>Horário</TableCell>
            <TableCell>Vídeo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DataTable
