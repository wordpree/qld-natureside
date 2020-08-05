import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  fetch: {
    success: false,
    isFetching: false,
    failure: null,
    featuredImg: null,
    parks: null,
    data: null,
  },
};
const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
