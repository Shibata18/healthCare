import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SignUpAdmin from './pages/SignUpAdmin';
import SignInAdmin from './pages/SignInAdmin';
import LandingPage from './pages/LandingPage';
import LoginDoctor from './pages/LoginDoctor';
import RegisterDoctor from './pages/RegisterDoctor';
import Doctors from './pages/Doctor';
import LoginPaciente from './pages/LoginPaciente';
import RegisterPaciente from './pages/RegisterPaciente';
import Main from './pages/Main';
import Paciente from './pages/Paciente';
import ChatPage from './pages/Chat'
import Agenda from './pages/Agenda';
import DoctorPerfil from './pages/DoctorPerfil';
import PacientePerfil from './pages/PacientePerfil';
import { isAuthenticated } from "./services/auth";

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
      {/*  <Route path="/doctors" component={Doctors} />
      <Route path="/paciente" component={Paciente} />
      <Route path="/agenda" component={Agenda} />
      <Route path="/main" component={Main} />
      <Route path="/chat" component={ChatPage} />
      <Route path='/doctorPerfil' component={DoctorPerfil} /> */}
      <Route path="*" component={() => <h1>Página não encontrada ou não existe</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
