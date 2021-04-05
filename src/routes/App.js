import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { GlobalStyle } from "../GlobalStyle";

import Login from "../containers/Login";
import Register from "../containers/Register";
import Layout from "../components/Layout";
import Home from "../containers/Home";
/* import Erros from "../components/PageError"; */

import Badges from "../containers/Badges";
import NewBadge from "../containers/NewBadge";
import BadgeDetailsContainer from "../containers/BadgeDetailsContainer";
import EditBadge from "../containers/EditBadge";

import Compras from "../containers/Compras";
import NewCompra from "../containers/NewCompra";
import CompraDetailsContainer from "../containers/CompraDetailsContainer";
import EditCompra from "../containers/EditCompra";

import Ventas from "../containers/Ventas";
import NewVenta from "../containers/NewVenta";
import VentaDetailsContainer from "../containers/VentaDetailsContainer";
import EditVenta from "../containers/EditVenta";

import GananciasVsGastos from "../containers/GananciasVsGastos";

import NotFound from "../components/NotFound";
import NavBar from "../components/NavBar";

import { AuthProvider } from "../containers/Auth";
import PrivateRoute from "../containers/PrivateRoute";

function App({}) {
  return (
    <AuthProvider>
      <Router>
        <GlobalStyle />
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/" component={Erros} /> */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute exact path="/badges" component={Badges} />

            {/*  <Route exact path="/badges" component={Badges} /> */}

            <Route exact path="/badges/new" component={NewBadge} />
            <Route exact path="/badges/:badgeId/edit" component={EditBadge} />
            <Route
              exact
              path="/badges/:badgeId/details"
              component={BadgeDetailsContainer}
            />
            {/* <Route exact path={"/gastos"} component={Gastos} /> */}

            <PrivateRoute exact path="/compras" component={Compras} />
            {/*  <Route exact path="/compras" component={Compras} /> */}
            <Route exact path="/compras/new" component={NewCompra} />
            <Route
              exact
              path="/compras/:compraId/edit"
              component={EditCompra}
            />
            <Route
              exact
              path="/compras/:compraId/details"
              component={CompraDetailsContainer}
            />

            <Route
              exact
              path="/ventas/:ventaId/details"
              component={VentaDetailsContainer}
            />
            <Route exact path="/ventas/:ventaId/edit" component={EditVenta} />
            <PrivateRoute exact path="/ventas" component={Ventas} />
            {/* <Route exact path={"/ventas"} component={Ventas} /> */}
            <Route exact path={"/ventas/new"} component={NewVenta} />

            <PrivateRoute
              exact
              path="/gastosVsVentas"
              component={GananciasVsGastos}
            />
            {/*  <Route
              exact
              path={"/gastosVsVentas"}
              component={GananciasVsGastos}
            /> */}

            <Route component={NotFound} />
          </Switch>
        </Layout>
        <NavBar />
      </Router>
    </AuthProvider>
  );
}

export default App;
