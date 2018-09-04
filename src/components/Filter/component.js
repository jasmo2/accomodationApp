import React, { Component } from "react";
import injectSheet from "react-jss"
import styles from "./styles";

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            touchClass: ""
        }
    }

    _onTouchStart() {
        this.setState({
            touchClass: "input--touch"
        });
    }

    _onTouchEnd(data) {
        this.setState({ touchClass: "" });
        this.props.showModal(data);
    }

    _onTouchMove() {
        this.setState({ touchClass: "" });
    }

    render() {
        const { data, classes, children } = this.props;
        const { touchClass } = this.state;
        return (
            <div
                className={`${this.props.classes.input} ${touchClass}`}
                onTouchStart={() => this._onTouchStart}
                onTouchEnd={() => this._onTouchEnd(data)}
                onTouchMove={() => this._onTouMove}
            >
                <span></span>
                <span>{children}</span>
            </div>
        )
    }
}

export default injectSheet(styles)(Filter);