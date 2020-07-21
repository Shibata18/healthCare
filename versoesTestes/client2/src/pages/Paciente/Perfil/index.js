import React, { useState, useEffect } from 'react';
import api from '../../../services/api';
import Navbar from '../Navbar';
import { Container, Card, Avatar, CardHeader, CardContent, Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        paddingTop: '56',
        marginTop: 50,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 15,
    },
    avatar: {
        backgroundColor: red[500],
    },
}));
function Paciente() {
    const classes = useStyles();
    const [pacientes, setPacientes] = useState([]);
    // const [agendaPaciente, setAgendaPaciente] = useState([]);
    const cpfPaciente = localStorage.getItem('paciente_cpf');

    /* useEffect(() => {
        async function getProntuario() {
            const response = await api.get('/agendaPaciente', { headers: { cpfPaciente: cpfPaciente } })
            setAgendaPaciente(response.data);
        }
        getProntuario();
    })
 */
    useEffect(() => {
        async function getData() {
            try {
                const response = await api.get('/perfilPaciente', { headers: { perfil: cpfPaciente } })
                setPacientes(response.data)
            } catch (error) {
                console.log(error.response.data);
            }
        }
        getData();
    })
    /*    function mostrarProntuario() {
          try{
               return (
                   agendaPaciente.map((value, index) => {
                       return (
                           <>
                               <p>Consulta:{value.id}</p>
                               <p>Prontuario: {value.prontuario}</p>
                           </>
                       )
                   })
                   
               )
           }catch (err){
               
           }
       } */
    localStorage.setItem('nomePaciente', pacientes.namePaciente);
    return (
        <>
            <Navbar />
            <Container>
                <Card className={classes.root}>
                    <CardHeader
                        avatar={<Avatar aria-label={pacientes.namePaciente} className={classes.avatar} />}
                        title={pacientes.namePaciente}
                        subheader={pacientes.email}
                    />
                    <CardContent>
                        <Typography variant="h6" component="h3">
                            <p>CPF: {pacientes.cpfPaciente}</p>
                        </Typography>
                        <Typography variant="h6" component="h3">
                            <p>TELEFONE: {pacientes.telefonePaciente}</p>
                        </Typography>
                        <Typography variant="h6" component="h3">
                            <p>STATUS: {pacientes.ativo_paciente ? `ATIVO` : `INATIVO`}</p>
                        </Typography>
                    </CardContent>
                </Card>
                {/*    <Card className={classes.root}>
                    <CardContent>
                        PRONTUÁRIO:
                        {mostrarProntuario()}
                    </CardContent>
                </Card> */}
            </Container>
        </>
    )
}

export default Paciente;