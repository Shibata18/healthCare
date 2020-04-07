import React from "react";
import {Form,Col,Row,Button, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { loginUser,loginDoctor } from "../../../_actions/user_actions";
export default function LoginPage(){

    return (
<Container>
<Form>
  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={4}>
      Email
    </Form.Label>
    <Col sm={4}>
      <Form.Control type="email" placeholder="Email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={4}>
      Password
    </Form.Label>
    <Col sm={4}>
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
{/* 
  <Form.Group as={Row} controlId="formHorizontalCheck">
    <Col sm={{ span: 4, offset: 4 }}>
      <Form.Check label="Remember me" />
    </Col>
  </Form.Group>
 */}
  <Form.Group as={Row}>
    <Col sm={{ span: 4, offset: 4 }}>
      <Button type="submit">Sign in</Button>
      <Button style={{margin:10}} variant='outline-info' ><Link to='/register'>Registre-se</Link> </Button>
    </Col>
  </Form.Group>
</Form>
</Container>

    )
}