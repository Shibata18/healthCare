import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap'
import EditProfissional from './UpdateProfessional'
import EditIcon from '@material-ui/icons/Edit';

function ModalProfessional(props) {
  const [modal, setModal] = useState(false)

  const toggle = () => {
    setModal(!modal)
  }


  const label = props.buttonLabel

  let button = ''
  let title = ''

  if (label === 'Editar') {
    button = <Button
      onClick={toggle}
      style={{ float: "left", marginRight: "10px" }} color='primary'>{label}<EditIcon/>
    </Button>
    title = 'Editar Perfil Profissional'
  } 


  return (
    <div>
      {button}
      <Modal isOpen={modal} toggle={toggle} className={props.className}>
        <ModalHeader toggle={toggle} >{title}</ModalHeader>
        <ModalBody>
          <EditProfissional
            addItemToState={props.addItemToState}
            updateState={props.updateState}
            toggle={toggle}
            item={props.item} />
        </ModalBody>
      </Modal>
    </div>
  )
}

export default ModalProfessional
