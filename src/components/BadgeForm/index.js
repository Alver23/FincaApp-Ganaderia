import React from "react";
import PropTypes from "prop-types";
import { Container, Title, Form, Input, Button } from "./styles";

const BadgeForm = (props) => {
  const {
    formValues: { nombre, descripcion, costo, tiempo, fecha },
    error,
    onChange,
    onSubmit,
    title,
  } = props;

  return (
    <Container>
      <Title>{title}</Title>
      <Form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          type="text"
          name="nombre"
          value={nombre}
          placeholder="Nombre del trabajo"
          required
        />
        <Input
          onChange={onChange}
          type="text"
          name="descripcion"
          value={descripcion}
          placeholder="Descripcion del trabajo"
          required
        />
        <Input
          onChange={onChange}
          type="date"
          name="fecha"
          value={fecha}
          placeholder="date"
          required
        />
        <Input
          onChange={onChange}
          type="number"
          name="tiempo"
          value={tiempo}
          placeholder="Dias trabajados"
          required
          autoComplete="off"
        />
        <Input
          onChange={onChange}
          type="tel"
          name="costo"
          value={costo}
          placeholder="Costo del trabajo sin puntos"
          title="Ingresa el valor sin puntos"
          pattern="^[^.]+$"
          autoComplete="off"
          required
        />
        {error && <p>{error.message}</p>}
        <Button type="submit">Guardar</Button>
      </Form>
    </Container>
  );
};

BadgeForm.propTypes = {
  formValues: PropTypes.object,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  error: PropTypes.object,
  title: PropTypes.string,
};

export default BadgeForm;
