import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import { login } from '../../../services/auth';
import api from '../../../services/api';
import { InputLabel } from '@material-ui/core';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://aquann.herokuapp.com/">
                Aquann
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignIn() {
    const classes = useStyles();
    const [cpfPaciente, setcpfPaciente] = useState('');
    const [namePaciente, setNamePaciente] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [telefonePaciente, setTelefonePaciente] = useState("");
    const history = useHistory();
    async function handleSubmit(e) {
        e.preventDefault();
        const data = { cpfPaciente, email, password, namePaciente, telefonePaciente }
        if (!data) {
            alert('Preencha os dados para continuar')
        } else {
            try {
                const response = await api.post('/paciente', data);
                login(response.data.token);
                history.push('/loginPaciente')
            } catch (error) {
                console.error(error.response);
                alert("Houve um problema com o cadastro, verifique o CPF , o email e a senha Novamente.")
            }
        }
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Cadastro
        </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                <input
                            type="text"
                            placeholder='CPF' minLength='11' maxLength='11' required
                            value={cpfPaciente}
                        onChange={e => setcpfPaciente(e.target.value)}
                        />
                 
                     <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="namePaciente"
                        label="Nome"
                        type="text"
                        id="namePaciente"
                        value={namePaciente}
                        onChange={e => setNamePaciente(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        type='email'
                        required
                        fullWidth
                        id="email"
                        label="E-mail"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        autoComplete="email"
                        autoFocus
                    />
                   
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Senha"
                        type="password"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        autoComplete="current-password"
                    />
                    <InputLabel htmlFor="telefonePaciente">Telefone</InputLabel>
                    <input
                        type="text"
                        placeholder="(00) 12345-1234" pattern="\([0-9]{2}\) [0-9]{4,6}-[0-9]{3,4}$" 
                        value={telefonePaciente}
                        onChange={e => setTelefonePaciente(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Cadastrar
          </Button>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}