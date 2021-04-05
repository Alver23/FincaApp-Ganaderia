import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import BadgesListItem from "../BadgesListItem";
import PageLoading from "../../components/PageLoading";
import MiniLoader from "../miniLoader";
import { Container, Box, Input, List, Box_texto, Texto } from "./styles";

const SIZE = "25px";

const BadgesList = (props) => {
  const {
    badgesReducer: { badges, loading },
  } = props;

  const totalCostos = badges.reduce(
    (totalCostos, { costo }) => totalCostos + Number(costo),
    0
  );

  var value = totalCostos;
  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });
  console.log(formatterPeso.format(value));

  const [query, setQuery] = React.useState("");
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.nombre} ${badge.descripcion}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredBadges(result);
  }, [badges, query]);

  const onChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <Container>
      <Box>
        <Link className="button_total-trabajos" to="#">
          Total en trabajos: {formatterPeso.format(value)}
        </Link>

        <Link className="button" to="/badges/new">
          Agregar un nuevo trabajo
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
                placeholder="Buscar un trabajo..."
                onChange={onChange}
              />
            </div>
          </div>
        </div>
      </Box>

      {filteredBadges.length === 0 && (
        <>
          <PageLoading />
        </>
      )}
      {filteredBadges.length === 0 && !loading && (
        <>
          <Box_texto>
            <Texto>No tienes trabajos registrados</Texto>
          </Box_texto>
        </>
      )}

      {filteredBadges.length > 0 && (
        <List>
          {filteredBadges.map((badge) => {
            return (
              <li key={badge._id}>
                <Link className="link" to={`/badges/${badge._id}/details`}>
                  <BadgesListItem badge={badge} />
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

BadgesList.propTypes = { badges: PropTypes.array };

const mapStateToProps = (state) => {
  return { badgesReducer: state.badgesReducer };
};

export default connect(mapStateToProps, null)(BadgesList);
