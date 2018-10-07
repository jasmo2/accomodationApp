import { connect } from "react-redux";
import Component from "./component";
import { getData } from "./actions";

/**
 *  get data from fetch event
 *  @function {} getData
 */

const mapDistapchToProps = (dispatch) => ({
    getData: () => dispatch(getData())
});
export default connect(null, mapDistapchToProps)(Component);
