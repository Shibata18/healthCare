import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Doctors from './pages/Doctor';
import Main from './pages/Main';
import Paciente from './pages/Paciente';
import ChatPage from './pages/Chat'
import Agenda from './pages/Agenda';
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
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/chat" component={ChatPage} />
      <PrivateRoute path="/agenda" component={Agenda} />
      <PrivateRoute path="/doctors" component={Doctors} />
      <PrivateRoute path="/paciente" component={Paciente} />
      <PrivateRoute path="/main" component={Main} />
      {/*  <Route path="/doctors" component={Doctors} />
      <Route path="/paciente" component={Paciente} />
      <Route path="/agenda" component={Agenda} />
      <Route path="/main" component={Main} />
      <PrivateRoute path="/chat" component={() => <h1>Chat</h1>} />
      */}
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
