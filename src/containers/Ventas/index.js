import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container } from "./styles";
import PageLoading from "../../components/PageLoading";
import VentasList from "../../components/VentasList";
import PageError from "../../components/PageError";
import { getVentas } from "../../redux/actionsVentas";

const Ventas = (props) => {
  const {
    ventasReducer: { loading, error },
    getVentas,
  } = props;

  useEffect(() => {
    getVentas();
    let intervalId = setInterval(getVentas, 5000);
    return () => clearInterval(intervalId);
  }, [getVentas]);

  if (error) return <PageError error={error} />;

  /* if (loading) return <PageLoading />; */

  return (
    <Container>
      <VentasList />
    </Container>
  );
};

Ventas.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  getVentas: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    ventasReducer: state.ventasReducer,
  };
};

export default connect(mapStateToProps, { getVentas })(Ventas);
