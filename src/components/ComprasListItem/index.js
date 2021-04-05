import React from "react";
import PropTypes from "prop-types";
import "../styles/BadgesCard.css";
import { Item } from "./styles";
import Gravatar from "../GravatarCompra";

const ComprasListItem = ({ compra }) => {
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
    <Item>
      <Gravatar email={email} />
      <div>
        <p className="Card__jobTitle">
          Nombre de la compra:{" "}
          <span style={{ fontWeight: "lighter" }}>{nameCompra}</span>
          <br />
          Cantidad de la compra:{" "}
          <span style={{ fontWeight: "lighter" }}>
            {cantidadCompra} {unidadCompra}
          </span>
          <br />
          Fecha:
          <span style={{ fontWeight: "lighter" }}>
            {fechaCompra || "fecha"}
          </span>
          <br />
          Valor: {` `}
          <span style={{ fontWeight: "lighter" }}>
            {formatterPeso.format(value)}
          </span>
        </p>
      </div>
    </Item>
  );
};

ComprasListItem.propTypes = { compra: PropTypes.object.isRequired };

export default ComprasListItem;
