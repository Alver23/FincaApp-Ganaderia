import { combineReducers } from "redux";
import badgesReducer from "./badgesReducer";
import ventasReducer from "./ventasReducer";
import comprasReducer from "./comprasReducer";

const rootReducer = combineReducers({
  badgesReducer,
  ventasReducer,
  comprasReducer,
});

export default rootReducer;
