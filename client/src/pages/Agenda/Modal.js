import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap'
import AddEditForm from './update'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { red } from '@material-ui/core/colors';
import EditIcon from '@material-ui/icons/Edit';
import ListaCompleta from './ListaCompleta';

function ModalForm(props) {
  const [modal, setModal] = useState(false)

  const toggle = () => {
    setModal(!modal)
  }


  const label = props.buttonLabel

  let button = ''
  let title = ''

  if (label === 'Editar') {
    button = <EditIcon
      onClick={toggle}
      style={{ float: "left", marginRight: "10px" , color: red[500]}}>{label}
    </EditIcon>
    title = 'Editar Agenda'
  } else {
    button = <Button
      onClick={toggle}
      style={{ float: "left", marginRight: "10px" ,}}>{label}
    <AddCircleIcon/></Button>
    title = 'Adicionar'
  }


  return (
    <div>
      {button}
      <Modal isOpen={modal} toggle={toggle} className={props.className}>
        <ModalHeader toggle={toggle} >{title}</ModalHeader>
        <ModalBody>
          <ListaCompleta/>
          <AddEditForm
            addItemToState={props.addItemToState}
            updateState={props.updateState}
            toggle={toggle}
            item={props.item} />
        </ModalBody>
      </Modal>
    </div>
  )
}

export default ModalForm
