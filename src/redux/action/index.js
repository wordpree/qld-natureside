import contentfulClient from "../../util/Contentful";

export const drawerClick = drawerOpen => ({
  type: "DRAWER_CLICK",
  payload: drawerOpen
});
export const fetchDataBegin = () => ({
  type: "FETCH_DATA_BEGIN",
  payload: true
});
export const fetchDataSuccess = data => ({
  type: "FETCH_DATA_SUCCESS",
  payload: data
});

export const fetchDataFailure = err => ({
  type: "FETCH_DATA_FAILURE",
  payload: err
});

export const fetchData = () => dispatch => {
  dispatch(fetchDataBegin());
  return contentfulClient
    .getEntries()
    .then(response =>
      dispatch(fetchDataSuccess(response.items.map(item => item.fields)))
    )
    .catch(err => dispatch(fetchDataFailure(err)));
};
