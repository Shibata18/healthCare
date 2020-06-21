import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../../services/api";

import Logo from "../../../assets/logo.svg";

import { Form, Container } from "./styles";

class SignUp extends Component {
  state = {
    cpfDoctor: '',
    nameDoctor: '',
    email: '',
    telefoneDoctor: '',
    password: '',
    conselho: '',
    especialidade: '',
    registro: '',
    error: ""
  };
  handleSignUp = async e => {
    e.preventDefault();
    const { cpfDoctor, email, password, nameDoctor, telefoneDoctor, conselho, especialidade, registro } = this.state;
    if (!cpfDoctor || !email || !password || !nameDoctor || !telefoneDoctor || !conselho || !especialidade || !registro) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        await api.post("/doctors", { cpfDoctor, email, password, nameDoctor, telefoneDoctor, conselho, especialidade, registro });
        this.props.history.push("/loginDoctor");
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
            placeholder='CPF' minLength='11' maxLength='11' required
            onChange={e => this.setState({ cpfDoctor: e.target.value })}
          />
          <input
            type="text"
            placeholder='Digite o seu nome' required
            onChange={e => this.setState({ nameDoctor: e.target.value })}
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
            onChange={e => this.setState({ telefoneDoctor: e.target.value })}
          />
          <input
            type="text"
            placeholder="Digite o seu Registro" required
            onChange={e => this.setState({ registro: e.target.value })}
          />
          <input
            type="text"
            placeholder='Digite o Conselho' required
            onChange={e => this.setState({ conselho: e.target.value })}
          />
          <input
            type="text"
            placeholder="Digite a sua especialidade" required
            onChange={e => this.setState({ especialidade: e.target.value })}
          />
          <button type="submit">Cadastrar</button>
          <hr />
          <Link to="/loginDoctor">Fazer login</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignUp);
