import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, ContainerBadge, ContainerForm } from "../NewBadge/styles";
import Compra from "../../components/Compra";
import CompraForm from "../../components/CompraForm";
import PageError from "../../components/PageError";
import PageLoading from "../../components/PageLoading";
import { getCompra, updateCompra } from "../../redux/actionsCompras";

const EditCompra = (props) => {
  const {
    getCompra,
    updateCompra,
    comprasReducer: {
      compraById: {
        nameCompra,
        cantidadCompra,
        unidadCompra,
        fechaCompra,
        valorCompra,
      },
      loading,
      error,
    },
    match: {
      params: { compraId },
    },
  } = props;

  const [form, setForm] = useState({
    nameCompra,
    cantidadCompra,
    unidadCompra,
    fechaCompra,
    valorCompra,
  });

  useEffect(() => {
    getCompra(compraId);
  }, [getCompra, compraId]);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    updateCompra(compraId, form);
    props.history.push("/compras");
  };

  if (error) return <PageError error={error} />;

  if (loading) return <PageLoading />;

  return (
    <Container>
      <ContainerForm>
        <CompraForm
          onChange={onChange}
          onSubmit={onSubmit}
          formValues={form}
          error={error}
          title="Actualizar una compra"
        />
      </ContainerForm>
      <ContainerBadge>
        <Compra compra={form} />
      </ContainerBadge>
    </Container>
  );
};

EditCompra.propTypes = { compraId: PropTypes.string };

const mapStateToProps = (state) => {
  return {
    comprasReducer: state.comprasReducer,
  };
};

const mapDispatchToProps = {
  getCompra,
  updateCompra,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCompra);
