import React from 'react';
import { Table,TableContainer,Paper,TableHead,TableRow, TableCell, TableBody } from '@material-ui/core';
import ModalForm from './Modal'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
    minWidth: 750,
  },
});
function DataTable(props){
  const classes = useStyles();
    const items = props.items.map(item => {
      return (
        <TableRow key={item.id}>
          {/* <TableHead >{item.id}</TableHead> */}
          <TableCell align='justify'>{item.cpfDoctor}</TableCell>
          <TableCell align='justify'>{item.nameDoctor}</TableCell>
          <TableCell align='justify'>{item.email}</TableCell>
          <TableCell align='justify'>{item.telefoneDoctor}</TableCell>
          <TableCell align='justify'>{item.conselho}</TableCell>
          <TableCell align='justify'>{item.registro}</TableCell>
          <TableCell align='justify'>{item.especialidade}</TableCell>
          <TableCell align='justify'>{item.ativo_medico?`Ativo`:`Inativo`}</TableCell>
          <TableCell align='justify'>{item.created_at}</TableCell>
          <TableCell align='justify'>{item.updated_at}</TableCell>
          <TableCell align='justify'>
            <div style={{ width: "10%" }}>
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
            {/* <TableCell align='justify'>ID</TableCell> */}
            <TableCell align='justify'>CPF</TableCell>
            <TableCell align='justify'>Nome</TableCell>
            <TableCell align='justify'>Email</TableCell>
            <TableCell align='justify'>Telefone</TableCell>
            <TableCell align='justify'>Conselho</TableCell>
            <TableCell align='justify'>Registro</TableCell>
            <TableCell align='justify'>Especialidade</TableCell>
            <TableCell align='justify'>Status</TableCell>
            <TableCell align='justify'>Criado</TableCell>
            <TableCell align='justify'>Atualizado</TableCell>
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
