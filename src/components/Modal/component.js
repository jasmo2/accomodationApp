import React, { Component } from "react";
import injectSheet from "react-jss"
import styles from "./styles";

import Card from "../Card";

class Modal extends Component {
    constructor(props) {
        super(props);
    }

    _onClick() {
        this.props.hideModal()
    }

    render() {
        const { classes, modal } = this.props;
        const modalClass = modal.modalClass ? classes["modal--show"] : classes["modal--hide"];
        return (
            // onClick={() => this._onClick}
            <div
                className={`${classes.modal} ${modalClass}`}
                onTouchEnd={() => this._onClick()}
            >

            </div>
        );
    }
}

export default injectSheet(styles)(Modal);