import React, { useState, useEffect } from 'react';
import api from '../../services/api';
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
    const [medico, setmedico] = useState([]);
    const idDetalhe = localStorage.getItem('idDetalhe');
    useEffect(() => {
        async function getData() {
            try {
                const response = await api.get(`/user/${idDetalhe}`)
                setmedico(response.data)
            } catch (error) {
                console.log(error.response.data);
            }
        }
        getData();
    })
    return (
        <>
            <Navbar />
            <Container>
                <Card className={classes.root}>
                    <CardHeader
                        avatar={<Avatar aria-label={medico.nome} className={classes.avatar} />}
                        title={medico.nome}
                        subheader={medico.email}
                    />
                    <CardContent>
                        <Typography variant="h6" component="h3">
                            <p>Especialidade: {medico.especialidade}</p>
                        </Typography>
                        <Typography variant="h6" component="h3">
                            <p>TELEFONE: {medico.telefone}</p>
                        </Typography>
                        <Typography variant="h6" component="h3">
                            <p>Conselho: {medico.conselho} - {medico.ufConselho}</p>
                        </Typography>
                        <Typography variant="h6" component="h3">
                            <p>STATUS: {medico.ativo ? `ATIVO` : `INATIVO`}</p>
                        </Typography>
                        <Typography variant="h6" component="h3">
                            <p>MEMBRO DESDE: {medico.created_at}</p>
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </>
    )
}

export default Paciente