import { GET_VENTAS, GET_VENTA, LOADING, ERROR } from "../actionTypesVentas";

const initialState = {
  ventas: [],
  ventaById: {},
  message: "",
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_VENTAS:
      return {
        ...state,
        ventas: action.payload,
        loading: false,
      };

    case GET_VENTA:
      return {
        ...state,
        ventaById: action.payload,
        loading: false,
      };

    case LOADING:
      return {
        ...state,
        loading: true,
      };

    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
