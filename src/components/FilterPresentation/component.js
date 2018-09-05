import React, { Component } from "react";
import injectSheet from "react-jss"
import styles from "./styles";
import Carousel from "nuka-carousel";

import FilterItem from "../FilterItem";
import { ACTIVITY_TYPE, LOCATION_TYPE } from "../../constants";

import sign from "../../icons/sign.svg";
import activities from "../../icons/activities.svg";

function filterType(type) {
    let typeStr = "";
    let icon = null;
    switch (type) {
        case ACTIVITY_TYPE:
            typeStr = "activities"
            icon = activities;
            break;
        case LOCATION_TYPE:
            typeStr = "location"
            icon = sign;
            break;
        default:
            break;
    }
    return { typeStr, icon };
}


class FilterPresentation extends Component {
    constructor(props) {
        super(props);
        this._onTouch = this._onTouch.bind(this);
    }

    _onTouch(e) {
        e.stopPropagation();
    }

    _hideModal(e) {
        e.stopPropagation();
        this.props.hideModal();
    }

    Items({ obj, typeStr, icon, classes }) {
        const items = [];
        for (const key in obj) {
            const data = obj[key];
            items.push(
                <div className={classes.wrapper} onTouchStart={this._onTouch}>
                    <nav className={classes.title}>
                        <div
                            className={classes.logo}
                            dangerouslySetInnerHTML={{ __html: icon }}
                        />
                        {typeStr}
                    </nav>
                    <div className={classes.body}>
                        {data.map(item => (
                            <FilterItem key={item} item={item} />
                        ))}
                    </div>
                </div>);
        }
        return items;
    }

    render() {
        const { data, classes, type } = this.props;
        if (data && type) {
            const { typeStr, icon } = filterType(type);
            return (
                <div onTouchEnd={this._onTouch}>
                    <Carousel>
                        {this.Items({ obj: data, typeStr, icon, classes })}
                    </Carousel>
                    <div className={classes.apply}>
                        <button
                            className={classes.button}
                            onClick={(e) => this._hideModal(e)}
                        >
                            Apply
                        </button>
                    </div>
                </div>
            )
        }
        return null;
    }
}

export default injectSheet(styles)(FilterPresentation);