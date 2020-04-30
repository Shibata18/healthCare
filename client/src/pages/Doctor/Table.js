import React from 'react'
import ModalForm from './Modal'
import { Table} from 'reactstrap';

function DataTable(props){

    const items = props.items.map(item => {
      return (
        <tr key={item.id}>
          <th scope="row">{item.id}</th>
          <td>{item.cpfDoctor}</td>
          <td>{item.nameDoctor}</td>
          <td>{item.email}</td>
          <td>{item.telefoneDoctor}</td>
          <td>{item.conselho}</td>
          <td>{item.especialidade}</td>
          <td>{item.registro}</td>
          <td>{item.ativo_medico?`Ativo`:`Inativo`}</td>
          <td>{item.created_at}</td>
          <td>{item.updated_at}</td>
          <td>
            <div style={{ width: "10%" }}>
              <ModalForm buttonLabel="Edit" item={item} updateState={props.updateState}/>
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
            <th>Conselho</th>
            <th>Especialidade</th>
            <th>Registro</th>
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

export default DataTable
