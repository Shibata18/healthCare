import React from 'react'
import { Table,TableContainer,Paper,TableHead,TableRow, TableCell, TableBody } from '@material-ui/core';
import ModalForm from './Modal'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
function DataTable(props){
  const classes = useStyles();
    const items = props.items.map(item => {
      return (
        <TableRow key={item.id}>
          <TableCell align='center'>{item.cpfPaciente}</TableCell>
          <TableCell align='center'>{item.namePaciente}</TableCell>
          <TableCell align='center'>{item.email}</TableCell>
          <TableCell align='center'>{item.telefonePaciente}</TableCell>
          <TableCell align='center'>{item.ativo_paciente?`Ativo`:`Inativo`}</TableCell>
          <TableCell align='center'>{item.created_at}</TableCell>
          <TableCell align='center'>{item.updated_at}</TableCell>
          <TableCell align='center'>
            <div style={{ widTableCell: "10%" }}>
              <ModalForm buttonLabel="Editar" item={item} updateState={props.updateState}/>
              {/*<Button color="danger" onClick={() => deleteItem(item.id)}>Del</Button>*/ }
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
            <TableCell align='center'>CPF</TableCell>
            <TableCell align='center'>Nome</TableCell>
            <TableCell align='center'>Email</TableCell>
            <TableCell align='center'>Telefone</TableCell>
            <TableCell align='center'>Status</TableCell>
            <TableCell align='center'>Criado</TableCell>
            <TableCell align='center'>Atualizado</TableCell>
            <TableCell align='center'>Editar</TableCell>
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
