import React from 'react';
import { BrowserRouter,Route,Switch } from "react-router-dom";
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import AgendaPage from './pages/Agenda'
export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path='/' exact component={LoginPage} />
            <Route path='/register' component={RegisterPage} />
            <Route path='/agenda' component={AgendaPage} />
        </Switch>
        </BrowserRouter>
    );
}

