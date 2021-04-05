import React from "react";
import PropTypes from "prop-types";
import Gravatar from "../GravatarVenta";
import { Container, Header, Box, Footer } from "./styles";

const Venta = ({ venta }) => {
  const {
    nameVenta,
    cantidadVenta,
    pesoVenta,
    fechaVenta,
    valorVenta,
    email,
  } = venta;

  var value = valorVenta;
  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });
  return (
    <Container>
      <Header>
        <p>Venta</p>
      </Header>
      <Box>
        <Gravatar email={email} />
        <p className="Card__jobTitle">
          Nombre de la venta:{" "}
          <span style={{ fontWeight: "lighter" }}>{nameVenta || "Nombre"}</span>
          <br />
          Cantidad de animales:{" "}
          <span style={{ fontWeight: "lighter" }}>
            {cantidadVenta || "Cantidad"}
          </span>
          <br />
          Cantidad de peso:{" "}
          <span style={{ fontWeight: "lighter" }}>
            {pesoVenta || "Peso"} Kilos
          </span>
          <br />
          Fecha:{" "}
          <span style={{ fontWeight: "lighter" }}>{fechaVenta || "Fecha"}</span>
          <br />
          Valor venta:{" "}
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

Venta.propTypes = {
  venta: PropTypes.object,
};

export default Venta;
