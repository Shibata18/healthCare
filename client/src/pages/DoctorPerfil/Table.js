import React from 'react'
import ModalForm from './Modal'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {Container,Card,CardHeader,CardContent,Collapse }from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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

export default function DataTable(props){
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const item = props.items
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
            <div style={{ width: "10%" }}>
              <ModalForm buttonLabel="Edit" item={item} updateState={props.updateState}/>
              {/*<Button color="danger" onClick={() => deleteItem(item.id)}>Del</Button>*/ }
            </div>
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
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <h4>ID:</h4>
                <p >{item.id}</p>
          <h4>CPF</h4>
            <p>{item.cpfDoctor}</p>
          <h4>Nome</h4>
            <p>{item.nameDoctor}</p>
          <h4>Email</h4>
            <p>{item.email}</p>
          <h4>Telefone</h4>
            <p>{item.telefoneDoctor}</p>
          <h4>Conselho</h4>
            <p>{item.conselho}</p>
          <h4>Especialidade</h4>
            <p>{item.especialidade}</p>
          <h4>Registro</h4>
            <p>{item.registro}</p>
          <h4>Status</h4>
            <p>{item.ativo_medico?`Ativo`:`Inativo`}</p>
          <h4>Criado</h4>
            <p>{item.created_at}</p>
          <h4>Atualizado</h4>
            <p>{item.updated_at}</p>
          <h4>Editar</h4>
                <div style={{ width: "10%" }}>
                  <ModalForm buttonLabel="Edit" item={item} updateState={props.updateState}/>
                  {/*<Button color="danger" onClick={() => deleteItem(item.id)}>Del</Button>*/ }
                </div>
        </CardContent>
      </Collapse>
    </Card>
  </Container>
  );
}
