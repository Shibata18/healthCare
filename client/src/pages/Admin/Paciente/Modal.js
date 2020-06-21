import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import AddEditForm from './update'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EditIcon from '@material-ui/icons/Edit';

function ModalForm(props) {
  const [modal, setModal] = useState(false)

  const toggle = () => {
    setModal(!modal)
  }

  const closeBtn = <button className="close" onClick={toggle}>&times;</button>
  const label = props.buttonLabel

  let button = ''
  let title = ''

  if(label === 'Editar'){
    button = <EditIcon
              color="action"
              onClick={toggle}
              style={{float: "left", marginRight:"10px"}}>{label}
            </EditIcon>
    title = 'Editar Paciente'
  } else {
    button = <Button
              color="success"
              onClick={toggle}
              style={{float: "left", marginRight:"10px"}}><AddCircleIcon/>
            </Button>
    title = 'Cadastrar Paciente'
  }


  return (
    <div>
      {button}
      <Modal isOpen={modal} toggle={toggle} className={props.className}>
        <ModalHeader toggle={toggle} close={closeBtn}>{title}</ModalHeader>
        <ModalBody>
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
