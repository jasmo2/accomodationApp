import { connect } from "react-redux";
import Component from "./component";
import { hideModal } from "../Modal/actions";
import { clearFilter } from "../FilterItem/actions";

const mapStateToProps = (state) => {
    const { app, filters, modal } = state;
    return {
        appData: app.data,
        filters,
        modal
    };
};

const mapDistapchToProps = dispatch => ({
    clearFilter: () => dispatch(clearFilter()),
    hideModal: payload => dispatch(hideModal(payload)),
});

export default connect(mapStateToProps, mapDistapchToProps)(Component);
