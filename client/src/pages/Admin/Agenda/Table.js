import React from 'react'
import { Table  } from 'reactstrap';
import ModalForm from './Modal'

function DataTable(props){

    const items = props.items.map(item => {
      return (
        <tr key={item.id}>
          <th scope="row">{item.id}</th>
          <td>{item.doctor_cpf}</td>
          <td>{item.paciente_cpf}</td>
          <td>{item.horario}</td>
          <td>{item.data}</td>
          <td>{item.file.map(item=>{ return (<p key={item.id}><a rel="noopener noreferrer" href={item.url} target='_blank'>{item.path}</a></p>)})}</td>
          <td>{item.created_at}</td>
          <td>{item.updated_at}</td>
          <td>
            <div style={{ width: "10%" }}>
              <ModalForm buttonLabel="Editar" item={item} updateState={props.updateState}/>
              {/* <Button color="danger" onClick={() => deleteItem(item.id)}>Del</Button> */}
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
            <th>CPF Doctor</th>
            <th>CPF Paciente</th>
            <th>Horario</th>
            <th>Data</th>
            <th>Arquivo</th>
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
