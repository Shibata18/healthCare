import React from 'react'
import { Table,TableContainer,Paper,TableHead,TableRow, TableCell, TableBody,Button } from '@material-ui/core';
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
    return (
      <TableRow key={item.id}>
        {/* <th scope="row">{item.id}</th> */}
        <TableCell align='justify'>{item.doctor_cpf}</TableCell>
        <TableCell align='justify'>{item.paciente_cpf}</TableCell>
        <TableCell align='justify'>{date.toString()}</TableCell>
        <TableCell align='justify'>{item.created_at}</TableCell>
        <TableCell align='justify'>{item.updated_at}</TableCell>
        <TableCell align='justify'>{horario>dataAtual?<Button href='/chatPaciente' color='primary'><DuoIcon/></Button>:<Button disabled color='inherit'><DuoIcon/></Button>}</TableCell>
        <TableCell align='justify'>
          {/* <div style={{ width: "10%" }}>
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
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          {/* <th>ID</th> */}
          <TableCell align='justify'>CPF Médico</TableCell>
          <TableCell align='justify'>CPF Paciente</TableCell>
          <TableCell align='justify'>Horario</TableCell>
          <TableCell align='justify'>Criado</TableCell>
          <TableCell align='justify'>Atualizado</TableCell>
          <TableCell align='justify'>Vídeo</TableCell>
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
