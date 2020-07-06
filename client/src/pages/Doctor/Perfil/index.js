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
function Doctor() {
    const classes = useStyles();
    const [doctor, setdoctor] = useState([]);
    const cpfMedico = localStorage.getItem('doctor_cpf');
    useEffect(() => {
      async function loadDevs() {
        const response = await api.get('/perfilDoctor', { headers: { perfil: cpfMedico } })
        localStorage.setItem('idDoctor',response.data.id);
        setdoctor(response.data)
      }
      loadDevs();
    });
    return (
        <>
            <Navbar />
            <Container>
                <Card className={classes.root}>
                    <CardHeader
                        avatar={<Avatar aria-label={doctor.nameDoctor} className={classes.avatar} />}
                        title={doctor.nameDoctor}
                        subheader={doctor.email}
                    />
                    <CardContent>
                        <Typography variant="h6" component="h3">
                            <p>CPF: {doctor.cpfDoctor}</p>
                        </Typography>
                        <Typography variant="h6" component="h3">
                            <p>TELEFONE: {doctor.telefoneDoctor}</p>
                        </Typography>
                        <Typography variant="h6" component="h3">
                            <p>CONSELHO: {doctor.conselho}</p>
                        </Typography>
                        <Typography variant="h6" component="h3">
                            <p>REGISTRO: {doctor.registro}</p>
                        </Typography>  
                        <Typography variant="h6" component="h3">
                            <p>ESPECIALIDADE: {doctor.especialidade}</p>
                        </Typography>
                        <Typography variant="h6" component="h3">
                            <p>STATUS: {doctor.ativo_medico?`ATIVO`:`INATIVO`}</p>
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </>
    )
}

export default Doctor;