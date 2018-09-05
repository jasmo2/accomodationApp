import { connect } from "react-redux";
import Component from "./component";
import { filter as F, unfilter as UF } from "./actions";


const mapDistapchToProps = (dispatch) => ({
    filter: payload => dispatch(F(payload)),
    unfilter: payload => dispatch(UF(payload))
});


const mapStateToProps = (state) => {
    const { filters } = state;
    return { filters };
};

export default connect(mapStateToProps, mapDistapchToProps)(Component);
