import { connect } from "react-redux";
import Component from "./component";

/**
 * app data
 * @param {object} state
 */
const mapStateToProps = (state) => {
    const { app } = state;
    return { data: app.data };
};

export default connect(mapStateToProps)(Component);
