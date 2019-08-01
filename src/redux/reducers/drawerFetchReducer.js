const initialState = {
  isFetching: false,
  failure: null,
  data: null
};
const drawerFetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_BEGIN":
      return {
        ...state,
        isFetching: action.payload
      };
    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        failure: action.payload
      };
    case "FETCH_DATA_SUCCESS":
      console.log(action.payload);
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default drawerFetchReducer;
