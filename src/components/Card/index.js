import { connect } from "react-redux";
import Component from "./component";
import { saveLikes as SL, unsaveLikes as USL } from "./actions";


const mapDistapchToProps = (dispatch) => ({
    saveLikes: payload => dispatch(SL(payload)),
    unsaveLikes: payload => dispatch(USL(payload))
});


const mapStateToProps = (state) => {
    const { cards } = state;
    return { cards };
};
export default connect(mapStateToProps, mapDistapchToProps)(Component);
