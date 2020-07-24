import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Navbar from '../Navbar';
import { Container, Card, Avatar, CardHeader, CardContent, Typography, Button} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Update from './update';
import Editar from './editarProf';
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
    const cpfUser = localStorage.getItem('cpfUser');
       
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
                const response = await api.get('/perfil', { headers: { cpfUser: cpfUser } })
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
    function showEditar() {
        document.getElementById('editar').style.display = 'block';
    }
    function showEditarProf() {
        document.getElementById('editarProf').style.display = 'block';
    }

    function setFunc(event) {
        if (event.target.value === 'paciente') {
            document.getElementById('usuarioPaciente').style.display = 'block';
            document.getElementById('usuarioProfissional').style.display = 'none';
        } else if (event.target.value === 'profissional') {
            document.getElementById('usuarioPaciente').style.display = 'none';
            document.getElementById('usuarioProfissional').style.display = 'block';
            }
    }
    localStorage.setItem('nome', pacientes.nome);
    return (
        <>
            <Navbar />
            <Container>
                <div onChange={setFunc.bind(this)}>
                    <input type='radio' value='paciente' name="func" defaultChecked/> Paciente
            <input type="radio" value='profissional' name="func" /> Profissional
          </div>
          <div id='usuarioPaciente'>
                <Card className={classes.root}>
                    <CardHeader
                        avatar={<Avatar aria-label={pacientes.nome} className={classes.avatar} />}
                        title={pacientes.nome}
                        subheader={pacientes.email}
                    />
                    <CardContent>
                        <Typography variant="h6" component="h3">
                            <p>CPF: {pacientes.cpfUser}</p>
                        </Typography>
                        <Typography variant="h6" component="h3">
                            <p>Nome: {pacientes.nome}</p>
                        </Typography>
                        <Typography variant="h6" component="h3">
                            <p>TELEFONE: {pacientes.telefone}</p>
                        </Typography>
                        <Typography variant="h6" component="h3">
                            <p>STATUS: {pacientes.ativo ? `ATIVO` : `INATIVO`}</p>
                        </Typography>
                    </CardContent>
                </Card>
                {/*    <Card className={classes.root}>
                    <CardContent>
                        PRONTUÁRIO:
                        {mostrarProntuario()}
                    </CardContent>
                </Card> */}
                <Button onClick={showEditar} color='primary' variant="contained" >Editar Perfil</Button>
                <div id='editar' style={{ display: 'none' }}>
                    <Update/>
                </div> 
                </div>
                <div id='usuarioProfissional' style={{ display: 'none' }}>
                <Card className={classes.root}>
                    <CardHeader
                        avatar={<Avatar aria-label={pacientes.nome} className={classes.avatar} />}
                        title={pacientes.nome}
                        subheader={pacientes.email}
                    />
                    <CardContent>
                        <Typography variant="h6" component="h3">
                            <p>CPF: {pacientes.cpfUser}</p>
                        </Typography>
                        <Typography variant="h6" component="h3">
                            <p>Conselho: {pacientes.conselho} - {pacientes.ufConselho}</p>
                        </Typography>
                        <Typography variant="h6" component="h3">
                            <p>Especialidade: {pacientes.especialidade}</p>
                        </Typography>
                        <Typography variant="h6" component="h3">
                            <p>TELEFONE: {pacientes.telefone}</p>
                        </Typography>
                        <Typography variant="h6" component="h3">
                            <p>Registro: {pacientes.registro}</p>
                        </Typography>
                        <Typography variant="h6" component="h3">
                            <p>STATUS: {pacientes.ativo ? `ATIVO` : `INATIVO`}</p>
                        </Typography>
                    </CardContent>
                </Card>
                {/*    <Card className={classes.root}>
                    <CardContent>
                        PRONTUÁRIO:
                        {mostrarProntuario()}
                    </CardContent>
                </Card> */}
                <Button onClick={showEditarProf} color='primary' variant="contained" >Editar Perfil</Button>
                <div id='editarProf' style={{ display: 'none' }}>
                    <Editar/>
                </div> 
                </div>
            </Container>
        </>
    )
}

export default Paciente