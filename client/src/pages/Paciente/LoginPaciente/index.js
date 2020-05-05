import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import api from '../../../services/api'
import Logo from "../../../assets/logo.svg";
import { login } from "../../../services/auth";

import { Form, Container } from "./styles";

class SignIn extends Component {
  state = {
    cpfPaciente: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { cpfPaciente, password } = this.state;
    if (!cpfPaciente || !password) {
      this.setState({ error: "Preencha o CPF e a senha para continuar!" });
    } else {
      try {
        const response = await api.post("/loginPaciente", { cpfPaciente, password });
        localStorage.setItem('paciente_cpf',cpfPaciente);
        login(response.data.token);
        this.props.history.push("/pacientePerfil");
      } catch (err) {
        console.log(err);
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais."
        });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignIn}>
          <img src={Logo} alt="logo" />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder='CPF: 000.000.000-00' required
            onChange={e => this.setState({ cpfPaciente: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha" required
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Entrar</button>
          <hr />
          <Link to="/registerPaciente">Criar conta</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignIn);
