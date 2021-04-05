import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container } from "./styles";
import PageLoading from "../../components/PageLoading";
import ComprasList from "../../components/ComprasList";
import PageError from "../../components/PageError";
import { getCompras } from "../../redux/actionsCompras";

const Compras = (props) => {
  const {
    comprasReducer: { loading, error },
    getCompras,
  } = props;

  useEffect(() => {
    getCompras();
    let intervalId = setInterval(getCompras, 5000);
    return () => clearInterval(intervalId);
  }, [getCompras]);

  if (error) return <PageError error={error} />;

  /* if (loading) return <PageLoading />; */

  return (
    <Container>
      <ComprasList />
    </Container>
  );
};

Compras.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  getVentas: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    comprasReducer: state.comprasReducer,
  };
};

export default connect(mapStateToProps, { getCompras })(Compras);
