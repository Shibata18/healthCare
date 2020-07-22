import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import api from "../../services/api";
import { useHistory } from 'react-router-dom';
import { login } from '../../services/auth';

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
    const [cpfUser, setCpfUser] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    async function handleSubmit(e) {
        e.preventDefault();
        const data = { cpfUser,  password }
            try {
                const response = await api.post('/sessions', data);
                login(response.data.token);
                history.push('/main')
            } catch (error) {
                if(error.response.data[0].field === 'cpfUser'){
                    alert('CPF não encontrado')
                }else if(error.response.data[0].field === 'password')alert('Senha inválida')
                console.log(error.response.data[0]);
            }
    }
    return (
        <Container component="main" maxWidth="xs">
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                        <input
                        type="text"
                        placeholder='CPF*' minLength='11' maxLength='11' required
                        value={cpfUser}
                        onChange={e=>setCpfUser(e.target.value)}
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
                        onChange={e=>setPassword(e.target.value)}
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
                            <Link href="/cadastrar" variant="body2">
                                {"Clique aqui para se Cadastrar"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}