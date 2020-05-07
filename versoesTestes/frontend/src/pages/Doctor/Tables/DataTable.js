import React from 'react'
import { Table, Button } from 'reactstrap';
import ModalForm from '../Modals/Modal'
import api from '../../../services/api';

function DataTable(props){
  const deleteItem = cpf_medico => {
    let confirmDelete = window.confirm('Delete item forever?')
    if(confirmDelete){
      fetch('http://localhost:3333/doctors', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cpf_medico
      })
    })
      .then(response => response.json())
      .then(item => {
        props.deleteItemFromState(cpf_medico)
      })
      .catch(err => console.log(err))
    }
  }

  const items = props.items.map(item => {
    return (
      <tr key={item.cpf_medico}>
        <td>{item.cpf_medico}</td>
        <td>{item.name_medico}</td>
        <td>{item.email}</td>
        {/*<td>{item.senha}</td>*/}
        <td>{item.telefone_medico}</td>
        <td>{item.conselho}</td>
        <td>{item.registro}</td>
        <td>{item.especialidade}</td>
        <td>
          <div style={{width:"110px"}}>
            <ModalForm buttonLabel="Edit" item={item} updateState={props.updateState}/>
            {' '}
            <Button color="danger" onClick={() => deleteItem(item.cpf_medico)}>Del</Button>
          </div>
        </td>
      </tr>
      )
    })

  return (
    <Table responsive hover>
      <thead>
        <tr>
          <th>cpf</th>
          <th>Nome</th>
          <th>email</th>
          {/*<th>senha</th>*/}
          <th>Telefone</th>
          <th>Conselho</th>
          <th>Registro</th>
          <th>Especialidade</th>
        </tr>
      </thead>
      <tbody>
        {items}
      </tbody>
    </Table>
  )
}

export default DataTable
