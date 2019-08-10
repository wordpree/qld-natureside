const initialState = {
  success: false,
  isFetching: false,
  failure: null,
  featuredImage: null,
  data: null,
  parks: null
};
const drawerFetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_BEGIN":
      return {
        ...state,
        isFetching: action.payload,
        success: false
      };
    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        failure: action.payload,
        success: false
      };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        featuredImage: action.payload.data.map(item => {
          return {
            url: item.featuredImage.fields.file.url,
            name: item.name,
            createdAt: new Date(item.featuredImage.sys.createdAt).toString()
          };
        }),
        parks: action.payload.data.map(item => {
          return {
            name: item.fullName,
            image: item.images[0].fields.file.url,
            type: item.type,
            camping: item.camping,
            fishing: item.fishing,
            swimming: item.swimming,
            boating: item.boating
          };
        }),
        isFetching: false,
        data: action.payload.data,
        success: action.payload.success
      };
    default:
      return state;
  }
};

export default drawerFetchReducer;
