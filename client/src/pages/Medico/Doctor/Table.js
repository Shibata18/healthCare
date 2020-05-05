import React from 'react'
import ModalForm from './Modal'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {Container,Card,CardHeader,CardContent,Collapse,Typography }from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function DataTable(props){
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
    const items = props.items.map(item => {
      return (
        <Container fixed>
          <Card className={classes.root}>

              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    {item.id}
                  </Avatar>
                }
                title={item.nameDoctor}
                subheader={item.cpfDoctor}
              />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    <p>Email: {item.email}</p>
                    <p>Status: {item.ativo_medico?`Ativo`:`Inativo`}</p>
                </Typography>
            </CardContent>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
          <IconButton>
            <CardContent>
              <div style={{ width: "10%" }}>
                <ModalForm buttonLabel="Editar" item={item} updateState={props.updateState}/>
              </div>
            </CardContent>
          </IconButton>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            {/*<h4>ID:</h4>
                  <p >{item.id}</p>
            <h4>CPF</h4>
              <p>{item.cpfDoctor}</p>
            <h4>Nome</h4>
              <p>{item.nameDoctor}</p>
            <h4>Email</h4>
              <p>{item.email}</p>*/}
              <p>Telefone: {item.telefoneDoctor}</p>
              <p>Conselho: {item.conselho}</p>
              <p>Especialidade: {item.especialidade}</p>
              <p>Registro: {item.registro}</p>
              <p>Criado: {item.created_at}</p>
            <p>Atualizado: {item.updated_at}</p>
        </Collapse>
      </Card>
    </Container>
      )
    })

    return (
      <Container>
          {items}
        </Container>
    )
}

export default DataTable
