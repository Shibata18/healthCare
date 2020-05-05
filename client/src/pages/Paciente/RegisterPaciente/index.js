import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import api from '../../../services/api'
import Logo from "../../../assets/logo.svg";

import { Form, Container } from "./styles";

class SignUp extends Component {
  state = {
    cpfPaciente: '',
    namePaciente: '',
    email: '',
    telefonePaciente: '',
    password: '',
    error: ""
  };
  handleSignUp = async e => {
    e.preventDefault();
    const { cpfPaciente, email, password,namePaciente, telefonePaciente } = this.state;
    if (!cpfPaciente || !email || !password || !namePaciente || !telefonePaciente) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        await api.post("/paciente", { cpfPaciente, email, password,namePaciente, telefonePaciente });
        this.props.history.push("/loginPaciente");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta." });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignUp}>
          <img src={Logo} alt="logo" />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder='CPF: 000.000.000-00' pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" required
            onChange={e => this.setState({ cpfPaciente: e.target.value })}
          />
          <input
            type="text"
            placeholder='Digite o seu nome' required
            onChange={e => this.setState({ namePaciente: e.target.value })}
            />
          <input
            type="email"
            placeholder="Endereço de e-mail" required
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha" required
            onChange={e => this.setState({ password: e.target.value })}
          />
          <input
            type="text"
            placeholder="Telefone: (00) 12345-1234" pattern="\([0-9]{2}\) [0-9]{4,6}-[0-9]{3,4}$" required
            onChange={e => this.setState({ telefonePaciente: e.target.value })}
          />
          <button type="submit">Cadastrar</button>
          <hr />
          <Link to="/loginPaciente">Fazer login</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignUp);
