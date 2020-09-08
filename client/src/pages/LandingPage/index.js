import React from 'react';
import Slogan from "../../assets/slogan.png";
import Logo from "../../assets/logo.png";
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Login from "../Login";

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${Slogan})`,
    backgroundRepeat: 'no-repeat',
    //backgroundColor: 'white',
      //theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: '100% 100%',
    //backgroundPosition: 'center',
  },
  logo:{
    width:"100%",
    height:"100%",
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
          <img src={Logo} alt="logo Fabbrini" className={classes.logo}  />
          <Typography component="h3" variant="h5" style={{color:'#65C0E7'}}>
            Sua Saúde não deve ter Obstáculos
            </Typography>
          <Typography component="h4" variant="h5" style={{color:'#5C0E7'}}>
            Seja Bem vindo
          </Typography>
            <Login/>
        </div>
      </Grid>
    </Grid>
  );
}