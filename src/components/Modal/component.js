import React, { Component } from "react";
import injectSheet from "react-jss"
import styles from "./styles";

import Card from "../Card";

class Modal extends Component {
    constructor(props) {
        super(props);
    }

    onClick() {
        this.props.hideModal()
    }

    render() {
        const { classes, modal } = this.props;
        const modalClass = modal.modalClass ? classes["modal--show"] : classes["modal--hide"];
        return (
            <div
                className={`${classes.modal} ${modalClass}`}
                onClick={() => this.onClick}
            >

            </div>
        );
    }
}

export default injectSheet(styles)(Modal);