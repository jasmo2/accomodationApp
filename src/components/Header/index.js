import React, { Component } from "react";
import injectSheet from "react-jss"
import styles from "./styles";

import Filter from "../Filter";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { filterData, classes } = this.props;

        return (
            <header className={classes.wrapper}>
                <Filter data={filterData.activities}>I like to...</Filter>
                <Filter data={filterData.locations}>Where to?</Filter>
            </header>);
    }
}

export default injectSheet(styles)(Header);