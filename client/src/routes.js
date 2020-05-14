import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";
import LandingPage from './pages/LandingPage';
import ChatPage from './pages/Chat';
//Admin
import SignUpAdmin from './pages/Admin/SignUpAdmin';
import SignInAdmin from './pages/Admin/SignInAdmin';
import Main from './pages/Admin/Main';
import Agenda from './pages/Admin/Agenda';
import Paciente from './pages/Admin/Paciente';
import Doctors from './pages/Admin/Doctor';
//Doctor
import LoginDoctor from './pages/Medico/LoginDoctor';
import RegisterDoctor from './pages/Medico/RegisterDoctor';
import DoctorPerfil from './pages/Medico/DoctorPerfil';
import AgendaDoctor from "./pages/Medico/AgendaDoctor";
//Paciente
import LoginPaciente from './pages/Paciente/LoginPaciente';
import RegisterPaciente from './pages/Paciente/RegisterPaciente';
import PacientePerfil from './pages/Paciente/PacientePerfil';
import AgendaPaciente from './pages/Paciente/AgendaPaciente';

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
      {/* <PrivateRoute path="/chat" component={ChatPage} /> */}
      <PrivateRoute path="/chat" component={ChatPage} />
      {/* Admin */}
      <Route path="/signInAdmin" component={SignInAdmin} />
      <Route path="/signupAdmin" component={SignUpAdmin} />
      <PrivateRoute path="/agenda" component={Agenda} />
      <PrivateRoute path="/main" component={Main} />
      {/* Doctor */}
      <Route path="/loginDoctor" component={LoginDoctor} />
      <Route path="/registerDoctor" component={RegisterDoctor} />
      <PrivateRoute path="/doctors" component={Doctors} />
      <PrivateRoute path="/doctorPerfil" component={DoctorPerfil} />
      <PrivateRoute path='/agendaDoctor' component={AgendaDoctor} />
      {/* Paciente */}
      <Route path="/loginPaciente" component={LoginPaciente} />
      <Route path="/registerPaciente" component={RegisterPaciente} />
      <PrivateRoute path="/paciente" component={Paciente} />
      <PrivateRoute path="/pacientePerfil" component={PacientePerfil} />
      <PrivateRoute path='/agendaPaciente' component={AgendaPaciente} />
      <Route path="*" component={() => <h1>Página não encontrada ou não existe</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
