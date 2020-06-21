import React from 'react';
import { BrowserRouter,Route,Switch } from "react-router-dom";
import LoginPage from './pages/Login';
import RegisterDoctor from './pages/Doctor/RegisterDoctor';
import ListDoctor from './pages/Doctor/ListDoctor';
import RegisterPaciente from './pages/Paciente';
import AgendaPage from './pages/Agenda'
import ChatPage from './pages/Chat'
//import NavBarPage from './pages/Navbar'
export default function Routes(){
    return(
        <BrowserRouter>
          {/*<NavBarPage/>*/}
        <Switch>
            <Route path='/' exact component={LoginPage} />
            <Route path='/registerDoctor' component={RegisterDoctor} />
            <Route path='/listDoctor' component={ListDoctor} />
            <Route path='/registerPaciente' component={RegisterPaciente} />
            <Route path='/agenda' component={AgendaPage} />
            <Route path='/chat' component={ChatPage} />
        </Switch>
        </BrowserRouter>
    );
}
