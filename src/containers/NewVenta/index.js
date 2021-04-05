import React, { useState } from "react";
import { connect } from "react-redux";
import { Container, ContainerBadge, ContainerForm } from "./styles";
import Venta from "../../components/Venta";
import VentaForm from "../../components/VentaForm";
import PageLoading from "../../components/PageLoading";
import PageError from "../../components/PageError";
import { createVenta } from "../../redux/actionsVentas";

const NewVenta = (props) => {
  const {
    createVenta,
    ventasReducer: { loading, error },
  } = props;

  const [form, setForm] = useState({
    nameVenta: "",
    cantidadVenta: "",
    pesoVenta: "",
    fechaVenta: "",
    valorVenta: "",
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    createVenta(form);
    props.history.push("/ventas");
  };

  if (error) return <PageError error={error} />;

  if (loading) return <PageLoading />;

  return (
    <Container>
      <ContainerForm>
        <VentaForm
          onChange={onChange}
          onSubmit={onSubmit}
          formValues={form}
          error={error}
          title="Nueva venta"
        />
      </ContainerForm>
      <ContainerBadge>
        <Venta venta={form} />
      </ContainerBadge>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return { ventasReducer: state.ventasReducer };
};

export default connect(mapStateToProps, { createVenta })(NewVenta);
