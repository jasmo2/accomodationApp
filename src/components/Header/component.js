import React, { Component } from "react";
import injectSheet from "react-jss"
import styles from "./styles";
import { LOCATION_TYPE, ACTIVITY_TYPE } from "../../constants";

import Filter from "../Filter";

import { filterData as FD } from "../../utils/filterData";

class Header extends Component {

    render() {
        const { data, classes } = this.props;
        if (data) {
            const filterData = FD(data);
            return (
                <header className={classes.wrapper}>
                    <Filter data={filterData.activities} type={ACTIVITY_TYPE}>I like to...</Filter>
                    <Filter data={filterData.location} type={LOCATION_TYPE}>Where to?</Filter>
                </header>
            );
        }
        return null;
    }
}

export default injectSheet(styles)(Header);