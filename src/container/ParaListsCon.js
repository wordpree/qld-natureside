import ParaLists from "../components/parksra/ParaLists";
import { shouldFetchData } from "../redux/action";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  images: state.fetch.image,
  success: state.fetch.success
});
const mapDispatchToProps = dispatch => ({
  handleFetchData: () => dispatch(shouldFetchData())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParaLists);
