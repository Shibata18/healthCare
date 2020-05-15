import React from 'react'
import { Table } from 'reactstrap';
import ModalForm from './Modal'
import DuoIcon from '@material-ui/icons/Duo';
import { Link } from 'react-router-dom';

function DataTable(props) {
  const items = props.items.map(item => {
    const date = new Date(item.horario)
    return (
      <tr key={item.id}>
        {/* <th scope="row">{item.id}</th> */}
        <td>{item.doctor_cpf}</td>
        <td>{item.paciente_cpf}</td>
        <td>{item.horario = date.toUTCString()}</td>
        <td>{item.file.map(item => { return (<p key={item.id}><a rel="noopener noreferrer" href={item.url} target='_blank'>{item.path}</a></p>) })}</td>
        <td>{item.created_at}</td>
        <td>{item.updated_at}</td>
        <td><Link to='/chatDoctor'><DuoIcon/></Link></td>
        <td>
          <div style={{ width: "10%" }}>
            <ModalForm buttonLabel="Editar" item={item} updateState={props.updateState} />
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
          {/* <th>ID</th> */}
          <th>CPF Médico</th>
          <th>CPF Paciente</th>
          <th>Horario</th>
          <th>Arquivo</th>
          <th>Criado</th>
          <th>Atualizado</th>
          <th>Vídeo</th>
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
