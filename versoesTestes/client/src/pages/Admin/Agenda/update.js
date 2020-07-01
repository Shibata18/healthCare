import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import{InputBase} from '@material-ui/core'
import api from "../../../services/api";
function AddEditForm(props) {
  const [form, setValues] = useState({
    id: 0,
    doctor_cpf: '',
    paciente_cpf: '',
    horario: '',
  })
  const [file, setFile] = useState({ file: null })
  const handleFileSelect = event => {
    console.log(event.target.files);
    setFile({ file: event.target.files[0] })
  }
  const upload = async () => {
    const fd = new FormData();
    console.log(file.file, file.file.name);
    fd.append('file[]', file.file)
    await api.post(`/agenda/${form.id}/file`, fd, {
      onUploadProgress: ProgressEvent => {
        alert((Math.round(ProgressEvent.loaded / ProgressEvent.total * 100))===100?`Concluído`:`Aguarde`)
      }
    }
    ).then(res => console.log(res)).catch(err => console.log(err, err.response));
  }
  const onChange = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const submitFormAdd = async e => {
    e.preventDefault()
    await api.post('/agenda', {
      doctor_cpf: form.doctor_cpf,
      paciente_cpf: form.paciente_cpf,
      horario: form.horario,
    })
      .then(response => response.data, setTimeout(function () { alert('Agendado Com sucesso'); window.location.reload() }, 100))
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

  const submitFormEdit = async e => {
    e.preventDefault()
    await api.put(`/agenda/${form.id}`, {
      doctor_cpf: form.doctor_cpf,
      paciente_cpf: form.paciente_cpf,
      horario: form.data + ' ' + form.horario,
    })
      .then(response => response.data, setTimeout(function () { alert('Atualizado Com sucesso'); window.location.reload() }, 2000))
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
      const { id, doctor_cpf, paciente_cpf, horario, data } = props.item
      setValues({ id, doctor_cpf, paciente_cpf, horario, data })
    }
  }, [props.item])

  return (
    <Form onSubmit={props.item ? submitFormEdit : submitFormAdd}>
      <FormGroup>
        <Label for="doctor_cpf">CPF Médico</Label>
        <Input type="text" name="doctor_cpf" id="doctor_cpf" onChange={onChange} value={form.doctor_cpf === null ? '' : form.doctor_cpf} required minLength='11' maxLength='11' />
      </FormGroup>
      <FormGroup>
        <Label for="paciente_cpf">CPF Paciente</Label>
        <Input type="text" name="paciente_cpf" id="paciente_cpf" onChange={onChange} value={form.paciente_cpf === null ? '' : form.paciente_cpf} required minLength='11' maxLength='11' />
      </FormGroup>
    {/*   <FormGroup>
        <Label for="horario">Horario</Label>
        <Input type="time" name="horario" id="horario" onChange={onChange} value={form.horario === null ? '' : form.horario} required />
      </FormGroup>
      <FormGroup>
        <Label for="data">Data</Label>
        <Input type="date" name="data" id="data" onChange={onChange} value={form.data === null ? '' : form.data} required />
    </FormGroup>*/} <InputBase
    type='datetime-local'
    name="horario" id="horario" onChange={onChange} value={form.horario === null ? '' : form.horario} required />
      <FormGroup> 
        <Label for="file">Arquivos</Label>
        <Input type="file" name="file[]" accept='text/*,images/*,application/*,video/*' multiple id="file" onChange={handleFileSelect} />
        <Button outline color='secondary' onClick={upload}>Upload</Button>
      </FormGroup>
      <Button>Enviar</Button>
    </Form>
  )
}

export default AddEditForm
