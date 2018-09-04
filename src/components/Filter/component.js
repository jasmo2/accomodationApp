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

    _onTouchEnd({ data, type }) {
        this.setState({ touchClass: "" });
        this.props.showModal({ data, type });
    }

    _onTouchMove() {
        this.setState({ touchClass: "" });
    }

    render() {
        const { data, classes, children, type } = this.props;
        const { touchClass } = this.state;
        return (
            <div
                className={`${this.props.classes.input} ${touchClass}`}
                onClick={() => this._onTouchEnd({ data, type })}
                onTouchStart={() => this._onTouchStart}
                onTouchEnd={() => this._onTouchEnd({ data, type })}
                onTouchMove={() => this._onTouMove}
            >
                <span></span>
                <span>{children}</span>
            </div>
        )
    }
}

export default injectSheet(styles)(Filter);