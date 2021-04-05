import React from "react";
import PropTypes from "prop-types";
import Modal from "../Modal";
import { ModalDelete, Button } from "./styles";

const DeleteBadgeModal = (props) => {
  const { modalMode, closeModal, deleteBadge } = props;

  return (
    <Modal modalMode={modalMode} closeModal={closeModal}>
      <ModalDelete>
        <h1>Estas seguro?</h1>
        <p>Estas apunto de borrar un trabajo de la lista.</p>
        <div>
          <Button onClick={closeModal}>CANCEL</Button>
          <Button danger onClick={deleteBadge}>
            Borrar
          </Button>
        </div>
      </ModalDelete>
    </Modal>
  );
};

DeleteBadgeModal.propTypes = {
  modalMode: PropTypes.bool,
  closeModal: PropTypes.func,
  deleteBadge: PropTypes.func,
};

export default DeleteBadgeModal;
