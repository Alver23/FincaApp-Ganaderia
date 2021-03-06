import React, { useState } from "react";
import { connect } from "react-redux";
import { Container, ContainerBadge, ContainerForm } from "./styles";
import Badge from "../../components/Badge";
import BadgeForm from "../../components/BadgeForm";
import PageLoading from "../../components/PageLoading";
import PageError from "../../components/PageError";
import { createBadge } from "../../redux/actions";

const NewBadge = (props) => {
  const {
    createBadge,
    badgesReducer: { loading, error },
  } = props;

  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    fecha: "",
    tiempo: "",
    costo: "",
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
    createBadge(form);
    props.history.push("/badges");
  };

  if (error) return <PageError error={error} />;

  if (loading) return <PageLoading />;

  return (
    <Container>
      <ContainerForm>
        <BadgeForm
          onChange={onChange}
          onSubmit={onSubmit}
          formValues={form}
          error={error}
          title="Nuevo Trabajo"
        />
      </ContainerForm>
      <ContainerBadge>
        <Badge badge={form} />
      </ContainerBadge>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return { badgesReducer: state.badgesReducer };
};

export default connect(mapStateToProps, { createBadge })(NewBadge);
