import React, { useState, useContext } from "react";
import "./menu.scss";
import app from "../../config/base";
import { Nav, Link } from "./styles";
import { AuthContext } from "../../containers/Auth";

const Menu = (props) => {
  //Inicializando estado con useState()
  const [title, setTitle] = useState("menu-close");
  const [menuTexto, setMenuTexto] = useState("no-visible");

  const { currentUser } = useContext(AuthContext);

  //Handlers
  const handleMenu = () => {
    title === "menu-close" ? setTitle("menu-open") : setTitle("menu-close");
    menuTexto === "no-visible"
      ? setMenuTexto("visible")
      : setMenuTexto("no-visible");
    props.data === "container-blur"
      ? props.blur("container")
      : props.blur("container-blur");

    setTimeout(() => {
      setTitle("menu-close");
      setMenuTexto("no-visible");
    }, 3000);
  };

  return (
    <div>
      <div className="menu-container" onClick={handleMenu}>
        <div className={title} />
      </div>
      <div className={`${menuTexto}1`}>
        <div className="link" onClick={() => app.auth().signOut()}>
          <Nav>
            {currentUser ? (
              <Link
                to="/"
                onClick={() => app.auth().signOut()}
                onClick={handleMenu}
              >
                Cerrar sesión
              </Link>
            ) : (
              <Link to="/login" onClick={handleMenu}>
                Iniciar sesión
              </Link>
            )}
          </Nav>
        </div>
      </div>
    </div>
  );
};

export default Menu;
