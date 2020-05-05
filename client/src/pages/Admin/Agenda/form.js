import React from 'react';
import { Form, FormGroup, Label, Input, FormText, Container, Button } from 'reactstrap';
import Navbar from '../NavbarAdm';
const Example = (props) => {

  return (
    <>
      <Navbar />
      <Container>
        <Form>

          <FormGroup>
            <Label for="id_doctor">ID Médico</Label>
            <Input
              type="number"
              name="id_doctor"
              id="id_doctor"
              placeholder="Id do Médico"
            />
          </FormGroup>
          <FormGroup>
            <Label for="id_paciente">ID Paciente</Label>
            <Input
              type="number"
              name="id_paciente"
              id="id_paciente"
              placeholder="Id do Médico"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleDate">Date</Label>
            <Input
              type="date"
              name="date"
              id="exampleDate"
              placeholder="date placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleTime">Horário</Label>
            <Input
              type="time"
              name="time"
              id="exampleTime"
              placeholder="time placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleFile">File</Label>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              Insira o seu arquivo
        </FormText>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </Container>
    </>
  );
}

export default Example;
