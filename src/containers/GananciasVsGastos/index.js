import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, ContainerBadge } from "./styles";
import PageLoading from "../../components/PageLoading";
import GastosVsVentasList from "../../components/GastosVsVentasList";
import PageError from "../../components/PageError";
import { getVentas } from "../../redux/actionsVentas";
import { getBadges } from "../../redux/actions";
import { getCompras } from "../../redux/actionsCompras";

const GananciasVsGastos = (props) => {
  const {
    badgesReducer: { loading },
    getBadges,
  } = props;

  const {
    ventasReducer: { error },
    getVentas,
  } = props;

  const {
    comprasReducer: {},
    getCompras,
  } = props;

  useEffect(() => {
    getCompras();
  }, [getCompras]);

  useEffect(() => {
    getVentas();
  }, [getVentas]);

  useEffect(() => {
    getBadges();
  }, [getBadges]);

  if (error) return <PageError error={error} />;

  if (loading) return <PageLoading />;

  return (
    <Container>
      <ContainerBadge>
        <GastosVsVentasList />
      </ContainerBadge>
    </Container>
  );
};

GananciasVsGastos.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  getVentas: PropTypes.func,
  getCompras: PropTypes.func,
  getBadges: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    ventasReducer: state.ventasReducer,
    comprasReducer: state.comprasReducer,
    badgesReducer: state.badgesReducer,
  };
};

export default connect(mapStateToProps, { getVentas, getCompras, getBadges })(
  GananciasVsGastos
);
