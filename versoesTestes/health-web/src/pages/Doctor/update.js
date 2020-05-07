import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
//import api from "../../../../services/api";
import url from '../../services/url'
class AddEditForm extends React.Component {
    state = {
        id: 0,
        cpfDoctor: '',
        nameDoctor: '',
        email: '',
        telefoneDoctor: '',
        password: '',
        conselho: '',
        especialidade: '',
        registro: '',
        ativo_medico: '',
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitFormAdd = e => {
        e.preventDefault()
        fetch(`${url}/doctors`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cpfDoctor: this.state.cpfDoctor,
                nameDoctor: this.state.nameDoctor,
                email: this.state.email,
                telefoneDoctor: this.state.telefoneDoctor,
                password: this.state.password,
                conselho: this.state.conselho,
                especialidade: this.state.especialidade,
                registro: this.state.registro,
            })
        })
        .then(response => response.json(), setTimeout(function () { alert('Cadastrado Com sucesso');window.location.reload() }, 1000))
            .catch(err => console.log(err))
    }

    submitFormEdit = e => {
        e.preventDefault()
        fetch(`${url}/doctors/${this.state.id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cpfDoctor: this.state.cpfDoctor,
                nameDoctor: this.state.nameDoctor,
                email: this.state.email,
                telefoneDoctor: this.state.telefoneDoctor,
                password: this.state.password,
                conselho: this.state.conselho,
                especialidade: this.state.especialidade,
                registro: this.state.registro,
                ativo_medico: this.state.ativo_medico
            })
        })
            .then(response => response.json(), setTimeout(function () { alert('Atualizado Com sucesso');window.location.reload() }, 1000))
            .catch(err => console.log(err))
    }

    componentDidMount() {
        // if item exists, populate the state with proper data
        if (this.props.item) {
            const { id, cpfDoctor, nameDoctor, email, telefoneDoctor, password, especialidade, conselho, registro, ativo_medico } = this.props.item
            this.setState({ id, cpfDoctor, nameDoctor, email, telefoneDoctor, password, especialidade, conselho, registro, ativo_medico })
        }
    }

    render() {
        return (
            <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
                <FormGroup>
                    <Label for="cpfDoctor">CPF</Label>
                    <Input type="text" name="cpfDoctor" id="cpfDoctor" onChange={this.onChange} value={this.state.cpfDoctor === null ? '' : this.state.cpfDoctor} required pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" />
                </FormGroup>
                <FormGroup>
                    <Label for="nameDoctor">Nome</Label>
                    <Input type="text" name="nameDoctor" id="nameDoctor" onChange={this.onChange} value={this.state.nameDoctor === null ? '' : this.state.nameDoctor} required />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" onChange={this.onChange} value={this.state.email === null ? '' : this.state.email} required  />
                </FormGroup>
                <FormGroup>
                    <Label for="telefoneDoctor">Telefone</Label>
                    <Input type="text" name="telefoneDoctor" id="telefoneDoctor" onChange={this.onChange} value={this.state.telefoneDoctor === null ? '' : this.state.telefoneDoctor} placeholder="(11)-12345-6789" pattern="\([0-9]{2}\) [0-9]{4,6}-[0-9]{3,4}$" required />
                </FormGroup>
                <FormGroup>
                    <Label for="password">password</Label>
                    <Input type="password" name="password" id="password" onChange={this.onChange} value={this.state.password === null ? '' : this.state.password} />
                </FormGroup>
                <FormGroup>
                    <Label for="conselho">conselho</Label>
                    <Input type="text" name="conselho" id="conselho" onChange={this.onChange} value={this.state.conselho} />
                </FormGroup>
                <FormGroup>
                    <Label for="especialidade">especialidade</Label>
                    <Input type="text" name="especialidade" id="especialidade" onChange={this.onChange} value={this.state.especialidade} />
                </FormGroup>
                <FormGroup>
                    <Label for="registro">registro</Label>
                    <Input type="text" name="registro" id="registro" onChange={this.onChange} value={this.state.registro} />
                </FormGroup>
                <FormGroup>
                    <Label for="ativo">ativo</Label>
                    <Input type='checkbox' value={this.state.ativo_medico} onChange={this.onChange} name="ativo" />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        );
    }
}

export default AddEditForm
