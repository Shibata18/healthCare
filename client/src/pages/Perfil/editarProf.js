import React, { useState } from 'react';
import { Button, Select, MenuItem, TextField } from '@material-ui/core';
import { Row, Col } from 'reactstrap';
import api from "../../services/api";
import Autocomplete from '@material-ui/lab/Autocomplete';
import conselhos from '../../assets/conselho.json';

function AddEditForm(props) {
  const [form, setValues] = useState({
    nomeProf: '',
    emailProf: '',
    telefoneProf: '',
    senha: '',
    ativo: '',
    ufConselho: '',
    registro: '',
    especialidade: '',
  })
  const [conselho, setConselho] = React.useState(null);

  const cpfUser = localStorage.getItem('cpfUser');

  const onChange = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const submitFormEdit = async e => {
    e.preventDefault()
    try {
      const response = await api.put(`/user`, {
        nome: form.nomeProf,
        email: form.emailProf,
        telefone: form.telefoneProf,
        password: form.senha,
        ativo: form.ativo,
        conselho: conselho,
        ufConselho: form.ufConselho,
        registro: form.registro,
        especialidade: form.especialidade,
        ehMedico: true,
      }, { headers: { cpfUser: cpfUser, } });
      if (response) setTimeout(function () { alert('Atualizado Com sucesso'); window.location.reload() }, 200)
    } catch (error) {
      console.log(error.response.data.error.message);
      let mensagemErro = error.response.data.error.message;
      if (mensagemErro === 'update "users" set "email" = $1, "nome" = $2, "password" = $3, "telefone" = $4, "conselho" = $5, "ufConselho" = $6, "registro" = $7, "especialidade" = $8, "ativo" = $9, "ehMedico" = $10, "ehPaciente" = $11, "created_at" = $12, "updated_at" = $13 where "id" = $14 - null value in column "email" violates not-null constraint') {
        alert('Email não pode estar em branco')
      } else if (mensagemErro === 'update "users" set "nome" = $1, "password" = $2, "telefone" = $3, "conselho" = $4, "ufConselho" = $5, "registro" = $6, "especialidade" = $7, "ativo" = $8, "ehMedico" = $9, "ehPaciente" = $10, "created_at" = $11, "updated_at" = $12 where "id" = $13 - null value in column "nome" violates not-null constraint') {
        alert('Nome não pode estar em Branco')
      } else if (mensagemErro === 'update "users" set "email" = $1, "nome" = $2, "password" = $3, "telefone" = $4, "conselho" = $5, "ufConselho" = $6, "registro" = $7, "especialidade" = $8, "ativo" = $9, "ehMedico" = $10, "ehPaciente" = $11, "created_at" = $12, "updated_at" = $13 where "id" = $14 - null value in column "password" violates not-null constraint') {
        alert('Senha não pode estar em Branco')
      }
    }

  }

  return (
    <form onSubmit={submitFormEdit}>

      <label htmlFor='nomeProf'>Nome</label>
      <input type='text' name="nomeProf" id="nomeProf" onChange={onChange} value={form.nomeProf === null ? '' : form.nomeProf} required />
      <label htmlFor="emailProf">Email</label>
      <input type="email" name="emailProf" id="emailProf" onChange={onChange} value={form.emailProf === null ? '' : form.emailProf} required />
      <label htmlFor="telefoneProf">Telefone</label>
      <input type="text" name="telefoneProf" id="telefoneProf" onChange={onChange} value={form.telefoneProf === null ? '' : form.telefoneProf} placeholder="(11) 12345-1234" required />
      <label htmlFor="senha">Senha</label>
      <input type="password" name="senha" id="senha" onChange={onChange} value={form.senha === null ? '' : form.senha} required />
      <label htmlFor="registro">registro</label>
      <input type="text" name="registro" id="registro" onChange={onChange} value={form.registro} required />
      <Row form>
        <Col md={6}>    <Autocomplete
          id="combo-box-demo"
          options={conselhos.conselho}
          getOptionLabel={(option) => option}
          value={conselho}
          onChange={(event, newValue) => {
            setConselho(newValue);
          }}
          renderInput={(params) => <TextField {...params} label="Conselho" variant="outlined" />}
        />

        </Col>
        <Col md={6}>
          <label htmlFor="ufConselho">UF</label>
          <Select type="select" name="ufConselho" fullWidth id="ufConselho" onChange={onChange} value={form.ufConselho} required >
            <MenuItem value='AC'>AC</MenuItem>
            <MenuItem value='AL'>AL</MenuItem>
            <MenuItem value='AM'>AM</MenuItem>
            <MenuItem value='AP'>AP</MenuItem>
            <MenuItem value='BA'>BA</MenuItem>
            <MenuItem value='CE'>CE</MenuItem>
            <MenuItem value='DF'>DF</MenuItem>
            <MenuItem value='ES'>ES</MenuItem>
            <MenuItem value='GO'>GO</MenuItem>
            <MenuItem value='MA'>MA</MenuItem>
            <MenuItem value='MG'>MG</MenuItem>
            <MenuItem value='MS'>MS</MenuItem>
            <MenuItem value='MT'>MT</MenuItem>
            <MenuItem value='PA'>PA</MenuItem>
            <MenuItem value='PB'>PB</MenuItem>
            <MenuItem value='PE'>PE</MenuItem>
            <MenuItem value='PI'>PI</MenuItem>
            <MenuItem value='PR'>PR</MenuItem>
            <MenuItem value='RJ'>RJ</MenuItem>
            <MenuItem value='RN'>RN</MenuItem>
            <MenuItem value='RO'>RO</MenuItem>
            <MenuItem value='RR'>RR</MenuItem>
            <MenuItem value='RS'>RS</MenuItem>
            <MenuItem value='SC'>SC</MenuItem>
            <MenuItem value='SE'>SE</MenuItem>
            <MenuItem value='SP'>SP</MenuItem>
            <MenuItem value='TO'>TO</MenuItem>
          </Select>
        </Col>
      </Row>
      <label htmlFor="especialidade">Especialidade</label>
      <Select type="select" name="especialidade" fullWidth id="especialidade" onChange={onChange} value={form.especialidade} required >
        <MenuItem value='Teste1'>Teste 1</MenuItem>
        <MenuItem value='Teste2'>Teste 2</MenuItem>
        <MenuItem value='Teste3'>Teste 3</MenuItem>
        <MenuItem value='Teste4'>Teste 4</MenuItem>
      </Select>
      <label htmlFor="ativo">Status</label>
      <Select type="select" name='ativo' id='ativo' fullWidth value={form.ativo} onChange={onChange}>
        <MenuItem value={true}>Ativo</MenuItem>
        <MenuItem value={false} >Inativar</MenuItem>
      </Select>
      <Button type='submit' color='secondary' fullWidth variant="contained" style={{ marginTop: 10 }}>Enviar</Button>
    </form>
  )
}

export default AddEditForm
