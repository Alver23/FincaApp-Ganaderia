import React from "react";
import PropTypes from "prop-types";
import { MdRefresh } from "react-icons/md";
import { colors } from "../../GlobalStyle";
import { Container, Box_texto } from "./styles";

const SIZE = "55px";
const COLOR = `${colors.green}`;
const COLOR_ICON = `${colors.danger}`;

const PageError = ({ error }) => (
  <>
    <Container>
      <Box_texto>
        <h4>
          {error.message} <br />
        </h4>
        <p>
          <span>La sesión ha vencido</span>
          <br /> Refresque la App para continuar
        </p>
        <a href="/">
          <MdRefresh size={SIZE} color={COLOR} />
        </a>
      </Box_texto>
    </Container>
  </>
);

PageError.propTypes = { error: PropTypes.object };

export default PageError;
