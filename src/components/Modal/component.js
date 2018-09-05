import React, { Component } from "react";
import injectSheet from "react-jss"
import styles from "./styles";

import FilterPresentation from "../FilterPresentation";
import { filterData as FD } from "../../utils/filterData";

class Modal extends Component {
    constructor(props) {
        super(props);
    }

    _onTouchEnd() {
        this.props.hideModal();
    }

    render() {
        const { classes, modal, data } = this.props;
        const { type } = modal;
        const modalClass = modal.modalClass ? classes["modal--show"] : classes["modal--hide"];
        if (data) {
            return (
                <div
                    className={`${classes.modal} ${modalClass}`}
                    onTouchEnd={() => this._onTouchEnd()}
                >
                    <FilterPresentation data={FD(data)} type={type} />
                </div>
            );
        }
        return null;
    }
}

export default injectSheet(styles)(Modal);