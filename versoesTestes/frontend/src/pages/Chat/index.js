import React, { Component } from "react";
import io from "socket.io-client";
import logo from '../../assets/logo.svg'
import api from '../../services/api';
import {Box} from '@material-ui/core';
import { borders } from '@material-ui/system';
import { Form, Col, Row, Button, Container } from 'react-bootstrap';

const socket = io.connect("http://localhost:3333");
const email = localStorage.getItem('doctorEmail')

class ChatApp extends Component {
  constructor() {
    super();
    this.state = { msg: "", chat: [],email:email};
  }

  componentDidMount() {
    socket.on("chat message", ({ email, msg }) => {
      this.setState({
        chat: [...this.state.chat, { email, msg }]
      });
    });
  }
  onTextChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onMessageSubmit = () => {
    const { email, msg } = this.state;
    socket.emit("chat message", { email, msg });
    this.setState({ msg: "" });
  };

  renderChat() {
    const { chat } = this.state;
    return chat.map(({ email, msg }, idx) => (
      <div key={idx}>
        <span style={{ color: "green" }}>{email}: </span>

        <span>{msg}</span>
      </div>
    ));
  }
  render() {
    return (
      <>
      <Container>
        <p>Usuário {email}</p>
          <div>
            <Box color="text.primary" component="div" m={1} border={1}>
            {this.renderChat()}
          </Box>
          </div>

      </Container>
      <Container>
        <Form >
          <Form.Group as={Row}>
            <Form.Label column sm={4}>
              Mensagem
            </Form.Label>
            <Col sm={4}>
              <Form.Control id="margin-dense"
              style={{ margin: 8 }}
              placeholder="Digite a sua Mensagem"
              margin="normal"
              name="msg"
              onChange={e => this.onTextChange(e)}
              value={this.state.msg}/>
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm={{ span: 4, offset: 4 }}>
              <Button  style={{ margin: 10 }} variant='light' onClick={this.onMessageSubmit}>Send</Button>
              <Button  style={{ margin: 10 }} variant='light' onClick={this.onMessageSubmit}>Send</Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
      </>
    );
  }
}
export default ChatApp;
