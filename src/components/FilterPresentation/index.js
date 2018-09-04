import React, { Component } from "react";
import injectSheet from "react-jss"
import styles from "./styles";
import Carousel from 'nuka-carousel';


class FilterPresentation extends Component {
    constructor(props) {
        super(props);
    }

    _onTouch(e) {
        e.stopPropagation();
    }

    render() {
        const { data, classes, type } = this.props;
        return (
            <div className={classes.wrapper} onTouchStart={(e) => this._onTouch(e)}>
                {JSON.stringify(type)}
                {JSON.stringify(data)}
            </div>
        )
    }
}

export default injectSheet(styles)(FilterPresentation);