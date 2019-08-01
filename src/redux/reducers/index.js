import drawerClickReducer from "./drawerClickReducer";
import drawerFetchReducer from "./drawerFetchReducer";
import { combineReducers } from "redux";

export default combineReducers({
  click: drawerClickReducer,
  fetch: drawerFetchReducer
});
