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
import { InputLabel, Select, MenuItem, Grid } from '@material-ui/core';

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

export default function SignInDoctor() {
    const classes = useStyles();
    const [cpfDoctor, setcpfDoctor] = useState('');
    const [nameDoctor, setnameDoctor] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [telefoneDoctor, settelefoneDoctor] = useState("");
    const [conselho, setConselho] = useState('');
    const [registro, setRegistro] = useState('');
    const [especialidade, setEspecialidade] = useState('');
    const [uf, setUF] = useState('');
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        const data = { cpfDoctor, email, password, nameDoctor, telefoneDoctor, conselho, registro, especialidade, uf }
        if (!data) {
            alert('Preencha os dados para continuar')
        } else {
            try {
                const response = await api.post('/doctor', data);
                login(response.data.token);
                history.push('/loginDoctor')
            } catch (error) {
                const mensagemErro = error.response.data.error.message;
                if (mensagemErro === 'insert into "doctors" ("conselho", "cpfDoctor", "created_at", "email", "especialidade", "nameDoctor", "password", "registro", "telefoneDoctor", "updated_at") values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) returning "id" - null value in column "cpfDoctor" violates not-null constraint') {
                    alert('CPF não pode estar em branco')
                } else if (mensagemErro === 'insert into "doctors" ("conselho", "cpfDoctor", "created_at", "email", "especialidade", "nameDoctor", "password", "registro", "telefoneDoctor", "updated_at") values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) returning "id" - null value in column "nameDoctor" violates not-null constraint') {
                    alert('Nome não pode estar em Branco')
                } else if (mensagemErro === 'insert into "doctors" ("conselho", "cpfDoctor", "created_at", "email", "especialidade", "nameDoctor", "password", "registro", "telefoneDoctor", "updated_at") values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) returning "id" - null value in column "email" violates not-null constraint') {
                    alert('Email não pode estar em branco')
                } else if (mensagemErro === 'insert into "doctors" ("conselho", "cpfDoctor", "created_at", "email", "especialidade", "nameDoctor", "password", "registro", "telefoneDoctor", "updated_at") values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) returning "id" - null value in column "password" violates not-null constraint') {
                    alert('Senha não pode estar em branco')
                } else if (mensagemErro === 'insert into "doctors" ("conselho", "cpfDoctor", "created_at", "email", "especialidade", "nameDoctor", "password", "registro", "telefoneDoctor", "updated_at") values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) returning "id" - null value in column "telefoneDoctor" violates not-null constraint') {
                    alert('Telefone Não pode estar em branco')
                } else if (mensagemErro === 'insert into "doctors" ("conselho", "cpfDoctor", "created_at", "email", "especialidade", "nameDoctor", "password", "registro", "telefoneDoctor", "updated_at") values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) returning "id" - null value in column "conselho" violates not-null constraint') {
                    alert('Conselho não pode estar em branco')
                } else if (mensagemErro === 'insert into "doctors" ("conselho", "cpfDoctor", "created_at", "email", "especialidade", "nameDoctor", "password", "registro", "telefoneDoctor", "updated_at") values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) returning "id" - null value in column "registro" violates not-null constraint') {
                    alert('Registro não pode estar em branco')
                } else if (mensagemErro === 'insert into "doctors" ("conselho", "cpfDoctor", "created_at", "email", "especialidade", "nameDoctor", "password", "registro", "telefoneDoctor", "updated_at") values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) returning "id" - null value in column "especialidade" violates not-null constraint') {
                    alert('Especialidade não pode estar em branco')
                } else if (mensagemErro === 'insert into "doctors" ("conselho", "cpfDoctor", "created_at", "email", "especialidade", "nameDoctor", "password", "registro", "telefoneDoctor", "updated_at") values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) returning "id" - duplicate key value violates unique constraint "doctors_cpfdoctor_unique"') {
                    alert('CPF já cadastrado')
                }
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
                    Cadastro Médico
        </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <InputLabel htmlFor='cpfDoctor'>CPF: *</InputLabel>
                    <input
                        type="text"
                        placeholder='CPF' minLength='11' maxLength='11' required
                        value={cpfDoctor}
                        onChange={e => setcpfDoctor(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="nameDoctor"
                        label="Nome"
                        type="text"
                        id="nameDoctor"
                        value={nameDoctor}
                        onChange={e => setnameDoctor(e.target.value)}
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
                        placeholder="(00) 12345-1234"
                        value={telefoneDoctor}
                        onChange={e => settelefoneDoctor(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="registro"
                        label="Registro"
                        type="text"
                        id="registro"
                        value={registro}
                        onChange={e => setRegistro(e.target.value)}
                    />
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <InputLabel htmlFor="conselho">Conselho</InputLabel>
                            <Select id='conselho' fullWidth variant='outlined' value={conselho} onChange={e => setConselho(e.target.value)}>
                                <MenuItem value='Teste1'>Teste 1</MenuItem>
                                <MenuItem value={'Teste2'}>Teste 2</MenuItem>
                                <MenuItem value={'Teste3'}>Teste 3</MenuItem>

                            </Select>
                        </Grid>
                        <Grid item xs={6}>
                            <InputLabel htmlFor="uf">UF</InputLabel>
                            <Select type="select" name="uf" fullWidth variant='outlined' id="uf" onChange={e => setUF(e.target.value)} value={uf} >
                                <MenuItem value='AC'>AC</MenuItem>
                                <MenuItem value='AL'>AL</MenuItem>
                                <MenuItem value='AM'>AM</MenuItem>
                                <MenuItem value='AP'>AP</MenuItem>
                                <MenuItem value='BA'>BA</MenuItem>
                                <MenuItem value='CE'>CE</MenuItem>
                                <MenuItem value='DF'>DF</MenuItem>
                                <MenuItem value='ES'>ES</MenuItem>
                                <MenuItem value='GO'>GO</MenuItem>
                                <MenuItem value='MA'>MA</MenuItem>
                                <MenuItem value='MG'>MG</MenuItem>
                                <MenuItem value='MS'>MS</MenuItem>
                                <MenuItem value='MT'>MT</MenuItem>
                                <MenuItem value='PA'>PA</MenuItem>
                                <MenuItem value='PB'>PB</MenuItem>
                                <MenuItem value='PE'>PE</MenuItem>
                                <MenuItem value='PI'>PI</MenuItem>
                                <MenuItem value='PR'>PR</MenuItem>
                                <MenuItem value='RJ'>RJ</MenuItem>
                                <MenuItem value='RN'>RN</MenuItem>
                                <MenuItem value='RO'>RO</MenuItem>
                                <MenuItem value='RR'>RR</MenuItem>
                                <MenuItem value='RS'>RS</MenuItem>
                                <MenuItem value='SC'>SC</MenuItem>
                                <MenuItem value='SE'>SE</MenuItem>
                                <MenuItem value='SP'>SP</MenuItem>
                                <MenuItem value='TO'>TO</MenuItem>
                            </Select>
                        </Grid>
                    </Grid>
                    <InputLabel htmlFor="especialidade">Especialidade</InputLabel>
                    <Select id='especialidade' fullWidth variant='outlined' value={especialidade}
                        onChange={e => setEspecialidade(e.target.value)}>
                        <MenuItem value='Teste1'>Teste 1</MenuItem>
                        <MenuItem value={'Teste2'}>Teste 2</MenuItem>
                        <MenuItem value={'Teste3'}>Teste 3</MenuItem>

                    </Select>
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