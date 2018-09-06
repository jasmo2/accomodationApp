import { connect } from "react-redux";
import Component from "./component";
import { showModal as showModalD } from "../Modal/actions";

const mapStateToProps = (state) => {
    const { filters, filteredData } = state;
    return { filters, filteredData };
};

const mapDistapchToProps = (dispatch) => ({
    showModal: data => dispatch(showModalD(data))
});

export default connect(mapStateToProps, mapDistapchToProps)(Component);
