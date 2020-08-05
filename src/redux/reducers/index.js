import drawerFetchReducer from "./drawerFetchReducer";
import { combineReducers } from "redux";

export default combineReducers({
  fetch: drawerFetchReducer,
});
