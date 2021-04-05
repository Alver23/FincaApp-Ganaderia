import React, { useCallback } from "react";
import { withRouter } from "react-router";
import { MdPermIdentity } from "react-icons/md";
import Swal from "sweetalert2";
import "./Register.css";
import app from "../../config/base";

const SIZE = "52px";
const COLOR = "#fcc100";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Usuario registrado",
          showConfirmButton: false,
          timer: 2500,
        });
        history.push("/");
      } catch (error) {
        Swal.fire({
          icon: "warning",
          title: "Registro",
          text: "!Este correo ya esta siendo utilizado!",
        });
      }
    },
    [history]
  );

  return (
    <section className="register">
      <section className="register__container">
        <div className="MdPermIdentity">
          <MdPermIdentity size={SIZE} color={COLOR} />
        </div>
        <h2>Registrate</h2>
        <form className="register__container--form" onSubmit={handleSignUp}>
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
          <button className="button">Registrarme</button>
        </form>
      </section>
    </section>
  );
};

export default withRouter(SignUp);
