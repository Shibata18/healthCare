import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";
import LandingPage from './pages/LandingPage';
import MainPage from './pages/Main';
import CadastrarPage from './pages/Cadastro';
import ListaProfissionais from './pages/ListaProfissionais';
import ListaPacientes from './pages/Pacientes';
import Agenda from './pages/Agenda'
import Chat from './pages/Chat';
import Perfil from './pages/Perfil';
import ErrorPage from './pages/Error';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path='/cadastrar' component={CadastrarPage} />
      <PrivateRoute path='/main' component={MainPage}/>
      <PrivateRoute path='/listaProfissionais' component={ListaProfissionais}/>
      <PrivateRoute path='/pacientes' component={ListaPacientes}/>
      <PrivateRoute path='/agenda' component={Agenda}/> 
      <PrivateRoute path='/perfil' component={Perfil}/>
      <PrivateRoute path='/chat' component={Chat}/>
      <Route path="*" component={ErrorPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
