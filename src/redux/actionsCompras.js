import axios from "axios";
import { GET_COMPRAS, GET_COMPRA, ERROR, LOADING } from "./actionTypesCompras";

const baseUrl = "https://backend-api-ganado.vercel.app/compras";

export function getCompras() {
  return async (dispatch) => {
    dispatch({ type: LOADING });

    try {
      const response = await axios({ method: "get", url: `${baseUrl}` });
      const { data } = await response.data;
      dispatch({ type: GET_COMPRAS, payload: data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error });
    }
  };
}

export function getCompra(compraId) {
  return async (dispatch) => {
    dispatch({ type: LOADING });

    try {
      const response = await axios({
        method: "get",
        url: `${baseUrl}/${compraId}`,
      });
      const { data } = await response.data;
      dispatch({ type: GET_COMPRA, payload: data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error });
    }
  };
}

export function createCompra(compra) {
  return async (dispatch) => {
    dispatch({ type: LOADING });

    try {
      await axios({ method: "post", url: `${baseUrl}`, data: compra });
      const response = await axios({ method: "get", url: `${baseUrl}` });
      const { data } = await response.data;
      dispatch({ type: GET_COMPRAS, payload: data });
    } catch (error) {
      /*  console.log(error.message, "Action compra"); */
      dispatch({ type: ERROR, payload: error });
    }
  };
}

export function updateCompra(compraId, updates) {
  return async (dispatch) => {
    dispatch({ type: LOADING });

    try {
      await axios({
        method: "put",
        url: `${baseUrl}/${compraId}`,
        data: updates,
      });
      const response = await axios({ method: "get", url: `${baseUrl}` });
      const { data } = await response.data;
      dispatch({ type: GET_COMPRAS, payload: data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error });
    }
  };
}

export function deleteCompra(compraId) {
  return async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      await axios({
        method: "delete",
        url: `${baseUrl}/${compraId}`,
      });
      const response = await axios({ method: "get", url: `${baseUrl}` });
      const { data } = await response.data;
      dispatch({ type: GET_COMPRAS, payload: data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error });
    }
  };
}
