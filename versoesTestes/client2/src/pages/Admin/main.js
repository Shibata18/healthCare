import React, { useEffect, useState } from 'react';
import { Grid, Container, Card, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar';
import api from '../../services/api';

const useStyles = makeStyles((theme) => ({

    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    root: {
        maxWidth: 345,
        minWidth: 275,
    },
    media: {
        height: 140,
    },
    title: {
        fontSize: 14,
    },
}));

const Example = (props) => {
    const classes = useStyles();
    const [numeroDoctors, setNumeroDoctors] = useState('');
    const [numeroDoctorsTotal, setNumeroDoctorsTotal] = useState('');
    const [numeroPacientes, setNumeroPacientes] = useState('');
    const [numeroPacientesTotal, setNumeroPacientesTotal] = useState('');
    useEffect(() => {
        async function getDoctorActive() {
            try {
                const response = await api.get("/numeroDoctor")
                setNumeroDoctors(response.data)
            } catch (error) {
                alert('Erro ao carregar os dados')
            }
        }
        getDoctorActive();
    }, [])
    useEffect(() => {
        async function getTotalDoctor() {
            try {
                const response = await api.get("/numeroDoctorTotal")
                setNumeroDoctorsTotal(response.data)
            } catch (error) {
                alert('Erro ao carregar os dados')
            }
        }
        getTotalDoctor();
    }, [])
    useEffect(() => {
        async function getPacienteActive() {
            try {
                const response = await api.get("/numeroPaciente")
                setNumeroPacientes(response.data)
            } catch (error) {
                alert('Erro ao carregar os dados')
            }
        }
        getPacienteActive();
    }, [])
    useEffect(() => {
        async function getTotalPaciente() {
            try {
                const response = await api.get("/numeroPacienteTotal")
                setNumeroPacientesTotal(response.data)
            } catch (error) {
                alert('Erro ao carregar os dados')
            }
        }
        getTotalPaciente();
    }, [])
    return (
        <>
            <Navbar />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={6}>

                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Profissionais  Ativos  </Typography>
                                    <Typography variant="h1" component="h2"> {numeroDoctors}    </Typography>

                                </CardContent>
                            </Card>


                        </Grid>
                        <Grid item xs={12} sm={6}>

                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Total de Profissionais        </Typography>
                                    <Typography variant="h1" component="h2"> {numeroDoctorsTotal}</Typography>
                                </CardContent>
                            </Card>


                        </Grid>
                        <Grid item xs={12} sm={6}>

                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Pacientes Ativos    </Typography>
                                    <Typography variant="h1" component="h2">
                                        {numeroPacientes}    </Typography>

                                </CardContent>
                            </Card>


                        </Grid>
                        <Grid item xs={12} sm={6}>

                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                       Total de Pacientes
    </Typography>
                                    <Typography variant="h1" component="h2">
                                        {numeroPacientesTotal}
    </Typography>

                                </CardContent>
                            </Card>


                        </Grid>
                    </Grid>
                </Container>
            </main>
        </>
    );
};

export default Example;