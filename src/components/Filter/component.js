import React, { Component } from "react";
import injectSheet from "react-jss"
import styles from "./styles";
import { filterType } from "../../utils/filters";

/**
 * create small JSX makup based in filter validation
 *  @function {} filterContentValidation
 *  @param {object} { children, filter = [], classes, filteredData }
 */
function filterContentValidation({ children, filter = [], classes, filteredData }) {
    if (!filteredData || filter.size === 0) return children;

    const filters = Array.from(filter).map(el => (
        <div className={classes.filter}>
            {el}
        </div>
    ));

    return filters;
}

/**
 * handles the Filter display and popup FilterPresentation
 *  @class {Component} Filter
 *
 * set css class in the component to display FilterPresentation
 *  @event {touch} _onTouchStart
 * remove css class to hide FilterPresentation
 *  @event {touch} _onTouchEnd
 * remove css class to hide FilterPresentation
 *  @event {touch} _onTouchMove
 *
 * verify activities and location filters to rerender the component
 *  @event {lifecycle} shouldComponentUpdate
 */
class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            touchClass: "",
            activities: [],
            location: []
        }
        this._onTouchEnd = this._onTouchEnd.bind(this);
        this._onTouchMove = this._onTouchMove.bind(this);
        this._onTouchStart = this._onTouchStart.bind(this);
    }

    _onTouchStart() {
        this.setState({
            touchClass: "input--touch"
        });
    }

    _onTouchEnd() {
        this.setState({ touchClass: "" });
        this.props.showModal({ type: this.props.type });
    }

    _onTouchMove() {
        this.setState({ touchClass: "" });
    }

    shouldComponentUpdate(nextProps, _) {
        const { filters: { location, activities }, filteredData } = nextProps;
        if (
            (location.size > 0 || activities.size > 0) &&
            filteredData
        ) {
            return true
        } else if (
            Array.from(location).length > 0 ||
            Array.from(activities).length > 0
        ) {
            return false;
        }
        return true;
    }

    render() {
        const { classes, children, type, icon, filters, filteredData } = this.props;
        const { touchClass } = this.state;
        const { typeStr } = filterType(type)
        let filter = filters[typeStr];
        const content = filterContentValidation({ filteredData, children, filter, classes });

        return (
            <div
                className={`${classes.input} ${touchClass}`}
                onClick={this._onTouchEnd}
                onTouchStart={this._onTouchStart}
                onTouchEnd={this._onTouchEnd}
                onTouchMove={this._onTouchMove}
            >
                <span
                    className={classes.logo}
                    dangerouslySetInnerHTML={{ __html: icon }}
                />
                <div className={classes["filter__wrapper"]}>{content}</div>
            </div>
        )
    }
}

export default injectSheet(styles)(Filter);