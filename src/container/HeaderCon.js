import Header from "../components/Header";
import { connect } from "react-redux";
import { drawerClick } from "../redux/action";

const mapStateToProps = state => ({
  drawerOpen: state.click.left
});
const mapDispatchToProps = dispatch => ({
  hanldeClickDrawer: drawerOpen => dispatch(drawerClick(drawerOpen))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
