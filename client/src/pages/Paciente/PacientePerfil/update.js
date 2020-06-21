import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import api from "../../../services/api";

function AddEditForm(props) {
  const [form, setValues] = useState({
    id: 0,
    cpfPaciente: '',
    namePaciente: '',
    email: '',
    telefonePaciente: '',
    password: '',
    ativo_paciente: '',
  })

  const onChange = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const submitFormEdit = async e => {
    e.preventDefault()
    await api.put(`/paciente/${form.id}`, {
      cpfPaciente: form.cpfPaciente,
      namePaciente: form.namePaciente,
      email: form.email,
      telefonePaciente: form.telefonePaciente,
      password: form.password,
      ativo_paciente: form.ativo_paciente
    })
      .then(response => response.data, setTimeout(function () { alert('Atualizado Com sucesso'); window.location.reload() }, 2000))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    if (props.item) {
      const { id, cpfPaciente, namePaciente, email, telefonePaciente, password, ativo_paciente } = props.item
      setValues({ id, cpfPaciente, namePaciente, email, telefonePaciente, password, ativo_paciente })
    }
  }, [props.item])

  return (
    <Form onSubmit= {submitFormEdit}>
      <FormGroup>
        <Label for="cpfPaciente">CPF</Label>
        <Input type="text" name="cpfPaciente" id="cpfPaciente" onChange={onChange} value={form.cpfPaciente === null ? '' : form.cpfPaciente} required minLength='11' maxLength='11' />
      </FormGroup>
      <FormGroup>
        <Label for="namePaciente">Nome</Label>
        <Input type="text" name="namePaciente" id="namePaciente" onChange={onChange} value={form.namePaciente === null ? '' : form.namePaciente} />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" onChange={onChange} value={form.email === null ? '' : form.email} />
      </FormGroup>
      <FormGroup>
        <Label for="telefonePaciente">Telefoner</Label>
        <Input type="text" name="telefonePaciente" id="telefonePaciente" onChange={onChange} value={form.telefonePaciente === null ? '' : form.telefonePaciente} placeholder="(11) 12345-1234" />
      </FormGroup>
      <FormGroup>
        <Label for="password">password</Label>
        <Input type="password" name="password" id="password" onChange={onChange} value={form.password === null ? '' : form.password} />
      </FormGroup>
      <FormGroup>
        <Label for="ativo">Status</Label>
        <Input type="select" name='ativo' id='ativo'>
          <option value={form.ativo_paciente = true} onChange={onChange}>Ativo</option>
          <option value={form.ativo_paciente = false} onChange={onChange}>Inativar</option>
        </Input>
      </FormGroup>
      <Button>Enviar</Button>
    </Form>
  )
}

export default AddEditForm
