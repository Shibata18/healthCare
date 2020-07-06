import React from 'react';
import Logo from "../../assets/logo.svg";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    //backgroundImage: 'url()',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'white',
      //theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <img src={Logo} alt="logo" />
          <Typography component="h1" variant="h5">
            Seja Bem vindo
            </Typography>
          <Box mt={1}>
            <a href="/loginDoctor"><Button variant="contained" color="secondary"> Médico</Button> </a>
          </Box>
          <Box mt={2}>
            <a href="/loginPaciente"><Button variant="contained" color="primary"> Paciente</Button> </a>
          </Box>
          <Grid item xs={12}>
            <Box mt={4}>
              <a href="/loginAdmin">Admin </a>
            </Box>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
}