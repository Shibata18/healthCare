import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';
import Navbar from '../Navbar'
import {Link} from 'react-router-dom';

const Example = (props) => {
    return (
        <>
        <Navbar/>
        <Container className="themed-container" fluid="sm">
            <Row>
                <Col sm="6">
                    <Card body>
                        <CardTitle>Seja Bem vindo</CardTitle>
                        <CardText>Para cadastrar Médicos.</CardText>
                        <Link to='/doctors'><Button outline color='primary'>Médicos</Button></Link>
                    </Card>
                </Col>
                <Col sm="6">
                    <Card body>
                        <CardTitle>Seja Bem vindo</CardTitle>
                        <CardText>Para cadastrar Pacientes.</CardText>
                        <Link to='/paciente'><Button outline color='primary'>Pacientes</Button></Link>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default Example;