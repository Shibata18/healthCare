import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Button } from '@material-ui/core';

export const mainListItems = (
  <div>
    <ListItem button>
      <Button href='/doctorPerfil'>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Perfil" /></Button>
    </ListItem>
    <ListItem button>
      <Button href='/agendaDoctor'>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Agenda" /></Button>
    </ListItem>
    <ListItem button>
      <Button href='#'>
        <ListItemIcon>
          <HelpOutlineRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Ajuda" /></Button>
    </ListItem>
    <ListItem button>
      <Button href='#'>
        <ListItemIcon>
          <InfoRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Sobre" /></Button>
    </ListItem>
  </div>
);