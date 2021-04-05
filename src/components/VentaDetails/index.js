import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container, ContainerBadge, ContainerActions, Button } from "./styles";
import Venta from "../Venta";
import DeleteVentaModal from "../DeleteVentaModal";

const VentaDetails = (props) => {
  const { venta, deleteVenta, modalMode, openModal, closeModal } = props;

  return (
    <Container>
      <ContainerBadge>
        <Venta venta={venta} />
      </ContainerBadge>

      <ContainerActions>
        <h2>Acciones</h2>
        <Link to={`/ventas/${venta._id}/edit`}>EDITAR</Link>
        <Button onClick={openModal}>BORRAR</Button>
        <DeleteVentaModal
          modalMode={modalMode}
          closeModal={closeModal}
          deleteVenta={deleteVenta}
        />
      </ContainerActions>
    </Container>
  );
};

VentaDetails.propTypes = {
  venta: PropTypes.object,
  deleteVenta: PropTypes.func,
  modalMode: PropTypes.bool,
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
};

const mapStateToProps = (state) => {
  return { ventasReducer: state.ventasReducer };
};

export default connect(mapStateToProps, null)(VentaDetails);
