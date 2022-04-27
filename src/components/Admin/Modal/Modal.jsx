import { Modal, ModalBody } from 'react-bootstrap';
import React from 'react'

const AdminModal = () => {
  return (
    <Modal show={true}>
        <ModalBody>
        <div className="modal">Modal </div>
        </ModalBody>
    </Modal>
  )
}

export default AdminModal