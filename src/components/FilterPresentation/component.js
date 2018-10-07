import React, { Component } from "react";
import injectSheet from "react-jss"
import styles from "./styles";
import Carousel from "nuka-carousel";

import FilterItem from "../FilterItem";
import Button from "./Button";

import { filterType, slideNumber } from "../../utils/filters";

/**
 * Return null and is define one in memory
 * @function nullFunc
 */

function nullFunc() { return null }

/**
 * Displays the filter carousel, as well as its header and footer
 *  @class {Component} FilterPresentation
 *
 * @event _clearFilter
 * @event _hideModal
 *
 * creates each item in the caousel
 * @function Items
 */
class FilterPresentation extends Component {
    constructor(props) {
        super(props);

        this._clearFilter = this._clearFilter.bind(this);
        this._hideModal = this._hideModal.bind(this);
    }

    _clearFilter() {
        this.props.clearFilter();
    }

    _hideModal(e) {
        e.stopPropagation();
        const { hideModal, filters, appData } = this.props;
        hideModal({ filters, data: appData });
    }

    Items({ obj, classes }) {
        const items = [];
        for (const key in obj) {
            const data = obj[key];
            const { typeStr, icon } = filterType(key);
            items.push(
                <div
                    className={classes.wrapper}
                    key={typeStr}
                >
                    <nav className={classes.title}>
                        <div
                            className={classes.logo}
                            dangerouslySetInnerHTML={{ __html: icon }}
                        />
                        {typeStr}
                    </nav>
                    <div className={classes["button-wrapper"]}>
                        <Button
                            classes={classes}
                            onClick={this._clearFilter}
                        />

                    </div>
                    <div className={classes.body}>
                        {data.map(item => (
                            <FilterItem key={item} item={item} type={typeStr} />
                        ))}
                    </div>
                </div>);
        }
        return items;
    }

    render() {
        const { data, classes, type, modal } = this.props;
        const modalClass = modal.modalClass ? classes["carousel--show"] : classes["carousel--hide"];

        if (data && type) {
            return (
                <div
                    onTouchEnd={this._onTouch}

                    className={modalClass}
                >
                    <Carousel
                        slideIndex={slideNumber(type)}
                        dragging={true}
                        swiping={true}
                        renderCenterLeftControls={nullFunc}
                        renderCenterRightControls={nullFunc}
                    >
                        {this.Items({ obj: data, classes })}
                    </Carousel>
                    <div className={classes.apply}>
                        <button
                            className={classes.button}
                            onClick={this._hideModal}
                        >
                            Apply
                        </button>
                    </div>
                </div >
            )
        }
        return null;
    }
}

export default injectSheet(styles)(FilterPresentation);