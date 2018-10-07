import React, { Component } from "react";
import injectSheet from "react-jss"
import styles from "./styles";

import FilterPresentation from "../FilterPresentation";
import { filterData as FD } from "../../utils/filters";
import cancelButton from "../../icons/cancelButton.svg";

/**
 * Class that handles the hide or show of the Modal Component
 * @class {Component} Modal
 *
 * after touch has ended
 * @event _onTouchEnd
 * prevent event propagation to its parent
 * @event _dismiss
 * prevent rerender if filter validation does not criteria
 * @function {lifecycle} shouldComponentUpdate
 */
class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = { dismiss: false };
        this._onTouchEnd = this._onTouchEnd.bind(this);
        this._dismiss = this._dismiss.bind(this);
    }

    _onTouchEnd(e) {
        const { hideModal, filters, data, classes } = this.props;
        if (e.target.classList.contains(classes.classmodal)) {
            hideModal({ filters, data });
        }
    }

    _dismiss(e) {
        e.stopPropagation();
        this.props.hideModal();
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { filters: { location, activities } } = nextProps;
        if (
            (
                Array.from(location).length > 0 ||
                Array.from(activities).length > 0
            ) &&
            !nextState.dismiss
        ) {
            this.setState({ dismiss: true });
            return false;
        } else if (
            Array.from(location).length === 0 &&
            Array.from(activities).length === 0 &&
            nextState.dismiss
        ) {
            this.setState({ dismiss: false });
            return false
        }
        return true;
    }

    render() {
        const { classes, modal, data } = this.props;
        const { type } = modal;
        const modalClass = modal.modalClass ? classes["modal--show"] : classes["modal--hide"];
        if (data) {
            return (
                <div
                    className={`${classes.modal} ${modalClass}`}
                    onTouchEnd={this._onTouchEnd}
                >
                    <span
                        className={classes["cancel-wrapper"]}
                        dangerouslySetInnerHTML={{ __html: cancelButton }}
                        onTouchEnd={this._dismiss}
                    />
                    <FilterPresentation key={type} data={FD(data)} type={type} />
                </div>
            );
        }
        return null;
    }
}

export default injectSheet(styles)(Modal);