import React from "react";
import PropTypes from "prop-types";
import Modal from "../Modal";
import { ModalDelete, Button } from "./styles";

const DeleteCompraModal = (props) => {
  const { modalMode, closeModal, deleteCompra } = props;

  return (
    <Modal modalMode={modalMode} closeModal={closeModal}>
      <ModalDelete>
        <h1>Estas seguro?</h1>
        <p>Estas apunto de borrar una compra de la lista.</p>
        <div>
          <Button onClick={closeModal}>CANCEL</Button>
          <Button danger onClick={deleteCompra}>
            Borrar
          </Button>
        </div>
      </ModalDelete>
    </Modal>
  );
};

DeleteCompraModal.propTypes = {
  modalMode: PropTypes.bool,
  closeModal: PropTypes.func,
  deleteCompra: PropTypes.func,
};

export default DeleteCompraModal;
