import { connect } from "react-redux";
import Component from "./component";
import { hideModal } from "../Modal/actions";

const mapStateToProps = (state) => {
    const { app, filters } = state;
    return {
        appData: app.data,
        filters
    };
};

const mapDistapchToProps = dispatch => ({
    hideModal: payload => dispatch(hideModal(payload))
});

export default connect(mapStateToProps, mapDistapchToProps)(Component);
