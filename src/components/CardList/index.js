import { connect } from "react-redux";
import Component from "./component";


const mapStateToProps = (state) => {
    const { app, filteredData } = state;
    const data = filteredData || app.data;
    return { data };
};

export default connect(mapStateToProps)(Component);
