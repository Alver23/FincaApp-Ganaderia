import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Container, ContainerBadge, ContainerActions, Button } from "./styles";
import Compra from "../Compra";
import DeleteCompraModal from "../DeleteCompraModal";

const CompraDetails = (props) => {
  const { compra, deleteCompra, modalMode, openModal, closeModal } = props;

  return (
    <Container>
      <ContainerBadge>
        <Compra compra={compra} />
      </ContainerBadge>

      <ContainerActions>
        <h2>Acciones</h2>
        <Link to={`/compras/${compra._id}/edit`}>EDITAR</Link>
        <Button onClick={openModal}>BORRAR</Button>
        <DeleteCompraModal
          modalMode={modalMode}
          closeModal={closeModal}
          deleteCompra={deleteCompra}
        />
      </ContainerActions>
    </Container>
  );
};

CompraDetails.propTypes = {
  compra: PropTypes.object,
  deleteCompra: PropTypes.func,
  modalMode: PropTypes.bool,
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
};

const mapStateToProps = (state) => {
  return { comprasReducer: state.comprasReducer };
};

export default connect(mapStateToProps, null)(CompraDetails);
