import { connect } from "react-redux";
import Component from "./component";
import { hideModal } from "./actions";

const mapStateToProps = (state) => {
    const { modal, app, filters, filterData } = state;
    return {
        data: app.data,
        filterData,
        filters,
        modal,
    };
};

const mapDistapchToProps = dispatch => ({
    hideModal: payload => dispatch(hideModal(payload))
});

export default connect(mapStateToProps, mapDistapchToProps)(Component);
