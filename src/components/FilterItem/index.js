import { connect } from "react-redux";
import Component from "./component";
import { filter as F, unfilter as UF } from "./actions";


/**
 * dispatch the filter base ono its payload
 * @param {function} dispatch
 */
const mapDistapchToProps = (dispatch) => ({
    filter: payload => dispatch(F(payload)),
    unfilter: payload => dispatch(UF(payload))
});


/**
 * @param {object} state
 */
const mapStateToProps = (state) => {
    const { filters } = state;
    return { filters };
};

export default connect(mapStateToProps, mapDistapchToProps)(Component);
