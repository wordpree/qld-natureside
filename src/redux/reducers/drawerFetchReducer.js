const initialState = {
  success: false,
  isFetching: false,
  failure: null,
  featuredImage: null,
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
        featuredImage: action.payload.map(item => {
          return {
            url: item.featuredImage.fields.file.url,
            name: item.name,
            createdAt: new Date(item.featuredImage.sys.createdAt).toString()
          };
        }),
        data: action.payload,
        success: action.success
      };
    default:
      return state;
  }
};

export default drawerFetchReducer;
