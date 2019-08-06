import { connect } from "react-redux";
import ParaSingle from "../components/parksra/ParaSingle";
import { shouldFetchData } from "../redux/action";
const mapStateToProps = state => ({
  data: state.fetch.data,
  success: state.fetch.success
});
const mapDispatchToProps = dispatch => ({
  contentfulDisaptch: () => dispatch(shouldFetchData())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParaSingle);
