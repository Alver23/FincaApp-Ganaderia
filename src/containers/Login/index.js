import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { MdLockOutline } from "react-icons/md";
import Swal from "sweetalert2";
import app from "../../config/base";
import { AuthContext } from "../../containers/Auth";
import "./Login.css";

const SIZE = "52px";
const COLOR = "#fcc100";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/badges");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Usuario o Contraseña incorrectos!",
        });
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/photos" />;
  }

  return (
    <section className="login">
      <section className="login__container">
        <div className="MdLockOutline">
          <MdLockOutline size={SIZE} color={COLOR} />
        </div>
        <h2>Iniciar Sesión</h2>
        <form className="login__container--form" onSubmit={handleLogin}>
          <input
            className="input"
            name="email"
            type="text"
            placeholder="Correo"
            required
          />

          <input
            className="input"
            name="password"
            type="password"
            placeholder="Contraseña"
            required
          />
          <button className="button">Iniciar sesión</button>
        </form>
      </section>
    </section>
  );
};

export default withRouter(Login);
