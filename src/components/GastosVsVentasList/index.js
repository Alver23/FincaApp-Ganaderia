import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Box } from "./styles";

const GastosVsVentasList = (props) => {
  const {
    badgesReducer: { badges },
  } = props;

  const {
    ventasReducer: { ventas },
  } = props;

  const {
    comprasReducer: { compras },
  } = props;

  // Total costos
  let totalCostos = 0;
  badges.forEach((item) => (totalCostos += parseInt(item.costo)));

  var valueCostos = totalCostos;
  const formatterPesoCostos = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });
  console.log(formatterPesoCostos.format(valueCostos));

  // Total dineros en ventas
  let totalVentas = 0;
  ventas.forEach((item) => (totalVentas += parseInt(item.valorVenta)));

  var valueVentas = totalVentas;
  const formatterPesoVentas = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });
  console.log(formatterPesoVentas.format(valueVentas));

  // Total gastos en insumos
  let totalCompras = 0;
  compras.forEach((item) => (totalCompras += parseInt(item.valorCompra)));

  var valueCompras = totalCompras;
  const formatterPesoCompras = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });
  console.log(formatterPesoCompras.format(valueCompras));

  let resta = 0;
  resta = valueVentas - valueCostos - valueCompras;
  console.log(resta);

  return (
    <Container>
      <Box>
        <Link className="button" to="#">
          Balance de gastos y ventas
        </Link>

        <Link className="button_ventas" to="#">
          Dineros en Ventas: <br /> {formatterPesoVentas.format(valueVentas)}
        </Link>

        <Link className="button_costos" to="#">
          Gastos en trabajos: <br /> {formatterPesoCostos.format(valueCostos)}
        </Link>

        <Link className="button_compras" to="#">
          Gastos en insumos: <br /> {formatterPesoCostos.format(valueCompras)}
        </Link>

        <Link className="button_ganancias" to="#">
          Total Ganancias: <br /> {formatterPesoCostos.format(resta)}
        </Link>
      </Box>
    </Container>
  );
};

GastosVsVentasList.propTypes = {
  badges: PropTypes.array,
  ventas: PropTypes.array,
  compras: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    badgesReducer: state.badgesReducer,
    ventasReducer: state.ventasReducer,
    comprasReducer: state.comprasReducer,
  };
};

export default connect(mapStateToProps, null)(GastosVsVentasList);
