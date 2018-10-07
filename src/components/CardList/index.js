import { connect } from "react-redux";
import Component from "./component";

/**
 * recieve income filter parameters
 *  @param {object} state
 */
const mapStateToProps = (state) => {
    const { app, filteredData } = state;
    let data = app.data;
    let noFilteredData = false;
    if (filteredData) {
        data = filteredData;
        if (filteredData.accomodations.length === 0) noFilteredData = true;
    }
    return { data, noFilteredData };
};

export default connect(mapStateToProps)(Component);
