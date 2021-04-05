import React from "react";
import PropTypes from "prop-types";
import Modal from "../Modal";
import { ModalDelete, Button } from "./styles";

const DeleteVentaModal = (props) => {
  const { modalMode, closeModal, deleteVenta } = props;

  return (
    <Modal modalMode={modalMode} closeModal={closeModal}>
      <ModalDelete>
        <h1>Estas seguro?</h1>
        <p>Estas apunto de borrar una venta de la lista.</p>
        <div>
          <Button onClick={closeModal}>CANCEL</Button>
          <Button danger onClick={deleteVenta}>
            Borrar
          </Button>
        </div>
      </ModalDelete>
    </Modal>
  );
};

DeleteVentaModal.propTypes = {
  modalMode: PropTypes.bool,
  closeModal: PropTypes.func,
  deleteVenta: PropTypes.func,
};

export default DeleteVentaModal;
