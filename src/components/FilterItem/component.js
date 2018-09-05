import React, { Component } from "react";
import injectSheet from "react-jss"
import styles from "./styles";

import checkLogo from "../../icons/check.svg";

class Item extends Component {
    constructor(props) {
        super(props);
        const { filters, item } = props;
        this.state = {
            selected: filters.has(item)
        };
    }

    _onTouch(e) {
        e.stopPropagation();
        const selected = !this.state.selected;
        this.setState({ selected });
        if (selected) {
            this.props.filter(name);
        } else {
            this.props.unfilter(name);
        }
    }

    render() {
        const { item, classes } = this.props;
        const selectedClass = this.state.selected ? classes["item--selected"] : classes["item--unselected"];
        return (
            <div
                className={classes.item}
                onTouchEnd={e => this._onTouch(e)}
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