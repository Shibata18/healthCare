import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {Link} from 'react-router-dom';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link to='/pacientePerfil'><ListItemText primary="Perfil" /></Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <AssignmentIcon />
      </ListItemIcon>
      <Link to='/agendaPaciente'><ListItemText primary="Agenda" /></Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <HelpOutlineRoundedIcon />
      </ListItemIcon>
     <Link to='#'> <ListItemText primary="Ajuda" /></Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <InfoRoundedIcon />
      </ListItemIcon>
      <Link to='#'><ListItemText primary="Sobre" /></Link>
    </ListItem>
  </div>
);