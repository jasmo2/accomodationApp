import React, { Component } from "react";
import injectSheet from "react-jss"
import styles from "./styles";

import checkLogo from "../../icons/check.svg";

/**
 * Component that displays each item in the filter.
 * @class {Component} Item
 *
 * handle which item is selected before apply the filter
 * @event {} _onTouch
 */
class Item extends Component {
    constructor(props) {
        super(props);
        const { filters, item, type } = props;
        this.state = {
            selected: filters[type].has(item)
        };
        this._onTouch = this._onTouch.bind(this);
    }

    _onTouch(e) {
        e.stopPropagation();
        const selected = !this.state.selected;
        const { filter, unfilter, item, type } = this.props;
        this.setState({ selected });
        if (selected) {
            filter({ item, type });
        } else {
            unfilter({ item, type });
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { filters: { location, activities } } = nextProps;
        if (
            Array.from(location).length === 0 &&
            Array.from(activities).length === 0 &&
            nextState.selected
        ) {
            this.setState({ selected: false });
            return false;
        }
        return true;
    }

    render() {
        const { item, classes } = this.props;
        const selectedClass = this.state.selected ? classes["item--selected"] : classes["item--unselected"];
        return (
            <div
                className={classes.item}
                onTouchEnd={this._onTouch}
            >
                <div className={classes.text}>{item}</div>
                <div
                    className={`${selectedClass} ${classes.logo}`}
                    dangerouslySetInnerHTML={{ __html: checkLogo }}
                />
            </div>
        )
    }
}

export default injectSheet(styles)(Item);