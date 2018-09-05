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

    _onTouchEnd({ type }) {
        this.setState({ touchClass: "" });
        this.props.showModal({ type });
    }

    _onTouchMove() {
        this.setState({ touchClass: "" });
    }

    render() {
        const { classes, children, type } = this.props;
        const { touchClass } = this.state;
        return (
            <div
                className={`${classes.input} ${touchClass}`}
                onClick={() => this._onTouchEnd({ type })}
                onTouchStart={() => this._onTouchStart}
                onTouchEnd={() => this._onTouchEnd({ type })}
                onTouchMove={() => this._onTouMove}
            >
                <span></span>
                <span>{children}</span>
            </div>
        )
    }
}

export default injectSheet(styles)(Filter);