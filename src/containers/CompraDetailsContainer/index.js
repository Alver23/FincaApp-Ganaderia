import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PageLoading from "../../components/PageLoading";
import PageError from "../../components/PageError";
import CompraDetails from "../../components/CompraDetails";
import { getCompra, deleteCompra } from "../../redux/actionsCompras";

const CompraDetailsContainer = (props) => {
  const {
    getCompra,
    deleteCompra,
    comprasReducer: { compraById, loading, error },
    match: {
      params: { compraId },
    },
  } = props;

  useEffect(() => {
    getCompra(compraId);
  }, [getCompra, compraId]);

  const handleDeleteCompra = () => {
    deleteCompra(compraById._id);
    props.history.push("/compras");
  };

  const [modalMode, setModalMode] = React.useState({ visible: false });
  const openModal = () => setModalMode({ visible: true });
  const closeModal = () => setModalMode({ visible: false });

  if (loading) return <PageLoading />;

  if (error) return <PageError error={error} />;

  return typeof compraById === "object" && Object.keys(compraById).length ? (
    <CompraDetails
      compra={compraById}
      modalMode={modalMode.visible}
      openModal={openModal}
      closeModal={closeModal}
      deleteCompra={handleDeleteCompra}
    />
  ) : (
    ""
  );
};

CompraDetailsContainer.propTypes = {
  compraId: PropTypes.string,
  getCompra: PropTypes.func,
  deleteCompra: PropTypes.func,
  compraById: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

const mapStateToProps = (state) => {
  return { comprasReducer: state.comprasReducer };
};

const mapDispatchToProps = {
  getCompra,
  deleteCompra,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompraDetailsContainer);
