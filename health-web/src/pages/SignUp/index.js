import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../services/api";

import Logo from "../../assets/logo.svg";

import { Form, Container } from "./styles";

class SignUp extends Component {
  state = {
    cpfDoctor: "",
    email: "",
    password: "",
    nameDoctor: '',
    telefoneDoctor: '',
    conselho: "",
    registro: "",
    especialidade: "",
    error: ""
  };

  handleSignUp = async e => {
    e.preventDefault();
    const { cpfDoctor, email, password, nameDoctor, telefoneDoctor, conselho, registro, especialidade } = this.state;
    if (!cpfDoctor || !email || !password) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        await api.post("/doctors", { cpfDoctor, email, password, nameDoctor, telefoneDoctor, conselho, registro, especialidade });
        this.props.history.push("/");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
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
            placeholder="CPF"
            onChange={e => this.setState({ cpfDoctor: e.target.value })}
          />
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <input
            type="text"
            placeholder="Nome"
            onChange={e => this.setState({ nameDoctor: e.target.value })}
          />
          <input
            type="text"
            placeholder="telefone"
            onChange={e => this.setState({ telefoneDoctor: e.target.value })}
          />
          <input
            type="text"
            placeholder="Conselho"
            onChange={e => this.setState({ conselho: e.target.value })}
          />
          <input
            type="text"
            placeholder="Registro"
            onChange={e => this.setState({ registro: e.target.value })}
          />
          <input
            type="text"
            placeholder="Especialidade"
            onChange={e => this.setState({ especialidade: e.target.value })}
          />
          <button type="submit">Cadastrar grátis</button>
          <hr />
          <Link to="/">Fazer login</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignUp);
