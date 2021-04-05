import React from "react";
import { Nav, NavLink, Link } from "./styles";
import {
  MdHome,
  MdLibraryAdd,
  MdAddShoppingCart,
  MdMonetizationOn,
  MdAcUnit,
} from "react-icons/md";
import "../Menu/menu.scss";

// constante con el tamaño de los iconos
const SIZE = "32px";
const COLOR = "red";

const NavBar = () => {
  return (
    <Nav>
      <Link to="/">
        <MdHome size={SIZE} />
      </Link>
      <NavLink to="/badges">
        <MdLibraryAdd size={SIZE} />
      </NavLink>

      <NavLink to="/compras">
        <MdAddShoppingCart size={SIZE} />
      </NavLink>
      <NavLink to="/ventas">
        <MdMonetizationOn size={SIZE} />
      </NavLink>
      <NavLink to="/gastosVsVentas">
        <MdAcUnit size={SIZE} />
      </NavLink>
    </Nav>
  );
};
export default NavBar;
