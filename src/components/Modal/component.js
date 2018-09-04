import React, { Component } from "react";
import injectSheet from "react-jss"
import styles from "./styles";

import FilterPresentation from "../FilterPresentation";

class Modal extends Component {
    constructor(props) {
        super(props);
    }

    _onTouchEnd() {
        this.props.hideModal();
    }

    render() {
        const { classes, modal } = this.props;
        const { data, type } = modal;
        const modalClass = modal.modalClass ? classes["modal--show"] : classes["modal--hide"];
        return (
            <div
                className={`${classes.modal} ${modalClass}`}
                onTouchEnd={() => this._onTouchEnd()}
            >
                <FilterPresentation data={data} type={type} />
            </div>
        );
    }
}

export default injectSheet(styles)(Modal);