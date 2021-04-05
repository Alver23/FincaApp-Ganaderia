import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import PageLoading from "../../components/PageLoading";
import MiniLoader from "../miniLoader";
import ComprasListItem from "../ComprasListItem";
import { Container, Box, Input, List, Box_texto, Texto } from "./styles";
import "../../components/styles/Input.css";

const SIZE = "25px";

const ComprasList = (props) => {
  const {
    comprasReducer: { compras, loading },
  } = props;

  const totalCompras = compras.reduce(
    (totalCompras, { valorCompra }) => totalCompras + Number(valorCompra),
    0
  );

  let value = totalCompras;

  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });
  console.log(formatterPeso.format(value));

  const [query, setQuery] = React.useState("");
  const [filteredCompras, setFilteredCompras] = React.useState(compras);

  React.useMemo(() => {
    const result = compras.filter((compra) => {
      return `${compra.nameCompra} ${compra.valorCompra}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredCompras(result);
  }, [compras, query]);

  const onChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <Container>
      <Box>
        <Link className="button" to="/compras/new">
          Agregar una nueva compra
        </Link>
        <Link className="button_total-compras" to="#">
          Total en compras: {formatterPeso.format(value)}
        </Link>

        <div className="row">
          <div className="col-12">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <MdSearch size={SIZE} />
                </span>
              </div>
              <Input
                type="search"
                className="form-control"
                placeholder="Buscar una compra..."
                onChange={onChange}
              />
            </div>
          </div>
        </div>
      </Box>
      {filteredCompras.length === 0 && (
        <>
          <PageLoading />
        </>
      )}
      {filteredCompras.length === 0 && !loading && (
        <>
          <Box_texto>
            <Texto>No tienes Compras registradas</Texto>
          </Box_texto>
        </>
      )}

      {filteredCompras.length > 0 && (
        <List>
          {filteredCompras.map((compra) => {
            return (
              <li key={compra._id}>
                <Link className="link" to={`/compras/${compra._id}/details`}>
                  <ComprasListItem compra={compra} />
                </Link>
              </li>
            );
          })}
        </List>
      )}
      {loading === true && <MiniLoader />}
    </Container>
  );
};

ComprasList.propTypes = { compras: PropTypes.array };

const mapStateToProps = (state) => {
  return { comprasReducer: state.comprasReducer };
};

export default connect(mapStateToProps, null)(ComprasList);
