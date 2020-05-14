import React, { Component } from "react";
//import socket from "./wesocket";
import Navbar from '../Admin/Navbar'
//import api from '../../services/api';
import { Box,Grid } from '@material-ui/core';
//Form, Col, Row, Button,
import {  Container } from 'react-bootstrap';
import App from './video/index';
import config from './video/config';

class ChatApp extends Component {
  /* constructor() {
    super();
    this.state = { msg: "", chat: [] }
  }

  componentDidMount() {
    socket.on("message", ({ msg }) => {
      this.setState({
        chat: [...this.state.chat, { msg }]
      });
    });
  }
  handleDrop = files => this.setState({ files });

  onTextChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onMessageSubmit = async () => {
    const { msg } = this.state;
    socket.emit("message", { msg });
    this.setState({ msg: "" });
    await api.post('/chat', {
      'agenda_id': 1,
      'file_id': 1,
      "mensagem": msg
    }).then(res => console.log(res)).catch(err => console.error(err))
  };
  onLoading = () => {
    return api.get('/chat').then(res => console.log(res)).catch(err => console.error(err))
  }
  renderChat() {
    return (
      <div>
        <span style={{ color: "green" }}> {this.onLoading} </span>
      </div>
    );
  } */
  render() {
    return (
      <>
      <Navbar/>
        <Container>
          <div>
            <Box color="text.primary" component="div" m={1} border={1} style={{ padding: 80 }}>
{/*               <h1>....Loading....</h1>
              {this.renderChat()} */}
              <Grid item xs={12}>
                <App
            apiKey={config.API_KEY}
            sessionId={config.SESSION_ID}
            token={config.TOKEN}
            loadingDelegate={<div>Loading...</div>}
            opentokClientUrl="https://static.opentok.com/v2/js/opentok.min.js"
          />
          </Grid>
            </Box>
          </div>

        {/* </Container>
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
                  value={this.state.msg} />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col sm={{ span: 4, offset: 4 }}>
                <Button style={{ margin: 10 }} variant='light' onClick={this.onMessageSubmit}>Send</Button>
              </Col>
            </Form.Group>
          </Form> */}
        </Container>
      </>
    );
  }
}
export default ChatApp;
