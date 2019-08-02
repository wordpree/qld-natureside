import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  click: { left: false },
  fetch: {
    success: false,
    isFetching: false,
    failure: null,
    featuredImg: null,
    data: null
  }
};
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
