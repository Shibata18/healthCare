import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import api from "../../../services/api";
import { useHistory } from 'react-router-dom';
import { login } from '../../../services/auth';

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

export default function SignInPaciente() {
    const classes = useStyles();
    const [cpfPaciente, setcpfPaciente] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    async function handleSubmit(e) {
        e.preventDefault();
        const data = { cpfPaciente, password }
        if (!data) {
            alert('Preencha os dados para continuar')
        } else {
            try {
                const response = await api.post('/loginPaciente', data);
                localStorage.setItem('paciente_cpf', cpfPaciente);
                login(response.data.token);
                history.push('/pacientePerfil')
            } catch (error) {
                console.log(error);
                alert("Houve um problema com o login, verifique o CPF e a senha Novamente.")
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
                    Login Paciente
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
                        name="password"
                        label="Senha"
                        type="password"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        autoComplete="current-password"
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Entrar
          </Button>
                    <Grid container>
                        <Grid item>
                            <Link href="/registerPaciente" variant="body2">
                                {"Não tem Conta?  Cadastre-se"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}