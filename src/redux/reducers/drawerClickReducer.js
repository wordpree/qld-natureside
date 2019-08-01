const initialState = {
  left: false
};
const drawerClickReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DRAWER_CLICK":
      return {
        ...state,
        left: action.payload
      };
    default:
      return state;
  }
};

export default drawerClickReducer;
