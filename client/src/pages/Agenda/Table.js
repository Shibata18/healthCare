import React from 'react'
import { Table, TableContainer, Paper, TableHead, TableRow, TableCell, TableBody, Button } from '@material-ui/core';
import ModalForm from './Modal'
import { makeStyles } from '@material-ui/core/styles';
import DuoIcon from '@material-ui/icons/Duo';
import { format, isBefore } from 'date-fns'
import { ptBR } from "date-fns/locale";
import { Document, Page, Text, View, PDFDownloadLink, StyleSheet } from '@react-pdf/renderer';
import Header from './components/Header';
import Footer from './components/Footer';
const styles = StyleSheet.create({
  section: {
    margin: 10,
    flexGrow: 5
  },
  title: {
    margin: 20,
    fontSize: 25,
    textAlign: 'center',
    backgroundColor: '#e4e4e4',
  },
  body: {
    flexGrow: 1,
  },
  text: {
    width: '60%',
    margin: 10,
    textAlign: 'justify',
  },
});
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
      "'Dia' dd 'de' MMMM', às ' HH:mm'h'", { locale: ptBR }
    );
    const horarioAgendado = isBefore(horario, dataAtual);
    localStorage.setItem('idAgenda', item.id)
    return (
      <TableRow key={item.id}>
        <TableCell>{item.doctor_cpf}</TableCell>
        <TableCell>{item.paciente_cpf}</TableCell>
        <TableCell>{formattedDate}</TableCell>
        <TableCell>{/* {item.prontuario === null ? '' : item.prontuario.prontuario} */}
          <PDFDownloadLink document={
            <Document>
              <Page size="A4">
                <View>
                  <Header />
                </View>
                <View style={styles.title}>
                  <Text>CPF Médico : {item.doctor_cpf} </Text>
                  <Text>CPF Paciente : {item.paciente_cpf} </Text>
                </View>
                <View style={styles.body}>
                  <Text style={styles.text}>Prontuário: {item.prontuario === null ? '' : item.prontuario.prontuario}</Text>
                </View>
                <Footer />
              </Page>
            </Document>} fileName={`${date.toUTCString()}.pdf`}>
            {item.prontuario === null ?
              '' : ({ blob, url, loading, error }) => (loading ? 'Carregando os dados...' : 'Baixar Prontuário!')}
          </PDFDownloadLink>
        </TableCell>
        <TableCell align='justify'>{horarioAgendado ? <Button href='/chat' color='primary'><DuoIcon /></Button> : <Button disabled color='inherit'><DuoIcon /></Button>}</TableCell>
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
