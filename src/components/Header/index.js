import React, { Component } from "react";
import injectSheet from "react-jss"
import styles from "./styles";
import { LOCATION_TYPE, ACTIVITY_TYPE } from "../../constants";

import Filter from "../Filter";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { filterData, classes } = this.props;

        return (
            <header className={classes.wrapper}>
                <Filter data={filterData.activities} type={ACTIVITY_TYPE}>I like to...</Filter>
                <Filter data={filterData.locations} type={LOCATION_TYPE}>Where to?</Filter>
            </header>);
    }
}

export default injectSheet(styles)(Header);