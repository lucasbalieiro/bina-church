import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsTrashFill } from 'react-icons/bs';
import { NextComponentType } from 'next'


type DeleteMemberProps = {
  name: string
}

export const DeleteModal: NextComponentType<any, any, DeleteMemberProps> = ({ name }: DeleteMemberProps) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        <BsTrashFill />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Excluir membro</Modal.Title>
        </Modal.Header>
        <Modal.Body>Voce tem certeza que deseja excluir <strong>{name}</strong>?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}