import React from 'react'
import { Table, TableContainer, Paper, TableHead, TableRow, TableCell, TableBody, Button } from '@material-ui/core';
import ModalForm from './Modal'
import { makeStyles } from '@material-ui/core/styles';
import DuoIcon from '@material-ui/icons/Duo';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
function DataTable(props) {
  const classes = useStyles();
  const items = props.items.map(item => {
    const date = new Date(item.horario)
    const dataAtual = new Date();
    const horario = date.getTime();
    return (
      <TableRow key={item.id}>
        <TableCell>{item.doctor_cpf}</TableCell>
        <TableCell>{item.paciente_cpf}</TableCell>
        <TableCell>{date.toString()}</TableCell>
        <TableCell>{item.created_at}</TableCell>
        <TableCell>{item.updated_at}</TableCell>
        <TableCell align='justify'>{horario > dataAtual ? <Button href='#' color='primary'><DuoIcon /></Button> : <Button disabled color='inherit'><DuoIcon /></Button>}</TableCell>
        <TableCell>
          <div style={{ width: "10%" }}>
            <ModalForm buttonLabel="Editar" item={item} updateState={props.updateState} />
            {/* <Button color="danger" onClick={() => deleteItem(item.id)}>Del</Button> */}
          </div>
        </TableCell>
      </TableRow>
    )
  })

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">CPF Doctor</TableCell>
            <TableCell align="center">CPF Paciente</TableCell>
            <TableCell align="center">Horario</TableCell>
            <TableCell align="center">Criado</TableCell>
            <TableCell align="center">Atualizado</TableCell>
            <TableCell align="center">Vídeo</TableCell>
            <TableCell align="center">Editar</TableCell>
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
