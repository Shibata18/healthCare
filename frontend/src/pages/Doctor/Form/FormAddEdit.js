import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function AddEditForm(props) {
    const [form, setValues] = useState({
        cpf_medico: '',
        name_medico: '',
        email: '',
        senha: '',
        telefone_medico: '',
        conselho: '',
        registro: '',
        especialidade: ''
    })

    const onChange = e => {
        setValues({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submitFormAdd = e => {
        e.preventDefault()
        fetch('http://localhost:3333/doctors', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cpf_medico: form.cpf_medico,
                name_medico: form.email,
                email: form.email,
                senha: form.email,
                telefone_medico: form.email,
                conselho: form.email,
                registro: form.email,
                especialidade: form.email
            })
        })
            .then(response => response.json())
            .then(item => {
                if (Array.isArray(item)) {
                    props.addItemToState(item[0])
                    props.toggle()
                } else {
                    console.log('failure')
                }
            })
            .catch(err => console.log(err))
    }

    const submitFormEdit = e => {
        e.preventDefault()
        fetch('http://localhost:3000/doctors', {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                email: form.email,

            })
        })
            .then(response => response.json())
            .then(item => {
                if (Array.isArray(item)) {
                    // console.log(item[0])
                    props.updateState(item[0])
                    props.toggle()
                } else {
                    console.log('failure')
                }
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        if (props.item) {
            const { cpf_medico, name_medico, email, senha, telefone_medico, conselho, registro, especialidade } = props.item
            setValues({ cpf_medico, name_medico, email, senha, telefone_medico, conselho, registro, especialidade })
        }
    }, false)

    return (
        <Form onSubmit={props.item ? submitFormEdit : submitFormAdd}>



            <Form.Group >
                <Label for="name_medico"> Nome </Label>
                <Input type="text" name="name_medico" id="name_medico" placeholder='Digite o seu Nome' onChange={onChange} value={form.name_medico === null ? '' : form.name_medico} />
            </Form.Group>
            <Form.Group >
                <Label for="cpf_medico">  CPF    </Label>

                <Input type="text" name="cpf_medico" placeholder='Digite o seu CPF' id="cpf_medico" onChange={onChange} value={form.cpf_medico === null ? '' : form.cpf_medico} />

            </Form.Group>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" onChange={onChange} value={form.email === null ? '' : form.email} />
            </FormGroup>
            <Form.Group>
                <Label for="">
                    Senha
                </Label>

                <Input type="password" name="senha" id="senha" placeholder='Digite a sua Senha' onChange={onChange} value={form.senha === null ? '' : form.senha} />

            </Form.Group>
            <Form.Group >
                <Label for="telefone_medico">
                    Telefone
                </Label>

                <Input type="number" name="telefone_medico" placeholder='Digite o seu Telefone' id="telefone_medico" onChange={onChange} value={form.telefone_medico === null ? '' : form.telefone_medico} />

            </Form.Group>

            <Form.Group   >
                <Label for="registro">
                    Registro
                </Label>

                <Input type="text" name="registro" id="registro" placeholder='Digite o seu Registro' onChange={onChange} value={form.registro === null ? '' : form.registro} />

            </Form.Group>
            <Form.Group   >
                <Label for="conselho">
                    Conselho
                </Label>

                <Input type="text" name="conselho" id="conselho" placeholder='Digite o seu conselho' onChange={onChange} value={form.conselho === null ? '' : form.conselho} />

            </Form.Group>

            <Form.Group   >
                <Label for="especialidade">
                    Especialidade
                </Label>
                <Input type="text" name="especialidade" id="especialidade" placeholder='Digite o seu especialidade' onChange={onChange} value={form.especialidade === null ? '' : form.especialidade} />
            </Form.Group>

            <Button>Submit</Button>
        </Form>
    )
}

export default AddEditForm
