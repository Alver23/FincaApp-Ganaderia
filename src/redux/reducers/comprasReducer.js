import { GET_COMPRAS, GET_COMPRA, LOADING, ERROR } from "../actionTypesCompras";

const initialState = {
  compras: [],
  compraById: {},
  message: "",
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COMPRAS:
      return {
        ...state,
        compras: action.payload,
        loading: false,
      };

    case GET_COMPRA:
      return {
        ...state,
        compraById: action.payload,
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
