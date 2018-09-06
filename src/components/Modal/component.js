import React, { Component } from "react";
import injectSheet from "react-jss"
import styles from "./styles";

import FilterPresentation from "../FilterPresentation";
import { filterData as FD } from "../../utils/filters";
import cancelButton from "../../icons/cancelButton.svg";

class Modal extends Component {

    constructor(props) {
        super(props);
        this.state = { dismiss: false };
    }

    _onTouchEnd() {
        const { hideModal, filters, data } = this.props;
        hideModal({ filters, data });
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
        const dismissClass = this.state.dismiss ? classes["dismiss--show"] : classes["dismiss--hide"];
        if (data) {
            return (
                <div
                    className={`${classes.modal} ${modalClass}`}
                    onTouchEnd={() => this._onTouchEnd()}
                >
                    <span
                        className={`${classes["cancel-wrapper"]} ${dismissClass}`}
                        dangerouslySetInnerHTML={{ __html: cancelButton }}
                        onTouchEnd={e => this._dismiss(e)}
                    />
                    <FilterPresentation key={type} data={FD(data)} type={type} />
                </div>
            );
        }
        return null;
    }
}

export default injectSheet(styles)(Modal);