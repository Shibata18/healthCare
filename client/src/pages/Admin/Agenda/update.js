import React, { useState, useEffect } from 'react';
import { InputBase, Button } from '@material-ui/core'
import api from "../../../services/api";

function AddEditForm(props) {
  const [form, setValues] = useState({
    id: 0,
    doctor_cpf: '',
    paciente_cpf: '',
    horario: '',
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
      alert('Paciente ou Médico inexistente, hora errada')
      console.log(error);
    }


  }
  const submitFormEdit = async e => {
    e.preventDefault()
    try {
      await api.put(`/agenda/${form.id}`, {
        doctor_cpf: form.doctor_cpf,
        paciente_cpf: form.paciente_cpf,
        horario: form.horario,
      })
      await api.post(`/agenda/${form.id}/session`);
      setTimeout(function () { alert('Atualizado Com sucesso'); window.location.reload() }, 2000)
    } catch (error) {
     console.log(error); 
    }
  }

  useEffect(() => {
    if (props.item) {
      const { id, doctor_cpf, paciente_cpf, horario, data } = props.item
      setValues({ id, doctor_cpf, paciente_cpf, horario, data })
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
      <InputBase
        type='datetime-local'
        name="horario" id="horario" onChange={onChange} value={form.horario} required />
      <div>
        <Button type='submit'>Enviar</Button>
      </div>
    </form>
  )
}

export default AddEditForm
