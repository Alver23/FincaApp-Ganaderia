import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PageLoading from "../../components/PageLoading";
import PageError from "../../components/PageError";
import VentaDetails from "../../components/VentaDetails";
import { getVenta, deleteVenta } from "../../redux/actionsVentas";

const VentaDetailsContainer = (props) => {
  const {
    getVenta,
    deleteVenta,
    ventasReducer: { ventaById, loading, error },
    match: {
      params: { ventaId },
    },
  } = props;

  useEffect(() => {
    getVenta(ventaId);
  }, [getVenta, ventaId]);

  const handleDeleteVenta = () => {
    deleteVenta(ventaById._id);
    props.history.push("/ventas");
  };

  const [modalMode, setModalMode] = React.useState({ visible: false });
  const openModal = () => setModalMode({ visible: true });
  const closeModal = () => setModalMode({ visible: false });

  if (loading) return <PageLoading />;

  if (error) return <PageError error={error} />;

  return typeof ventaById === "object" && Object.keys(ventaById).length ? (
    <VentaDetails
      venta={ventaById}
      modalMode={modalMode.visible}
      openModal={openModal}
      closeModal={closeModal}
      deleteVenta={handleDeleteVenta}
    />
  ) : (
    ""
  );
};

VentaDetailsContainer.propTypes = {
  ventaId: PropTypes.string,
  getVenta: PropTypes.func,
  deleteVenta: PropTypes.func,
  ventaById: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

const mapStateToProps = (state) => {
  return { ventasReducer: state.ventasReducer };
};

const mapDispatchToProps = {
  getVenta,
  deleteVenta,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VentaDetailsContainer);
