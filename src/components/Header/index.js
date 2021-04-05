import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu/MenuBlur";
import { StyledHeader } from "./styles";

const LOGO =
  "https://res.cloudinary.com/imagesfull/image/upload/v1612992976/like/Imagen12_2_nztytc.png";

const Header = (props) => {
  //Hooks
  const [pageBlur, setPageBlur] = useState("container");
  //Handle
  const traerBlur = (x) => setPageBlur(x);

  return (
    <>
      <StyledHeader>
        <img className="logo" src={LOGO} alt="Finca Logo" />
        <Link to="/">
          <p>
            <span>Finca</span>
            App
          </p>
        </Link>
        <Menu data={pageBlur} blur={traerBlur} />
      </StyledHeader>
    </>
  );
};

export default Header;
