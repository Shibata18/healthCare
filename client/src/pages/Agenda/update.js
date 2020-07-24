import React, { useState, useEffect } from 'react';
import { Button ,Select,MenuItem} from '@material-ui/core'
import api from "../../services/api";

function AddEditForm(props) {
  const [form, setValues] = useState({
    id: 0,
    doctor_cpf: '',
    paciente_cpf: '',
    horario: '',
    agenda_ativo:'',
  })
  const onChange = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const submitFormAdd = async e => {
    e.preventDefault()
    try {
      const response = await api.post('/agenda', {
        doctor_cpf: form.doctor_cpf,
        paciente_cpf: form.paciente_cpf,
        horario: form.horario,
      })
      if (response) setTimeout(function () { alert('Agendado Com sucesso'); window.location.reload() }, 100)
      
    } catch (error) {
      let mensagemErro = error.response.data.error.message;
      console.log(error.response.data);
      console.log(error.response.data.error.message);
      if(mensagemErro ==='insert into "agenda" ("created_at", "doctor_cpf", "horario", "paciente_cpf", "updated_at") values ($1, $2, $3, $4, $5) returning "id" - insert or update on table "agenda" violates foreign key constraint "agenda_doctor_cpf_foreign"'){
        alert('CPF do médico não encontrado')
      }else if(mensagemErro ==='insert into "agenda" ("created_at", "doctor_cpf", "horario", "paciente_cpf", "updated_at") values ($1, $2, $3, $4, $5) returning "id" - insert or update on table "agenda" violates foreign key constraint "agenda_paciente_cpf_foreign"'){
        alert('CPF do Paciente não encontrado')
      }else if(mensagemErro ==='insert into "agenda" ("created_at", "doctor_cpf", "horario", "paciente_cpf", "updated_at") values ($1, $2, $3, $4, $5) returning "id" - duplicate key value violates unique constraint "agenda_horario_unique"'){
        alert("Horário indisponível")
      }
    }


  }
  const submitFormEdit = async e => {
    e.preventDefault()
    try {
      await api.put(`/agenda/${form.id}`, {
        doctor_cpf: form.doctor_cpf,
        paciente_cpf: form.paciente_cpf,
        horario: form.horario,
        agenda_ativo:form.agenda_ativo,
      })
      //await api.post(`/agenda/${form.id}/session`);
      setTimeout(function () { alert('Atualizado Com sucesso'); window.location.reload() }, 2000)
    } catch (error) {
     console.log(error); 
     console.log(error.response); 
    }
  }

  useEffect(() => {
    if (props.item) {
      const { id, doctor_cpf, paciente_cpf, horario,agenda_ativo} = props.item
      setValues({ id, doctor_cpf, paciente_cpf, horario,agenda_ativo })
    }
  }, [props.item])

  return (
    <form onSubmit={props.item ? submitFormEdit : submitFormAdd}>

      <label htmlFor="doctor_cpf">CPF Médico</label>
      <input type="text" name="doctor_cpf" id="doctor_cpf" onChange={onChange} value={form.doctor_cpf === null ? '' : form.doctor_cpf} required minLength='11' maxLength='11' />

      <label htmlFor="paciente_cpf">CPF Paciente</label>
      <input type="text" name="paciente_cpf" id="paciente_cpf" onChange={onChange} value={form.paciente_cpf === null ? '' : form.paciente_cpf} required minLength='11' maxLength='11' />
      <p style={{ marginTop: 15, marginBottom: 20 }}>
        <label htmlFor='horario'>Data e Hora: </label></p>
      <input
        type='datetime-local'
        name="horario" id="horario" onChange={onChange} value={form.horario} required />
      <div style={{ marginTop: 15, marginBottom: 20 }}>
      <label htmlFor='status'>Status</label>
      <Select  name='ativo' id='ativo' fullWidth value={form.agenda_ativo} onChange={onChange}>
          <MenuItem value={true}>Ativo</MenuItem>
          <MenuItem value={false} >Inativar</MenuItem>
        </Select></div>
      <div>
        <Button type='submit'>Enviar</Button>
      </div>
    </form>
  )
}

export default AddEditForm
