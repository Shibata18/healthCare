import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";
import LandingPage from './pages/LandingPage';
import ChatPage from './pages/Chat'
//ADMIN
import SignUpAdmin from './pages/Admin/SignUpAdmin';
import SignInAdmin from './pages/Admin/SignInAdmin';
import Main from './pages/Admin/Main';
import Agenda from './pages/Admin/Agenda';
//Doctors
import LoginDoctor from './pages/Medico/LoginDoctor';
import RegisterDoctor from './pages/Medico/RegisterDoctor';
import Doctors from './pages/Medico/Doctor';
import DoctorPerfil from './pages/Medico/DoctorPerfil';
//Paciente
import LoginPaciente from './pages/Paciente/LoginPaciente';
import RegisterPaciente from './pages/Paciente/RegisterPaciente';
import Paciente from './pages/Paciente/PacienteCRU';
import PacientePerfil from './pages/Paciente/PacientePerfil';

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
      <Route path="/signInAdmin" component={SignInAdmin} />
      <Route path="/signupAdmin" component={SignUpAdmin} />
      <Route path="/loginDoctor" component={LoginDoctor} />
      <Route path="/registerDoctor" component={RegisterDoctor} />
      <Route path="/loginPaciente" component={LoginPaciente} />
      <Route path="/registerPaciente" component={RegisterPaciente} />
      <PrivateRoute path="/agenda" component={Agenda} />
      <PrivateRoute path="/doctors" component={Doctors} />
      <PrivateRoute path="/paciente" component={Paciente} />
      <PrivateRoute path="/main" component={Main} />
      <PrivateRoute path="/chat" component={ChatPage} />
      <PrivateRoute path="/doctorPerfil" component={DoctorPerfil} />
      <PrivateRoute path="/pacientePerfil" component={PacientePerfil} />
      <Route path="*" component={() => <h1>Página não encontrada ou não existe</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
