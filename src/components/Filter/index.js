import { connect } from "react-redux";
import Component from "./component";
import { showModal as showModalD } from "../Modal/actions";

/**
 * receive filters objeect and filteredData
 *  @param {object} state
 */
const mapStateToProps = (state) => {
    const { filters, filteredData } = state;
    let filteredDataKey = filteredData
    if (filteredData && filteredData.accomodations.length === 0) {
        filteredDataKey = null;
    }
    return { filters, filteredData: filteredDataKey };
};

/**
 * incharge of show the modal
 *  @param {event} dispatch
 */
const mapDistapchToProps = (dispatch) => ({
    showModal: data => dispatch(showModalD(data))
});

export default connect(mapStateToProps, mapDistapchToProps)(Component);
