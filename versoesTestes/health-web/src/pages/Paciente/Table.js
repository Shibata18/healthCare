import React, { Component } from 'react'
import { Table  } from 'reactstrap';
import ModalForm from './Modal'
import api from "../../services/api";


class DataTable extends Component {

  deleteItem = id => {
    let confirmDelete = window.confirm('Delete item forever?')
    if (confirmDelete) {
      api.put(`/paciente/${id}`, {      })
        .then(response => response.json())
        .then(item => {
          this.props.deleteItemFromState(id)
        })
        .catch(err => console.log(err))
    }

  }

  render() {

    const items = this.props.items.map(item => {
      return (
        <tr key={item.id}>
          <th scope="row">{item.id}</th>
          <td>{item.cpfPaciente}</td>
          <td>{item.namePaciente}</td>
          <td>{item.email}</td>
          <td>{item.telefonePaciente}</td>
          <td>{item.ativo_paciente?`Ativo`:`Inativo`}</td>
          <td>{item.created_at}</td>
          <td>{item.updated_at}</td>
          <td>
            <div style={{ width: "10%" }}>
              <ModalForm buttonLabel="Edit" item={item} updateState={this.props.updateState} />
              {/* <Button color="danger" onClick={() => this.deleteItem(item.id)}>Del</Button> */}
            </div>
          </td>
        </tr>
      )
    })

    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>CPF</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Status</th>
            <th>Criado</th>
            <th>Atualizado</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </Table>
    )
  }
}

export default DataTable