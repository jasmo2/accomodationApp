import React, { Component } from "react";
import injectSheet from "react-jss"
import styles from "./styles";
import Carousel from 'nuka-carousel';

import FilterItem from "../FilterItem";
import { ACTIVITY_TYPE, LOCATION_TYPE } from "../../constants";

function filterType(type) {
    let typeStr = "";
    switch (type) {
        case ACTIVITY_TYPE:
            typeStr = "activities"
            break;
        case LOCATION_TYPE:
            typeStr = "location"
            break;
        default:
            break;
    }
    return typeStr;
}

class FilterPresentation extends Component {
    constructor(props) {
        super(props);
    }

    _onTouch(e) {
        e.stopPropagation();
    }

    render() {
        const { data, classes, type } = this.props;
        const typeStr = filterType(type);
        if (data && type) {
            return (
                <div className={classes.wrapper} onTouchStart={(e) => this._onTouch(e)}>
                    <nav className={classes.title}>
                        {typeStr}
                    </nav>
                    <div className={classes.body}>
                        {data.map(item => (
                            <FilterItem item={item} />
                        ))}
                    </div>
                </div>
            )
        }
        return null;
    }
}

export default injectSheet(styles)(FilterPresentation);