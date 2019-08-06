import contentfulClient from "../../util/Contentful";

export const drawerClick = drawerOpen => ({
  type: "DRAWER_CLICK",
  payload: drawerOpen
});

const fetchDataBegin = () => ({
  type: "FETCH_DATA_BEGIN",
  payload: true
});

const fetchDataSuccess = data => ({
  type: "FETCH_DATA_SUCCESS",
  payload: { data, success: true }
});

const fetchDataFailure = err => ({
  type: "FETCH_DATA_FAILURE",
  payload: err
});

const fetchData = () => dispatch => {
  dispatch(fetchDataBegin());
  return contentfulClient
    .getEntries()
    .then(response =>
      dispatch(fetchDataSuccess(response.items.map(item => item.fields)))
    )
    .catch(err => dispatch(fetchDataFailure(err)));
};

export const shouldFetchData = () => (dispatch, getState) => {
  const { fetch } = getState();
  if (!fetch.data && !fetch.isFetching) {
    return dispatch(fetchData());
  }
};
