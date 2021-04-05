import React from "react";
import PropTypes from "prop-types";
import Gravatar from "../Gravatar";
import { Item } from "./styles";
import "../styles/BadgesCard.css";

const BadgesListItem = ({ badge }) => {
  const { nombre, descripcion, fecha, tiempo, costo, email } = badge;

  var value = costo;

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
          Nombre del trabajo:{" "}
          <span style={{ fontWeight: "lighter" }}>{nombre}</span>
          <br />
          Descripcion:{" "}
          <span style={{ fontWeight: "lighter" }}>{descripcion}</span>
          <br />
          Fecha: <span style={{ fontWeight: "lighter" }}>{fecha}</span>
          <br />
          Dias trabajados:{" "}
          <span style={{ fontWeight: "lighter" }}>{tiempo}</span>
          <br />
          Costo:{" "}
          <span style={{ fontWeight: "lighter" }}>
            {formatterPeso.format(value)}
          </span>
        </p>
      </div>
    </Item>
  );
};

BadgesListItem.propTypes = { badge: PropTypes.object.isRequired };

export default BadgesListItem;
