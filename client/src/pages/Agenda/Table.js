import React from 'react'
import { Table, TableContainer, Paper, TableHead, TableRow, TableCell, TableBody, Button } from '@material-ui/core';
import ModalForm from './Modal'
import { makeStyles } from '@material-ui/core/styles';
import DuoIcon from '@material-ui/icons/Duo';
import { getHours, getMinutes, getDate, getYear, getMonth, format } from 'date-fns'
import { ptBR } from "date-fns/locale";
const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
});
function DataTable(props) {
  const classes = useStyles();
  const ehMedico = localStorage.getItem('ehMedico');
  const items = props.items.map(item => {
    const date = new Date(item.horario)
    const dataAtual = new Date();
    const horario = date.getTime();
    const formattedDate = format(
      date,
      "'Dia' dd 'de' MMMM', às ' HH:mm'h'",{locale:ptBR}
    );
    console.log(formattedDate);
    const diaMarcado = getDate(horario);
    const mesMarcado = getMonth(horario);
    const anoMarcado = getYear(horario);
    const horaMarcada = getHours(horario);
    const minutoMarcado = getMinutes(horario);

    const diaAtualAgora = getDate(dataAtual)
    const mesAtual = getMonth(dataAtual)
    const anoAtual = getYear(dataAtual);
    const horaAtual = getHours(dataAtual);
    const minutoAtual = getMinutes(dataAtual);

    const validar = () => {
      if ((diaMarcado === diaAtualAgora) && (mesMarcado === mesAtual) && (anoMarcado === anoAtual) && (horaMarcada === horaAtual) && (minutoMarcado === minutoAtual)) {
        return true;
      } else {
        return false;
      }
    }
    localStorage.setItem('idAgenda', item.id)
    return (
      <TableRow key={item.id}>
        <TableCell>{item.doctor_cpf}</TableCell>
        <TableCell>{item.paciente_cpf}</TableCell>
        <TableCell>{formattedDate}</TableCell>
        <TableCell>{item.prontuario === null ? '' : item.prontuario.prontuario}</TableCell>
        <TableCell align='justify'>{validar() ? <Button href='/chat' color='primary'><DuoIcon /></Button> : <Button disabled color='inherit'><DuoIcon /></Button>}</TableCell>
        {ehMedico === 'true' ?
          <TableCell>
            <div style={{ width: "10%" }}>
              <ModalForm buttonLabel="Editar" item={item} updateState={props.updateState} />
            </div>
          </TableCell> : <TableCell></TableCell>}
      </TableRow>
    )
  })

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>CPF Médico</TableCell>
            <TableCell>CPF Paciente</TableCell>
            <TableCell>Horario</TableCell>
            <TableCell>Prontuário</TableCell>
            <TableCell>Vídeo</TableCell>
            {ehMedico === 'true' ?
              <TableCell>Editar</TableCell> : <TableCell></TableCell>}
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
