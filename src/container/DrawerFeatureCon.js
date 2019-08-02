import DrawerFeature from "../components/DrawerFeature";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  isFetching: state.fetch.isFetching,
  failure: state.fetch.failure,
  featuredImage: state.fetch.featuredImage,
  success: state.fetch.success
});
export default connect(mapStateToProps)(DrawerFeature);
