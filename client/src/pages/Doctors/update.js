import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import api from "../../../services/api";

function AddEditForm(props) {
  const [form, setValues] = useState({
    id: 0,
    cpfDoctor: '',
    nameDoctor: '',
    email: '',
    telefoneDoctor: '',
    password: '',
    conselho: '',
    especialidade: '',
    registro: '',
    uf: '',
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
    try {
      const response = await api.post("/doctor", {
        cpfDoctor: form.cpfDoctor,
        nameDoctor: form.nameDoctor,
        email: form.email,
        telefoneDoctor: form.telefoneDoctor,
        password: form.password,
        conselho: form.conselho,
        especialidade: form.especialidade,
        registro: form.registro,
        uf: form.uf
      })
      if (response) setTimeout(function () { alert('Cadastrado Com sucesso'); window.location.reload() }, 1000)

    } catch (error) {
      if(error.response.data.error.message === 'insert into "doctors" ("conselho", "cpfDoctor", "created_at", "email", "especialidade", "nameDoctor", "password", "registro", "telefoneDoctor", "updated_at") values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) returning "id" - duplicate key value violates unique constraint "doctors_cpfdoctor_unique"')  alert("CPF já cadastrado") 
    }
  }

  const submitFormEdit = async e => {
    e.preventDefault()
    try {
      const response = await api.put(`/doctor/${form.id}`, {
        cpfDoctor: form.cpfDoctor,
        nameDoctor: form.nameDoctor,
        email: form.email,
        telefoneDoctor: form.telefoneDoctor,
        password: form.password,
        conselho: form.conselho,
        especialidade: form.especialidade,
        registro: form.registro,
        uf: form.uf,
        ativo_medico: form.ativo_medico
      });
      if (response) setTimeout(function () { alert('Atualizado Com sucesso'); window.location.reload() }, 1000)
    } catch (error) {
      console.log(error.response.data);
      alert('Erro ao atualizar')
    }
  }

  useEffect(() => {
    if (props.item) {
      const { id, cpfDoctor, nameDoctor, email, telefoneDoctor, password, especialidade, conselho, registro, uf, ativo_medico } = props.item
      setValues({ id, cpfDoctor, nameDoctor, email, telefoneDoctor, password, especialidade, conselho, registro, uf, ativo_medico })
    }
  }, [props.item])
  return (
    <Form onSubmit={props.item ? submitFormEdit : submitFormAdd}>
      <FormGroup>
        <Label htmlFor="cpfDoctor">CPF</Label>
        <Input type="text" name="cpfDoctor" id="cpfDoctor" onChange={onChange} value={form.cpfDoctor === null ? '' : form.cpfDoctor} required minLength='11' maxLength='11' />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="nameDoctor">Nome</Label>
        <Input type="text" name="nameDoctor" id="nameDoctor" onChange={onChange} value={form.nameDoctor === null ? '' : form.nameDoctor} required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input type="email" name="email" id="email" onChange={onChange} value={form.email === null ? '' : form.email} required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="telefoneDoctor">Telefone</Label>
        <Input type="text" name="telefoneDoctor" id="telefoneDoctor" onChange={onChange} value={form.telefoneDoctor === null ? '' : form.telefoneDoctor} placeholder="(11) 12345-6789" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">password</Label>
        <Input type="password" name="password" id="password" onChange={onChange} value={form.password === null ? '' : form.password} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="registro">registro</Label>
        <Input type="text" name="registro" id="registro" onChange={onChange} value={form.registro} />
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="conselho">conselho</Label>
            <Input type="select" name="conselho" id="conselho" onChange={onChange} value={form.conselho} >
              <option value='Teste1'>Teste 1</option>
              <option value='Teste2'>Teste 2</option>
              <option value='Teste3'>Teste 3</option>
              <option value='Teste4'>Teste 4</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label htmlFor="uf">UF</Label>
            <Input type="select" name="uf" id="uf" onChange={onChange} value={form.uf} >
              <option value='AC'>AC</option>
              <option value='AL'>AL</option>
              <option value='AM'>AM</option>
              <option value='AP'>AP</option>
              <option value='BA'>BA</option>
              <option value='CE'>CE</option>
              <option value='DF'>DF</option>
              <option value='ES'>ES</option>
              <option value='GO'>GO</option>
              <option value='MA'>MA</option>
              <option value='MG'>MG</option>
              <option value='MS'>MS</option>
              <option value='MT'>MT</option>
              <option value='PA'>PA</option>
              <option value='PB'>PB</option>
              <option value='PE'>PE</option>
              <option value='PI'>PI</option>
              <option value='PR'>PR</option>
              <option value='RJ'>RJ</option>
              <option value='RN'>RN</option>
              <option value='RO'>RO</option>
              <option value='RR'>RR</option>
              <option value='RS'>RS</option>
              <option value='SC'>SC</option>
              <option value='SE'>SE</option>
              <option value='SP'>SP</option>
              <option value='TO'>TO</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label htmlFor="especialidade">especialidade</Label>
        <Input type="select" name="especialidade" id="especialidade" onChange={onChange} value={form.especialidade}>
          <option value='Teste1'>Teste 1</option>
          <option value='Teste2'>Teste 2</option>
          <option value='Teste3'>Teste 3</option>
          <option value='Teste4'>Teste 4</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="ativo">Status</Label>
        <Input type="select" name='ativo' id='ativo' value={form.ativo_medico} onChange={onChange}>
          <option value={true}>Ativar</option>
          <option value={false}>Inativar</option>
        </Input>
      </FormGroup>
      <Button>Enviar</Button>
    </Form>
  )
}
export default AddEditForm
