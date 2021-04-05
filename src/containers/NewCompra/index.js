import React, { useState } from "react";
import { connect } from "react-redux";
import { Container, ContainerBadge, ContainerForm } from "./styles";
import Compra from "../../components/Compra";
import CompraForm from "../../components/CompraForm";
import PageLoading from "../../components/PageLoading";
import PageError from "../../components/PageError";
import { createCompra } from "../../redux/actionsCompras";

const NewCompra = (props) => {
  const {
    createCompra,
    comprasReducer: { loading, error },
  } = props;

  const [form, setForm] = useState({
    nameCompra: "",
    cantidadCompra: "",
    unidadCompra: "",
    fechaCompra: "",
    valorCompra: "",
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
    console.log(form);
    createCompra(form);
    props.history.push("/compras");
  };

  if (error) {
    return <PageError error={error} />;
  }

  if (loading) return <PageLoading />;

  return (
    <Container>
      <ContainerForm>
        <CompraForm
          onChange={onChange}
          onSubmit={onSubmit}
          formValues={form}
          error={error}
          title="Nueva compra"
        />
      </ContainerForm>
      <ContainerBadge>
        <Compra compra={form} />
      </ContainerBadge>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return { comprasReducer: state.comprasReducer };
};

export default connect(mapStateToProps, { createCompra })(NewCompra);
