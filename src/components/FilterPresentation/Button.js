

import React from "react";

import { connect } from "react-redux";

/**
 * Stateless component which does not contain lifecycle events
 * @function ButtonStateless
 */
const ButtonStateless = (props) => {
    const { classes, filters, onClick } = props;
    const activitiesSize = filters.activities.size;
    const locationSize = filters.location.size;
    const buttonShow = activitiesSize === 0 && locationSize === 0 ? classes["button--hide"] : classes["button--show"];
    return (
        <button
            className={buttonShow}
            onClick={() => onClick()}
        >Clear All</button>
    )
}

/**
 * filter state
 * @param {object} state
 */
const mapStateToProps = (state) => {
    const { filters } = state;
    return { filters };
};


export default connect(mapStateToProps)(ButtonStateless);

