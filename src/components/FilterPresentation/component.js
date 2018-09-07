import React, { Component } from "react";
import injectSheet from "react-jss"
import styles from "./styles";
import Carousel from "nuka-carousel";

import FilterItem from "../FilterItem";
import Button from "./Button";

import { filterType, slideNumber } from "../../utils/filters";


class FilterPresentation extends Component {

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
                            onClick={() => this._clearFilter()}
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
                        renderCenterLeftControls={() => null}
                        renderCenterRightControls={() => null}
                    >
                        {this.Items({ obj: data, classes })}
                    </Carousel>
                    <div className={classes.apply}>
                        <button
                            className={classes.button}
                            onClick={(e) => this._hideModal(e)}
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