import React from "react";
import PropTypes from "prop-types";
import { Container, Title, Form, Input, Button } from "./styles";
import "./app.scss";

const VentaForm = (props) => {
  const {
    formValues: { nameVenta, cantidadVenta, pesoVenta, valorVenta, fechaVenta },
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
          name="nameVenta"
          value={nameVenta}
          placeholder="Nombre de la venta"
          required
        />

        <Input
          onChange={onChange}
          type="tel"
          name="cantidadVenta"
          value={cantidadVenta}
          placeholder="Cantidad de animales"
          pattern="^[^.]+$"
          title="Ingresa el valor sin puntos"
          autoComplete="off"
          required
        />
        <Input
          onChange={onChange}
          type="tel"
          name="pesoVenta"
          value={pesoVenta}
          placeholder="Cantidad de peso"
          pattern="^[^.]+$"
          title="Ingresa el valor sin puntos"
          autoComplete="off"
          required
        />

        <Input
          onChange={onChange}
          type="date"
          name="fechaVenta"
          value={fechaVenta}
          placeholder="Fecha de la venta"
          required
        />

        <Input
          onChange={onChange}
          type="tel"
          name="valorVenta"
          value={valorVenta}
          pattern="^[^.]+$"
          title="Ingresa el valor sin puntos"
          placeholder="Valor de la venta"
          autoComplete="off"
          required
        />

        {error && <p>{error.message}</p>}
        <Button type="submit">Guardar</Button>
      </Form>
    </Container>
  );
};

VentaForm.propTypes = {
  formValues: PropTypes.object,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  error: PropTypes.object,
  title: PropTypes.string,
};

export default VentaForm;
