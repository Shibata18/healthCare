import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
//import api from "../../services/api";

import Logo from "../../assets/logo.svg";

import { Context, Container } from "./styles";

class LandingPage extends Component {

  render() {
    return (
      <Container>
        <Context>
          <img src={Logo} alt="logo" />
          <hr/>
          <Link to="/loginDoctor"><button>Login Médico</button> </Link>
          <hr />
          <Link to="/loginPaciente"><button>Login Paciente</button> </Link>
          <hr />
          <Link to="/signInAdmin">Admin </Link>
          <hr />
        </Context>
      </Container>
    );
  }
}

export default withRouter(LandingPage);
