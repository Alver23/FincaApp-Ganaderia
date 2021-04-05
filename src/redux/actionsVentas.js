import axios from "axios";
import { GET_VENTAS, GET_VENTA, ERROR, LOADING } from "./actionTypesVentas";

const baseUrl = "https://backend-api-ganado.vercel.app/ventas";

export function getVentas() {
  return async (dispatch) => {
    dispatch({ type: LOADING });

    try {
      const response = await axios({ method: "get", url: `${baseUrl}` });
      const { data } = await response.data;
      dispatch({ type: GET_VENTAS, payload: data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error });
    }
  };
}

export function getVenta(ventaId) {
  return async (dispatch) => {
    dispatch({ type: LOADING });

    try {
      const response = await axios({
        method: "get",
        url: `${baseUrl}/${ventaId}`,
      });
      const { data } = await response.data;
      dispatch({ type: GET_VENTA, payload: data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error });
    }
  };
}

export function createVenta(venta) {
  return async (dispatch) => {
    dispatch({ type: LOADING });

    try {
      await axios({ method: "post", url: `${baseUrl}`, data: venta });
      const response = await axios({ method: "get", url: `${baseUrl}` });
      const { data } = await response.data;
      dispatch({ type: GET_VENTAS, payload: data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error });
    }
  };
}

export function updateVenta(ventaId, updates) {
  return async (dispatch) => {
    dispatch({ type: LOADING });

    try {
      await axios({
        method: "put",
        url: `${baseUrl}/${ventaId}`,
        data: updates,
      });
      const response = await axios({ method: "get", url: `${baseUrl}` });
      const { data } = await response.data;
      dispatch({ type: GET_VENTAS, payload: data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error });
    }
  };
}

export function deleteVenta(ventaId) {
  return async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      await axios({
        method: "delete",
        url: `${baseUrl}/${ventaId}`,
      });
      const response = await axios({ method: "get", url: `${baseUrl}` });
      const { data } = await response.data;
      dispatch({ type: GET_VENTAS, payload: data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error });
    }
  };
}
