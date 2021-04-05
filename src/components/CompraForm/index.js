import React from "react";
import PropTypes from "prop-types";
import { Container, Title, Form, Input, Select, Button } from "./styles";

const CompraForm = (props) => {
  const {
    formValues: {
      nameCompra,
      cantidadCompra,
      unidadCompra,
      valorCompra,
      fechaCompra,
    },
    error,
    onChange,
    onSubmit,
    title,
  } = props;

  return (
    <Container>
      <Title> {title} </Title>{" "}
      <Form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          type="text"
          name="nameCompra"
          value={nameCompra}
          placeholder="Nombre del insumo"
          required
        />
        <Input
          onChange={onChange}
          type="number"
          name="cantidadCompra"
          value={cantidadCompra}
          placeholder="Cantidad"
          required
        />
        <Select
          onChange={onChange}
          value={unidadCompra}
          name="unidadCompra"
          required
        >
          <option value=""> Elige una unidad </option>
          <option value="Bultos"> Bultos </option>
          <option value="Bulto"> Bulto </option>
          <option value="Kilos"> Kilos </option>
          <option value="Kilo"> Kilo </option>
          <option value="Litros"> Litros </option>
          <option value="Litro"> Litro </option>
          <option value="Galones"> Galones </option>
          <option value="Galon"> Galon </option>
          <option value="Unidades"> Unidades </option>
          <option value="Unidad"> Unidad </option>
          <option value="Paquetes"> Paquetes </option>
          <option value="Paquete"> Paquete </option>
          <option value="Metros"> Metros </option>
          <option value="Metro"> Metro</option>
        </Select>
        <Input
          onChange={onChange}
          type="date"
          name="fechaCompra"
          value={fechaCompra}
          placeholder="date"
          required
        />
        <Input
          onChange={onChange}
          type="tel"
          name="valorCompra"
          value={valorCompra}
          placeholder="Valor de la compra sin puntos"
          title="Ingresa el valor sin puntos"
          pattern="^[^.]+$"
          autoComplete="off"
          required
        />{" "}
        {error && <p> {error.message} </p>}
        <Button type="submit"> Guardar </Button>
      </Form>{" "}
    </Container>
  );
};

CompraForm.propTypes = {
  formValues: PropTypes.object,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  error: PropTypes.object,
  title: PropTypes.string,
};

export default CompraForm;
