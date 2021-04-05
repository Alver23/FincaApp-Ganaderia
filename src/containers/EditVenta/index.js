import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, ContainerBadge, ContainerForm } from "../NewBadge/styles";
import Venta from "../../components/Venta";
import VentaForm from "../../components/VentaForm";
import PageError from "../../components/PageError";
import PageLoading from "../../components/PageLoading";
import { getVenta, updateVenta } from "../../redux/actionsVentas";

const EditVenta = (props) => {
  const {
    getVenta,
    updateVenta,
    ventasReducer: {
      ventaById: {
        nameVenta,
        cantidadVenta,
        pesoVenta,
        fechaVenta,
        valorVenta,
      },
      loading,
      error,
    },
    match: {
      params: { ventaId },
    },
  } = props;

  const [form, setForm] = useState({
    nameVenta,
    cantidadVenta,
    pesoVenta,
    fechaVenta,
    valorVenta,
  });

  useEffect(() => {
    getVenta(ventaId);
  }, [getVenta, ventaId]);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    updateVenta(ventaId, form);
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
          title="Actualizar una venta"
        />
      </ContainerForm>
      <ContainerBadge>
        <Venta venta={form} />
      </ContainerBadge>
    </Container>
  );
};

EditVenta.propTypes = { ventaId: PropTypes.string };

const mapStateToProps = (state) => {
  return {
    ventasReducer: state.ventasReducer,
  };
};

const mapDispatchToProps = {
  getVenta,
  updateVenta,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditVenta);
