import { connect } from "react-redux";
import Component from "./component";
import { hideModal } from "./actions";

const mapStateToProps = (state) => {
    const { modal, app } = state;
    return {
        data: app.data,
        modal,
    };
};

const mapDistapchToProps = (dispatch) => ({
    hideModal: () => dispatch(hideModal())
});

export default connect(mapStateToProps, mapDistapchToProps)(Component);
