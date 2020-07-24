import React from 'react';
import { Card, CardActions, Typography, Button, CardContent, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import BookmarkBorderRoundedIcon from '@material-ui/icons/BookmarkBorderRounded';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
function DataTable(props) {
  const classes = useStyles();
  const items = props.items.map(item => {
    if(item.ehMedico){
      localStorage.setItem('idDetalhe',item.id)
    return (
      <Grid container spacing={3} key={item.id}>
        <Grid item xs={3} >
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Email: {item.email}
              </Typography>
              <Typography variant="h5" component="h2">
                Nome: {item.nome}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Especialidade {item.especialidade}
              </Typography>
              <Typography variant="body2" component="p">
                Avaliação:
          </Typography>
            </CardContent>
            <CardActions>
              <Button size="small"><BookmarkBorderRoundedIcon  color='disabled' /></Button>
              <Button size="small" href={`/detalhePerfil/${item.id}`}><AccountCircleRoundedIcon  color='primary' /></Button>
              <Button size="small"><ThumbUpIcon  color='disabled' /></Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    )}else{
      return (<Grid key={item.id}></Grid>)
    }
  })

  return (

    <Grid item xs={3}>
      {items}
    </Grid>
  )
}

export default DataTable
