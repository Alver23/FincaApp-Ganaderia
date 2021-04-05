import React from "react";
import PropTypes from "prop-types";
import Gravatar from "../GravatarCompra";
import { Container, Header, Box, Footer } from "./styles";

const Compra = ({ compra }) => {
  const {
    nameCompra,
    cantidadCompra,
    unidadCompra,
    fechaCompra,
    valorCompra,
    email,
  } = compra;

  var value = valorCompra;

  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  return (
    <Container>
      <Header>
        <p>Compra</p>
      </Header>
      <Box>
        <Gravatar email={email} />
        <p className="Card__jobTitle">
          Nombre del insumo:{" "}
          <span style={{ fontWeight: "lighter" }}>
            {nameCompra || "Nombre"}
          </span>
          <br />
          Cantidad:{" "}
          <span style={{ fontWeight: "lighter" }}>
            {cantidadCompra || "Cantidad"} {unidadCompra || "Unidad"}
          </span>
          <br />
          Fecha:{" "}
          <span style={{ fontWeight: "lighter" }}>
            {fechaCompra || "Fecha"}
          </span>
          <br />
          Valor Insumo:{" "}
          <span style={{ fontWeight: "lighter" }}>
            {formatterPeso.format(value) || "Costo"}
          </span>
        </p>
      </Box>
      <Footer>
        <p>FincaApp</p>
      </Footer>
    </Container>
  );
};

Compra.propTypes = {
  compra: PropTypes.object,
};

export default Compra;
