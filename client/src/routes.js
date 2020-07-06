import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";
import LandingPage from './pages/LandingPage';
import LoginAdmin from './pages/Admin/Login';
import MainAdmin from './pages/Admin/main';
import SignUpAdmin from './pages/Admin/SignUp';
import Paciente from './pages/Admin/Paciente';
import Agenda from './pages/Admin/Agenda';
import Doctors from './pages/Admin/Doctors';
//Paciente
import LoginPaciente from './pages/Paciente/Login';
import RegisterPaciente from './pages/Paciente/Register';
import PerfilPaciente from './pages/Paciente/Perfil';
import AgendaPaciente from './pages/Paciente/Agenda';
import ChatPaciente from './pages/Paciente/Chat';
//Doctor
import DoctorLogin from './pages/Doctor/Login';
import DoctorRegister from './pages/Doctor/Register';
import DoctorPerfil from './pages/Doctor/Perfil';
import AgendaDoctor from './pages/Doctor/AgendaDoctor';
import ChatDoctor from './pages/Doctor/Chat';

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
      <Route path='/loginAdmin' component={LoginAdmin} />
      <Route path='/signUpAdmin' component={SignUpAdmin} />
      <PrivateRoute path='/main' component={MainAdmin}/>
      <PrivateRoute path='/pacientesAdmin' component={Paciente}/>
      <PrivateRoute path='/agendaAdmin' component={Agenda}/>
      <PrivateRoute path='/doctorsAdmin' component={Doctors}/>
      {/* Paciente */}
      <Route path='/loginPaciente' component={LoginPaciente} />
      <Route path='/registerPaciente' component={RegisterPaciente} />
      <PrivateRoute path='/pacientePerfil' component={PerfilPaciente}/>
      <PrivateRoute path='/agendaPaciente' component={AgendaPaciente}/>
      <PrivateRoute path='/chatPaciente' component={ChatPaciente}/>
      {/* Doctor */}
      <Route path='/loginDoctor' component={DoctorLogin}/>
      <Route path='/registerDoctor' component={DoctorRegister} />
      <PrivateRoute path='/doctorPerfil' component={DoctorPerfil}/>
      <PrivateRoute path='/agendaDoctor' component={AgendaDoctor}/>
      <PrivateRoute path='/chatDoctor' component={ChatDoctor}/>
      <Route path="*" component={() => <h1>Página não encontrada ou não existe</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
