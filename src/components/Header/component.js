import React, { Component } from "react";
import injectSheet from "react-jss"
import styles from "./styles";
import { LOCATION_TYPE, ACTIVITY_TYPE } from "../../constants";

import Filter from "../Filter";

import { filterData as FD } from "../../utils/filters";
import bagpack from "../../icons/bagpack.svg";

class Header extends Component {

    render() {
        const { data, classes } = this.props;
        if (data) {
            const { activities, location } = FD(data);
            return (
                <header className={classes.wrapper}>
                    <div
                        className={classes.bagpack}
                        dangerouslySetInnerHTML={{ __html: bagpack }}
                    >

                    </div>
                    <Filter data={activities} type={ACTIVITY_TYPE}>I like to...</Filter>
                    <Filter data={location} type={LOCATION_TYPE}>Where to?</Filter>
                </header>
            );
        }
        return null;
    }
}

export default injectSheet(styles)(Header);