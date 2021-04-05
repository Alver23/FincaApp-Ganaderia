import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import PageLoading from "../../components/PageLoading";
import MiniLoader from "../miniLoader";

import VentasListItem from "../VentasListItem";
import {
  Container,
  Box,
  Box_valores,
  Input,
  List,
  Box_texto,
  Texto,
} from "./styles";

const SIZE = "25px";

const VentasList = (props) => {
  const {
    ventasReducer: { ventas, loading },
  } = props;

  const totalVentas = ventas.reduce(
    (totalVentas, { valorVenta }) => totalVentas + Number(valorVenta),
    0
  );

  const totalCabezas = ventas.reduce(
    (totalCabezas, { cantidadVenta }) => totalCabezas + Number(cantidadVenta),
    0
  );

  const totalPeso = ventas.reduce(
    (totalPeso, { pesoVenta }) => totalPeso + Number(pesoVenta),
    0
  );

  var value = totalVentas;
  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  const [query, setQuery] = React.useState("");
  const [filteredVentas, setFilteredVentas] = React.useState(ventas);

  React.useMemo(() => {
    const result = ventas.filter((venta) => {
      return `${venta.nameVenta} ${venta.valorVenta}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredVentas(result);
  }, [ventas, query]);

  const onChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <Container>
      <Box>
        <Link className="button_total-ventas" to="#">
          Total en ventas: {formatterPeso.format(value)}
        </Link>

        <Box_valores>
          <Link className="button_total-kilos" to="#">
            Total animales: {totalCabezas}
          </Link>
          <Link className="button_total-cargas" to="#">
            Total peso: {totalPeso}
          </Link>
        </Box_valores>

        <Link className="button" to="/ventas/new">
          Agregar una nueva venta
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
                placeholder="Buscar una venta..."
                onChange={onChange}
              />
            </div>
          </div>
        </div>
      </Box>
      {filteredVentas.length === 0 && (
        <>
          <PageLoading />
        </>
      )}
      {filteredVentas.length === 0 && !loading && (
        <>
          <Box_texto>
            <Texto>No tienes ventas registradas</Texto>
          </Box_texto>
        </>
      )}

      {filteredVentas.length > 0 && (
        <List>
          {filteredVentas.map((venta) => {
            return (
              <li key={venta._id}>
                <Link className="link" to={`/ventas/${venta._id}/details`}>
                  <VentasListItem venta={venta} />
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

VentasList.propTypes = { ventas: PropTypes.array };

const mapStateToProps = (state) => {
  return { ventasReducer: state.ventasReducer };
};

export default connect(mapStateToProps, null)(VentasList);
