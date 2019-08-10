import FormCtrl from "../components/parksra/FormCtrl";
import { shouldFetchData } from "../redux/action";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  parks: state.fetch.parks,
  success: state.fetch.success
});
const mapDispatchToProps = dispatch => ({
  handleFetchData: () => dispatch(shouldFetchData())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormCtrl);
