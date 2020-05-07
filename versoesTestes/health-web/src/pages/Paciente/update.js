import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
//import api from "../../../../services/api";

class AddEditForm extends React.Component {
    state = {
        id: 0,
        cpfPaciente: '',
        namePaciente: '',
        email: '',
        telefonePaciente: '',
        password: '',
        ativo_paciente: '',
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitFormAdd = e => {
        e.preventDefault()
        fetch('http://localhost:3333/paciente', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cpfPaciente: this.state.cpfPaciente,
                namePaciente: this.state.namePaciente,
                email: this.state.email,
                telefonePaciente: this.state.telefonePaciente,
                password: this.state.password,
            })
        })
        .then(response => response.json(), setTimeout(function () { alert('Cadastrado Com sucesso');window.location.reload() }, 1000))
            .catch(err => console.log(err))
    }

    submitFormEdit = e => {
        e.preventDefault()
        fetch(`http://localhost:3333/paciente/${this.state.id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cpfPaciente: this.state.cpfPaciente,
                namePaciente: this.state.namePaciente,
                email: this.state.email,
                telefonePaciente: this.state.telefonePaciente,
                password: this.state.password,
                ativo_paciente: this.state.ativo_paciente
            })
        })
            .then(response => response.json(), setTimeout(function () {alert('Atualizado Com sucesso');window.location.reload() }, 2000))
            .catch(err => console.log(err))
    }

    componentDidMount() {
        // if item exists, populate the state with proper data
        if (this.props.item) {
            const { id, cpfPaciente, namePaciente, email, telefonePaciente, password, ativo_paciente } = this.props.item
            this.setState({ id, cpfPaciente, namePaciente, email, telefonePaciente, password, ativo_paciente })
        }
    }

    render() {
        return (
            <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
                <FormGroup>
                    <Label for="cpfPaciente">CPF</Label>
                    <Input type="text" name="cpfPaciente" id="cpfPaciente" onChange={this.onChange} value={this.state.cpfPaciente === null ? '' : this.state.cpfPaciente} required />
                </FormGroup>
                <FormGroup>
                    <Label for="namePaciente">Nome</Label>
                    <Input type="text" name="namePaciente" id="namePaciente" onChange={this.onChange} value={this.state.namePaciente === null ? '' : this.state.namePaciente} />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" onChange={this.onChange} value={this.state.email === null ? '' : this.state.email} />
                </FormGroup>
                <FormGroup>
                    <Label for="telefonePaciente">Telefoner</Label>
                    <Input type="text" name="telefonePaciente" id="telefonePaciente" onChange={this.onChange} value={this.state.telefonePaciente === null ? '' : this.state.telefonePaciente} placeholder="5555555555" />
                </FormGroup>
                <FormGroup>
                    <Label for="password">password</Label>
                    <Input type="password" name="password" id="password" onChange={this.onChange} value={this.state.password === null ? '' : this.state.password} />
                </FormGroup>
                <FormGroup>
                    <Label for="ativo">ativo</Label>
                    <Input type='checkbox' value={this.state.ativo_paciente} onChange={this.onChange} name="ativo" />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        );
    }
}

export default AddEditForm