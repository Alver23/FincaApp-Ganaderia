import React from "react";
import PropTypes from "prop-types";
import Gravatar from "../GravatarVenta";
import "../styles/BadgesCard.css";
import { Item } from "./styles";

const VentasListItem = ({ venta }) => {
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
    <Item>
      <Gravatar email={email} />
      <div>
        <p className="Card__jobTitle">
          Nombre de la venta:{" "}
          <span style={{ fontWeight: "lighter" }}>{nameVenta}</span>
          <br />
          Cantidad de animales:{" "}
          <span style={{ fontWeight: "lighter" }}>{cantidadVenta}</span>
          <br />
          Cantidad de peso:{" "}
          <span style={{ fontWeight: "lighter" }}>{pesoVenta} Kilos</span>
          <br />
          Fecha:{" "}
          <span style={{ fontWeight: "lighter" }}>{fechaVenta || "fecha"}</span>
          <br />
          Valor:{" "}
          <span style={{ fontWeight: "lighter" }}>
            {formatterPeso.format(value)}
          </span>
        </p>
      </div>
    </Item>
  );
};

VentasListItem.propTypes = { venta: PropTypes.object.isRequired };

export default VentasListItem;
