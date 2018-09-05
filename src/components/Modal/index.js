import { connect } from "react-redux";
import Component from "./component";
import { hideModal } from "./actions";

const mapStateToProps = (state) => {
    const { modal, app, filters, filteredData } = state;
    return {
        data: app.data,
        filteredData,
        filters,
        modal,
    };
};

const mapDistapchToProps = dispatch => ({
    hideModal: payload => dispatch(hideModal(payload))
});

export default connect(mapStateToProps, mapDistapchToProps)(Component);
