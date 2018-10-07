import { connect } from "react-redux";
import Component from "./component";
import { hideModal } from "../Modal/actions";
import { clearFilter } from "../FilterItem/actions";

/**
 * pass filter and app data to the FilterPresentation component
 * @param {object} state
 */
const mapStateToProps = (state) => {
    const { app, filters, modal } = state;
    return {
        appData: app.data,
        filters,
        modal
    };
};

/**
 *
 * @param {function} dispatch
 */
const mapDistapchToProps = dispatch => ({
    clearFilter: () => dispatch(clearFilter()),
    hideModal: payload => dispatch(hideModal(payload)),
});

export default connect(mapStateToProps, mapDistapchToProps)(Component);
