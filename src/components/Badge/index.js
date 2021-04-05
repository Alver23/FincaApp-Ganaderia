import React from "react";
import PropTypes from "prop-types";
import Gravatar from "../Gravatar";
import { Container, Header, Box, Footer } from "./styles";

const Badge = ({ badge }) => {
  const { nombre, descripcion, tiempo, costo, fecha, email } = badge;

  return (
    <Container>
      <Header>
        <p>Trabajo</p>
      </Header>
      <Box>
        <Gravatar email={email} />
        <p className="Card__jobTitle">
          Nombre del trabajo:{" "}
          <span style={{ fontWeight: "lighter" }}>{nombre || "Nombre"}</span>
          <br />
          Descripcion:{" "}
          <span style={{ fontWeight: "lighter" }}>
            {descripcion || "Descripcion"}
          </span>
          <br />
          Fecha:{" "}
          <span style={{ fontWeight: "lighter" }}>{fecha || "Fecha"}</span>
          <br />
          Dias trabajados:{" "}
          <span style={{ fontWeight: "lighter" }}>{tiempo || "Tiempo"}</span>
          <br />
          Costo: ${" "}
          <span style={{ fontWeight: "lighter" }}>{costo || "Costo"}</span>
        </p>
      </Box>
      <Footer>
        <p>FincaApp</p>
      </Footer>
    </Container>
  );
};

Badge.propTypes = {
  badge: PropTypes.object,
};

export default Badge;
