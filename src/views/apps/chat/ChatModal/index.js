import { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, FormGroup, Input,
  UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
const ModalForm = () => {
  const [formModal, setFormModal] = useState(true)
  

  return (
    <div className='demo-inline-spacing'>
      <div>
        <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setFormModal(!formModal)}></ModalHeader>
          <ModalBody>
            <h2>Assign the conversation</h2>
            <FormGroup>
              <Label for='email'>Email:</Label>
              <Input type='email' id='email' placeholder='Email Address' />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            
                <Button  color='info' onClick={() => setFormModal(!formModal)}>
                  Assign
                </Button>
                
                <Button className="close_button" color='primary' onClick={() => setFormModal(!formModal)}>
                  Close
                </Button>
         
          </ModalFooter>
        </Modal>
      </div>
     </div>
  )
}
export default ModalForm
