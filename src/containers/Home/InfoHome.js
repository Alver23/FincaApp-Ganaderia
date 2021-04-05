import React from "react";
import Gravatar from "../../utils/GravatarJobs";
import GravatarCompra from "../../utils/GravatarCompra";
import GravatarVenta from "../../utils/GravatarVenta";
import GravatarBalance from "../../utils/GravatarBalance";

const InfoHome = () => {
  return (
    <>
      <div className="skill">
        <div className="skl">
          <Gravatar />
          <p>
            <span>Registro de trabajos </span>
            <br />
            Te ayuda a tener un mejor control de los trabajos
          </p>
        </div>

        <div className="skl">
          <GravatarCompra />
          <p>
            <span>Registro de compras</span>
            <br />
            Te permite llevar el control de insumos
          </p>
        </div>
        <div className="skl">
          <GravatarVenta />
          <p>
            <span>Registro de ventas</span>
            <br />
            Te gestiona la venta de tus animales
          </p>
        </div>

        <div className="skl">
          <GravatarBalance />
          <p>
            <span>Balance de gastos</span> <br />
            Te permite conocer la rentabilidad de tu finca
          </p>
        </div>
      </div>
    </>
  );
};
export default InfoHome;
