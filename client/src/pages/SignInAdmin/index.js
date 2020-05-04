import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import Logo from "../../assets/logo.svg";
import api from "../../services/api";
import { login } from "../../services/auth";

import { Form, Container } from "./styles";

class SignIn extends Component {
  state = {
    cpfUser: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { cpfUser, password } = this.state;
    if (!cpfUser || !password) {
      this.setState({ error: "Preencha CPF e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/sessions", { cpfUser, password });
        login(response.data.token);
        this.props.history.push("/main");
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
            placeholder='CPF: 000.000.000-00' pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" required
            onChange={e => this.setState({ cpfUser: e.target.value })}
          />
          <input
            type="password" required
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Entrar</button>
          <hr />
          <Link to="/signUpAdmin">Criar conta grátis</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignIn);
