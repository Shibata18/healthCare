import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ForumRoundedIcon from '@material-ui/icons/ForumRounded';
import LocalHospitalRoundedIcon from '@material-ui/icons/LocalHospitalRounded';
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
      <Link to='/main'><ListItemText primary="Dashboard" /></Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <Link to='/paciente'><ListItemText primary="Pacientes" /></Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <LocalHospitalRoundedIcon/>
      </ListItemIcon>
      <Link to='/doctors'><ListItemText primary="Profissionais" /></Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <AssignmentIcon />
      </ListItemIcon>
      <Link to='/agenda'><ListItemText primary="Agenda" /></Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <ForumRoundedIcon />
      </ListItemIcon>
      <Link to='/chat'><ListItemText primary="Consultas" /></Link>
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