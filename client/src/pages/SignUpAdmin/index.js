import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../services/api";

import Logo from "../../assets/logo.svg";

import { Form, Container } from "./styles";

class SignUp extends Component {
  state = {
    cpfUser: "",
    email: "",
    password: "",
    error: ""
  };

  handleSignUp = async e => {
    e.preventDefault();
    const { cpfUser, email, password } = this.state;
    if (!cpfUser || !email || !password) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        await api.post("/user", { cpfUser, email, password });
        this.props.history.push("/signupAdmin");
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
            onChange={e => this.setState({ cpfUser: e.target.value })}
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
          <button type="submit">Cadastrar</button>
          <hr />
          <Link to="/signInAdmin">Fazer login</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignUp);
