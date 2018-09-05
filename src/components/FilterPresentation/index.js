import { connect } from "react-redux";
import Component from "./component";
import { hideModal } from "../Modal/actions";

const mapDistapchToProps = dispatch => ({
    hideModal: payload => dispatch(hideModal(payload))
});

export default connect(null, mapDistapchToProps)(Component);
