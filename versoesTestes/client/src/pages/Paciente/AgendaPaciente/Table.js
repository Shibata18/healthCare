import React from 'react'
import { Table,TableContainer,Paper,TableHead,TableRow, TableCell, TableBody } from '@material-ui/core';
import ModalForm from './Modal'
import DuoIcon from '@material-ui/icons/Duo';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
function DataTable(props) {
  const items = props.items.map(item => {
    const date = new Date(item.horario)
    return (
      <TableRow key={item.id}>
        {/* <th scope="row">{item.id}</th> */}
        <TableCell align='justify'>{item.doctor_cpf}</TableCell>
        <TableCell align='justify'>{item.paciente_cpf}</TableCell>
        <TableCell align='justify'>{item.horario = date.toUTCString()}</TableCell>
        <TableCell align='justify'>{item.file.map(item => { return (<p key={item.id}><a rel="noopener noreferrer" href={item.url} target='_blank'>{item.path}</a></p>) })}</TableCell>
        <TableCell align='justify'>{item.created_at}</TableCell>
        <TableCell align='justify'>{item.updated_at}</TableCell>
        <TableCell align='justify'><Link to='/chatPaciente'><DuoIcon/></Link></TableCell>
        <TableCell align='justify'>
          <div style={{ width: "10%" }}>
            <ModalForm buttonLabel="Editar" item={item} updateState={props.updateState} />
            {/* <Button color="danger" onClick={() => deleteItem(item.id)}>Del</Button> */}
          </div>
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
          <TableCell align='justify'>Arquivo</TableCell>
          <TableCell align='justify'>Criado</TableCell>
          <TableCell align='justify'>Atualizado</TableCell>
          <TableCell align='justify'>Vídeo</TableCell>
          <TableCell align='justify'>Editar</TableCell>
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
