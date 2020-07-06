import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import api from "../../../services/api";

function AddEditForm(props) {
  const[form, setValues] = useState({
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
  })

  const onChange = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const submitFormAdd = async (e) => {
      e.preventDefault()
      await api.post('/doctor',{
          cpfDoctor: form.cpfDoctor,
          nameDoctor: form.nameDoctor,
          email: form.email,
          telefoneDoctor: form.telefoneDoctor,
          password: form.password,
          conselho: form.conselho,
          especialidade: form.especialidade,
          registro: form.registro,
      }).then(response => response.data, setTimeout(function () { alert('Cadastrado Com sucesso');window.location.reload() }, 1000))
      .then(item => {
        if(Array.isArray(item)) {
          props.addItemToState(item[0])
          props.toggle()
        } else {
          console.log('failure')
        }
      })
          .catch(err => console.log(err))
  }

    const  submitFormEdit = async e => {
          e.preventDefault()
          await api.put(`/doctor/${form.id}`,{
              cpfDoctor: form.cpfDoctor,
              nameDoctor: form.nameDoctor,
              email: form.email,
              telefoneDoctor: form.telefoneDoctor,
              password: form.password,
              conselho: form.conselho,
              especialidade: form.especialidade,
              registro: form.registro,
              ativo_medico: form.ativo_medico
          })
              .then(response => response.data, setTimeout(function () { alert('Atualizado Com sucesso');window.location.reload() }, 1000))
              .catch(err => console.log(err))
      }

  useEffect(() => {
    if(props.item){
      const { id, cpfDoctor, nameDoctor, email, telefoneDoctor, password, especialidade, conselho, registro, ativo_medico } = props.item
      setValues({ id, cpfDoctor, nameDoctor, email, telefoneDoctor, password, especialidade, conselho, registro, ativo_medico })
    }
  }, [props.item])
  return (
      <Form onSubmit={props.item ? submitFormEdit : submitFormAdd}>
          <FormGroup>
              <Label for="cpfDoctor">CPF</Label>
              <Input type="text" name="cpfDoctor" id="cpfDoctor" onChange={onChange} value={form.cpfDoctor === null ? '' : form.cpfDoctor} required  minLength='11' maxLength='11'  />
          </FormGroup>
          <FormGroup>
              <Label for="nameDoctor">Nome</Label>
              <Input type="text" name="nameDoctor" id="nameDoctor" onChange={onChange} value={form.nameDoctor === null ? '' : form.nameDoctor} required />
          </FormGroup>
          <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" onChange={onChange} value={form.email === null ? '' : form.email} required  />
          </FormGroup>
          <FormGroup>
              <Label for="telefoneDoctor">Telefone</Label>
              <Input type="text" name="telefoneDoctor" id="telefoneDoctor" onChange={onChange} value={form.telefoneDoctor === null ? '' : form.telefoneDoctor} placeholder="(11)-12345-6789" pattern="\([0-9]{2}\) [0-9]{4,6}-[0-9]{3,4}$" required />
          </FormGroup>
          <FormGroup>
              <Label for="password">password</Label>
              <Input type="password" name="password" id="password" onChange={onChange} value={form.password === null ? '' : form.password} />
          </FormGroup>
          <FormGroup>
              <Label for="conselho">conselho</Label>
              <Input type="text" name="conselho" id="conselho" onChange={onChange} value={form.conselho} />
          </FormGroup>
          <FormGroup>
              <Label for="especialidade">especialidade</Label>
              <Input type="text" name="especialidade" id="especialidade" onChange={onChange} value={form.especialidade} />
          </FormGroup>
          <FormGroup>
              <Label for="registro">registro</Label>
              <Input type="text" name="registro" id="registro" onChange={onChange} value={form.registro} />
          </FormGroup>
          <FormGroup>
            <Label for="ativo">Status</Label>
              <Input type="select"  name='ativo' id='ativo'>
                    <option  value={form.ativo_medico = true}  onChange={onChange}>Ativo</option>
                    <option value={form.ativo_medico = false} onChange={onChange}>Inativar</option>
              </Input>
          </FormGroup>
          <Button>Submit</Button>
      </Form>
  )
}
export default AddEditForm
